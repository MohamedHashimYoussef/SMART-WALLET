import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          welcome
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "red",
            fontSize: 25,
          }}
        >
          Smart Wallet
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/splash.png")}
          resizeMode="center"
          style={{
            width: 350,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={() => console.log("badar")}>
          <View
            style={{
              width: "80%",
              backgroundColor: "blue",
              padding: 25,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Splash;
