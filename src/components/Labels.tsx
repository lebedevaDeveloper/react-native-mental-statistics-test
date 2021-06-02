import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

type WellBeingLabelProps = { percent: number };

type LabelProps = { percent: number; title: string; color: string };

export function WellBeingLabel(props: WellBeingLabelProps) {
  const { percent = 0 } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.purpleText}>well-being</Text>
      <View style={styles.percentContainer}>
        <Text style={styles.percentText}>{`${percent}%`}</Text>
        <View style={[styles.circle, { backgroundColor: "#5F3FA7" }]} />
      </View>
    </View>
  );
}

export function SimpleLabel(props: LabelProps) {
  const { percent = 0, title = "", color } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.percentContainer}>
        <Text style={styles.percentText}>{`${percent}%`}</Text>
        <View style={[styles.circle, { backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "22%" },

  purpleText: {
    color: "#5F3FA7",
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },

  titleText: {
    color: "black",
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },

  percentText: {
    color: "#A3A5A6",
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },

  percentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  circle: { width: 7, height: 7, borderRadius: 30, marginStart: 3 },
});
