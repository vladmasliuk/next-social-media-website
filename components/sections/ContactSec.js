import { Element } from 'react-scroll'

const ContactSec = () =>{
    return(
        <Element id='contact-sec' name='contact-sec'>
            <div className="sec-wrap">
                <div className="container">
                    <div className="text-block">
                        <h2>Contact</h2>
                        <p><strong>EMAIL:</strong> <a href="mailto:masliuk@wit.edu.pl">masliuk@wit.edu.pl</a></p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default ContactSec;