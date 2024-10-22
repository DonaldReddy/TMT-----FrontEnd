import { View, Text, Platform } from "react-native";
import { useState } from "react";
import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import {
	responsiveFontSize,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import { Link } from "expo-router";
import { AntDesign, Feather, FontAwesome6, Fontisto } from "@expo/vector-icons";
import KeyboardingAvoidWrapper from "@/components/KeyboardingAvoidWrapper";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";

export default function ProfileEdit() {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	return (
		<SafeAreaWrapper>
			<KeyboardingAvoidWrapper>
				<View
					className="w-full flex flex-row items-center"
					style={{
						marginTop: responsiveWidth(1),
						padding: responsiveWidth(5),
					}}
				>
					<Link href="/(root)/(tabs)/Profile">
						<FontAwesome6 name="arrow-left-long" size={20} color="#737373" />
					</Link>
				</View>
				<View className="w-full items-center ">
					<Text
						style={{
							fontSize: responsiveFontSize(3),
							marginBottom: responsiveWidth(2),
						}}
						className="text-primary-500 font-bold"
					>
						Edit Profile
					</Text>
				</View>
				<View
					className="w-full  flex justify-center items-center"
					style={{
						paddingHorizontal: responsiveWidth(5),
					}}
				>
					<InputField
						label="Name"
						required={true}
						placeholder="Enter your name"
						// value={userData.name}
						// onChangeText={(value) => setUserData({ ...userData, name: value })}
						// errors={errors.name}
						LeftIcon={(style: any) => (
							<AntDesign name="user" size={24} color="#0286ff" style={style} />
						)}
					/>
					<InputField
						label="Email"
						placeholder="Enter your email"
						// value={userData.email}
						// onChangeText={(value) => setUserData({ ...userData, email: value })}
						// errors={errors.email}
						LeftIcon={(style: any) => (
							<Fontisto name="email" size={24} color="#0286ff" />
						)}
					/>
					<InputField
						label="Phone Number"
						placeholder="Enter your phone number"
						// value={userData.phone}
						// onChangeText={(value) => setUserData({ ...userData, phone: value })}
						// errors={errors.phone}
						LeftIcon={(style: any) => (
							<Feather name="phone" size={24} color="#0286ff" />
						)}
						keyBoardType={
							Platform.OS === "android" ? "phone-pad" : "name-phone-pad"
						}
					/>
					<View
						style={{
							marginTop: responsiveWidth(5),
						}}
					>
						<CustomButton
							title="Update Profile"
							width={responsiveWidth(90)}
							onPress={() => {}}
							// disabled={
							//   userData.name === "" ||
							//   userData.email === "" ||
							//   userData.phone === "" ||
							// }
							// bgVariant={
							//   userData.name === "" ||
							//   userData.email === "" ||
							//   userData.phone === "" ||
							//     ? "secondary"
							//     : "default"
							// }
						/>
					</View>
				</View>
			</KeyboardingAvoidWrapper>
			{/* Header */}
		</SafeAreaWrapper>
	);
}
