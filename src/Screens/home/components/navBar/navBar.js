import React from 'react';
import './navBar.scss';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

import logo from '../../Resources/images/Logo-1.svg';

const useStyles = makeStyles(theme => ({
    // root: {
    //     marginTop: -6,
    //     flexGrow: 1,
    // },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
    },
    // title: {
    //     fontSize: 42,
    //     fontWeight: 700,
    //     color: 'rgb(27,75,121)',
    //     letterSpacing: 2
    // },
    // secondTitle: {
    //     flexGrow: 1,
    //     fontSize: 42,
    //     fontWeight: 700,
    //     color: 'rgb(5,170,228)',
    //     letterSpacing: 2
    // },
    // appbar: {
    //     backgroundColor: 'rgb(53, 59, 67)',
    //     boxShadow: 'none'
    // },
    desktopButtons: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex'
        },
    },
    mobileMenu: {
        display: 'none',
        [theme.breakpoints.down("md")]: {
            display: 'flex'
        },
    },
    popper: {
        backgroundColor: '#d76e2d',
        width: '100vw',
        zIndex: 9999999999999
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <React.Fragment>
            <CssBaseline />
            <div>

                <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
                    <div className="title-bar-title">Country Selector</div>
                </div>

                {/* <div className="top-bar" id="example-menu">
                    <div className="top-bar-left">
                    <img src={logo} alt='logo' width='140px' />
                    </div>
                    <div className="top-bar-right">
                    <text>Home <span className='link-spacing'>|</span></text>
                    <text>Pricing <span className='link-spacing'>|</span></text>
                    <text>igLearn Pro <span className='link-spacing'>|</span></text>
                    <text>About Us<span className='link-spacing'>|</span></text>
                    <span className='button-nav'><i className="fas fa fa-graduation-cap"></i> I want to Teach</span>
                    <span className='button-nav'><i className="fas fa fa-book-reader"></i> I want to Learn</span>
                    </div>
                </div> */}
                <div className='grid-x' style={{ backgroundColor: '#D76E2D', padding: '15px 0px 10px 0px' }}>
                    {/* <div className='small-12 medium-4 large-4 categoryBtns'>
                    <img src={logo} alt='logo' width='100px' />
                </div> */}
                    <div className="top-bar-left" style={{ flexGrow: 1 }}>
                        <img src={logo} alt='logo' width='140px' />
                    </div>
                    <div className="top-bar-right">
                        {/* <div className='small-12 medium-12 large-8 categoryBtns marTop' > */}
                        {/* <p className="para">
                        Home
                        </p>
                        <p className="para">
                        Pricing
                        </p>
                        <p className="para">
                        igLearn Pro
                        </p>
                        <p className="para">
                        About Us
                        </p>
                        <p style={{ display: 'inline-block' }}>
                        <p className="para para2">
                        <i className="fas fa fa-graduation-cap"></i> I want to Teach
                        </p>
                        <p className="para para2">
                        <i className="fas fa fa-book-reader"></i> I want to Learn
                        </p>
                    </p> */}
                        <div className={classes.desktopButtons}>
                            <text className={classes.menuButton}>Home <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>Pricing <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>igLearn Pro <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>About Us<span className='link-spacing'>|</span></text>
                            <div className={classes.menuButton}>

                                <span className='button-nav'><i className="fas fa fa-graduation-cap"></i> I want to Teach</span>
                                <span className='button-nav'><i className="fas fa fa-book-reader"></i> I want to Learn</span>
                            </div>
                            {/* <p className={classes.menuButton} color="inherit">Home</p>
                            <p className={classes.menuButton} color="inherit">Pricing</p>
                            <p className={classes.menuButton} color="inherit">igLearn Pro</p>
                            <p className={classes.menuButton} color="inherit">About Us</p>
                            <p style={{ display: 'inline-block' }}>
                                <p className="para para2">
                                    <i className="fas fa fa-graduation-cap"></i> I want to Teach
                            </p>
                                <p className="para para2">
                                    <i className="fas fa fa-book-reader"></i> I want to Learn
                            </p>
                            </p> */}
                        </div>
                        <div className={classes.mobileMenu}>
                            <IconButton className={classes.menuButton} aria-describedby={id} onClick={handleClick}>
                                {/* <MenuIcon /> */}
                                <i class="fas fa-bars"></i>
                            </IconButton>
                            <Popper className={classes.popper} id={id} open={open} anchorEl={anchorEl}>
                                <Container maxWidth='sm'>
                                    <List onClick={() => setAnchorEl(null)} component="nav" aria-label="main mailbox folders">
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary="Pricing" />
                                        </ListItem>
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary="igLearn Pro" />
                                        </ListItem>
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary="About Us" />
                                        </ListItem>
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary={
                                                <span><i className="fas fa fa-graduation-cap"></i> I want to Teach</span>
                                            } />
                                        </ListItem>
                                        <ListItem className={classes.menuButton} button>
                                            <ListItemText primary={
                                                <span><i className="fas fa fa-book-reader"></i> I want to Learn</span>
                                            } />
                                        </ListItem>
                                    </List>
                                </Container>
                            </Popper>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}