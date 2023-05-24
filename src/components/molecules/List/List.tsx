import styled from "styled-components"
import { ReactNode } from "react"
import { ListItem } from "../../atoms/ListItem/ListItem"
import { Skeleton } from "../../atoms/Skeleton/Skeleton"

export type MenuProps = {
  width?: string
  children: ReactNode
  className?: string
  loading?: Boolean
}

export const StyledList = styled("div")<Partial<MenuProps>>`
  height: 100%;
  width: ${({ width }) => width ?? "100%"};
  padding: 6px 0;
  border-radius: ${({ theme }) => theme.border.radius100};

  background-color: ${({ theme }) => theme.color.menuFill};
  overflow: auto;
`

const SkeletonList = () => {
  return (
    <>
      {Array(15)
        .fill("")
        .map((x, i) => (
          <ListItem key={i} secondaryText={<Skeleton height={"8px"} width={"70%"} />}>
            <Skeleton />
          </ListItem>
        ))}
    </>
  )
}

// TODO add loading state
export const List = ({ children, width, className, loading = false }: MenuProps) => {
  return (
    <StyledList role={"list"} width={width} className={className}>
      {loading ? <SkeletonList /> : children}
    </StyledList>
  )
}
