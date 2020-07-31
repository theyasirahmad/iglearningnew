// import React from 'react';
// import './courses.scss';

// //components
// import Card from '../Cards/coursesCard';
// import LazyCard from '../Cards/lazyCard';

// class Courses extends React.Component {
//     state = {
//         buttonText: 'Finanace'
//     }

//     changeColor = (text) => {
//         this.setState({
//             buttonText: text
//         })
//     }

//     render() {
//         const { buttonText } = this.state
//         return (
//             <React.Fragment>
//                 <div className={'container-courses-recent'}>
//                     <div className="head-courses">
//                         <span>
//                             <h3 style={{ display: 'inline-block', fontWeight: 'bold' }}>
//                                 Recent Added Courses
//                             </h3>
//                         </span>
//                         <span className='button-courses-head' style={{ float: 'right' }}>
//                             <span style={buttonText==='Business & Company'?{backgroundColor:'#D76E2D', color: 'white'}: null} onClick={() => this.changeColor('Business & Company')} className='is-active-courses-head'>
//                                 Business & Company
//                             </span>
//                             <span style={buttonText==='Finanace'?{backgroundColor:'#D76E2D', color: 'white'}: null} onClick={() => this.changeColor('Finanace')} className='is-active-courses-head'>
//                                 Finanace
//                             </span>
//                             <span style={buttonText==='IA & Big Data'?{backgroundColor:'#D76E2D', color: 'white'}: null} onClick={() => this.changeColor('IA & Big Data')} className='is-active-courses-head'>
//                                 IA & Big Data
//                             </span>
//                             <span style={buttonText==='Digital Marketing'?{backgroundColor:'#D76E2D', color: 'white'}: null} onClick={() => this.changeColor('Digital Marketing')} className='is-active-courses-head'>
//                                 Digital Marketing
//                             </span>
//                         </span>
//                     </div>
//                     <div className="grid-x">
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <Card />
//                         </div>
//                         <div className="cell-courses medium-3 large-3">
//                             <LazyCard />
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default Courses;

import React, { useState } from 'react';
import './courses.scss';

//components
import Card from '../Cards/coursesCard';
import { useMediaQuery } from 'react-responsive';

import LazyCard from '../Cards/lazyCard';

export default function Courses() {
    const [buttonText, setButtonText] = useState('Finanace');

    const changeColor = (text) => {
        setButtonText(text)
    }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    return (
        <React.Fragment>
            <div className={'container-courses-recent'}>
                <div className="head-courses">
                    <span>
                        <h3 style={{ display: 'inline-block', fontWeight: 'bold' }}>
                            Recent Added Courses
                        </h3>
                    </span>
                    {!isDesktopOrLaptop && <br />}
                    <span className='button-courses-head' style={isDesktopOrLaptop ? { float: 'right', marginTop: 17 } : { paddingLeft: '10%' }}>
                        <span style={buttonText === 'Business & Company' ? { backgroundColor: '#D76E2D', color: 'white' } : null} onClick={() => changeColor('Business & Company')} className={isDesktopOrLaptop ? 'is-active-courses-head-d' : 'is-active-courses-head'}>
                            Business & Company
                            </span>
                        <span style={buttonText === 'Finanace' ? { backgroundColor: '#D76E2D', color: 'white' } : null} onClick={() => changeColor('Finanace')} className={isDesktopOrLaptop ? 'is-active-courses-head-d' : 'is-active-courses-head'}>
                            Finanace
                        </span>
                        {!isDesktopOrLaptop && <br />}
                        <span style={isDesktopOrLaptop ? null : { paddingLeft: '10%' }}>

                            <span style={buttonText === 'IA & Big Data' ? { backgroundColor: '#D76E2D', color: 'white' } : null} onClick={() => changeColor('IA & Big Data')} className={isDesktopOrLaptop ? 'is-active-courses-head-d' : 'is-active-courses-head'}>
                                IA & Big Data
                            </span>
                            <span style={buttonText === 'Digital Marketing' ? { backgroundColor: '#D76E2D', color: 'white' } : null} onClick={() => changeColor('Digital Marketing')} className={isDesktopOrLaptop ? 'is-active-courses-head-d' : 'is-active-courses-head'}>
                                Digital Marketing
                        </span>
                        </span>
                    </span>
                </div>
                <div>
                    <div className="grid-x ">
                        <div style={{ display: 'flex', alignItems: 'center' }} className="small-2 medium-2 large-1">
                            <div style={{ display: 'inline-block', padding: 15, color: '#D76E2D', borderRadius: '50%', boxShadow: '0px 10px 20px #6E6E6E1A', fontSize: 20, fontWeight: 900 }}>
                                {'<'}
                            </div>
                        </div>
                        <div className="small-8 medium-8 large-10  ">
                            <div className="grid-x">
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-3  ">
                                    <LazyCard />
                                </div>
                            </div>
                        </div>
                        <div className="small-2 medium-2 large-1 " style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'inline-block', padding: 15, color: '#D76E2D', borderRadius: '50%', boxShadow: '0px 10px 20px #6E6E6E1A', fontSize: 20, fontWeight: 900 }}>
                                {'>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}