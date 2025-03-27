import React, { useState, useEffect } from "react";
import { AppModalPopup, InputField, useForm, IInputChanged } from "~/design-system";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Box, Text } from "~/theme";
import { SpendCategory, keywordToCategory, spendIcons, useSpendIcon } from "~/utils/spends/useSpendIcon";

interface IFormInputs {
  title: string;
  amount: string;
  head: string;
}

interface InvoiceItem {
  title: string;
  amount: number;
  head: string;
}

export const EditScanItemModal = ({
  isVisible,
  onCloseModal,
  item,
  onSave,
  itemIndex,
}: {
  isVisible: boolean;
  onCloseModal: () => void;
  item: InvoiceItem;
  onSave: (index: number, updatedItem: InvoiceItem) => void;
  itemIndex: number;
}) => {
  const { getSpendType } = useSpendIcon();
  const [selectedCategory, setSelectedCategory] = useState<SpendCategory>("unknown");
  
  const {
    values,
    handleOnSubmitForm,
    handleOnBlur,
    handleOnError,
    handleOnInputChange,
    handleOnResetForm,
  } = useForm<IFormInputs>({
    initialValues: {
      title: "",
      amount: "",
      head: "",
    },
    onSubmitCb: onSubmit,
  });

  // Initialize form with item data
  const initialFormSetRef = React.useRef(false);
  
  useEffect(() => {
    // Only set the form values once when the item is first provided
    if (item && !initialFormSetRef.current) {
      initialFormSetRef.current = true;
      
      // Reset form with the item data
      handleOnResetForm?.({
        title: item.title,
        amount: item.amount.toString(),
        head: item.head,
      });
      
      // Try to map the head to a category
      const detectedCategory = getSpendType(item.head);
      setSelectedCategory(detectedCategory);
    }
  }, [item]);

  // Get all available categories for the dropdown
  const categories = Object.keys(keywordToCategory) as SpendCategory[];

  function onSubmit({ title, amount, head }: IFormInputs) {
    const updatedItem: InvoiceItem = {
      title,
      amount: Number(amount),
      head,
    };
    
    onSave(itemIndex, updatedItem);
    onCloseModal();
  }

  // Handle head input change
  const handleHeadInputChange = (options: IInputChanged<IFormInputs>) => {
    handleOnInputChange(options);
    
    // Auto-detect category when head changes
    if (typeof options.value === 'string' && options.value) {
      const detectedCategory = getSpendType(options.value);
      setSelectedCategory(detectedCategory);
    }
  };

  // Handle category selection
  const handleCategoryChange = (category: SpendCategory) => {
    setSelectedCategory(category);
    
    // Update the head field based on the selected category
    handleOnInputChange({
      name: "head",
      value: category,
    });
  };

  return (
    <AppModalPopup
      isVisible={isVisible}
      onCloseModal={onCloseModal}
      titleLocalized={"Edit Item" as any}
      isDismissibleByBackdrop
    >
      <KeyboardAvoidingView behavior="padding">
        <Box padding="m">
          <Box py="s" flexDirection="row" my="s" alignItems="center" gap="m">
            <Text fontSize={24}>{spendIcons[selectedCategory]}</Text>
            <Box flex={1}>
              <InputField
                placeholder={"Item Title" as any}
                name="title"
                value={values.title}
                onChangeCallback={handleHeadInputChange}
                onBlurCallback={handleOnBlur}
                onError={handleOnError}
                boxPropsInputContainer={{
                  borderWidth: 0,
                  borderColor: "transparent",
                  borderRadius: "none",
                  bg: "mainBackground",
                  borderBottomColor: "inputBorder",
                  borderBottomWidth: 1,
                  ps: "none",
                  shadowColor: "mainBackground",
                }}
              />
            </Box>
          </Box>
          
          <Box py="s" flexDirection="row" my="s" alignItems="center" gap="m">
            <Text fontSize={24}>$</Text>
            <Box flex={1}>
              <InputField
                placeholder={"Amount" as any}
                inputMode="numeric"
                name="amount"
                value={values.amount}
                onChangeCallback={handleOnInputChange}
                onBlurCallback={handleOnBlur}
                onError={handleOnError}
                boxPropsInputContainer={{
                  borderWidth: 0,
                  borderColor: "transparent",
                  borderRadius: "none",
                  bg: "mainBackground",
                  borderBottomColor: "inputBorder",
                  borderBottomWidth: 1,
                  ps: "none",
                  shadowColor: "mainBackground",
                }}
              />
            </Box>
          </Box>

          <Box py="s" my="s">
            <Text mb="s">Category</Text>
            <Box 
              borderBottomColor="inputBorder" 
              borderBottomWidth={1}
              bg="mainBackground"
            >
              {/* Category selection */}
              <View style={{ paddingVertical: 8 }}>
                <Box flexDirection="row" flexWrap="wrap" gap="s">
                  {categories.map((category) => (
                    <TouchableOpacity 
                      key={category}
                      onPress={() => handleCategoryChange(category)}
                    >
                      <Box 
                        padding="s" 
                        backgroundColor={selectedCategory === category ? "buttonPrimaryBackground" : "transparent"}
                        borderRadius="m"
                        borderWidth={1}
                        borderColor="inputBorder"
                        flexDirection="row"
                        alignItems="center"
                        gap="xs"
                      >
                        <Text>{spendIcons[category]}</Text>
                        <Text 
                          color={selectedCategory === category ? "mainBackground" : undefined}
                          fontFamily={selectedCategory === category ? "fontPrimaryBold" : "fontPrimaryRegular"}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  ))}
                </Box>
              </View>
            </Box>
          </Box>

          <TouchableOpacity onPress={handleOnSubmitForm}>
            <Box
              backgroundColor="buttonPrimaryBackground"
              padding="m"
              borderRadius="m"
              alignItems="center"
              mt="l"
            >
              <Text
                color="mainBackground"
                fontFamily="fontPrimaryBold"
                fontSize={18}
              >
                Save Changes
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </KeyboardAvoidingView>
    </AppModalPopup>
  );
};
