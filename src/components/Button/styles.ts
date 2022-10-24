import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { ButtonProps } from "./types";

type ContainerProps = Omit<ButtonProps, "children">

const themeVariations: Record<ContainerProps["schema"], string> = {
	primary: `
		background-color: ${colors.blueDark};
		color: ${colors.gray200};
		border-radius: 8px;
	`,
	danger: `
		background-color: transparent;
		color: ${colors.gray200};
		border-radius: 4px;
		`,
};

export const Container = styled.View<ContainerProps>`
	padding: ${({ paddingSize }) => paddingSize ? `${paddingSize}px` : "18px"};
	align-items: center;
	justify-content: center;
	flex-direction: row;

	${({ schema }) =>
		schema ? themeVariations[schema] : themeVariations.primary}
`;