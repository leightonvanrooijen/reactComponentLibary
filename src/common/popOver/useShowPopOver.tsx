import { Dispatch, MutableRefObject, useEffect } from "react"

export type UseClosePopUpProps<RT extends Element> = {
  ref: MutableRefObject<RT | null>
  float: MutableRefObject<HTMLElement | null>
  setOpen: Dispatch<boolean>
}

export const useShowPopOver = <RT extends Element>({ ref, float, setOpen }: UseClosePopUpProps<RT>) => {
  useEffect(() => {
    const open = (event: FocusEvent) => {
      assertIsNode(event.target)
      if (shouldOpenPopOver<RT>(ref, float, event.target)) {
        setOpen(true)
      }
    }

    const close = (event: MouseEvent) => {
      assertIsNode(event.target)
      if (shouldClosePopOver<RT>(ref, float, event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("focus", open, true)
    document.addEventListener("mousedown", close)

    return () => {
      document.removeEventListener("mousedown", close)
      return document.removeEventListener("focusin", open)
    }
  }, [ref, float, setOpen])
}

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`)
  }
}

export function shouldClosePopOver<RT extends Element>(
  ref: MutableRefObject<RT | null>,
  float: MutableRefObject<HTMLElement | null>,
  target: Node,
) {
  return Boolean(!ref?.current?.contains(target) && !float?.current?.contains(target))
}

export function shouldOpenPopOver<RT extends Element>(
  ref: MutableRefObject<RT | null>,
  float: MutableRefObject<HTMLElement | null>,
  target: Node,
) {
  return Boolean(ref?.current?.contains(target) || float?.current?.contains(target))
}
