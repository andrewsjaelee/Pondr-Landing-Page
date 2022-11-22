import React from 'react';
import saveMemory from '../img/saveMemory.png';
import time from '../img/time.png';
import reminder from '../img/reminder.png';
import '../styles.css';

const Services = () => {
    return (
        <div>
            <section className='service'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='display-7 text-center mb-0'><b>You added that bookmark for a reason</b></h2>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 mt-4">
                    <div className='cards'>
                        <div class="col-sm-9">
                            <div class="card p-1 border-0">
                                <img src={reminder} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center"><b>Automated Reminders</b></h5>
                                    <p class="card-text">Schedule reminders with one click. Never worry about forgetting something again.</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className='cards'>
                        <div class="col-sm-9">
                            <div class="card p-1 border-0">
                                <img src={saveMemory} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center"><b>Save Memory</b></h5>
                                    <p class="card-text">Save up to 95% memory and reduce tab clutter in Google Chrome.</p>
                                </div>
                            </div>
                            <div className='buttonHome d-flex justify-content-center'>
                                <button className='btn-sm' id='landingButton' >Add Pondr to Chrome</button>
                            </div>
                        </div>
                    </div>
                    <div className='cards'>
                        <div class="col-sm-9">
                            <div class="card p-1 border-0">
                                <img src={time} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center"><b>Do More with Your Time</b></h5>
                                    <p class="card-text">Stay in your work flow and your reminders will find you when you're ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;