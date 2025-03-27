import React, { useState, useEffect } from "react";
import { AppModalPopup, InputField, useForm, IInputChanged } from "~/design-system";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Box, Text } from "~/theme";
import { useExpenseTracker } from "~/utils";
import { HeadIcon } from "./HeadIcon";
import { AmountAnimation } from "./AmountAnimation";
import { useAuthStore } from "~/services";
import { useAddExpenseMutation } from "~/apis";
import { Expense } from "~/apis/useAddExpenseMutation";
import { SpendCategory, keywordToCategory, spendIcons, useSpendIcon } from "~/utils/spends/useSpendIcon";

interface IFormInputs {
  head: string;
  amount: string;
  category: SpendCategory;
}

export const ExpenseModal = ({
  isVisible,
  onCloseModal,
}: {
  isVisible: boolean;
  onCloseModal: () => void;
}) => {
  const { user } = useAuthStore();
  const { mutate: addExpense } = useAddExpenseMutation({
    onSuccess: () => {
      handleOnResetForm?.();
      onCloseModal();
    },
  });

  const { getExpenseWithCategory } = useExpenseTracker();
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
      head: "",
      amount: "",
      category: "unknown" as SpendCategory,
    },
    onSubmitCb: onSubmit,
  });

  // Get all available categories for the dropdown
  const categories = Object.keys(keywordToCategory) as SpendCategory[];

  // Update the form's category value when selectedCategory changes
  useEffect(() => {
    handleOnInputChange({
      name: "category",
      value: selectedCategory,
    });
  }, [selectedCategory]);

  function onSubmit({ head, amount, category }: IFormInputs) {
    console.log("head", head, "amount", amount, "category", category);
    // Use the selected category instead of auto-detecting it
    const expense = getExpenseWithCategory(head, Number(amount), category);
    addExpense({ ...expense, userId: user?.id || "" });
    handleOnResetForm?.();
    onCloseModal();
  }

  // Handle head input change
  const handleHeadInputChange = (options: IInputChanged<IFormInputs>) => {
    handleOnInputChange(options);
    
    // Auto-detect category when head changes, but only if it's still set to unknown
    if (selectedCategory === "unknown" && typeof options.value === 'string' && options.value) {
      const detectedCategory = getSpendType(options.value);
      setSelectedCategory(detectedCategory);
    }
  };

  // Handle category selection
  const handleCategoryChange = (category: SpendCategory) => {
    setSelectedCategory(category);
  };

  return (
    <AppModalPopup
      isVisible={isVisible}
      onCloseModal={onCloseModal}
      title="homeScreen.addExpenseModal.title"
      isDismissibleByBackdrop
    >
      <KeyboardAvoidingView behavior="padding">
        <Box padding="m">
          <Box py="s" flexDirection="row" my="s" alignItems="center" gap="m">
            <HeadIcon value={values.head} category={selectedCategory} />
            <Box flex={1}>
              <InputField
                placeholder="homeScreen.addExpenseModal.title"
                name="head"
                value={values.head}
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
            <AmountAnimation />
            <Box flex={1}>
              <InputField
                placeholder="homeScreen.addExpenseModal.expenseAmountPlaceholder"
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
            >
              <Text
                color="mainBackground"
                fontFamily="fontPrimaryBold"
                fontSize={18}
              >
                Add Expense
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </KeyboardAvoidingView>
    </AppModalPopup>
  );
};
