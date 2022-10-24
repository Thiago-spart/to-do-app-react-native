import styled from "styled-components/native";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

export const Container = styled.View`
	align-items: center;
	width: 100%;
	
	border-top: 1px solid ${colors.gray400};
`

export const TextContainer = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;

	margin-top: 16px;
`

export const WarningText = styled.Text<{ isBold?: boolean }>`
	font-size: ${fonts.regular};
	line-height: ${fonts.lineHeight};
	font-weight: ${({ isBold }) => isBold ? fonts.weightBold : fonts.weightRegular };
	text-align: center;

	color: ${colors.gray300};
`