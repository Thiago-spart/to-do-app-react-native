import { PressableProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

interface CheckBoxContainerProps extends PressableProps {
	isChecked: boolean;
	isActive: boolean;
}

export const CheckBoxContainer = styled.Pressable<CheckBoxContainerProps>`
	width: 17.5px;
  height: 17.5px;
  justify-content: center;
  align-items: center;
  border-radius: 8.75px;
  border-width: 2px;
  border-color: ${({ isChecked }) => isChecked ? colors.purpleDark : colors.blue };
  background-color: ${({ isActive, isChecked }) => isActive && isChecked 
		? colors.purple : !isActive && !isChecked ? "transparent" : colors.purpleDark };
`