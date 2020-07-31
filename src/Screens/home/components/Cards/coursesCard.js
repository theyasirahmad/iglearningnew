// import React from 'react';
// import './coursesCard.scss';

// import Rating from '@material-ui/lab/Rating';

// import Course1 from '../../Resources/images/course1.png';
// import NameIcon from '../../Resources/images/NoPath - Copy.png';
// import i1 from '../../Resources/images/icon_level.png';
// import i2 from '../../Resources/images/icon_share.png';
// import i3 from '../../Resources/images/icon_badge.png';

// class Card extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="parent">
//                     <div className="top-overlay" style={{ backgroundImage: 'linear-gradient(#0a0a0a, transparent)' }}>
//                         <img src={NameIcon} width="70px" />
//                         <div className="top-overlay-content">
//                             ABC Learning Center
//                             <div className='time-course'>
//                                 45 min
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card-image">
//                         <img src={Course1} />
//                     </div>
//                     <div className="bottom-overlay">
//                         <div className='bottom-overlay-content'>
//                             <div>
//                                 Financial Analyst Course Learn Online
//                             </div>
//                             <div style={{ display: 'flow-root' }}>
//                                 <div style={{ float: 'left', marginTop: 3, fontSize: 14, fontWeight: 'normal', color: '#999B9F' }}>
//                                     77 Participants
//                                 </div>
//                                 <div style={{ float: 'right', fontSize: 20, fontWeight: '14px', color: '#D76E2D' }}>
//                                     $4.99
//                                 </div>
//                             </div>
//                             <div>
//                                 <span style={{ marginLeft: 5, fontSize: 16, fontWeight: 'normal', color: '#999B9F' }}>
//                                     <Rating name="read-only" style={{ marginTop: 0, fontSize: 15 }} value={5} readOnly />
//                                     (4.5)
//                                 </span>
//                             </div>
//                             <div style={{ display: 'flex', marginTop: 5 }}>
//                                 <img className="icons-course" src={i1} />
//                                 <img className="icons-course" src={i2} />
//                                 <img className="icons-course" src={i3} />
//                                 <div className="left-buttons-course">
//                                     <span style={{ marginRight: 5, padding: 4, borderRadius: 3, border: '1px solid white', color: 'red', fontSize: 14, backgroundColor: '#F0F0F0' }}>
//                                         <i class="fas fa fa-heart"></i>
//                                     </span>
//                                     <div className="button-course">Enroll Now</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default Card;

import React from 'react';
import './coursesCard.scss';

import Rating from '@material-ui/lab/Rating';

import Course1 from '../../Resources/images/course1.png';
import NameIcon from '../../Resources/images/NoPath - Copy.png';
import backdrop from '../../Resources/images/photo-1543109740-4bdb38fda756-9.svg'
import i1 from '../../Resources/images/icon_level.png';
import i2 from '../../Resources/images/icon_share.png';
import i3 from '../../Resources/images/icon_badge.png';

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div >
                    {/* <div className="top-overlay" style={{ backgroundImage: `url(${backdrop})`, backgroundRepeat: 'no-repeat', opacity: 0.8, backgroundSize: '100%' }}>
                        <img src={NameIcon} width="70px" />
                        <div className="top-overlay-content">
                            ABC Learning Center
                            <div className='time-course'>
                                45 min
                            </div>
                        </div>
                    </div> */}
                    <div className="card-image2">
                        <img src={Course1} style={{ width: '100%' }} />
                    </div>
                    <div className="bottom-overlay3">
                        <div className='bottom-overlay-content'>
                            <div>
                                Financial Analyst Course Learn Online
                            </div>
                            <div style={{ display: 'flow-root' }}>
                                <div style={{ float: 'left', marginTop: 3, fontSize: 14, fontWeight: 'normal', color: '#999B9F' }}>
                                    77 Participants
                                </div>
                                <div style={{ float: 'right', fontSize: 20, fontWeight: '14px', color: '#D76E2D' }}>
                                    $4.99
                                </div>
                            </div>
                            <div>
                                <span style={{ marginLeft: 5, fontSize: 16, fontWeight: 'normal', color: '#999B9F' }}>
                                    <Rating name="read-only" style={{ marginTop: 0, fontSize: 15 }} value={5} readOnly />
                                    (4.5)
                                </span>
                            </div>
                            <div style={{ display: 'flex', marginTop: 5 }}>
                                <img className="icons-course" src={i1} />
                                <img className="icons-course" src={i2} />
                                <img className="icons-course" src={i3} />
                                <div style={{ marginRight: 5, paddingTop: 3, textAlign: 'center', backgroundColor: '#F9F9FC', color: 'red', fontSize: 14, height: '25px', width: '25px' }}>

                                    <i class="fas fa fa-heart" ></i>
                                </div>
                                <div className="button-course">Enroll Now</div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Card;