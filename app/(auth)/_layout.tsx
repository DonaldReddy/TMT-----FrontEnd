import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="Welcome" options={{ headerShown: false }} />
			<Stack.Screen name="Initial" options={{ headerShown: false }} />
			<Stack.Screen name="SignIn" options={{ headerShown: false }} />
			<Stack.Screen name="SignUp" options={{ headerShown: false }} />
			<Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
			<Stack.Screen name="ForgotOtp" options={{ headerShown: false }} />
			<Stack.Screen name="Otp" options={{ headerShown: false }} />
			<Stack.Screen name="ResetPassword" options={{ headerShown: false }} />
		</Stack>
	);
}
