import React from 'react';
import '../../styles.css';
import browser from '../../img/browser.png';
import cloud1 from '../../img/cloud1.png';
import stuck from '../../img/stuck.png';
import office from '../../img/office.png';
import cloud2 from '../../img/cloud2.png';
import glass from '../../img/glass.png';

const Main = () => {
    return (
        <div className='productMain'>
            <div className='browserImg'>
                <img src={browser} alt="" />
            </div>
            <div className="container">
                <div className='productHome row'>
                    <div className='col-md-9 mt-5'>
                        <h3 className="display-5 mb-3 fw-bolder text-center" id='title'>Bookmarks are Meant to be Temporary</h3>
                    </div>
                    <div className='col-sm-9'>
                        <p className='lead text-center mb-0'>Save a webpage for later and never worry about forgetting with Pondr's.</p>
                        <p className='lead text-center'>automated reminders</p>
                    </div>
                        <div className='buttonHome d-flex justify-content-center'>
                            <button className='button'>Add Pondr to Chrome</button>
                        </div>
                </div>
            </div>
            <div className='cloudContainer'>
                <img className='cloudFirst' src={cloud1} />
                <div className='centered container row'>
                    <div class='col'>
                        <img className='stuck' src={stuck} alt="" />
                    </div>
                    <div class='col'>
                        <div>
                            <h2><b>Browse the web and stay productive</b></h2>
                            <br />
                            <p>Save articles, videos, and anything else on the web</p>
                            <br/>
                            <p>Organize in collections with any web app page,</p>
                            <p>library, and tool configured endlessly</p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='middleContainer container'>
                <div className='row'>
                    <div class='col'>
                        <h2><b>Get more done</b></h2>
                        <br/>
                        <p>Keep distractions at bay, get reminded to</p>
                        <p>check you Pondr-ing tabs when you have</p>
                        <p>free time</p>
                    </div>
                    <div class='col offImg'>
                        <img className='office' src={office} alt="" />
                    </div>
                </div>
            </div>
            <div className='cloudContainer'>
                <img className='cloudSecond' src={cloud2} />
                <div className='centered container row'>
                    <div class='col'>
                        <img className='glass' src={glass} alt="" />
                    </div>
                    <div class='col'>
                        <h2> <b>Make info work for you </b></h2>
                        <br />
                        <p>Find what you need within seconds</p>
                        <br/>
                        <p>Gone are the days of lost sticky notes,</p>
                        <p>alarms, and dust-collecting bookmarks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main