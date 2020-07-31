import React from 'react';
import './mostAndCategories.scss';

import image from '../../Resources/images/NoPath-Copy18.png';
//components
import Most from '../mostVisited/mostVisited';
import Categories from '../categories/categories';

class Courses extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'container-most-mostAndCategories'}>
                    <div className="grid-x ">
                        <div className=" small-12 medium-12 large-9  ">
                            <Most />
                            <Categories />
                        </div>
                        <div className="small-12 medium-12 large-3  " style={{ textAlign: 'center' }}>
                            <img src={image} style={{ height: '1317px', }} />
                        </div>
                    </div>
                    {/* <div className="grid-x">
                        <div className="cell-most-mostAndCategories medium-9 large-9">
                            <Most />
                            <Categories />
                        </div>
                        <div className="cell-most-mostAndCategories medium-3 large-3">
                            <img src={image} style={{ height: '1317px' }} />
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Courses;