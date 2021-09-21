import Image from 'next/image';
import { Element } from 'react-scroll'

const AboutSec = () =>{
    return(
        <Element id='about-sec' name='about-sec'>
            <div className="container">
                <div className="about-sec sec-wrap">
                    <div className="text-block">
                        <h2>About</h2>
                        <p>This is &quot;Social media&quot; application. After registration and login, you can
                            distributing short messages among groups of people via personal computer
                            or mobile telephone. You can use browser version of application, or download
                            desktop and mobile version for your device.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="img/about-img.jpg"
                            alt="Social media screen"
                            width={750}
                            height={400}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default AboutSec;