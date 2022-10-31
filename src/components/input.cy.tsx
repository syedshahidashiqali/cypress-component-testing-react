import { Input } from "./input";

describe("Input", () => {
  it("mounts", () => {
    cy.mount(<Input label="Test" errorMessage="Busted" />);
  });
});
