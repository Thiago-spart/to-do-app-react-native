import { ReactNode } from "react";
import type { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
	isActive?: boolean;
	children: ReactNode;
	schema: "primary" | "danger";
	paddingSize: number;
}
