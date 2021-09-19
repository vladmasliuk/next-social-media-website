import Image from 'next/image';
import Scroll from 'react-scroll'
import Link from 'next/link'

// assets
import Logo from '../assets/img/logo.png';

const ScrollLink = Scroll.Link;

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footerContent">
                    <div>
                        <Image src={Logo} alt="Social media" width={70} height={70}/>
                    </div>

                    <ul>
                        <li className="menu-item"><Link href="/"><a>Home</a></Link></li>
                        <li className="menu-item">
                            <ScrollLink 
                                to="about-sec" 
                                spy={true} 
                                smooth={true} 
                                duration={1000} 
                                offset={-150}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="menu-item">
                            <ScrollLink 
                                to="download-sec" 
                                spy={true} 
                                smooth={true} 
                                duration={1000}
                                offset={-150}
                            >
                                Download
                            </ScrollLink>
                        </li>
                        <li className="menu-item">
                            <ScrollLink 
                                to="contact-sec" 
                                spy={true} 
                                smooth={true} 
                                duration={1000}
                                offset={-150}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;