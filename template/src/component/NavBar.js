import { List, ListItem, Image,  ListIcon } from "@chakra-ui/react"
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const navbar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',

  }
  return (
    <List sx={navbar} color="black" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
        <Image
          borderRadius='full'
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt='By Chakra'
        />
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="black" />
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="Services">
          <ListIcon as={EditIcon} color="black" />
          Our Services
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="Contacts">
          <ListIcon as={AtSignIcon} color="black" />
          Contacts
        </NavLink>
      </ListItem>
    </List>


  )
}