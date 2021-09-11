import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import { ContactContainer, ContactWrapper, ContactH1, ContactName, ContactP, ColumnNarrow, ColumnWide, ContactMessage } from './ContactElements';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';

const ContactSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <div style={{background:"black"}}>
            <ContactContainer id='contact'>
                <ContactH1>Contact Me!</ContactH1>
                <ContactWrapper>
                    <ColumnNarrow>
                        <ContactP>First Name</ContactP>
                        <ContactName/>
                        <ContactP>Last Name</ContactP>
                        <ContactName/>
                        <ContactP>Email</ContactP>
                        <ContactName/>
                        <ContactP>Message</ContactP>
                        <ContactMessage/>
                        <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Submit {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    </ColumnNarrow>
                </ContactWrapper>
            </ContactContainer>
        </div>
    )
}

export default ContactSection
