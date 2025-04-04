import LottieView from "lottie-react-native";
import * as ActiveHomeFile from "../assets/animations/home_active.json";
import * as ActiveProfileFile from "../assets/animations/profile_active.json";
import * as ActiveStaticsFile from "../assets/animations/analytics_active.json";
import * as ActiveFinanceAnalyticsFile from "../assets/animations/finance_analytics.json";
import * as ActiveBotFile from "../assets/animations/bot_animation.json";

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
      case "bot":
      return (
        <LottieView
          source={ActiveBotFile}
          autoPlay
          loop
          style={{
            width: 30,
            height: 30,
          }}
        />
      );
    case "finance_analytics":
      return (
        <LottieView
          source={ActiveFinanceAnalyticsFile}
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
