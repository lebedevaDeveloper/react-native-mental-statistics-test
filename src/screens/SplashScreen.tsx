import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import { SplashProps } from "../NavigationProps";

const SplashScreen = ({ route, navigation }: SplashProps) => {
  const [textOpacityAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(textOpacityAnimation, {
      toValue: 1,
      delay: 800,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    let navTimeout = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
    return () => {
      clearTimeout(navTimeout);
    };
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/splashBackground.jpg")}
      style={styles.background}
    >
      <View style={[styles.container]}>
        <Animated.View style={{ opacity: textOpacityAnimation }}>
          <Text style={styles.logo}>Mental Chart</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  logo: {
    fontSize: 50,
    color: "white",
    textAlign: "left",
    fontStyle: "italic",
    marginTop: "15%",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  container: {
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
});
