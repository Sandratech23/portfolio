import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'; 

const socialMediaLinks =[
    {id:1, Icon:FaInstagram, link: 'https://www.instagram.com/thereelvanessa?igsh=NTc4MTIwNjQ2YQ==https://www.threads.net/@thereelvanessa' },
    {id:2, Icon:FaGithub, link:'https://github.com/sandratech23/' },
    {id:3, Icon: FaLinkedin, link:'https://www.linkedin.com/in/sandra-vanessa-ajaero-99a7972b2/'},
];

const SocialMediaLinks =() =>{
    return(
        <div>
            {socialMediaLinks.map(({id, Icon, link})=>(
                <a href={link} key={id}>
                    <Icon size='1.2rem' style={{marginRight:'10px', color:'var(--card-bg)'}} />
                </a>
            
            ))}
        </div>
    );
};

export default SocialMediaLinks

