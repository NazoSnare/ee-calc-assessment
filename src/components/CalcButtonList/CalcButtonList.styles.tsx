import { CalcButtonListProps } from "./CalcButtonList";
import { styled } from "styled-components";

export const StyledCalcButtonList = styled.div<CalcButtonListProps>`
    /* display: flex;
    flex-wrap: wrap;
    flex: 1; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
`;

// export const StyledCalcButtonText = styled.div`
    
// `;