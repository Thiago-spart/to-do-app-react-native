import React from 'react';
import { colors } from '../../styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as S from "./styled"
import { CustomCheckBoxProps } from './types';

export const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ checked = false,...rest }) => {
	const [isFocused, setIsFocused] = React.useState(false);
	
	return (
		<S.CheckBoxContainer
			onBlur={() => setIsFocused(false)}
			onFocus={() => setIsFocused(true)}
			isChecked={checked}
			isActive={isFocused}
			{...rest}
		>
      {checked && <Ionicons name="checkmark" size={10} color={colors.gray200} />}
    </S.CheckBoxContainer>
	)
}