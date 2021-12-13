import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./pages/Splash";

export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
