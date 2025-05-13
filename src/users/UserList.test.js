import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    {
      formData: {
        name: "gokul",
        email: "gokul@gmail.com",
      },
    },
    {
      formData: {
        name: "rajan",
        email: "rajan@gmail.com",
      },
    },
  ];

  render(<UserList users={users} />);

  return { users };
}

test("render one row per user", () => {
  // const { container } = render(<UserList users={users} />);

  renderComponent();

  // find all the rows in a table

  // screen.logTestingPlaygroundURL();

  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

test("render the email and name for each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.formData.name });
    const email = screen.getByRole("cell", { name: user.formData.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
