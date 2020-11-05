import { useState } from 'react'
import { IconButton, MenuItem, Menu } from '@material-ui/core';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Link from "next/link"
import styles from './menu_min.module.css'

export default function MenuMin() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ position: 'absolute' }} className={styles.mini_menu_area}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <FormatAlignJustifyIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}