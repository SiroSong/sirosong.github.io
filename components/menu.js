import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Link from 'next/link'

import styles from './menu.module.css'

export default function Menu(props) {
  console.log(props, '[[[[[[')
  return (
    <div>
      <Accordion>
        <AccordionSummary>First</AccordionSummary>
        <AccordionDetails className={styles.menu_group_area}>
          <Link href="/about">
            <MenuItem>about</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem>about</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem>about</MenuItem>
          </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>111</AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>111</AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
            <MenuItem>qqq</MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}