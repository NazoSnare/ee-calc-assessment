import React, { useEffect, useState } from 'react'
import { StyledCalcScreen, StyledCalcScreenAnswer, StyledCalcScreenText } from './CalcScreen.styles';

import { DefaultComponentProps } from '../../utils/types';
import { decimalFormatter } from '../../utils/functions';

export interface CalcScreenProps extends DefaultComponentProps {
   value?: string;
}

const CalcScreen: React.FC<CalcScreenProps> = (props) => {
  const [answer, setAnswer] = useState('0');

  useEffect(() => {

    try {
      setAnswer(eval(props.value ?? '0'));
    } catch (error) {
      setAnswer(prev => prev);
    }
     
  },[props.value]);
  return (
    <StyledCalcScreen {...props}>
        <StyledCalcScreenText>
          {decimalFormatter(props.value ?? '0')}
        </StyledCalcScreenText>
        <StyledCalcScreenAnswer>
          {eval(answer)}
        </StyledCalcScreenAnswer>
    </StyledCalcScreen>
  )
}

export default CalcScreen;