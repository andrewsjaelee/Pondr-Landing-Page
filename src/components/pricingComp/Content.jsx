import React from 'react';
import '../../styles.css';
import list from '../../img/list.png';
import free from '../../img/free.png';
import premium from '../../img/premium.png';

const Content = () => {
    return (
        <div>
            <div className='content container mb-5'>
                <div className='row'>
                    <div class='col words'>
                        <h2>Pondr Pricing</h2>
                        <br/>
                        <h3>Upgrade to Pondr Premium and experience</h3>
                        <h3>advanced bookmarking like never before.</h3>
                    </div>
                    <div class='col pic'>  
                        <img className='list' src={list} alt="" />
                    </div>
                </div>
            </div>
            <div className='picture container text-center'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <img className='free' src={free} alt="" />
                        <div className='row mt-3'>
                            <div className='buttonPricing justify-content-center'>
                                <button className='button' >Add Pondr to Chrome</button>
                            </div>                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='premium' src={premium} alt="" />
                        <div className='row mt-3'>
                            <div className='buttonPricing justify-content-center'>
                                <button className='button'>Get Notified</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;