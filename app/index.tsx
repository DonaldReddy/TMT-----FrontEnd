import React, { useCallback, useEffect } from "react";
import { Redirect, router, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function index() {
	useEffect(
		useCallback(() => {
			(async () => {
				const onboardingCompleted = await AsyncStorage.getItem(
					"onboardingCompleted",
				);
				console.log(await AsyncStorage.getAllKeys(), 1);

				if (onboardingCompleted) {
					router.push("/(auth)/Initial");
				}
			})();
		}, []),
	);

	return <Redirect href="/(auth)/Welcome" />;
}
