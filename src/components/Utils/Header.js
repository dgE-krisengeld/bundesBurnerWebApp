import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useLocation} from "react-router-dom"

const pageTitles = {
    "": "Home",
    "scanQR": "Scan QR",
    "myQrCode": "Mein QR",
    "businesses": "Geschäfte",
    "help": "Hilfe",
    "pay": "Zahlen",
    "receive": "Empfangen"
}
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));
export const Header = (props) => {

    const location = useLocation()
    const path = location.pathname.slice(1);
    const classes = useStyles();
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            {pageTitles[path]}
                        </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
