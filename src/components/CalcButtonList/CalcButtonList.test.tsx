import { render, screen } from "@testing-library/react";

import { CalcButtonList } from ".";
import { CalculatorButtonI } from "./CalcButtonList";

describe("CalcButton title", () => {
  it("should render no buttons by default ", () => {
    render(<CalcButtonList clickEvent={() => {}} buttons={[]} />)
    expect(screen.getByText(/no buttons yet/i)).toBeInTheDocument()
  });

  it("should render  the given buttons", () => {
    const testButtons: CalculatorButtonI[] =  [
       {
        type: 'numeric',
        value: 1,
        title: '1'
       },
       {
        type: 'numeric',
        value: 2,
        title: '2'
       },

    ]
    render(<CalcButtonList clickEvent={() => {}} buttons={testButtons} />)
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

});