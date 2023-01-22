import { resizeRight } from "./resizeRight"
import { expect } from "@storybook/jest"
import { createEvent } from "@testing-library/react"

describe("resizeRight", () => {
  it("extends width of element to mouse X location", () => {
    const ref = { current: document.createElement("div") }
    const resize = resizeRight({ resizableRef: ref, minStep: 20, maxWidth: 100 })

    resize(createEvent.mouseMove(ref.current, { clientX: 50 }) as MouseEvent)

    // 8px is currently added to account for padding - this will change with added use cases as it's very tied to the use
    expect(ref.current.style.width).toEqual("58px")
  })
  it("only allows the elements width to be less than or equal to the max width", () => {
    const maxWidth = 100
    const ref = { current: document.createElement("div") }
    const resize = resizeRight({ resizableRef: ref, minStep: 20, maxWidth })

    resize(createEvent.mouseMove(ref.current, { clientX: 101 }) as MouseEvent)

    expect(ref.current.style.width).toEqual(`${maxWidth}px`)
  })
  it("does nothing if the distance between the right side of the element and the mouses x position is less that the min step distance", () => {
    const ref = { current: document.createElement("div") }
    const resize = resizeRight({ resizableRef: ref, minStep: 20, maxWidth: 100 })
    const originalWidth = ref.current.style.width

    resize(createEvent.mouseMove(ref.current, { clientX: 18 }) as MouseEvent)

    expect(originalWidth).toEqual(ref.current.style.width)
  })
})
