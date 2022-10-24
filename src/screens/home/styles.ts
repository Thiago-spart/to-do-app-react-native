import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const Container = styled.View`
	flex: 1;
	background-color: ${colors.gray700};
	padding: 0 24px;
	width: 100%;
`

export const LogoContainer = styled.View`
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 70px;
	margin-bottom: 40px;
`

export const AddTaskContainer = styled.View`
	flex-direction: row;
	width: 100%;
	column-gap: 20px;
	row-gap: 20px;
	margin-bottom: 32px;
`

export const TaskCounterContainer = styled.View`
	margin-bottom: 21px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const TaskTagsCounter = styled.View`
	flex-direction: row;
	align-items: center;
`

export const CounterTag = styled.Text`
	color: ${colors.gray200};
	background-color: ${colors.gray400};
	padding: 2px 8px;
	border-radius: 999px;
`

const TaskCounterText = styled.Text`
	font-size: ${fonts.medium};
	line-height: ${fonts.lineHeight};
	font-weight: ${fonts.weightBold};
	margin-right: 8px;
`

export const CreatedTasksText = styled(TaskCounterText)`
	color: ${colors.blue};
`

export const CompletedTasksText = styled(TaskCounterText)`
	color: ${colors.purple}
`
