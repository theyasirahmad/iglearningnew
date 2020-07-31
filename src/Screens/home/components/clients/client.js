// import React from 'react';
// import './client.scss';

// //components
// import ClientCard from '../Cards/clientCard';
// import ClientCardTest from '../Cards/clientCardTestForSlider';



// export default function Client() {
//     const [value, SetValue] = React.useState(1);

//     React.useEffect(() => {
//         setInterval(() => {
//             SetValue(value => value === 3 ? 1 : value + 1)
//         }, 7000);
//     }, [])

//     const handleSliderBullets = (i) => {
//         SetValue(i)
//     }

//     return (
//         <React.Fragment>
//             <div className='container-slider-client'>
//                 <div className="orbit-client" role="region" aria-label="Favorite Text Ever" data-orbit>
//                     <div className={'container-client'} onClick={() => SetValue(value => value === 3 ? 1 : value + 1)}>
//                         <div className="head-client">
//                             <h3 style={{  fontWeight: 'bold' }}>
//                                 What Our Client Say
//                             </h3>
//                         </div>
//                         {
//                             value === 1 ?
//                                 <div className="grid-x">
//                                     <div className="cell-client small-12 medium-4 large-4">
//                                         <ClientCard />
//                                     </div>
//                                     <div className="cell-client small-12 medium-4 large-4">
//                                         <ClientCard />
//                                     </div>
//                                     <div className="cell-client small-12 medium-4 large-4">
//                                         <ClientCard />
//                                     </div>
//                                 </div>
//                                 :
//                                 value === 2 ?
//                                     <div className="grid-x">
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCardTest />
//                                         </div>
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCardTest />
//                                         </div>
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCardTest />
//                                         </div>
//                                     </div>
//                                     :
//                                     <div className="grid-x" >
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCard />
//                                         </div>
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCard />
//                                         </div>
//                                         <div className="cell-client small-12 medium-4 large-4">
//                                             <ClientCard />
//                                         </div>
//                                     </div>
//                         }
//                     </div>
//                     <nav className="orbit-bullets-client">
//                         <button className={value === 1 ? "is-active-client" : null} data-slide="0" onClick={() => handleSliderBullets(1)}>
//                             <span className="show-for-sr">First slide details.</span>
//                             <span className="show-for-sr" data-slide-active-label>Cureent Slide</span>
//                         </button>
//                         <button className={value === 2 ? "is-active-client" : null} data-slide="1" onClick={() => handleSliderBullets(2)}><span className="show-for-sr">Second slide details.</span></button>
//                         <button className={value === 3 ? "is-active-client" : null} data-slide="2" onClick={() => handleSliderBullets(3)}><span className="show-for-sr">Third slide details.</span></button>
//                     </nav>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }



import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
//css
import './client.scss';

function CardData() {
    const rtn = [{
        title: "Download the new browser recommended by Microsoft",
        desc: "You get it all with the new Microsoft Edge—performance, compatibility, and speed to make browsing the web even more effortless.",
        url: "https://secure.skypeassets.com/content/dam/scom/home-new/features-cards/1920x1080_landscape_edge.jpg",
        link: 'Download now >'
    }, {
        title: "Live subtitles",
        desc: "Read the words that are spoken during an audio or video call.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/livesubtitles.jpg",
        link: 'How to set subtitles >'
    }, {
        title: "Use Skype to call phones",
        desc: "Call landlines and mobiles from anywhere in the world at great low rates using Skype.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-rates.jpg",
        link: 'See our rates >'
    }, {
        title: "Skype call recording​",
        desc: "Capture those special moments in a Skype call with your loved ones or record important meeting with colleagues.​",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-call-recording.jpg",
        link: 'How to record calls >'
    }, {
        title: "Skype Number",
        desc: "Get a local phone number in another country or region and answer calls on Skype.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg",
        link: 'Get your number >'
    }, {
        title: "Mobile screen sharing",
        desc: "Share anything from presentations to holiday photos during a call.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/mobile-screen-sharing.jpg",
        link: 'Discover screen sharing >'
    }, {
        title: "Video calling for 50 people",
        desc: "Experience HD one to one or group video calling—now with call reactions.​",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/hdcall.jpg",
        link: 'Explore video calls >'
    }, {
        title: "Skype Number",
        desc: "Get a local phone number in another country or region and answer calls on Skype.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg",
        link: 'Get your number >'
    }, {
        title: "Mobile screen sharing",
        desc: "Share anything from presentations to holiday photos during a call.",
        url: "https://secure.skypeassets.com/content/dam/scom/home/features/mobile-screen-sharing.jpg",
        link: 'Discover screen sharing >'
    }]
    return rtn;
}

const styles = theme => ({

    link: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: '23.9999px',
        marginBottom: 0,
        color: '#0e78c8',
        display: 'inline-block',
        position: ' absolute',
        width: '50%',
        bottom: '50px',
        '&:hover': {
            borderBottom: '1px solid black',
            color: 'black'
        }
    }
});

class Cards extends React.Component {
    render() {
        const cardData = CardData();
        return (
            <section>
                {
                    cardData.map((card, i) => {
                        return (
                            <div className="card" id="card" style={{ ...this.props.cardStyle, filter: i === 3 && this.props.currentCard === 0 ? 'opacity(0.2)' : i === 4 && this.props.currentCard === 1 ? 'opacity(0.2)' : i === 5 && this.props.currentCard === 2 ? 'opacity(0.2)' : i === 6 && this.props.currentCard === 3 ? 'opacity(0.2)' : null, width: 400, maxWidth: 400, height: 480, maxHeight: 'auto', margin: i % 3 === 0 ? '0px 19px 0px 30px' : '0px 30px', padding: 0, borderRadius: '0 20px 20px 20px', border: '1px solid #e5e4e8' }} key={i}>
                                {/* <CardMedia
                                    style={{ height: 180, maxWidth: 400 }}
                                    image={card.url}
                                    title={card.title}
                                />
                                <div style={{
                                    padding: '40px 40px 50px',
                                    display: 'inline-block',
                                    height: 'calc(100% - 270px)'
                                }}>
                                    <p className="desc" style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        lineHeight: '23.9999px',
                                        marginBottom: '1.66667em'
                                    }}>{card.title}</p>
                                    <p className="desc" style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: 18,
                                        fontWeight: 400,
                                        lineHeight: '23.9999px',
                                        marginBottom: '1.66667em'
                                    }}>{card.desc}</p>
                                    <p className={this.props.classesProp.link}>
                                        <span>
                                            {card.link}
                                        </span>
                                    </p>
                                    <a href="#">
                                    </a>
                                </div> */}
                                <div className="client-card">
                                    <div>
                                        <img src={card.url} style={{ borderRadius: '50%', height: 151, width: 151 }} />
                                    </div>
                                    <p className="desc" style={{
                                        // fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        // fontSize: 18,
                                        // fontWeight: 700,
                                        // lineHeight: '23.9999px',
                                        // marginBottom: '1.66667em'
                                        marginTop: 50
                                    }}>
                                        <div className="client-content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dol magna aliqua.
                                        </div>
                                    </p>
                                    <div className="client-ratings">
                                        <span style={{ fontSize: 16, fontWeight: 'normal', color: '#999B9F' }}>
                                            <Rating name="read-only" style={{ marginTop: 0, fontSize: 15 }} value={5} readOnly />
                                        (4.5)
                                    </span>
                                    </div>
                                    <div className="client-name">
                                        Jessica Strike
                                    </div>
                                    <div className="client-type">
                                        Student
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section >
        )
    }
}

class Display extends React.Component {
    state = {
        currentCard: 0,
        position: 0,
        cardStyle: {
            transform: 'translateX(0px)'
        },
        width: 0,
        value: 1
    };

    // const [value, SetValue] = React.useState(1);

    //     React.useEffect(() => {
    // setInterval(() => {
    //     this.setState(value => value === 3 ? 1 : value + 1)
    // }, 7000);
    //     }, [])


    handleSliderBullets = (i, text) => {
        if (this.state.value < i && !text) {
            const j = i - this.state.value
            this.handleClick('next', j)
        }
        else if (this.state.value > i && !text) {
            const j = this.state.value - i
            this.handleClick('prev', j)
        }
        this.setState({
            value: i
        })
        if (text) {
            if (i <= 3) {
                this.handleClick('next', 1)
            }
            else {
                this.setState({ value: 1 }, () => {
                    console.log(this.state.value, 'value')
                    this.handleClick('prev', 2)
                })
            }
        }

    }

    // setInterval(() => {
    //     console.log('Interval triggered');
    // }, 1000);
    componentDidMount() {
        setInterval(() => {
            this.setState({ value: this.state.value + 1 }, () => this.handleSliderBullets(this.state.value, 'next'))
        }, 7000);
        // let boxWidth = document.getElementById("card");
        let boxWidth = 1314;
        if (boxWidth) {
            // boxWidth = boxWidth.clientWidth;
            boxWidth = 1314;
            this.setState({ width: boxWidth });
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.width === this.state.width) {
            // let boxWidth = document.getElementById("card");
            let boxWidth = 1314;
            if (boxWidth) {
                // boxWidth = boxWidth.clientWidth;
                boxWidth = 1314;
                this.setState({ width: boxWidth });
            }
        }
    }

    // func: click the slider buttons
    handleClick(type, j) {
        // get the card's margin-right
        // let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
        let margin = 20;
        // margin = JSON.parse(margin.replace(/px/i, ''));

        const cardWidth = this.state.width; // the card's width
        const cardMargin = margin; // the card's margin
        const cardNumber = CardData().length; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards

        // slide cards
        if (type === 'next' && currentCard < cardNumber - 1) {
            currentCard = currentCard + 3 * j;
            position -= ((cardWidth * j));
        } else if (type === 'prev' && currentCard > 0) {
            currentCard = currentCard - 3 * j;
            position += ((cardWidth * j));
        }
        this.setCard(currentCard, position);
    }

    setCard(currentCard, position) {
        this.setState({
            currentCard: currentCard,
            position: position,
            cardStyle: {
                transform: `translateX(${position}px)`
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="cards-slider" style={{ backgroundColor: 'white', padding: 10, border: '0px solid black', boxShadow: 'none' }}>
                {/* <div className={'container-client'} onClick={() => SetValue(value => value === 3 ? 1 : value + 1)}> */}
                <div className="head-client">
                    <h3 style={{ fontWeight: 'bold', margin: 70 }}>
                        What Our Client Say
                    </h3>
                </div>
                {/* </div> */}
                <div className="slider-btns">
                    {/* {console.log(this.state.currentCard, CardData().length)} */}
                    {/* {this.state.currentCard === 0 ? null : <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>} */}
                    {/* {this.state.currentCard === CardData().length - 3 ? null : <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>} */}
                </div>
                <div onClick={() => this.handleSliderBullets(this.state.value == 3 ? 1 : this.state.value + 1, undefined)}>

                    <Cards cardStyle={this.state.cardStyle} classesProp={classes} currentCard={this.state.currentCard} />
                </div>
                <nav className="orbit-bullets-client">
                    {console.log(this.state.value)}
                    <button className={this.state.value === 1 ? "is-active-client" : null} data-slide="0" onClick={() => this.handleSliderBullets(1, undefined)}>
                        <span className="show-for-sr">First slide details.</span>
                        <span className="show-for-sr" data-slide-active-label>Cureent Slide</span>
                    </button>
                    <button className={this.state.value === 2 ? "is-active-client" : null} data-slide="1" onClick={() => this.handleSliderBullets(2, undefined)}><span className="show-for-sr">Second slide details.</span></button>
                    <button className={this.state.value === 3 ? "is-active-client" : null} data-slide="2" onClick={() => this.handleSliderBullets(3, undefined)}><span className="show-for-sr">Third slide details.</span></button>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Display);