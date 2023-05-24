import React from "react"
import { MenuItem, MenuItemProps } from "../MenuItem/MenuItem"

// TODO needs to be role list item
export const ListItem = ({
  id,
  onClick,
  disabled = false,
  variant = "Primary",
  size = "Medium",
  leftIcon,
  rightIcon,
  children,
  secondaryText,
}: MenuItemProps) => {
  return (
    <MenuItem
      id={id}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
      disabled={disabled}
      size={size}
      secondaryText={secondaryText}
    >
      {children}
    </MenuItem>
  )
}
