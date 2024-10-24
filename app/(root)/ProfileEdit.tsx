import { View, Text, Platform, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import {
	responsiveFontSize,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import { Link, useLocalSearchParams } from "expo-router";
import { AntDesign, Feather, FontAwesome6, Fontisto } from "@expo/vector-icons";
import KeyboardingAvoidWrapper from "@/components/KeyboardingAvoidWrapper";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import * as ImagePicker from "expo-image-picker";

export default function ProfileEdit() {
	const params = useLocalSearchParams();

	const [userData, setUserData] = useState<{
		name: string;
		email: string;
		phone: string;
		image: string | null;
	}>({
		name: Array.isArray(params.name) ? params.name[0] : params.name || "",
		email: Array.isArray(params.email) ? params.email[0] : params.email || "",
		phone: Array.isArray(params.phone) ? params.phone[0] : params.phone || "",
		image: Array.isArray(params.image) ? params.image[0] : params.image || null,
	});

	async function pickImage() {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== "granted") {
			alert("Sorry, we need media library permissions to make this work!");
			await ImagePicker.requestMediaLibraryPermissionsAsync();
			return;
		}

		const selectedImage = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: Platform.OS === "ios" ? false : true,
			aspect: [1, 1],
			quality: 1,
			base64: true,
		});

		if (
			!selectedImage.canceled &&
			selectedImage.assets &&
			selectedImage.assets.length > 0
		) {
			setUserData({ ...userData, image: selectedImage.assets[0].uri });
		}
	}

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

				<TouchableOpacity
					className="bg-primary-500"
					style={{
						width: responsiveWidth(40),
						height: responsiveWidth(40),
						borderRadius: responsiveWidth(25),
						marginVertical: responsiveWidth(5),
						alignSelf: "center",
						justifyContent: "center",
						alignItems: "center",
						overflow: "hidden",
					}}
					onPress={pickImage}
				>
					{userData.image ? (
						<Image
							source={{ uri: userData.image }}
							style={{
								width: "100%",
								height: "100%",
								borderRadius: responsiveWidth(25),
							}}
						/>
					) : (
						<Text className="text-white">Add Photo</Text>
					)}
					{/* TODO: Add Image */}
				</TouchableOpacity>

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
						value={userData.name}
						onChangeText={(value) => setUserData({ ...userData, name: value })}
						// errors={errors.name}
						LeftIcon={(style: any) => (
							<AntDesign name="user" size={24} color="#0286ff" style={style} />
						)}
					/>
					<InputField
						label="Email"
						placeholder="Enter your email"
						value={userData.email}
						onChangeText={(value) => setUserData({ ...userData, email: value })}
						// errors={errors.email}
						LeftIcon={(style: any) => (
							<Fontisto name="email" size={24} color="#0286ff" />
						)}
					/>
					<InputField
						label="Phone Number"
						placeholder="Enter your phone number"
						value={userData.phone}
						onChangeText={(value) => setUserData({ ...userData, phone: value })}
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
							disabled={
								userData.name === "" ||
								userData.email === "" ||
								userData.phone === ""
							}
							bgVariant={
								userData.name === "" ||
								userData.email === "" ||
								userData.phone === ""
									? "secondary"
									: "primary"
							}
						/>
					</View>
				</View>
			</KeyboardingAvoidWrapper>
			{/* Header */}
		</SafeAreaWrapper>
	);
}
