import LottieView from "lottie-react-native";
import * as ActiveHomeFile from "../assets/animations/home_active.json";
import * as ActiveProfileFile from "../assets/animations/profile_active.json";
import * as ActiveStaticsFile from "../assets/animations/analytics_active.json";

import { TTabName } from "./BottomNav";

export const ActiveIcon = (props: { name: TTabName }) => {
  switch (props.name) {
    case "home":
      return (
        <LottieView
          source={ActiveHomeFile}
          autoPlay
          loop
          style={{
            width: 30,
            height: 30,
          }}
        />
      );
    case "profile":
      return (
        <LottieView
          source={ActiveProfileFile}
          autoPlay
          loop
          style={{
            width: 30,
            height: 30,
          }}
        />
      );
    case "statics":
      return (
        <LottieView
          source={ActiveStaticsFile}
          autoPlay
          loop
          style={{
            width: 30,
            height: 30,
          }}
        />
      );
    default:
      return null;
  }
};
