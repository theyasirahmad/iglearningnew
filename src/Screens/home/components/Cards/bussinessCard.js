import React from 'react';
import './bussinessCard.scss';

import Rating from '@material-ui/lab/Rating';

import Course1 from '../../Resources/images/bussiness.png';
import NameIcon from '../../Resources/images/NoPath - Copy.png';
import backdrop from '../../Resources/images/photo-1543109740-4bdb38fda756-9.svg'
import i1 from '../../Resources/images/icon_level.png';
import i2 from '../../Resources/images/icon_share.png';
import i3 from '../../Resources/images/icon_badge.png';

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="card-image2-b">
                        <img src={Course1} style={{width:'100%', borderBottomRightRadius:20, borderBottomLeftRadius:20}} />
                        <div className="bottom-overlay2-b">
                            {/* <div className='bottom-overlay-content-b'> */}
                                <div style={{ textAlign: 'center', marginTop: 10 }}>
                                    Bussiness & Company
                                </div>
                            {/* </div> */}
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Card;