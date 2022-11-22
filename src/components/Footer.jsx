import React, { useRef } from 'react';
import '../styles.css';
import emailBtn from '../img/emailBtn.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    // const [email, setEmail] = useState('');
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(email)
    // }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        // emailjs.sendForm(
        //     process.env.REACT_APP_SERVICE_ID, 
        //     process.env.REACT_APP_TEMPLATE_ID, 
        //     form.current, 
        //     process.env.REACT_APP_USER_ID
        // ).then(
        //     result => console.log(result.text),
        //     error => console.log(error.text)
        // );
        // e.target.reset();
    };

    return (
        <div className='footer'>
            <svg className='waves' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 2400 300">
                <defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad"><stop stop-color="#269eb6ff" stop-opacity="1" offset="0%"></stop><stop stop-color="#1f7a8cff" stop-opacity="1" offset="100%"></stop></linearGradient></defs>
                <g fill="url(#sssurf-grad)" transform="matrix(1,0,0,1,9.109130859375,247.03144073486328)">
                    <path class="w1 waveTop" d="M-10,10C37.53787878787879,16.458333333333336,125.18939393939395,50.166666666666664,218.1818181818182,41C311.17424242424244,31.833333333333336,345.4545454545455,-31.708333333333332,436.3636363636364,-34C527.2727272727273,-36.291666666666664,563.6363636363636,24.791666666666664,654.5454545454545,30C745.4545454545454,35.208333333333336,781.8181818181818,-9,872.7272727272727,-9C963.6363636363637,-9,1000.0000000000001,31.25,1090.909090909091,30C1181.818181818182,28.75,1218.181818181818,-19.583333333333332,1309.090909090909,-15C1400,-10.416666666666668,1436.3636363636363,52,1527.2727272727273,52C1618.1818181818182,52,1654.5454545454545,-13.333333333333334,1745.4545454545455,-15C1836.3636363636365,-16.666666666666668,1872.7272727272727,40.875,1963.6363636363637,44C2054.5454545454545,47.125,2090.909090909091,-3.125,2181.818181818182,0C2272.727272727273,3.125,2302.462121212121,-24.333333333333343,2400,59C2497.537878787879,142.33333333333334,3254.1666666666665,224.79166666666669,2650,400C2045.8333333333335,575.2083333333333,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,60)" opacity="0.05"></path>
                    <path class="w2 waveMiddle" d="M-10,10C37.53787878787879,16.458333333333336,125.18939393939395,50.166666666666664,218.1818181818182,41C311.17424242424244,31.833333333333336,345.4545454545455,-31.708333333333332,436.3636363636364,-34C527.2727272727273,-36.291666666666664,563.6363636363636,24.791666666666664,654.5454545454545,30C745.4545454545454,35.208333333333336,781.8181818181818,-9,872.7272727272727,-9C963.6363636363637,-9,1000.0000000000001,31.25,1090.909090909091,30C1181.818181818182,28.75,1218.181818181818,-19.583333333333332,1309.090909090909,-15C1400,-10.416666666666668,1436.3636363636363,52,1527.2727272727273,52C1618.1818181818182,52,1654.5454545454545,-13.333333333333334,1745.4545454545455,-15C1836.3636363636365,-16.666666666666668,1872.7272727272727,40.875,1963.6363636363637,44C2054.5454545454545,47.125,2090.909090909091,-3.125,2181.818181818182,0C2272.727272727273,3.125,2302.462121212121,-24.333333333333343,2400,59C2497.537878787879,142.33333333333334,3254.1666666666665,224.79166666666669,2650,400C2045.8333333333335,575.2083333333333,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,120)" opacity="0.53"></path>
                    <path class="w3 waveBottom" d="M-10,10C37.53787878787879,16.458333333333336,125.18939393939395,50.166666666666664,218.1818181818182,41C311.17424242424244,31.833333333333336,345.4545454545455,-31.708333333333332,436.3636363636364,-34C527.2727272727273,-36.291666666666664,563.6363636363636,24.791666666666664,654.5454545454545,30C745.4545454545454,35.208333333333336,781.8181818181818,-9,872.7272727272727,-9C963.6363636363637,-9,1000.0000000000001,31.25,1090.909090909091,30C1181.818181818182,28.75,1218.181818181818,-19.583333333333332,1309.090909090909,-15C1400,-10.416666666666668,1436.3636363636363,52,1527.2727272727273,52C1618.1818181818182,52,1654.5454545454545,-13.333333333333334,1745.4545454545455,-15C1836.3636363636365,-16.666666666666668,1872.7272727272727,40.875,1963.6363636363637,44C2054.5454545454545,47.125,2090.909090909091,-3.125,2181.818181818182,0C2272.727272727273,3.125,2302.462121212121,-24.333333333333343,2400,59C2497.537878787879,142.33333333333334,3254.1666666666665,224.79166666666669,2650,400C2045.8333333333335,575.2083333333333,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,180)" opacity="1.00"></path>
                </g>
            </svg>
            <div className="footer">
                <footer>
                    <div class="containerFoot">
                        <footer class="py-5">
                            <div class="row">
                                <div class="col-4 mb-3 me-5">
                                    <h3>Let's Stay in Touch!</h3>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="navElement d-flex flex-column flex-sm-row w-100 me-auto">
                                            <label for="newsletter1" class="visually-hidden">Your email</label>
                                            <input name="user_email" type="email" class="form-control" placeholder="Email address"/>
                                            <button class="btn" value='Send' type="submit"><img src={emailBtn} alt=""/></button>
                                        </div>
                                    </form>
                                </div>                            
                                <div className="navElement col-6 col-md-2 mb-3 me-5">
                                    <ul class="nav flex-column">
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Feedback</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Roadmap</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Changelog</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Blog</a></li>
                                    </ul>
                                </div>

                                <div class="navElement col-6 col-md-2 mb-3 me-5">
                                    <ul class="nav flex-column">
                                        <li class="nav-item mb-2"><NavLink id='footLink' to="/TOS" class="nav-link p-0 text-white">Terms of Service</NavLink></li>
                                        <li class="nav-item mb-2"><NavLink id='footLink' to="/privacy" class="nav-link p-0 text-white">Privacy Policy</NavLink></li>
                                        <li class="nav-item mb-2"><NavLink id='footLink' to="/careers" class="nav-link p-0 text-white">Careers</NavLink></li>
                                    </ul>
                                </div>

                            </div>
                        </footer>
                    </div>
                </footer>
            </div>        
        </div>
    );
}

export default Footer;