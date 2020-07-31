import React from 'react';

// components
import NavBar from './components/navBar/navBar';
import Slider from './components/slider/slider';
import RecentCourses from './components/recentCourses/courses';
import MostAndCategories from './components/mostAndCategoires/mostAndCategories';
import Client from './components/clients/client';
import Footer from './components/footer/footer';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Slider />
                <RecentCourses />
                <div style={{ marginTop: 100 }}>
                    <MostAndCategories />
                </div>
                <div>
                    <Client />
                </div>
                <Footer />  
            </React.Fragment>
        );
    }
}

export default Home;

{/* <div className='grid-x' style={{ backgroundColor: '#D76E2D', padding: '15px 0px 10px 0px' }}> */ }
{/* <div className='small-12 medium-4 large-4 categoryBtns'>
                    <img src={logo} alt='logo' width='100px' />
                </div> */}
{/* <div className="top-bar-left" style={{ flexGrow: 1 }}>
                        <img src={logo} alt='logo' width='140px' />
                    </div>
                    <div className="top-bar-right"> */}
{/* <div className='small-12 medium-12 large-8 categoryBtns marTop' > */ }
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
{/* <div className={classes.desktopButtons}>
                            <text className={classes.menuButton}>Home <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>Pricing <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>igLearn Pro <span className='link-spacing'>|</span></text>
                            <text className={classes.menuButton}>About Us<span className='link-spacing'>|</span></text>
                            <div className={classes.menuButton}>

                                <span className='button-nav'><i className="fas fa fa-graduation-cap"></i> I want to Teach</span>
                                <span className='button-nav'><i className="fas fa fa-book-reader"></i> I want to Learn</span>
                            </div> */}
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
{/* </div>
                        <div className={classes.mobileMenu}>
                            <IconButton className={classes.menuButton} aria-describedby={id} onClick={handleClick}> */}
{/* <MenuIcon /> */ }
{/* <i class="fas fa-bars"></i>
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
                </div> */}
