import { CalcButtonList, CalcScreen } from '../../components';
import React, { useEffect, useState } from 'react'
import { getButtons, isFunctionButton } from '../../utils/functions';

import {CalculatorButtonI} from '../../components/CalcButtonList/CalcButtonList';
import { DefaultComponentProps } from '../../utils/types';
import { StyledCalculateHome } from './CalculateHome.styles'

export interface CalculateHomeProps extends DefaultComponentProps {

} 

const CalculateHome: React.FC<CalculateHomeProps> = (props) => {
  const [buttons, setButtons] = useState<[]| CalculatorButtonI []>([]);
  const [screenValue, setScreenValue] = useState('0');

  useEffect(() => {

  }, [screenValue]);

  useEffect(() => {
    setButtons(getButtons());
  },[]);

  const addToScreen = (val: number| string) => {

    if(val === 'reset') {
      setScreenValue('0');
      return;
    }
    
    if(val === 'delete') {
      setScreenValue(prev => prev.slice(0, prev.length-1));
      return;
    }
    
    if((val === '.') && screenValue.includes('.')) {
      return;
    }

    if(isFunctionButton(val)) {
      const lastDigit = screenValue?.slice(-1);
      if(isFunctionButton(lastDigit)) {
        return;
      }

     }
     setScreenValue(prev => (prev === '0' && val!== '.') ? `${val}` : `${prev}${val}`);
    
  }
      
  return (
    <StyledCalculateHome {...props}>
       <h1> Equal Experts - equalX</h1>
       <CalcScreen value={screenValue} />
       <CalcButtonList clickEvent={addToScreen} buttons={buttons} />
    </StyledCalculateHome>
  )
}

export default CalculateHome;