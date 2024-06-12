import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { Button } from "react-native-paper";
const CounterScreen = () => {
  const [count, setCounnt] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Button
        onPress={() => setCounnt(count + 1)}
        onLongPress={() => setCounnt(0)}
        mode="contained"
      >
        Incrmentar
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "black",
    fontWeight: "300",
  },
});

export default CounterScreen;
