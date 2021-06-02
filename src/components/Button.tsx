import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  title: string;
  textColor: string;
  backgroundColor: string;
};

export function Button(props: ButtonProps) {
  const { onPress, title = "" } = props;
  return (
    <Pressable
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: props.textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
