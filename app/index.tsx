import { SafeAreaView, Text } from "react-native";
import CounterScreen from "./screens/CounterScreen";
import CounterM3Screen from "./screens/CounterM3Screen";
import React from "react";
import { PaperProvider } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";

const index = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/*<CounterScreen />/*/}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
export default index;
