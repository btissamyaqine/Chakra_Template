import { Outlet } from "react-router-dom"
import Navbar from "../component/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"
export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)" bg="white">
      {/* sidebar */}
      

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan="5"
        p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
    </div>
  )
}