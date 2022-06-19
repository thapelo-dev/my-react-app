import { render, screen } from "@testing-library/react";
import { AuthenticationForm } from "./AuthenticationForm";

describe(AuthenticationForm, () => {
  it("shows corrent login title message", () => {
    render(<AuthenticationForm />);
    const linkElement = screen.getByText(/Welcome to Myapp, login with/i);
    expect(linkElement).toBeInTheDocument();
  });
});
