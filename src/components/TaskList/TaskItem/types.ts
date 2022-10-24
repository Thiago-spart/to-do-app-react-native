import { PressableProps } from "react-native";

export interface TaskItemProps extends PressableProps {
	isCompleted: boolean;
	handleDeleteTask: () => void;
	textTask: string;
}