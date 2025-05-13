import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("recieve an user and display in the userlist", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  userEvent.click(nameInput);
  userEvent.keyboard("gokul");
  userEvent.click(emailInput);
  userEvent.keyboard("gokul@gmail.com");

  const button = screen.getByRole("button");

  userEvent.click(button);

  const name = screen.getByRole("cell", { name: "gokul" });
  const email = screen.getByRole("cell", { name: "gokul@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
