import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Scroll from 'react-scroll'

// assets
import Logo from '../assets/img/logo.png';
import MenuIcon from '../assets/img/menu-icon.svg';

class Navbar extends React.Component{
    state={
        isTop: false,
        menuOpen: false,
    }
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            if (isTop !== this.state.isTop) {
            this.setState({ isTop })
            }
        });
    }

    openMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    render(){
        const ScrollLink = Scroll.Link;
        return(
            <div className={`header ${this.state.isTop ? 'header-scroll' : ''}`}>
                <div className="container">
                    <div className="headerContent">
                        <Link href="/">
                            <a>
                                <Image src={Logo} alt="Social media" width={70} height={70} quality={100}/>
                            </a>
                        </Link>
                        <div className={`menu-wrap ${this.state.menuOpen ? "menu-open" : ''}`}>
                            <ul>
                                <li className="menu-item" onClick={this.openMenu}>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <ScrollLink 
                                        to="about-sec" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={1000} 
                                        offset={-150}
                                        onClick={this.openMenu}
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
                                        onClick={this.openMenu}
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
                                        onClick={this.openMenu}
                                    >
                                        Contact
                                    </ScrollLink>
                                </li>
                                <li className="sing-link"><Link href="https://react-social-a3a4f.web.app/"><a target="_blank" >Sign in</a></Link></li>
                            </ul>
                        </div>
                        {/* mob menu btn */}
                        <button className="menu-btn">
                            <Image 
                                src={MenuIcon}
                                width={30}
                                height={30}
                                onClick={this.openMenu}
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;