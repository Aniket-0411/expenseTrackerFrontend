import React from "react";
import { View } from "react-native";
import {
  Canvas,
  Path,
  Group,
  Text,
  useFont,
  Skia,
} from "@shopify/react-native-skia";

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  radius?: number;
  strokeWidth?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  radius = 150,
  strokeWidth = 30,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  const renderSegments = () => {
    return data.map((item) => {
      console.log("item", item);
      const percentage = item.value / total;
      const sweepAngle = 2 * Math.PI * percentage;
      const endAngle = startAngle + sweepAngle;

      const path = Skia.Path.Make();
      path.addArc(
        {
          x: radius - strokeWidth / 2,
          y: radius - strokeWidth / 2,
          width: radius * 2,
          height: radius * 2,
        },
        (startAngle * 180) / Math.PI,
        (sweepAngle * 180) / Math.PI
      );

      startAngle = endAngle;

      return (
        <>
          <Path
            key={item.label}
            path={path}
            color={item.color}
            style="stroke"
            strokeWidth={strokeWidth}
          />
          <Text
            x={radius}
            y={radius}
            text={item.label}
            font={useFont({ fon: "Arial", fontSize: 20 })}
            />
        </>
      );
    });
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Canvas
        style={{ width: radius * 4, height: radius * 4, alignItems: "center" }}
      >
        <Group origin={{ x: radius, y: radius }}>{renderSegments()}</Group>
      </Canvas>
    </View>
  );
};
