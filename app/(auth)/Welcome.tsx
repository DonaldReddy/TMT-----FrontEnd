import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useRef } from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Welcome() {
	const swiperRef = useRef<Swiper>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const isLastSlide = activeIndex === onboarding.length - 1;

	const handleNext = () => {
		if (swiperRef.current && !isLastSlide) {
			swiperRef.current.scrollBy(1);
		} else {
			router.push("/(auth)/Initial");
		}
	};

	return (
		<SafeAreaView className="flex h-full items-center justify-between bg-amber-200">
			<TouchableOpacity
				onPress={() => {
					router.push("/(root)/(tabs)/Home");
				}}
				className="w-full flex justify-end items-end p-5"
			>
				<Text className="text-xl text-black/70 font-bold">skip </Text>
			</TouchableOpacity>
			<View
				className="flex-1 flex flex-row items-center justify-center"
				style={{
					paddingVertical: responsiveHeight(5),
				}}
			>
				<Swiper
					ref={swiperRef}
					loop={false}
					dot={
						<View
							className="rounded-full transition-all duration-1000 ease-in-out"
							style={{
								width: responsiveWidth(8),
								height: responsiveHeight(0.5),
								marginHorizontal: responsiveWidth(1),
								backgroundColor: "#e2e8f0",
							}}
						/>
					}
					activeDot={
						<View
							className=" bg-[#0286ff] rounded-full transition-all duration-1000 ease-in-out"
							style={{
								width: responsiveWidth(8),
								height: responsiveHeight(0.5),
								marginVertical: responsiveWidth(1),
							}}
						/>
					}
					onIndexChanged={(index) => setActiveIndex(index)}
					className="flex justify-center items-center pt-20"
				>
					{onboarding.map((item, index) => (
						<View
							key={index}
							className="flex items-center justify-center "
							style={{
								marginHorizontal: responsiveWidth(2),
								padding: responsiveWidth(4),
							}}
						>
							<Image
								source={item.image}
								resizeMode="contain"
								className=""
								style={{
									width: responsiveWidth(100),
									height: responsiveHeight(30),
									alignSelf: "center",
								}}
							/>
							<View className="flex flex-row items-center justify-center w-full mt-10">
								<Text
									className=" text-black font-bold mx-10 text-center"
									style={{
										fontSize: responsiveFontSize(3),
									}}
								>
									{item.title}
								</Text>
							</View>
							<Text className="text-lg font-JakartaSemiBold text-center mx-5 mt-3 text-[#858585]">
								{item.description}
							</Text>
						</View>
					))}
				</Swiper>
			</View>
			<View
				style={{
					paddingVertical: responsiveHeight(5),
				}}
			>
				<CustomButton
					title={isLastSlide ? "Get Started" : "Next"}
					className="w-11/12 mt-10 transition-all duration-1000 ease-in-out"
					onPress={handleNext}
					IconRight={() => (
						<FontAwesome6
							name="arrow-right-long"
							size={responsiveFontSize(3)}
							color="white"
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}
