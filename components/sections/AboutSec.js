import Image from 'next/image';
import { Element } from 'react-scroll'

// assets
import AboutImg from '../../assets/img/about-img.jpg';

const AboutSec = () =>{
    return(
        <Element id='about-sec' name='about-sec'>
            <div className="container">
                <div className="about-sec sec-wrap">
                    <div className="text-block">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <Image src={AboutImg} alt="Social media screen" width={750} height={400} quality={100}/>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default AboutSec;