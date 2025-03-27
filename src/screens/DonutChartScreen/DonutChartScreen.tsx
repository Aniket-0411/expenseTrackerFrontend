/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DonutChart from "./src/components/DonutChart";
import { useFont } from "@shopify/react-native-skia";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { calculatePercentage } from "./src/utils/calculatePercentage";
import { generateRandomNumbers } from "./src/utils/generateRandomNumbers";
import RenderItem from "./src/components/RenderItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useExpenseTracker } from "~/utils";
import { Box, OnboardingGradientSVG } from "~/theme";
import { NoDataAvailable } from "~/components";
import { useAuthStore } from "~/services";
import { useGetExpensesQuery } from "~/apis";

export interface Data {
  value: number;
  percentage: number;
  color: string;
  icon: string;
  label: string;
}

const RADIUS = 160;
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 46;
const GAP = 0.04;

export const DonutChartContainer = () => {
  const n = 5;
  const [data, setData] = useState<Data[]>([]);
  const {
    getExpensesByMonth,
    getCurrentMonth,
    expenses: allExp,
    getCategoryWiseExpenses,
  } = useExpenseTracker();
  const { user} = useAuthStore();
  const { data: allExpenses } = useGetExpensesQuery(user?.id || "", getCurrentMonth());
  const expenses = getCategoryWiseExpenses(allExpenses || []);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue<number[]>([]);
  const colors = ["#fe769c", "#46a0f8", "#c3f439", "#88dabc", "#e43433"];

  /**
   * interface IExpense {
  id: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: string;
  time: Date;
}[]
  generate data from above interface
   */
  const generateData = () => {
    if (!expenses) {
      return;
    }

    console.log("expenses", expenses);
    const total = expenses.reduce((acc, item) => acc + item.total, 0);
    const allAmounts = expenses.map((item) => item.total);
    totalValue.value = total;
    const generatePercentages = calculatePercentage(allAmounts, total);
    const generateDecimals = generatePercentages.map(
      (number) => Number(number.toFixed(0)) / 100
    );
    totalValue.value = withTiming(total, { duration: 1000 });
    decimals.value = [...generateDecimals];
    const arrayOfObjects = expenses.map((value, index) => ({
      value: value.total,
      percentage: generatePercentages[index],
      color: value.color,
      icon: value.icon,
      label: value.head,
    }));
    setData(arrayOfObjects);

    // setData(arrayOfObjects);
  };

  useEffect(() => {
    generateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const font = useFont(require("./src/assets/fonts/Roboto-Bold.ttf"), 60);
  const smallFont = useFont(require("./src/assets/fonts/Roboto-Light.ttf"), 25);

  if (!font || !smallFont) {
    return <View />;
  }

  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <OnboardingGradientSVG
        bottom={0}
        top={0}
        left={0}
        right={0}
        position="absolute"
      />
      <Box
        width="100%"
        bg="subTitleAlt"
        alignItems="center"
        py="l"
        borderBottomEndRadius="xl"
      >
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            gap={GAP}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            font={font}
            smallFont={smallFont}
            totalValue={totalValue}
            n={n}
            decimals={decimals}
            colors={colors}
            data={data}
          />
        </View>
      </Box>
      {/* <TouchableOpacity onPress={generateData} style={styles.button}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity> */}
      <Text
        style={{
          fontFamily: "fontPrimaryBold",
          fontSize: 18,
          marginVertical: 20,
        }}
      >
        Category Wise Expense Data
      </Text>
      {data.length === 0 && <NoDataAvailable />}
      {data.map((item, index) => {
        return <RenderItem item={item} key={index} index={index} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: 10,
    backgroundColor: "#151416",
  },
  button: {
    marginVertical: 40,
    backgroundColor: "#f4f7fc",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
});

export default DonutChartContainer;
