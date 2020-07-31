// // import React from 'react';
// // import './lazyCard.scss';

// // class Card extends React.Component {
// //     render() {
// //         return (
// //             <React.Fragment>
// //                 <div className="parent-lazy">
// //                     <div className="top-overlay-lazy">
// //                         <div style={{ display: 'flex' }}>
// //                             <span className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', display: 'block', margin: 10, height: 40, width: 40, borderRadius: 50 }}/>
// //                             <span className="top-overlay-content-lazy" style={{ marginTop: 15 }}>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 150 }}></div>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 70, marginTop: 5 }}></div>
// //                             </span>
// //                         </div>
// //                         <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 90, width: '100%' }}></div>
// //                         <div style={{ backgroundColor: 'white', height: 70, width: '100%', borderRadius: '0px 0px 10px 10px' }}></div>
// //                     </div>
// //                     <div className="bottom-overlay-lazy">
// //                         <div className='bottom-overlay-content-lazy'>
// //                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 10, height: 10, width: 180 }}></div>
// //                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 90 }}></div>
// //                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 120 }}></div>
// //                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 25, height: 10, width: 90 }}></div>
// //                             <div style={{ display: 'flex', marginTop: 15 }}>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
// //                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginLeft: 85, height: 25, width: 25 }} ></div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </React.Fragment>
// //         );
// //     }
// // }

// // export default Card;

// import React from 'react';
// import './lazyCard.scss';

// class Card extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="parent-lazy">
//                     <div className="top-overlay-lazy">
//                         <div style={{ display: 'flex' }}>
//                             <span className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', display: 'block', margin: 10, height: 40, width: 40, borderRadius: 50 }} />
//                             <span className="top-overlay-content-lazy" style={{ marginTop: 15 }}>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 150 }}></div>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 70, marginTop: 5 }}></div>
//                             </span>
//                         </div>
//                         <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 80, width: '100%' }}></div>
//                         <div style={{ marginTop: 15, height: 70, width: '100%' }}></div>
//                     </div>
//                     <div className="bottom-overlay">
//                         <div className='bottom-overlay-content-lazy'>
//                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 10, height: 10, width: 180 }}></div>
//                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 90 }}></div>
//                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 120 }}></div>
//                             <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 25, height: 10, width: 90 }}></div>
//                             <div style={{ display: 'flex', marginTop: 15 }}>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
//                                 <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginLeft: 85, height: 25, width: 25 }} ></div>
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
import './lazyCard.scss';

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="parent-lazy">
                    <div className="top-overlay-lazy">
                        <div style={{ display: 'flex' }}>
                            <span className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', display: 'block', margin: 10, height: 40, width: 40, borderRadius: 50 }} />
                            <span className="top-overlay-content-lazy" style={{ marginTop: 15 }}>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 150 }}></div>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', height: 10, width: 70, marginTop: 5 }}></div>
                            </span>
                        </div>
                        <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 80, width: '100%' }}></div>
                        <div style={{ marginTop: 15, height: 70, width: '100%' }}></div>
                    </div>
                    <div className="bottom-overlay5">
                        <div className='bottom-overlay-content-lazy'>
                            <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 10, height: 10, width: 180 }}></div>
                            <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 90 }}></div>
                            <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 15, height: 10, width: 120 }}></div>
                            <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginTop: 25, height: 10, width: 90 }}></div>
                            <div style={{ display: 'flex', marginTop: 15 }}>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginRight: 5, height: 25, width: 25 }}></div>
                                <div className={'lazy-wave'} style={{ backgroundColor: '#F0F0F0', marginLeft: 85, height: 25, width: 25 }} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Card;