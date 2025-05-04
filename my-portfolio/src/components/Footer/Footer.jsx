import githubIcon from "../../assets/github.svg"
import gmailIcon from "../../assets/gmail.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import peerlistIcon from "../../assets/peerlist.svg"
import twitterIcon from "../../assets/twitter.svg"

import "./Footer.css"

const socials = [
    {
        'url': 'https://github.com/thesparkvision',
        'icon': githubIcon,
        'altText': 'Github logo'
    },
    {
        'url': 'https://www.linkedin.com/in/amanpandya/',
        'icon': linkedinIcon,
        'altText': 'Linkedin logo'
    },
    {
        'url': 'https://peerlist.io/thesparkvision',
        'icon': peerlistIcon,
        'altText': 'Peerlist logo'
    },
    {
        'url': 'https://twitter.com/sherlockd828',
        'icon': twitterIcon,
        'altText': 'Twitter logo'
    },
    {
        'url': 'mailto:ampandya712@gmail.com',
        'icon': gmailIcon,
        'altText': 'Gmail logo'
    }
]

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div >
                <ul id="footer-socials">
                    {
                        socials.map((socialItem, index) => 
                            <li key={index}>
                                <a href={socialItem.url}>
                                    <img src={socialItem.icon} alt={socialItem.altText} />
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div id="footer-copyright">&copy; {currentYear} Aman Pandya. Made with fun.</div>
        </footer>
    )
}

export default Footer;