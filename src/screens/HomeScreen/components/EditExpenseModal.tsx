import React, { useState, useEffect } from "react";
import { AppModalPopup, InputField, useForm, IInputChanged } from "~/design-system";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Box, Text } from "~/theme";
import { HeadIcon } from "./HeadIcon";
import { AmountAnimation } from "./AmountAnimation";
import { useAuthStore } from "~/services";
import { useUpdateExpenseMutation } from "~/apis";
import { SpendCategory, keywordToCategory, spendIcons, useSpendIcon } from "~/utils/spends/useSpendIcon";

interface IFormInputs {
  head: string;
  amount: string;
  category: SpendCategory;
}

interface Expense {
  id: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: string;
  time: Date;
}

export const EditExpenseModal = ({
  isVisible,
  onCloseModal,
  expense,
}: {
  isVisible: boolean;
  onCloseModal: () => void;
  expense: Expense;
}) => {
  const { user } = useAuthStore();
  const { mutate: updateExpense } = useUpdateExpenseMutation({
    onSuccess: () => {
      handleOnResetForm?.();
      onCloseModal();
    },
  });

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

  // Initialize form with expense data
  const initialFormSetRef = React.useRef(false);
  
  useEffect(() => {
    // Only set the form values once when the expense is first provided
    if (expense && !initialFormSetRef.current) {
      initialFormSetRef.current = true;
      
      // Reset form with the expense data
      handleOnResetForm?.({ // Use optional chaining to handle possible undefined
        head: expense.head,
        amount: expense.amount.toString(),
        category: expense.type as SpendCategory,
      });
      setSelectedCategory(expense.type as SpendCategory);
    }
  }, [expense]);

  // Get all available categories for the dropdown
  const categories = Object.keys(keywordToCategory) as SpendCategory[];

  // Update the form's category value when selectedCategory changes
  // We use a ref to prevent infinite loops
  const initialRender = React.useRef(true);
  
  useEffect(() => {
    // Skip the first render to prevent unnecessary updates
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    
    // Only update when selectedCategory changes after initial render
    handleOnInputChange({
      name: "category",
      value: selectedCategory,
    });
  }, [selectedCategory]);

  function onSubmit({ head, amount, category }: IFormInputs) {
    updateExpense({
      id: expense.id,
      userId: user?.id || "",
      head,
      amount: Number(amount),
      icon: spendIcons[category],
      type: category,
      time: new Date(),
    });
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
      titleLocalized={"Edit Expense" as any}
      isDismissibleByBackdrop
    >
      <KeyboardAvoidingView behavior="padding">
        <Box padding="m">
          <Box py="s" flexDirection="row" my="s" alignItems="center" gap="m">
            <HeadIcon value={values.head} category={selectedCategory} />
            <Box flex={1}>
              <InputField
                placeholder={"Expense Title" as any}
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
            >
              <Text
                color="mainBackground"
                fontFamily="fontPrimaryBold"
                fontSize={18}
              >
                Update Expense
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </KeyboardAvoidingView>
    </AppModalPopup>
  );
};
