import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given NotFoundPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a paragraph", () => {
      const expectedText = "The page you're looking for doesn't exist.";

      render(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );

      const testedParagraph = screen.getByText(expectedText);

      expect(testedParagraph).toBeInTheDocument();
    });
  });
});