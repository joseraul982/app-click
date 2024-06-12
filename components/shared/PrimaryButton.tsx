import { StyleSheet, Text, Platform, Pressable } from "react-native";
import React from "react";

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text
        style={{
          color: Platform.OS === "android" ? "white" : "#4746AB",
        }}
      >
        {label}
      </Text>
    </Pressable>
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
  button: {
    backgroundColor: Platform.OS === "android" ? "#5856D6" : "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === "android" ? "#4745AB" : "white",
  },
});

export default PrimaryButton;
