import React, { useState } from "react";
import { Alert, Image, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import ImageCropPicker, {
  Image as CropImage,
  ImageOrVideo,
} from "react-native-image-crop-picker";
import { Camera } from "react-native-vision-camera";
import { Pressable } from "~/design-system";
import { Box, Text } from "~/theme";
import LottieView from "lottie-react-native";
import { useExpenseTracker } from "~/utils/spends/useExpenseTracker";
import { useBulkAddExpensesMutation } from "~/apis";
import { useAuthStore } from "~/services";
import { EditScanItemModal } from "./components/EditScanItemModal";
import { AddScanItemModal } from "./components/AddScanItemModal";
import {EXPO_PUBLIC_BASE} from "@env";

interface InvoiceItem {
  amount: number;
  title: string;
  head: string;
}

interface InvoiceResponse {
  total: number;
  items: InvoiceItem[];
}

const App: React.FC = () => {
  const [image, setImage] = useState<any | null>(null);
  const [images, setImages] = useState<any[] | null>(null);
  const [invoiceData, setInvoiceData] = useState<InvoiceResponse | null>(null);
  const [editableItems, setEditableItems] = useState<InvoiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
  const [selectedItem, setSelectedItem] = useState<InvoiceItem | null>(null);
  const { addBulkExpenses, getBulkExpenses } = useExpenseTracker();
  
  const handleEditItem = (index: number) => {
    setSelectedItemIndex(index);
    setSelectedItem(editableItems[index]);
    setIsEditModalVisible(true);
  };
  
  const handleSaveEditedItem = (index: number, updatedItem: InvoiceItem) => {
    const newItems = [...editableItems];
    newItems[index] = updatedItem;
    setEditableItems(newItems);
    
    // Update the total in invoiceData
    if (invoiceData) {
      const newTotal = newItems.reduce((sum, item) => sum + item.amount, 0);
      setInvoiceData({
        ...invoiceData,
        total: newTotal,
        items: newItems
      });
    }
  };
  
  const handleAddItem = () => {
    setIsAddModalVisible(true);
  };
  
  const handleSaveNewItem = (newItem: InvoiceItem) => {
    const newItems = [...editableItems, newItem];
    setEditableItems(newItems);
    
    // Update the total in invoiceData
    if (invoiceData) {
      const newTotal = newItems.reduce((sum, item) => sum + item.amount, 0);
      setInvoiceData({
        ...invoiceData,
        total: newTotal,
        items: newItems
      });
    }
  };
  
  const handleDeleteItem = (index: number) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Delete", 
          style: "destructive",
          onPress: () => {
            const newItems = [...editableItems];
            newItems.splice(index, 1);
            setEditableItems(newItems);
            
            // Update the total in invoiceData
            if (invoiceData) {
              const newTotal = newItems.reduce((sum, item) => sum + item.amount, 0);
              setInvoiceData({
                ...invoiceData,
                total: newTotal,
                items: newItems
              });
            }
          }
        }
      ]
    );
  };
  const {user} = useAuthStore();
  const { mutate: addBulkExpensesMutation } = useBulkAddExpensesMutation({
    onSuccess: () => {
      Alert.alert("Success", "Expenses added successfully!");
      setInvoiceData(null);
      setImage(null);
    },
    onError: (error) => {
      Alert.alert("Error", error.message);
    },
  });

  const getBase64Image = (img: CropImage) => {
    return `data:${img.mime};base64,` + img.data;
  };

  const handleRequestCameraPermission = async () => {
    try {
      const permission = await Camera.requestCameraPermission();

      return permission;
    } catch (error) {
      Alert.alert("Permission required", "Please allow camera permission");
    }
  };

  const processInvoice = async (imageUrl: string) => {
    console.log("Processing invoice", imageUrl);
    try {
      const response = await fetch(`${EXPO_PUBLIC_BASE}/invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageURL: imageUrl }),
      });
      const data = await response.json();
      setInvoiceData(data);
      setEditableItems(data.items);
    } catch (error) {
      console.error(error);
      Alert.alert("Processing Failed", "Failed to process invoice");
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImage = async (image: CropImage) => {
    console.log("uploading image");
    setIsLoading(true);
    const base64Image = getBase64Image(image);
    try {
      const formData = new FormData();
      formData.append("source", {
        uri: base64Image,
        name: image.filename || `invoice-${Date.now()}`,
        type: image.mime,
      } as any);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      };

      const response = await fetch(
        "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
        requestOptions
      );
      const result = await response.json();
      if (result.success && result.image?.url) {
        await processInvoice(result.image.url);
      } else {
        throw new Error("Failed to get image URL from upload response");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Upload Failed", "Failed to upload image");
      setIsLoading(false);
    }
  };

  const handleConfirmExpenses = () => {
    if (invoiceData) {
      const expenses = editableItems.map(item => ({
        head: item.title,
        amount: item.amount
      }));
      const bulkExpenses = getBulkExpenses(expenses);
      console.log("🚀🚀🚀🚀", bulkExpenses);
      addBulkExpensesMutation({
        userId: user?.id || "",
        expenses: bulkExpenses
      });
      Alert.alert("Success", "Expenses added successfully!");
      setInvoiceData(null);
      setImage(null);
    }
  };

  const pickSingleWithCamera = async () => {
    const permission = await handleRequestCameraPermission();
    if (permission === "denied") {
      alert("Permission denied");
    }
    ImageCropPicker.openCamera({
      cropping: false,
      width: 500,
      height: 500,
      includeExif: true,
      includeBase64: true,
      mediaType: "photo",
    })
      .then((image) => {
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        uploadImage(image);
        setImages(null);
      })
      .catch((e) => console.log(e));
  };

  const pickSingleBase64 = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      includeBase64: true,
      includeExif: true,
    })
      .then((image) => {

        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        uploadImage(image);
        setImages(null);
      })
      .catch((e) => console.log(e));
  };

  function isImage(value: ImageOrVideo): value is CropImage {
    return (value as CropImage).cropRect !== undefined;
  }

  const renderImage = (image: CropImage) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        source={image}
      />
    );
  };

  const renderAsset = (asset: any) => {
    return renderImage(asset);
  };

  return (
    <Box flex={1}>
      <ScrollView>
        {isLoading ? (
          <Box flex={1} justifyContent="center" alignItems="center" mt="xxl">
            <ActivityIndicator size="large" color="#0000ff" />
            <Text fontFamily="fontPrimaryMedium" fontSize={16} mt="m">
              Processing Invoice...
            </Text>
          </Box>
        ) : invoiceData ? (
          <Box 
            flex={1} 
            backgroundColor="mainBackground"
            borderTopLeftRadius="m"
            borderTopRightRadius="m"
            mt="l"
          >
            <Box p="l">
              <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb="l">
                <Text fontFamily="fontPrimaryBold" fontSize={24}>
                  Review Expenses
                </Text>
                <Pressable onPress={() => setInvoiceData(null)}>
                  <Text fontFamily="fontPrimaryMedium" fontSize={16} color="secondaryBackground">
                    Cancel
                  </Text>
                </Pressable>
              </Box>
              
              <Text fontFamily="fontPrimaryMedium" fontSize={20} mb="m">
                Total: ${editableItems.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
              </Text>
              
              {editableItems.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => handleEditItem(index)}
                  activeOpacity={0.7}
                >
                  <Box 
                    borderWidth={1} 
                    borderRadius="m" 
                    p="m" 
                    mb="m"
                    borderColor="secondaryBackground"
                  >
                    <Box flexDirection="row" justifyContent="space-between">
                      <Box flex={1}>
                        <Text fontFamily="fontPrimaryMedium" fontSize={16}>
                          {item.title}
                        </Text>
                        <Text fontFamily="fontPrimaryRegular" fontSize={14} color="secondaryBackground">
                          Category: {item.head}
                        </Text>
                        <Text fontFamily="fontPrimaryMedium" fontSize={16} mt="s">
                          ${item.amount.toFixed(2)}
                        </Text>
                      </Box>
                      
                      <TouchableOpacity 
                        onPress={(e) => {
                          e.stopPropagation();
                          handleDeleteItem(index);
                        }}
                        style={{ padding: 5 }}
                      >
                        <Box 
                          backgroundColor="danger" 
                          p="s" 
                          borderRadius="xs" 
                          alignItems="center"
                          justifyContent="center"
                          height={30}
                          width={30}
                        >
                          <Text color="mainBackground" fontSize={16}>×</Text>
                        </Box>
                      </TouchableOpacity>
                    </Box>
                  </Box>
                </TouchableOpacity>
              ))}
              <Pressable onPress={handleAddItem}>
                <Box
                  backgroundColor="secondaryBackground"
                  py="m"
                  borderRadius="m"
                  alignItems="center"
                  mt="l"
                  mb="m"
                  borderWidth={1}
                  borderStyle="dashed"
                  borderColor="inputBorder"
                >
                  <Text fontFamily="fontPrimaryBold" fontSize={18} color="mainBackground">
                    + Add New Item
                  </Text>
                </Box>
              </Pressable>
              
              <Pressable onPress={handleConfirmExpenses}>
                <Box
                  backgroundColor="primaryBackground"
                  py="m"
                  borderRadius="m"
                  alignItems="center"
                  mt="l"
                  mb="xl"
                >
                  <Text fontFamily="fontPrimaryBold" fontSize={18} color="primaryForeground">
                    Confirm Expenses
                  </Text>
                </Box>
              </Pressable>
            </Box>
          </Box>
        ) : (
          <Box justifyContent="center" flex={1}>
            <Pressable onPress={pickSingleWithCamera}>
              <Box
                flexDirection="row"
                mx="xl"
                borderWidth={1}
                alignItems="center"
                borderRadius="m"
                px="m"
                my="xl"
              >
                <LottieView
                  source={require("assets/animations/camera_anim.json")}
                  autoPlay
                  loop
                  style={{ height: "80%", width: "20%", marginEnd: 20 }}
                />
                <Text
                  fontFamily="fontPrimaryMedium"
                  fontSize={28}
                  lineHeight={30}
                  my="l"
                >
                  Capture Invoice
                </Text>
              </Box>
            </Pressable>

            <Pressable onPress={pickSingleBase64}>
              <Box
                flexDirection="row"
          //   width="100%"                mx="xl"
                borderWidth={1}
                alignItems="center"
                borderRadius="m"
                px="m"
                my="xl"
              >
                <LottieView
                  source={require("assets/animations/invoice_icon.json")}
                  autoPlay
                  loop
                  style={{ height: "80%", width: "20%", marginEnd: 20 }}
                />
                <Text
                  fontFamily="fontPrimaryMedium"
                  fontSize={28}
                  lineHeight={30}
                  my="l"
                >
                  Select From Gallery
                </Text>
              </Box>
            </Pressable>
          </Box>
        )}
      </ScrollView>
      
      {/* Edit Item Modal */}
      {selectedItem && (
        <EditScanItemModal
          isVisible={isEditModalVisible}
          onCloseModal={() => setIsEditModalVisible(false)}
          item={selectedItem}
          itemIndex={selectedItemIndex}
          onSave={handleSaveEditedItem}
        />
      )}
      
      {/* Add Item Modal */}
      <AddScanItemModal
        isVisible={isAddModalVisible}
        onCloseModal={() => setIsAddModalVisible(false)}
        onAdd={handleSaveNewItem}
      />
    </Box>
  );
};

export default App;
