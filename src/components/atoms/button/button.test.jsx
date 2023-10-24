import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "@components/atoms";

test("renders a button with text", () => {
  const buttonText = "Click me";
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button onClick={onClickMock}>{buttonText}</Button>,
  );

  const button = getByText(buttonText);

  expect(button).toBeTruthy();
});

test("triggers onClick when the button is clicked", () => {
  const buttonText = "Click me";
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button onClick={onClickMock}>{buttonText}</Button>,
  );

  const button = getByText(buttonText);

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
