import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { DonutChart } from "./components";

export const AnalyticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DonutChart
        data={[
          { label: "Food", value: 450, color: "#FF6384" },
          { label: "Transport", value: 300, color: "#36A2EB" },
          { label: "Entertainment", value: 150, color: "#FFCE56" },
          { label: "Shopping", value: 200, color: "#4BC0C0" },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
