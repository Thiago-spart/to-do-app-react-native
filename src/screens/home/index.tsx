import React from 'react';
import { FlatList } from 'react-native';
import { LogoSvg } from "../../../assets/icons/LogoSvg"
import { AddButton } from "../../components/Button/AddButton"
import { Input } from "../../components/Input"
import { EmptyListContent } from '../../components/TaskList/EmptyListContent';
import { TaskItem } from '../../components/TaskList/TaskItem';

import * as S from "./styles"

const mockedData = [
	{
		value: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
		isChecked: false,
	},
	{
		value: "Integer urna interdum massa libero auctor neque turpis turpis emper.",
		isChecked: false,
	},
	{
		value: "Integer urna interdum massa libero auctor neque turpis turpis mper.",
		isChecked: true,
	},
	{
		value: "Integer urna interdum massa libero auctor neque turpis turpis er.",
		isChecked: false,
	}
]

export const HomeScreen: React.FC = () => {
	const [taskList, setTaskList] = React.useState(mockedData);
	const [inputValue, setInputValue] = React.useState<string>("")

	const addNewTask = (newTaskValue: string) => {
		setTaskList(prevState => [...prevState, { value: newTaskValue, isChecked: false }])

		setInputValue("")
	}

	const handleToggleTaskCompleted = (taskIdx: number, currentIsChecked: boolean) => {
		let newTaskList = [...taskList];
		newTaskList[taskIdx].isChecked = !currentIsChecked
		
		setTaskList(newTaskList)
	}
	
	const handleDeleteTask = (taskIdx: number) => {
		setTaskList(taskList.filter((_, idx) => idx !== taskIdx))
	}
	

	return (
		<S.Container>
			<S.LogoContainer>
				<LogoSvg />
			</S.LogoContainer>
			
			<S.AddTaskContainer>
				<Input 
					placeholder="Add new task" 
					style={{ flex: 1, marginRight: 4 }} 
					value={inputValue}
					onChangeText={setInputValue}
				/>
				<AddButton onPress={() => addNewTask(inputValue)} />
			</S.AddTaskContainer>

			<S.TaskCounterContainer>
				<S.TaskTagsCounter>
					<S.CreatedTasksText>
						Created
					</S.CreatedTasksText>
					<S.CounterTag>
						{taskList.length}
					</S.CounterTag>
				</S.TaskTagsCounter>
				<S.TaskTagsCounter>
					<S.CompletedTasksText>
						Completed
					</S.CompletedTasksText>
					<S.CounterTag>
						{taskList.filter(item => item.isChecked).length}
					</S.CounterTag>
				</S.TaskTagsCounter>
			</S.TaskCounterContainer>

			<FlatList
				data={taskList}
				keyExtractor={key => key.value}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => <EmptyListContent />}
				renderItem={({ item, index }) => (
					<TaskItem
						key={item.value}
						textTask={item.value}
						isCompleted={item.isChecked}
						onPress={() => handleToggleTaskCompleted(index, item.isChecked)}
						handleDeleteTask={() => handleDeleteTask(index)}
					/>
				)}
			/>

		</S.Container>
	)
}