import { CalcScreenProps } from "./CalcScreen";
import { styled } from "styled-components";

export const StyledCalcScreen = styled.div<CalcScreenProps>`

    padding: 21px 18px;
    background-color: ${({theme}) => theme.colors?.secondary};
    margin: 6px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const StyledCalcScreenText = styled.div`
  color: ${({theme}) => theme.colors?.neutral.light};
  font-weight: 500;

`;

export const StyledCalcScreenAnswer = styled.div`
  color: ${({theme}) => theme.colors?.neutral.light};
  font-weight: 900;
  font-size: 26px;


`;