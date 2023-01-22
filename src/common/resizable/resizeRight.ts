import { MutableRefObject } from "react"

export type ResizeRightProps = {
  resizableRef: MutableRefObject<HTMLElement | null>
  minStep: number
  maxWidth: number
}

export const resizeRight =
  ({ resizableRef, minStep, maxWidth }: ResizeRightProps) =>
  (event: MouseEvent) => {
    event.preventDefault()
    if (!resizableRef.current) return

    const { left } = resizableRef.current.getBoundingClientRect()

    if (event.clientX - left < minStep) return
    if (event.clientX - left + 8 > maxWidth) {
      resizableRef.current.style.width = `${maxWidth}px`
      return
    }

    resizableRef.current.style.width = `${event.clientX - left + 8}px`
  }
