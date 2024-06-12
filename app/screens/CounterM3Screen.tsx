import { View, Text } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/theme/global.style";

import Icon from "react-native-vector-icons/Ionicons";

import { FAB } from "react-native-paper";
const CounterM3Screen = () => {
  const [count, setCounnt] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Icon name="accessibility-outline" size={35} />
      <FAB
        //label="+1"
        onPress={() => setCounnt(count + 1)}
        onLongPress={() => setCounnt(0)}
        style={globalStyles.fab}
        icon="add-outline"
      />
    </View>
  );
};

export default CounterM3Screen;
