import Image from 'next/image';
import { Element } from 'react-scroll'

const DownloadSec = () =>{
    return(
        <Element id='download-sec' name='download-sec'>
            <div className="sec-wrap">
                <div className="container">
                    <div className="text-block">
                        <h2>Download</h2>
                    </div>
                </div>

                <div className="dow-item-wrap">
                    <div className="dow-item">
                        <div className="dow-item-img">
                            <Image 
                                src="img/windows-icon.svg" 
                                alt="Social media screen" 
                                width={300} 
                                height={300} 
                                quality={100} 
                            />
                        </div>
                        <div className="dow-item-text-wrap">
                            <div className="dow-item-text">
                                <h3>Windows</h3>
                                <p>Download for Windows</p>
                                <a href="/apps/Social-media.exe" download>Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="dow-item">
                        <div className="dow-item-img">
                            <Image 
                                src="img/apple-icon.svg" 
                                alt="Social media screen" 
                                width={300} 
                                height={300} 
                                quality={100} 
                            />
                        </div>
                        <div className="dow-item-text-wrap">
                            <div className="dow-item-text">
                                <h3>MacOs</h3>
                                <p>Download for MacOs</p>
                                <a href="#">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="dow-item">
                        <div className="dow-item-img">
                            <Image 
                                src="img/android-icon.svg" 
                                alt="Social media screen" 
                                width={300} 
                                height={300} 
                                quality={100} 
                            />
                        </div>
                        <div className="dow-item-text-wrap">
                            <div className="dow-item-text">
                                <h3>Android</h3>
                                <p>Download for Android</p>
                                <a href="/apps/Social-media.apk">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="dow-item">
                        <div className="dow-item-img">
                            <Image 
                                src="img/apple-icon.svg" 
                                alt="Social media screen" 
                                width={300} 
                                height={300} 
                                quality={100} 
                            />
                        </div>
                        <div className="dow-item-text-wrap">
                            <div className="dow-item-text">
                                <h3>IOS</h3>
                                <p>Download for IOS (simulator version)</p>
                                <a href="/apps/Social-media-simulator.tar.gz">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default DownloadSec;