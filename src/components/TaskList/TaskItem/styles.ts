import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

interface ContainerProps extends ViewProps {
	isCompleted: boolean;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 12px 8px;
	background-color: ${colors.gray500};
	border: 1px solid ${({ isCompleted }) => isCompleted ? colors.gray500 :colors.gray400};
	border-radius: 8px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
	margin-bottom: 8px;
`;

export const TaskText = styled.Text<{ isCompleted: boolean }>`
	font-size: ${fonts.regular};
	line-height: ${fonts.lineHeight};
	color: ${({ isCompleted }) => isCompleted ? colors.gray300 : colors.gray100};
	text-decoration-line: ${({ isCompleted }) => isCompleted && "line-through" };
	margin: 0 8px;
	flex: 1;
`