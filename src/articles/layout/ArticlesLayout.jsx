import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components"

const drawerWidth = 280;

export const ArticlesLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* <NavBar  drawerwidth />  */}
        <Navbar drawerWidth={ drawerWidth } />

        {/* <Sidebar drawerwidth /> */}
        <Sidebar drawerWidth={ drawerWidth } />

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }

        </Box>

    </Box>
  )
}
