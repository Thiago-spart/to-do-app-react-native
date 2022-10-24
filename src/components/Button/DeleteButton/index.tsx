import { TouchableOpacityProps } from "react-native"
import { Button } from "../"
import { TrashCanSvg } from "../../../../assets/icons/TrashCanSvg"

export const DeleteButton: React.FC<TouchableOpacityProps> = (props) => {
	return (
		<Button paddingSize={9} schema="danger" {...props}>
			<TrashCanSvg width={12} height={14} />
		</Button>
	)
}