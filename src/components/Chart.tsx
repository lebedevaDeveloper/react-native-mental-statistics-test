import React from "react";
import * as shape from "d3-shape";
import moment from "moment";
import { View, StyleSheet } from "react-native";
import { WellBeingLabel, SimpleLabel } from "./Labels";
import {
  AreaChart,
  YAxis,
  Grid,
  BarChart,
  XAxis,
} from "react-native-svg-charts";

export type ChartProps = {
  wellBeing: WellBeingData;
  data: DayData[];
  barData: number[];
  stressData: number[];
  anxietyData: number[];
  depressionData: number[];
  depressionShown: boolean;
  stressShown: boolean;
  anxietyShown: boolean;
};

export type DayData = {
  date: Date;
  wellBeing: number;
  stress: number;
  anxiety: number;
  depression: number;
};

export type WellBeingData = {
  weeklyData: DayData[];
  wellBeing: number;
  stress: number;
  anxiety: number;
  depression: number;
};

export function Chart(props: ChartProps) {
  const {
    data,
    wellBeing,
    barData,
    stressData,
    anxietyData,
    depressionData,
    depressionShown,
    stressShown,
    anxietyShown,
  } = props;
  const fill = "rgb(91, 56, 164)";

  return (
    <View style={styles.container}>
      <View style={styles.labelsConteiner}>
        <WellBeingLabel percent={wellBeing.wellBeing} />
        {stressShown && (
          <SimpleLabel
            title={"Stress"}
            percent={wellBeing.stress}
            color={"#406ACB"}
          />
        )}
        {anxietyShown && (
          <SimpleLabel
            title={"Anxiety"}
            percent={wellBeing.anxiety}
            color={"#599FC7"}
          />
        )}
        {depressionShown && (
          <SimpleLabel
            title={"Depression"}
            percent={wellBeing.depression}
            color={"#5768B7"}
          />
        )}
      </View>
      <View style={styles.chartContainer}>
        <View
          style={{
            position: "absolute",
            height: 200,
            padding: 20,
            width: "100%",
          }}
        >
          <BarChart
            style={{ height: 200 }}
            data={barData}
            svg={{ fill }}
            yMax={100}
            yMin={0}
            spacingInner={0.01}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </BarChart>
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => {
              if (data.length != 0) {
                let date = data[index].date;
                return moment(date).format("dd").substring(0, 1);
              } else return index;
            }}
            contentInset={{ left: 40, right: 40 }}
            svg={{ fontSize: 10, fill: "black" }}
          />
          <YAxis
            style={{ position: "absolute", top: 0, bottom: 0 }}
            data={barData}
            contentInset={{ top: 30, bottom: 0 }}
            max={100}
            min={0}
            svg={{
              fontSize: 8,
              fill: "white",
              stroke: "black",
              strokeWidth: 0.1,
            }}
          />
        </View>
        {depressionShown && (
          <View
            style={{
              height: 200,
              paddingHorizontal: 24,
              position: "absolute",
              width: "100%",
            }}
          >
            <AreaChart
              style={{ height: 200 }}
              data={depressionData}
              yMax={100}
              yMin={0}
              curve={shape.curveNatural}
              contentInset={{ top: 30, bottom: 0 }}
              svg={{ fill: "rgba(87, 104, 183, 0.7)" }}
            />
          </View>
        )}
        {anxietyShown && (
          <View
            style={{
              height: 200,
              paddingHorizontal: 24,
              position: "absolute",
              width: "100%",
            }}
          >
            <AreaChart
              style={{ height: 200 }}
              data={anxietyData}
              yMax={100}
              yMin={0}
              contentInset={{ top: 30, bottom: 0 }}
              curve={shape.curveNatural}
              svg={{ fill: "rgba(89, 159, 199, 0.8)" }}
            />
          </View>
        )}
        {stressShown && (
          <View
            style={{
              height: 200,
              paddingHorizontal: 24,
              position: "absolute",
              width: "100%",
            }}
          >
            <AreaChart
              style={{ height: 200 }}
              data={stressData}
              yMax={100}
              yMin={0}
              contentInset={{ top: 30, bottom: 0 }}
              curve={shape.curveNatural}
              svg={{ fill: "rgba(63, 108, 203, 0.6)" }}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.43,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  chartContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },

  labelsConteiner: {
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 0.2,
  },
});
