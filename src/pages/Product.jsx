import React from 'react';
import '../styles.css';
import Main from '../components/productComp/Main';
import Home from '../components/Home';


const Product = () => {
    return (
        <div>
            <Main/>
            <div className='productPage'>
                <Home/>
            </div>
        </div>
    );
}

export default Product