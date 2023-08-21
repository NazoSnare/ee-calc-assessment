import { CalcButtonProps } from "./CalcButton";
import { styled } from "styled-components";

export const StyledCalcButton = styled.div<CalcButtonProps>`
    min-height: 15px;
    min-width: 15px;
    padding: 12px 18px;
    background-color: ${({theme, type}) =>  type === 'function' ? theme.colors?.tertiary :theme.colors?.primary};
    margin: 6px;
    font-size:  ${({type}) =>  type === 'function' ? '26px' : '17px'};;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    &.zero {
     grid-column: 1/ 3;
     letter-spacing: 1px;

    }
    
    &.reset {
     grid-column: 1/ 3;
     background-color: ${({theme}) => theme.colors?.secondary};
     letter-spacing: 1px;

    }

    &.deletor {
     grid-column: 3/ 5;
     background-color: ${({theme}) => theme.colors?.tertiary};

    }

    &:hover {
        background-color: ${({theme}) => theme.colors?.secondary};
        cursor: pointer;
    }
`;

export const StyledCalcButtonText = styled.div`
    color: ${({theme}) => theme.colors?.neutral?.light};
`;