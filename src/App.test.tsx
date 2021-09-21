import { waitFor } from '@testing-library/react'
import App from './App';
import { render } from './utils/testUtils';

describe('test suite', () => {
  it("should render loading screen", () => {
    const {  getByTestId } = render(<App />);
    expect(getByTestId('loading')).toBeTruthy();
  });
  it("should render carousel recommendations component", async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => expect(getByTestId("recommendations")).toBeInTheDocument());
  });
  it("should render 2 recommendation component", async () => {
    const { getAllByTestId } = render(<App />);
    await waitFor(() => expect(getAllByTestId("recommendation")).toHaveLength(2));
  });
})