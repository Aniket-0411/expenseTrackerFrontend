import React, { useState } from "react";
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

export const AddScanItemModal = ({
  isVisible,
  onCloseModal,
  onAdd,
}: {
  isVisible: boolean;
  onCloseModal: () => void;
  onAdd: (newItem: InvoiceItem) => void;
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

  // Get all available categories for the dropdown
  const categories = Object.keys(keywordToCategory) as SpendCategory[];

  function onSubmit({ title, amount, head }: IFormInputs) {
    if (!title || !amount || isNaN(Number(amount))) {
      return; // Don't submit if required fields are missing or invalid
    }
    
    const newItem: InvoiceItem = {
      title,
      amount: Number(amount),
      head: head || selectedCategory, // Use category as head if not specified
    };
    
    onAdd(newItem);
    handleOnResetForm?.();
    onCloseModal();
  }

  // Handle title input change
  const handleTitleInputChange = (options: IInputChanged<IFormInputs>) => {
    handleOnInputChange(options);
    
    // Auto-detect category when title changes
    if (typeof options.value === 'string' && options.value) {
      const detectedCategory = getSpendType(options.value);
      setSelectedCategory(detectedCategory);
      
      // Also update the head field with the detected category
      handleOnInputChange({
        name: "head",
        value: detectedCategory,
      });
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
      titleLocalized={"Add New Item" as any}
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
                onChangeCallback={handleTitleInputChange}
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
                Add Item
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </KeyboardAvoidingView>
    </AppModalPopup>
  );
};
