import ReduxProvider from "@/redux/ReduxProvider";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
	return (
		<ReduxProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="ProfileEdit" />
				<Stack.Screen name="Notifications" />
				<Stack.Screen name="Privacy" />
				<Stack.Screen name="Faqs" />

				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ReduxProvider>
	);
}
