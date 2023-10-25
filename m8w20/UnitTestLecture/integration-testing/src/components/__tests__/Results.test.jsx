import { fireEvent, render, screen, prettyDOM } from "@testing-library/react"
import Result from "../Result"

test('can display results from an API', () => {
  const {getByTestId, container} = render(<Result status="Waiting"/>);

  const highScoreButton = screen.getByTestId('high-scores');

  fireEvent.click(highScoreButton);
  console.log(prettyDOM(container))
  return screen.findByText('Frankie', {exact: false})

})