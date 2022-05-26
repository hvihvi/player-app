import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { NavigationProp } from "@react-navigation/core/src/types";
import { ParamList } from "../../App";

export const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => navigation.navigate("Player")}>
        Go to Player
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
