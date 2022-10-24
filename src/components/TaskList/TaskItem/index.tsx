import { TaskItemProps } from "./types"

import * as S from "./styles"
import { CustomCheckBox } from "../../CheckBox"
import { DeleteButton } from "../../Button/DeleteButton"

export const TaskItem: React.FC<TaskItemProps> = ({ isCompleted, textTask, handleDeleteTask, ...rest }) => {
	return (
		<S.Container isCompleted={isCompleted} >
			<CustomCheckBox
				checked={isCompleted}
				{...rest}
			/>

			<S.TaskText isCompleted={isCompleted}>
				{textTask}
			</S.TaskText>

			<DeleteButton onPress={handleDeleteTask} />
		</S.Container>
	)
}