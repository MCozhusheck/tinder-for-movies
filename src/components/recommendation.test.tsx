import { fireEvent } from '@testing-library/react'
import Reccomendation from './Recommendation';
import { render } from '../utils/testUtils';
import { IRecommendation } from "../models/IRecommendation";

const mockAccept = jest.fn((id: string) => (null))
const mockReject = jest.fn((id: string) => (null))
const mockRecommendation: IRecommendation = {
  id: "testId",
  imageURL: "testImage",
  title: "testTitle",
  summary: "testSummary",
  rating: 7.2
}

describe('Recommendation behaviour', () => {
  it("should render recommendation", () => {
    const { getByTestId, getByText, getByRole } = render(<Reccomendation recommendation={mockRecommendation} onAcceptButtonClick={mockAccept} onRejectButtonClick={mockReject}/>);
    const poster = getByRole('img');
    expect(getByTestId('recommendation')).toBeTruthy();
    expect(getByText('testTitle (7.2/10)')).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', 'testImage');
    expect(poster).toHaveAttribute('alt', 'movie poster');
  });
  it("should handle on accept button click", async () => {
    const { getByText } = render(<Reccomendation recommendation={mockRecommendation} onAcceptButtonClick={mockAccept} onRejectButtonClick={mockReject}/>);
    const acceptButton = getByText('Accept')
    fireEvent(
      acceptButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(mockAccept).toHaveBeenCalled();
  });
  it("should handle on reject button click", async () => {
    const { getByText } = render(<Reccomendation recommendation={mockRecommendation} onAcceptButtonClick={mockAccept} onRejectButtonClick={mockReject}/>);
    const rejectButton = getByText('Reject')
    fireEvent(
      rejectButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(mockReject).toHaveBeenCalled();
  });
})