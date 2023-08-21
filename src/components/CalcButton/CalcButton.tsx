import { StyledCalcButton, StyledCalcButtonText } from './CalcButton.styles';

import { CalculatorButtonFunctionality } from '../CalcButtonList/CalcButtonList';
import { DefaultComponentProps } from '../../utils/types';
import React from 'react';

export interface CalcButtonProps extends DefaultComponentProps {
   title?: string | number;
   value: number | string;
   isNumeric?: boolean;
   type: CalculatorButtonFunctionality;
}

const CalcButton: React.FC<CalcButtonProps> = (props) => {
  return (
    <StyledCalcButton {...props}>
        <StyledCalcButtonText className={props.type}>
          {props.title ?? 0}
        </StyledCalcButtonText>
    </StyledCalcButton>
  )
}

export default CalcButton;