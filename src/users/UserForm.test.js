import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and one button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component(find an element)
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion(check for expected behaviour)
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it should call the OnAddUser when the form is submitted", () => {
  const mock = jest.fn();
  render(<UserForm onAddUser={mock} />);

  // find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate name and email inputs
  userEvent.click(nameInput);
  userEvent.keyboard("gokul");

  userEvent.click(emailInput);
  userEvent.keyboard("gokul@gmail.com");

  // find button
  const button = screen.getByRole("button");

  // simulate button field
  userEvent.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    formData: { name: "gokul", email: "gokul@gmail.com" },
  });
});

test("empties the field of input on submitting the form", () => {
  render(<UserForm onAddUser={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  userEvent.click(nameInput);
  userEvent.keyboard("gokul");

  userEvent.click(emailInput);
  userEvent.keyboard("gokul@gmail.com");

  userEvent.click(button);
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
