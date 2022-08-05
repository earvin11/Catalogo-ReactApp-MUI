import {    Box, 
            Divider, 
            Drawer, 
            List, 
            ListItemButton, 
            ListItemIcon, 
            ListItemText, 
            Toolbar,
            Typography} from "@mui/material"
    
import { AddBox, Apps, ManageSearch } from "@mui/icons-material"


export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            color="primary"
        >

            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Acciones
                </Typography>
            </Toolbar>

            <Divider />
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Apps />
                    </ListItemIcon>
                    <ListItemText>
                        Lotes
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AddBox />
                    </ListItemIcon>
                    <ListItemText>
                        Nuevo Lote
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ManageSearch />
                    </ListItemIcon>
                    <ListItemText>
                        Buscar Lote
                    </ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
    </Box>
  )
}
