import React from 'react';
import './Contact.css'

const contactDetails = [
    { id: 1, link: 'https://www.linkedin.com/in/sandra-vanessa-ajaero-99a7972b2/', tab: 'Linkedin' },
    { id: 2, link: 'https://github.com/sandratech23/', tab: 'Github' },
    { id: 3, link: 'https://www.instagram.com/thereelvanessa?igsh=NTc4MTIwNjQ2YQ==https://www.threads.net/@thereelvanessa', tab: 'Instagram' },
    { id: 4, link: 'mailto:sandradev.op@gmail.com', tab: 'Email' }
]

const Contact = () => {
    return (
        <div >
            {contactDetails.map(({ id, link, tab }) => (
                <div className='contactLinks' key={id}>
                    <a href={link} role='button' className='linkz'> {tab}</a>
                </div>
            ))}
        </div>
    );
}

export default Contact;
