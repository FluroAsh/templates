import { render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";

import Counter from "./counter";

let user: UserEvent;
const renderCounter = () => render(<Counter />);

describe("Counter Component", () => {
  beforeEach(() => {
    user = userEvent.setup();
  });

  it("renders the counter", () => {
    renderCounter();

    const counterValue = screen.getByText(/Count: 0/i);
    expect(counterValue).toBeInTheDocument();
  });
  it("increments the counter value", async () => {
    renderCounter();

    const incrementButton = await screen.findByRole("button", { name: /^\+$/ });
    user.click(incrementButton);

    expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();
  });
  it("decrements the counter value", async () => {
    renderCounter();

    const decrementButton = await screen.findByTestId("decrement-button");
    const incrementButton = await screen.findByTestId("increment-button");

    user.click(incrementButton);
    user.click(incrementButton);
    expect(await screen.findByText(/Count: 2/i)).toBeInTheDocument();

    user.click(decrementButton);
    expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();
  });
});
