import React from 'react';
import '../../styles.css';
import blog from '../../img/blog.png';

const None = () => {
    return (
        <div>
            <secion className="blog">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 mb-3 fw-bold text-center" id='title'>Pondr Blog</h1>
                            <div className='row blogImg'>
                                <div>
                                    <img src={blog}/>
                                </div>                            
                            </div>
                            <div className='row'>
                                <h2>Hold steady, blogs are coming soon!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </secion>
        </div>
    )
}

export default None;