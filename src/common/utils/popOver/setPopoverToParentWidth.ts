import { size } from "@floating-ui/react-dom"

export const setPopoverToParentWidth = () =>
  size({
    apply({ rects, elements }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`,
      })
    },
  })
