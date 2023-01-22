import styled from "styled-components"
import { Typography } from "../../atoms/Text/Typography"
import { FaGripLinesVertical } from "react-icons/all"
import { Icon } from "../../atoms/Icon/Icon"
import { MutableRefObject, useRef } from "react"
import { Simulate } from "react-dom/test-utils"
import mouseDown = Simulate.mouseDown
import { useResizable } from "../../../common/resizable/useResizable"

export const StyledTableHeader = styled("div")`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;

  border: 1px solid black;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledHeader = styled("div")`
  display: flex;
  align-items: center;
  //resize: horizontal;
  //overflow: auto;

  //width: 100px;
`

const StyledHeaderIcon = styled(Icon)`
  margin-left: auto;
`

export type DraggableMenuProps = {
  resizableRef: MutableRefObject<HTMLElement | null>
  maxWidth?: number
}

export const DraggableMenu = ({ resizableRef, maxWidth = 200 }: DraggableMenuProps) => {
  useResizable({ resizableRef, maxWidth })

  return <StyledHeaderIcon icon={FaGripLinesVertical} />
}

export const TableHeader = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <StyledTableHeader>
      <StyledHeader ref={ref}>
        <Typography>Product</Typography>
        <DraggableMenu resizableRef={ref} />
      </StyledHeader>
    </StyledTableHeader>
  )
}
