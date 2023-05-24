import { Typography } from "../../atoms/Text/Typography"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { IconButton } from "../../atoms/IconButton/IconButton"
import { FaTimes } from "react-icons/fa"
import { Icon } from "../../atoms/Icon/Icon"

type SnackBarProps = { variant: "Error"; message: string }

const StyledSnackBar = styled("div")<{ variant: "Error"; open: boolean }>`
  position: fixed;
  bottom: 8px;
  left: ${({ open }) => (open ? "8px" : "-800px")};
  transition: 1s ease-out;

  display: flex;
  align-items: center;

  min-width: 200px;
  max-width: 400px;

  padding: 16px 16px;

  box-shadow: ${({ theme }) => theme.lighting.menuShadow};
  border-radius: ${({ theme }) => theme.border.radius200};
  background-color: ${({ theme }) => theme.color.snackbarBackgroundError};

  button {
    color: ${({ theme }) => theme.color.snackbarTextError};
  }

  p {
    color: ${({ theme }) => theme.color.snackbarTextError};
  }
`

export const SnackBar = ({ variant, message }: SnackBarProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!message) return setOpen(false)
    setOpen(true)
  }, [message])

  return (
    <StyledSnackBar variant={variant} open={open}>
      <Typography variant={"bodySmall"}>{message}</Typography>
      <IconButton onClick={() => setOpen(false)}>
        <Icon icon={FaTimes} />
      </IconButton>
    </StyledSnackBar>
  )
}
