import { View, Text } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/SafeAreaWrapper";

export default function Privacy() {
  return (
    <SafeAreaWrapper>
      <View className="flex-1 bg-white flex items-center justify-center">
        <Text>Privacy Policy</Text>
      </View>
    </SafeAreaWrapper>
  );
}
