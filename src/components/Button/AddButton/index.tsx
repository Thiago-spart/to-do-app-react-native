import { TouchableOpacityProps } from "react-native"
import { Button } from "../"
import { PlusSvg } from "../../../../assets/icons/PlusSvg"

export const AddButton: React.FC<TouchableOpacityProps> = (props) => {
	return (
		<Button paddingSize={18} schema="primary" {...props}>
			<PlusSvg width={16} height={16} />
		</Button>
	)
}