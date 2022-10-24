import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

interface CustomTextInputProps extends TextInputProps {
	isActive: boolean;
}

export const Container = styled.TextInput<CustomTextInputProps>`
	color: ${colors.gray100};
	font-size: ${fonts.regular};
	line-height: ${fonts.lineHeight};
	background-color: ${colors.gray500};
	border: 1px solid ${({ isActive }) => isActive ? colors.purpleDark : "transparent"};
	border-radius: 6px;
	padding: 16px;
`