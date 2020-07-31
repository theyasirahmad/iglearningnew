// import React from 'react';
// import './categories.scss';

// //components
// import Card from '../Cards/bussinessCard';

// class Courses extends React.Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <div className={'container-courses-cat'}>
//                     <div className="head-cat-courses">
//                         <span style={{display:'inline-block'}}>
//                             <h3 style={{ display: 'flex', fontWeight: 'bold' }}>
//                                 Top Categories
//                                 <div className='head-light-text-cat'>
//                                     (28)
//                                 </div>
//                             </h3>
//                         </span>
//                     </div>
//                     <div className="grid-x grid-margin-x">
//                         <div className="cell-courses-cat medium-4 large-4">
//                             <Card />
//                         </div>
//                         <div className="cell-courses-cat medium-4 large-4">
//                             <Card />
//                         </div>
//                         <div className="cell-courses-cat medium-4 large-4">
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
import './categories.scss';

//components
// import Card from '../Cards/coursesCard';
import Card from '../Cards/bussinessCard';

// import LazyCard from '../Cards/lazyCard';

export default function Categories() {
    const [value, SetValue] = React.useState(1);

    React.useEffect(() => {
        setInterval(() => {
            SetValue(value => value === 3 ? 1 : value + 1)
        }, 7000);
    }, [])

    const handleSliderBullets = (i) => {
        SetValue(i)
    }
    return (
        <React.Fragment>
            <div className='container-slider-cat'>
                <div className="orbit-cat2" role="region" aria-label="Favorite Text Ever" data-orbit>
                    <div className={'container-courses-cat'}>
                        <div className="head-cat-courses">
                            <span style={{ display: 'inline-block' }}>
                                <h3 style={{ display: 'flex', fontWeight: 'bold' }}>
                                    Top Categories
                                <div className='head-light-text-cat'>
                                    (28)
                                </div>
                                </h3>
                            </span>
                        </div>
                        <div className="grid-x ">
                            <div className=" small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                            <div className="small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                            <div className="small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                            <div className=" small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                            <div className="small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                            <div className="small-12 medium-6 large-4  ">
                                <Card />
                            </div>
                        </div>
                    </div>
                    
                    {/* <nav className="orbit-bullets-cat">
                        <button className={value === 1 ? "is-active-cat" : null} data-slide="0" onClick={() => handleSliderBullets(1)}>
                            <span className="show-for-sr">First slide details.</span>
                            <span className="show-for-sr" data-slide-active-label>Cureent Slide</span>
                        </button>
                        <button className={value === 2 ? "is-active-cat" : null} data-slide="1" onClick={() => handleSliderBullets(2)}><span className="show-for-sr">Second slide details.</span></button>
                        <button className={value === 3 ? "is-active-cat" : null} data-slide="2" onClick={() => handleSliderBullets(3)}><span className="show-for-sr">Third slide details.</span></button>
                    </nav> */}
                </div>
            </div>
        </React.Fragment>
    );
}