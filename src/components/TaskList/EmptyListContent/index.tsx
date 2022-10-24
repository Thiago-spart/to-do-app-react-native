import { ClipboardSvg } from "../../../../assets/icons/ClipboardSvg"
import * as S from "./styles"

export const EmptyListContent: React.FC = () => {
	return (
		<S.Container>
			<ClipboardSvg style={{ marginTop: 48 }}/>

			<S.TextContainer>
				<S.WarningText isBold>
					Você ainda não tem tarefas cadastradas
				</S.WarningText>
				<S.WarningText>
					Crie tarefas e organize seus itens a fazer
				</S.WarningText>
			</S.TextContainer>
		</S.Container>
	)
}