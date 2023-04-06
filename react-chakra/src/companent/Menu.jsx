import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from "@chakra-ui/icons"

function MenuBar({veri}) {

    const den = ()=>{
        console.log("object")
    }
    
  return (
        <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
    </MenuButton>
    <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
        {veri.map((element) => {
                return<MenuItem onClick={den} >{element}</MenuItem>
            })
        }
    </MenuList>
    </Menu>
  )
}

export default MenuBar
