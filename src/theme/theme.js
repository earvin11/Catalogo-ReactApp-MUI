import { createTheme } from "@mui/material";
import { blue, cyan, green, lightGreen, purple, red, yellow } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: blue['A400']
        },
        secondary:{
            main: purple['A400']
        }, 
        error: {
            main: red['A400']
        },
        warning: {
            main: yellow['A400']
        },
        info:{
            main: cyan['A400']
        },
        success: {
            main: green['A400']
        },
    }
})