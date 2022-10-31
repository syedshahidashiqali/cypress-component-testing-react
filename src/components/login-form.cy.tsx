import { LoginForm } from "./login-form";

describe("LoginForm", () => {
  it("mounts", () => {
    cy.mount(<LoginForm />);
  });
});
