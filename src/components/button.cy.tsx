import { Button } from "./button";

describe("Button", () => {
  it("mounts", () => {
    cy.mount(<Button />);
  });

  it("accepts custom text", () => {
    cy.mount(<Button text="Custom" />);
    cy.get("button").should("have.text", "Custom");
  });
});
