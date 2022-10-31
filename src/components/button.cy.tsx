import { Button } from "./button";

describe("Button", () => {
  it("mounts", () => {
    cy.mount(<Button />);
  });
});
