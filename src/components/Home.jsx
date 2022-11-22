import React from 'react';
import '../styles.css';

const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 mb-3 fw-bolder text-center" id='title'><b>Time Finds You</b></h1>
                            <p className='lead text-center'>Adding bookmarks has never been difficult, but finding the time to revist them is.</p>
                            <p className='lead text-center'>Leave that part to us. Bookmark and schedule your reminder with one click</p>
                            <div className='buttonHome d-flex justify-content-center'>
                                <button className='button' id='landingButton' >Add Pondr to Chrome</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;