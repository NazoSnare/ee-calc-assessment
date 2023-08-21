import { render, screen } from "@testing-library/react";

import { CalcButton } from ".";

describe("CalcButton title", () => {
  it("should render 0 as default value", () => {
    render(<CalcButton type="numeric" value={'0'} />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
  });

  it("should render given title", () => {
    render(<CalcButton type="numeric"  title={3} value={3} />)
    expect(screen.getByText(/3/i)).toBeInTheDocument()
  });

});