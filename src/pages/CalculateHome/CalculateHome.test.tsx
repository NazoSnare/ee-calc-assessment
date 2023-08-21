import { render, screen } from "@testing-library/react";

import { CalcScreen } from "../../components";

test('CalculateHome', () => {

describe("CalculateHome Page ", () => {
    it("should render the Screen Component", () => {
      render(<CalcScreen />)
      expect(screen.getByText(/0/i)).toBeInTheDocument()
    });
  
    it("should render a button list with atleast 0", () => {
      render(<CalcScreen value={'23'} />)
      expect(screen.findAllByText('0')).toBeInTheDocument()
    });
  
  
  
  });
})