import Image from 'next/image';
import Link from 'next/link'

// assets
import Logo from '../assets/logo.png'
const Navbar = () => {
    return(
        <div className="header">
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

export default Navbar;