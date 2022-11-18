import { useShowPopOver } from "./useShowPopOver"
import { renderHook } from "@testing-library/react"

describe("useShowPopover", () => {
  it("closes the Popover if a mousedown event is fired outside of the anchor and popover elements", () => {
    const setOpen = jest.fn()
    const ref = { current: document.createElement("div") }
    const float = { current: document.createElement("div") }

    renderHook(() => useShowPopOver({ ref, float, setOpen }))

    document.dispatchEvent(new Event("mousedown"))

    expect(setOpen).toHaveBeenCalledWith(false)
  })
  it("does NOT close the Popover if a mousedown event is fired inside of the anchor element", () => {
    const setOpen = jest.fn()

    const refElement = document.createElement("div")
    const ref = { current: refElement }
    const float = { current: document.createElement("div") }

    renderHook(() => useShowPopOver({ ref, float, setOpen }))

    const event = new Event("mousedown")
    Object.defineProperty(event, "target", { writable: false, value: refElement })
    document.dispatchEvent(event)

    expect(setOpen).toHaveBeenCalledTimes(0)
  })

  it("does NOT close the Popover if a mousedown event is fired inside of the Pop Over element", () => {
    const setOpen = jest.fn()

    const floatElement = document.createElement("div")
    const ref = { current: document.createElement("div") }
    const float = { current: floatElement }

    renderHook(() => useShowPopOver({ ref, float, setOpen }))

    const event = new Event("mousedown")
    Object.defineProperty(event, "target", { writable: false, value: floatElement })
    document.dispatchEvent(event)

    expect(setOpen).toHaveBeenCalledTimes(0)
  })

  // TODO fix
  it("opens the popover if the ref or float is focused", () => {
    const setOpen = jest.fn()

    const refElement = document.createElement("div")
    const ref = { current: refElement }
    const float = { current: document.createElement("div") }

    renderHook(() => useShowPopOver({ ref, float, setOpen }))

    const event = new Event("focus", { bubbles: true })
    Object.defineProperty(event, "target", { writable: false, value: refElement })
    document.dispatchEvent(event)

    expect(setOpen).toHaveBeenCalledWith(true)
  })
})
