import type { ButtonProps } from "./types";

import * as S from "./styles";
import { TouchableOpacity } from "react-native";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
	children,
	paddingSize,
	schema,
	isActive,
	...props
}: ButtonProps) => {
	const [isFocused, setIsFocused] = React.useState(false);
	
	return (
		<S.Container
			isActive={isFocused}
			schema={schema}
		>
			<TouchableOpacity 
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
				{...props}
			>
				{children}
			</TouchableOpacity>
		</S.Container>
	);
};
