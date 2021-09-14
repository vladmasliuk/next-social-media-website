import Head from 'next/head';
// components
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return(
        <div>
            <Head>
                <title>Social media website</title>
                <meta name="description" content="Website for social media app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;