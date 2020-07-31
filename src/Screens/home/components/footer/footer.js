import React from 'react';
import './footer.scss';

import p1 from '../../Resources/images/client_3.png';
import p2 from '../../Resources/images/client_1.png';
import p3 from '../../Resources/images/client_4.png';
import p4 from '../../Resources/images/client_5.png';
import p5 from '../../Resources/images/client_6.png';
import p6 from '../../Resources/images/client_7.png';
import logo from '../../Resources/images/Logo.svg';
import s1 from '../../Resources/images/facebook-logo1.svg';
import s2 from '../../Resources/images/twitter1.svg';
import s3 from '../../Resources/images/linkedin-logo1.svg';
import appstore from '../../Resources/images/App Store Badge US Black.svg';
import goggleplay from '../../Resources/images/Google Play Badge US.svg';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={'footer-container'}>
                    <div className={'head-footer'}>
                        Our Partners
                    </div>
                    <div className="grid-x">
                        <div className="small-12 medium-1 large-1" ></div>

                        <div className="small-12 medium-2 large-2"  >
                            <img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={p1} />
                        </div>
                        <div className="small-12 medium-2 large-2">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={p2} />
                        </div>
                        <div className="small-12 medium-2 large-2">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={p3} />
                        </div>
                        <div className=" small-12 medium-2 large-2">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', }} src={p4} />
                        </div>
                        <div className="small-12 medium-2 large-2" >
                            <img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={p5} />
                        </div>

                        <div className=" medium-1 large-1"></div>
                    </div>
                </div>
                <div style={{ width: '100%', margin: '0 auto' }}>
                    <div className='footer-container-button'><span>^</span></div>
                </div>
                <div className={'footer-container-bottom'}>
                    {/* sadasdklad */}
                    <div className="grid-x">
                        <div className="cell-client medium-2 large-2"></div>
                        <div className="cell-client medium-2 large-2">
                            <img src={logo} width="50px" /><br />
                            Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor.
                            <div>
                                <br />
                                <span style={{ padding: 10, margin: '15px 5px 5px 0px', border: '1px solid white', borderRadius: '50%' }}>
                                    <img src={s1} width="10px" height="10px" />
                                </span>
                                <span style={{ padding: 10, margin: '15px 5px 5px 0px', border: '1px solid white', borderRadius: '50%' }}>
                                    <img src={s2} width="20px" height="20px" />
                                </span>
                                <span style={{ padding: 10, margin: '15px 5px 5px 0px', border: '1px solid white', borderRadius: '50%' }}>
                                    <img src={s3} width="20px" height="20px" />
                                </span>

                            </div>
                        </div>
                        <div className="cell-client medium-2 large-2" style={{ lineHeight: 2.2 }}>
                            <div style={{ width: '100%', borderBottom: '1px solid white', marginBottom: 5 }}>
                                <div style={{ display: 'inline-block', fontWeight: 600, borderBottom: '1px solid white' }}>
                                    Links
                                </div>
                            </div>
                            <div>Home</div>
                            <div>Pricing</div>
                            <div>About</div>
                            <div>Service</div>
                        </div>
                        <div className="cell-client medium-2 large-2" style={{ lineHeight: 2.2 }}>
                            <div style={{ width: '100%', borderBottom: '1px solid white', marginBottom: 5 }}>
                                <div style={{ display: 'inline-block', fontWeight: 600, borderBottom: '1px solid white' }}>
                                    Support
                                </div>
                            </div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                            <div>Faq's</div>
                            <div>Reporting</div>
                        </div>
                        <div className="cell-client medium-2 large-2" style={{ lineHeight: 2.2 }}>
                            <div style={{ width: '100%', borderBottom: '1px solid white', marginBottom: 5 }}>
                                <div style={{ display: 'inline-block', fontWeight: 600, borderBottom: '1px solid white' }}>
                                    Contact Us
                                </div>
                            </div>
                            <div>+880 12345678</div>
                            <div>info@intellogeek.com</div>
                            <div style={{ fontWeight: 600, margin: '10px 0px 10px 0px' }}>Download App</div>
                            <div>
                                <span>
                                    <img src={appstore} width='40%' />
                                </span>
                                <span style={{ marginLeft: 25 }}>
                                    <img src={goggleplay} width='40%' />
                                </span>
                            </div>
                        </div>
                        <div className="cell-client medium-2 large-2"></div>
                    </div>
                    <div className='footer-container-bottom-2'>
                        <div className="grid-x">
                            <div className="cell-client medium-2 large-2"></div>
                            <div className="cell-client medium-2 large-6" style={{ paddingTop: 16 }}>
                                Copyright © 2020 IntelloGeek. All Rights Reserved.
                            </div>
                            <div className="small-12 medium-3 large-3" style={{ textAlign: 'center' }}>
                                <span >
                                    Trusted Partner:
                                    </span>
                                <span>
                                    <img style={{ width: 70 }} src={p6} />
                                </span>
                            </div>
                            <div className="cell-client medium-2 large-1"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;