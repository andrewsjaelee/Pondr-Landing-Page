import React from 'react';
import '../styles.css';
import Home from '../components/Home';
import Services from '../components/Services';
import Waves from '../components/Waves';

const Landing = () => {
    return (
        <div>
            <Home/>
            <Waves/>
            <Services/>
        </div>
    );
}

export default Landing