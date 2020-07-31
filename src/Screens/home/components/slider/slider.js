import React from 'react';
import './slider.scss';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover';

import downIcon from '../../Resources/images/sort-down-solid.svg'
import searchIcon from '../../Resources/images/search-solid.svg'
import B1 from '../../Resources/images/Bg.png';
import B2 from '../../Resources/images/392-felix-7127-nam_3.png';
import B3 from '../../Resources/images/b3.png';
import Certificate from '../../Resources/images/certificate.svg';
import Globe from '../../Resources/images/globe.svg';
import Teachers from '../../Resources/images/teacher1.png';

const useStyles = makeStyles(theme => ({

    paper_d: {
        padding: '10px'
    },
    paper: {
        padding: '2px 10px'
    }
}));

export default function Slider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [categories, setCategories] = React.useState('Programming');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        setInterval(() => {
            setValue(value => value === 3 ? 1 : value + 1)
        }, 7000);
    }, [])

    const handleSliderBullets = (i) => {
        setValue(i)
    }

    const handleSelect = (text) => {
        setCategories(text)
        handleClose()
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    return (
        <React.Fragment>
            <div className='container-slider'>
                <div className="orbit" role="region" aria-label="Favorite Text Ever" data-orbit style={{ backgroundImage: `url(${value === 1 ? B1 : value === 2 ? B2 : B3})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', height: '50vw' }}>
                    {/* <img src={value === 1 ? B1 : value === 2 ? B2 : B3} style={{visibility: 'hidden'}} /> */}

                    <div className='slider-title-div2'>
                        <h2 className='slider-title'>{value === 1 ? "Learn what you want" : value === 2 ? "Course what you want" : "Learn what you want"}, <br /> where you want!</h2>
                        <span>
                            {/* <div className="slider-textbox"> */}
                            <input className="search-slider"
                                style={{
                                    backgroundImage: `url(${searchIcon})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: isDesktopOrLaptop ? 15 : 5,
                                    backgroundPosition: '7%'
                                }}
                                type="text"
                                placeholder="What do you want to learn today?" aria-describedby="exampleHelpTextNumber" />
                            <span className='line'>|</span>
                            <input className="search-categories-slider" type="text"
                                style={{
                                    backgroundImage: `url(${downIcon})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: isDesktopOrLaptop ? 10 : 5,
                                    backgroundPosition: '85%'
                                }}
                                onClick={handleClick} readOnly value={categories} />
                            {/* </div> */}
                            <span className='button-slider'>Search</span>
                            {open && <div class="arrow-up"></div>}
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                // anchorReference="anchorPosition"
                                // anchorPosition={{ top: 350, left: 350 }}
                                classes={{ paper: isDesktopOrLaptop ? classes.paper_d : classes.paper }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <div className={isDesktopOrLaptop ? 'selector-options-drop-down-search-d' : 'selector-options-drop-down-search'}>
                                    <div onClick={() => handleSelect('All')}>All</div>
                                    <div onClick={() => handleSelect('Programming')}>Programming</div>
                                    <div onClick={() => handleSelect('IA & Big Data')}>IA & Big Data</div>
                                    <div onClick={() => handleSelect('Art & Design')}>Art & Design</div>
                                    <div onClick={() => handleSelect('Digital Marketing')}>Digital Marketing</div>
                                </div>
                            </Popover>
                        </span>
                    </div>
                    <nav className="orbit-bullets">
                        <button className={value === 1 ? "is-active" : ".is-not-active"} data-slide="0" onClick={() => handleSliderBullets(1)}>
                            <span className="show-for-sr">First slide details.</span>
                            <span className="show-for-sr" data-slide-active-label>Cureent Slide</span>
                        </button>
                        <button className={value === 2 ? "is-active" : ".is-not-active"} data-slide="1" onClick={() => handleSliderBullets(2)}><span className="show-for-sr">Second slide details.</span></button>
                        <button className={value === 3 ? "is-active" : ".is-not-active"} data-slide="2" onClick={() => handleSliderBullets(3)}><span className="show-for-sr">Third slide details.</span></button>
                    </nav>
                </div>
                <div className={isDesktopOrLaptop ? 'container-2212-slide-d' : 'container-2212-slider'}>
                    <div className="grid-x">
                        <div className="cell small-12 medium-4 large-4 zIndexClass">
                            <img src={Certificate} alt="certificate" /><br /><br />
                            <span className='slider-icon-text'>
                                100% Certificate Obtaining
                            </span>
                        </div>
                        <div className="cell small-12 medium-4 large-4 zIndexClass">
                            <img src={Globe} alt="globe" /><br /><br />
                            <span className='slider-icon-text'>
                                Live every where in the world
                            </span>
                        </div>
                        <div className="cell small-12 medium-4 large-4 zIndexClass">
                            <img src={Teachers} alt="teacher" width="80px" /><br /><br />
                            <span className='slider-icon-text'>
                                Learn with the best teachers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}