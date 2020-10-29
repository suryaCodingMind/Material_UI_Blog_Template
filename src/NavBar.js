import React from 'react';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    root: {

    },
    blog: {
        flex: 1,
    },
    belowNav:{
        justifyContent: "space-between",
    },
    links: {
        fontSize: 18,
        color: "black",

    },
}));
function NavBar() {

    const classes = useStyles();
    return (
        <div >
            <Toolbar className={classes.root}>
                    <Button color="inherit">Subscribe</Button>
                    <Typography variant="h6" align="center" className={classes.blog}>
                        Blog
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            <Divider/>


            <Toolbar variant="dense" className={classes.belowNav}>

                <Link className={classes.links} >
                    Technology
                </Link>
                <Link className={classes.links} >
                    Design
                </Link>
                <Link className={classes.links} >
                    Culture
                </Link>
                <Link  className={classes.links}>
                    Business
                </Link>
                <Link className={classes.links}>
                    Politics
                </Link>
                <Link  className={classes.links}>
                    Opinion
                </Link>
                <Link className={classes.links}>
                    Science
                </Link>
                <Link  className={classes.links}>
                    Health
                </Link>
                <Link className={classes.links} >
                    Style
                </Link>

            </Toolbar>
        </div>
    );
}

export default NavBar;
