import { DefaultTheme } from "styled-components";
import { ReactNode } from "react";

export interface DefaultComponentProps  {
    children?: ReactNode;
    className?: string;
    theme?: DefaultTheme;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}