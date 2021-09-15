import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

// assets
import Logo from '../assets/img/logo.png';

class Navbar extends React.Component{
    state={
        isTop: false,
      }
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            if (isTop !== this.state.isTop) {
            this.setState({ isTop })
            }
        });
    }
    render(){
        return(
            <div className={`header ${this.state.isTop ? 'header-scroll' : null}`}>
                <div className="container">
                    <div className="headerContent">
                        <Link href="/">
                            <a>
                                <Image src={Logo} alt="Social media" width={70} height={70}/>
                            </a>
                        </Link>
                        <ul>
                            <li className="menu-item"><Link href="/"><a>Home</a></Link></li>
                            <li className="menu-item"><Link href="/"><a>About</a></Link></li>
                            <li className="menu-item"><Link href="/"><a>Download</a></Link></li>
                            <li className="menu-item"><Link href="/"><a>Contact</a></Link></li>
                            <li className="sing-link"><Link href="https://react-social-a3a4f.web.app/"><a target="_blank" >Sign in</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;