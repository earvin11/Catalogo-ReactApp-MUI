import { AppBar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Menu, Logout } from '@mui/icons-material';



export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <div>
        <AppBar 
        color="primary" 
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Menu />   
                    
                </IconButton>

                <Typography 
                    variant="h6"
                    sx={{  flexGrow: 1 }}
                >
                    Earvin Gómez
                </Typography>

                <Tooltip
                    title="Cerrar sesión"
                >
                    <IconButton
                        variant="contained"
                        color="inherit"
                        size="large"
                    >
                        <Logout />
                    </IconButton>
                </Tooltip>


            </Toolbar>
        </AppBar>
    </div>
  )
}
