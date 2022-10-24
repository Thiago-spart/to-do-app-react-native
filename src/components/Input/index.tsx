import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { colors } from "../../styles/colors";

import * as S from "./styles"

export const Input: React.FC<TextInputProps> = ({ placeholder, value, ...rest }) => {
	const [isFocused, setIsFocused] = React.useState(false);
	
	return (
		<S.Container
			placeholder={placeholder}
			placeholderTextColor={colors.gray300}
			isActive={isFocused}
			onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
			{...rest}
		/>
	);
};
