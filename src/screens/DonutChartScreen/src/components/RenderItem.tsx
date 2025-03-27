import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

interface Data {
  value: number;
  percentage: number;
  color: string;
  icon: string;
  label: string;
}

type Props = {
  item: Data;
  index: number;
};

const RenderItem = ({ item, index }: Props) => {
  console.log("RenderItem", { item, index });
  const { width } = useWindowDimensions();
  return (
    <Animated.View
      style={[styles.container, { width: width * 0.9 }, { backgroundColor: item.color }]}
      entering={FadeInDown.delay(index * 200)}
      exiting={FadeOutDown}
    >
      <View style={[styles.contentContainer]}>
        <View style={[styles.color]}>
          <Text style={{ fontSize: 28 }}>{item.icon}</Text>
          <Text style={{ fontSize: 18, textTransform: 'capitalize', fontFamily: 'fontPrimarySemiBold' }}>{item.label}</Text>
        </View>
        <Text style={styles.text}>{item.percentage}%</Text>
        <Text style={styles.text}>${item.value}</Text>
      </View>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "#f4f7fc",
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  color: {
    // width: 60,
    // height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 10
  },
});
