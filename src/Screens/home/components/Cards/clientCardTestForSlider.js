import React from 'react';
import './clientCard.scss';

import Rating from '@material-ui/lab/Rating';

import NameIcon from '../../Resources/images/photo-1543109740-4bdb38fda756-4.png';

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="client-card">
                    <div>
                        <img src={NameIcon} style={{ borderRadius: '50%', height: 151, width: 151 }} />
                    </div>
                    <div className="client-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dol magna aliqua.
                    </div>
                    <div className="client-ratings">
                        <span style={{ fontSize: 16, fontWeight: 'normal', color: '#999B9F' }}>
                            <Rating name="read-only" style={{ marginTop: 0, fontSize: 15 }} value={5} readOnly />
                            (4.5)
                        </span>
                    </div>
                    <div className="client-name">
                        Joel
                    </div>
                    <div className="client-type">
                        Teacher
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Card;