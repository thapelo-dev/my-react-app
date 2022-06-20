import { render, screen } from '@testing-library/react';
import Subscription from './Subscription';

describe(Subscription, () => {
  it('shows corrent login title message', () => {
    render(<Subscription />);
    const linkElement = screen.getByText(/Let`s keep in touch/i);
    expect(linkElement).toBeInTheDocument();
  });
});
