import { render, screen } from "@testing-library/react";

import { CalcScreen } from ".";

describe("CalcScreen text", () => {
  it("should render 0 as default value", () => {
    render(<CalcScreen />)
   
    const contentResult = screen.findByText('0');
    expect(contentResult).toBeTruthy();

  });

  it("should render given value on the screen e.g 23+5 should show 28 ", () => {
    render(<CalcScreen value={'23+5'} />)
    expect(screen.getByText(/28/i)).toBeInTheDocument()
  });

  it("should render only one decimal separator e.g 23.78.9 = 23.789", () => {
    render(<CalcScreen value={'23.78.9'} />)
    expect(screen.getByText(/23.789/i)).toBeInTheDocument()
  });


});