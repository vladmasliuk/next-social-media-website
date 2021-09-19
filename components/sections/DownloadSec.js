import Image from 'next/image';

// assets
import WinImg from '../../assets/img/windows-icon.svg';
import AppleImg from '../../assets/img/apple-icon.svg';
import AndImg from '../../assets/img/android-icon.svg';

const DownloadSec = () =>{
    return(
        <div className="sec-wrap">
            <div className="container">
                <div className="text-block">
                    <h2>Download</h2>
                </div>
            </div>

            <div className="dow-item-wrap">
                <div className="dow-item">
                    <div className="dow-item-img">
                        <Image src={WinImg} alt="Social media screen" width={300} height={300}/>
                    </div>
                    <div className="dow-item-text-wrap">
                        <div className="dow-item-text">
                            <h3>Windows</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
                <div className="dow-item">
                    <div className="dow-item-img">
                        <Image src={AppleImg} alt="Social media screen" width={300} height={300}/>
                    </div>
                    <div className="dow-item-text-wrap">
                        <div className="dow-item-text">
                            <h3>MacOs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
                <div className="dow-item">
                    <div className="dow-item-img">
                        <Image src={AndImg} alt="Social media screen" width={300} height={300}/>
                    </div>
                    <div className="dow-item-text-wrap">
                        <div className="dow-item-text">
                            <h3>Android</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
                <div className="dow-item">
                    <div className="dow-item-img">
                        <Image src={AppleImg} alt="Social media screen" width={300} height={300}/>
                    </div>
                    <div className="dow-item-text-wrap">
                        <div className="dow-item-text">
                            <h3>IOS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSec;