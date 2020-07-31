// import React from 'react';
// import './mostVisitied.scss';

// //components
// import Card from '../Cards/coursesCard';

// class Courses extends React.Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <div className={'container-courses-most'}>
//                     <div className="head-most-courses">
//                         <span style={{display:'inline-block'}}>
//                             <h3 style={{ display: 'flex', fontWeight: 'bold' }}>
//                                 Most Visited
//                                 <div className='head-light-text'>
//                                     (654)
//                                 </div>
//                             </h3>
//                         </span>
//                         <span className='head-light-text' style={{ float: 'right'}}>
//                             <span>
//                                 {'View All >'}
//                             </span>
//                         </span>
//                     </div>
//                     <div className="grid-x">
//                         <div className="cell-courses-most medium-4 large-4">
//                             <Card />
//                         </div>
//                         <div className="cell-courses-most medium-4 large-4">
//                             <Card />
//                         </div>
//                         <div className="cell-courses-most medium-4 large-4">
//                             <Card />
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default Courses;

import React from 'react';
import './mostVisitied.scss';

//components
import Card from '../Cards/coursesCard';
// import BussinessCard from '../Cards/bussinessCard';

// import LazyCard from '../Cards/lazyCard';

class Courses extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'container-courses-most'}>
                    <div className="head-most-courses">
                        <span style={{ display: 'inline-block' }}>
                            <h3 style={{ display: 'flex', fontWeight: 'bold', marginLeft: '70px' }}>
                                Most Visited
                                 <div className='head-light-text'>
                                    (654)
                                 </div>
                            </h3>
                        </span>
                        <span className='head-light-text' style={{ float: 'right' }}>
                            <span>
                                {'View All >'}
                            </span>
                        </span>
                    </div>
                    {/* <div className="grid-x ">
                        <div className=" small-12 medium-6 large-4  ">
                            <Card />
                        </div>
                        <div className="small-12 medium-6 large-4  ">
                            <Card />
                        </div>
                        <div className="small-12 medium-6 large-4  ">
                            <Card />
                        </div>
                    </div> */}
                    <div className="grid-x ">

                        <div style={{ display: 'flex', alignItems: 'center' }} className="small-2 medium-1 large-1">
                            <div style={{ display: 'inline-block', padding: 15, color: '#D76E2D', borderRadius: '50%', boxShadow: '0px 10px 20px #6E6E6E1A', fontSize: 20, fontWeight: 900 }}>
                                {'<'}
                            </div>
                        </div>
                        <div className="small-8 medium-10 large-10  ">
                            <div className="grid-x">
                                <div className=" small-12 medium-6 large-4  ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-4 ">
                                    <Card />
                                </div>
                                <div className="small-12 medium-6 large-4  ">
                                    <Card />
                                </div>
                            </div>
                        </div>
                        <div className="small-2 medium-1 large-1 " style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'inline-block', padding: 15, color: '#D76E2D', borderRadius: '50%', boxShadow: '0px 10px 20px #6E6E6E1A', fontSize: 20, fontWeight: 900 }}>
                                {'>'}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Courses;