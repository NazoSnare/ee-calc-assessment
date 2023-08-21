import { CalcButton } from '..';
import { DefaultComponentProps } from '../../utils/types';
import React from 'react';
import { StyledCalcButtonList } from './CalcButtonList.styles';

export interface CalcButtonListProps extends DefaultComponentProps {
   title?: string | number;
   value?: number;
   isNumeric?: boolean;
   buttons: Array<CalculatorButtonI>;
   clickEvent: (val: number|string) => void;
}

export interface CalculatorButtonI {
  title: string | number;
  value: number | string;
  type: CalculatorButtonFunctionality;

}

export type CalculatorButtonFunctionality = 'numeric' | 'function' | 'reset' | 'separator' | 'deletor' | 'zero';

const CalcButtonList: React.FC<CalcButtonListProps> = (props) => {
  
  const renderButtons = () => {
    return (props.buttons?.map(button => (<CalcButton onClick={() => {
          props.clickEvent(button.value);
    }} type={button.type} className={button.type} key={button.title} title={button.title} value={button.value} />)))
  }
  
  return (
    <StyledCalcButtonList {...props}>
        {
          (props.buttons?.length > 0) ? (
              renderButtons()
          ) : (
            <p>{'no buttons yet.They still have to configured'}</p>
          )
        }
    </StyledCalcButtonList>
  )
}

export default CalcButtonList;