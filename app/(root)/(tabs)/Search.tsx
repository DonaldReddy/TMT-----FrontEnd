import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FlightInfo from "@/components/FlightInfo";

export default function Search() {
	return (
		<SafeAreaView className="flex flex-1 justify-center items-center">
			<Text>Search</Text>
			<FlightInfo />
		</SafeAreaView>
	);
}
