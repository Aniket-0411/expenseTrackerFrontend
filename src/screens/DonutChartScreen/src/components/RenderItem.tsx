import {
  StyleSheet,
  View,
  useWindowDimensions,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { Expense } from "~/apis/useAddExpenseMutation";
import { Box, Text } from "~/theme";

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
  allExpenses: Expense[];
};

const RenderItem = ({ item, index, allExpenses }: Props) => {
  console.log("item🚀🚀🚀🚀🚀", item, allExpenses);
  const [dataToShow, setDataToShow] = useState<Expense[]>(allExpenses);
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    const filteredData = allExpenses?.filter(
      (expense) => expense.type === item.label
    );
    setDataToShow(filteredData);
  };

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          { width: width * 0.9 },
          { backgroundColor: item.color },
        ]}
        entering={FadeInDown.delay(index * 200)}
        exiting={FadeOutDown}
        onTouchEnd={handlePress}
      >
        <View style={[styles.contentContainer]}>
          <View style={[styles.color]}>
            <Text fontSize={28} lineHeight={36}>{item.icon}</Text>
            <Text
              fontSize={20}
              lineHeight={30}
              fontFamily="fontPrimarySemiBold"
            >
              {item.label}
            </Text>
          </View>
          <Text style={styles.text}>{item.percentage}%</Text>
          <Text style={styles.text}>${item.value.toPrecision(4)}</Text>
        </View>
      </Animated.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Expenses for {item.label}</Text>
          {/* Replace the following with the list of expenses for the category */}
          {dataToShow?.map((expense, index) => (
            <Box
              width="100%"
              key={index}
              px="s"
              py="s"
              bg="rankBorder"
              borderRadius="s"
              my="xs"
            >
              <Text key={index} style={{ marginVertical: 5 }} fontSize={19}>
                {index + 1}. {expense.head}: ${expense.amount.toPrecision(4)}
              </Text>
            </Box>
          ))}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
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
    marginHorizontal: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
