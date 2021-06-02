import React, { useState, useEffect, useCallback } from "react";
import { HomeProps } from "../NavigationProps";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../components/Button";
import moment from "moment";
import { WellBeingData, DayData, Chart } from "../components/Chart";

const weeklyData: DayData[] = [
  {
    date: new Date(2021, 4, 17),
    wellBeing: 56,
    stress: 15,
    anxiety: 20,
    depression: 34,
  },
  {
    date: new Date(2021, 4, 21),
    wellBeing: 70,
    stress: 18,
    anxiety: 20,
    depression: 30,
  },
  {
    date: new Date(2021, 4, 18),
    wellBeing: 60,
    stress: 12,
    anxiety: 20,
    depression: 40,
  },
  {
    date: new Date(2021, 4, 19),
    wellBeing: 78,
    stress: 18,
    anxiety: 30,
    depression: 50,
  },
  {
    date: new Date(2021, 4, 23),
    wellBeing: 70,
    stress: 17,
    anxiety: 23,
    depression: 48,
  },
  {
    date: new Date(2021, 4, 20),
    wellBeing: 95,
    stress: 8,
    anxiety: 10,
    depression: 34,
  },

  {
    date: new Date(2021, 4, 22),
    wellBeing: 85,
    stress: 10,
    anxiety: 24,
    depression: 50,
  },
];

const data: WellBeingData = {
  weeklyData: weeklyData,
  wellBeing: 56,
  stress: 14,
  anxiety: 20,
  depression: 34,
};

const HomeScreen = ({ route, navigation }: HomeProps) => {
  const [stressShown, setStressShown] = useState<boolean>(true);
  const [anxietyShown, setAnxietyShown] = useState<boolean>(true);
  const [depressionShown, setDepressionShown] = useState<boolean>(true);

  const [sortedData, setSortedData] = useState<DayData[]>([]);
  const [barData, setBarData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [anxietyData, setAnxietyData] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);

  const [stressData, setStressData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [depressionData, setDepressionData] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const [dateRange, setDateRange] = useState<string>("");

  useEffect(() => {
    let wellBeing: number[] = [];
    let anxiety: number[] = [];
    let stress: number[] = [];
    let depression: number[] = [];

    let sorted: DayData[] = data.weeklyData.sort(function compare(a, b) {
      return a.date.getTime() - b.date.getTime();
    });

    sorted.forEach((key) => {
      wellBeing.push(key.wellBeing);
      anxiety.push(key.anxiety);
      stress.push(key.stress);
      depression.push(key.depression);
    });

    setSortedData(sorted);

    setBarData(wellBeing);
    setStressData(stress);
    setDepressionData(depression);
    setAnxietyData(anxiety);

    if (sorted.length > 0) {
      let dateRange = `${moment(sorted[0].date).date()}-${moment(
        sorted[sorted.length - 1].date
      ).format("DD MMM yyyy")}`;
      setDateRange(dateRange);
    }
  }, []);

  const stressPressed = useCallback(() => {
    if (stressShown) {
      setStressShown(false);
    } else {
      setStressShown(true);
    }
  }, [stressShown]);

  const anxietyPressed = useCallback(() => {
    if (anxietyShown) {
      setAnxietyShown(false);
    } else {
      setAnxietyShown(true);
    }
  }, [anxietyShown]);

  const depressionPressed = useCallback(() => {
    if (depressionShown) {
      setDepressionShown(false);
    } else {
      setDepressionShown(true);
    }
  }, [depressionShown]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={stressPressed}
          textColor={"#6293BB"}
          title={"Stress"}
          backgroundColor={"#C7D9E8"}
        />
        <Button
          onPress={anxietyPressed}
          textColor={"#6CD1D2"}
          title={"Anxiety"}
          backgroundColor={"#DAF5F5"}
        />
        <Button
          onPress={depressionPressed}
          textColor={"#414ED5"}
          title={"Depression"}
          backgroundColor={"#BEC2F0"}
        />
      </View>
      <Text style={styles.dateLabel}>{dateRange}</Text>
      <Text style={styles.text}>Weekly AVG</Text>
      <Chart
        data={sortedData}
        wellBeing={data}
        stressShown={stressShown}
        anxietyShown={anxietyShown}
        depressionShown={depressionShown}
        barData={barData}
        anxietyData={anxietyData}
        depressionData={depressionData}
        stressData={stressData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },

  dateLabel: {
    alignSelf: "flex-start",
    color: "#B0B2B3",
    fontSize: 14,
    marginTop: 20,
  },

  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    justifyContent: "space-evenly",
    backgroundColor: "#EAEAEA",
    flexDirection: "row",
  },

  text: {
    fontSize: 12,
    color: "#B0B2B3",
    paddingVertical: 5,
  },
});

export default HomeScreen;
