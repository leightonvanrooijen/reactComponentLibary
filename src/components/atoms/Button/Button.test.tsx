import { Button, ButtonProps } from "./Button"
import { render } from "@testing-library/react"
import { MockProvider } from "../../../packages/test/MockProvider"

const setUp = ({ onClick = jest.fn(), disabled, children = "Hello" }: Partial<ButtonProps>) => (
  <MockProvider withTheme>
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  </MockProvider>
)

describe("Button", () => {
  it("shows text", () => {
    const text = "text"
    const { getByText } = render(setUp({ children: text }))

    const button = getByText(text)

    expect(button).toBeInTheDocument()
  })
  it("is clickable", () => {
    const onClick = jest.fn()
    const { getByRole } = render(setUp({ onClick }))

    const button = getByRole("button")
    button.click()

    expect(onClick).toBeCalledTimes(1)
  })
  it("can be disabled", () => {
    const onClick = jest.fn()
    const { getByRole } = render(setUp({ onClick, disabled: true }))

    const button = getByRole("button")
    button.click()

    expect(onClick).not.toBeCalled()
  })
})
