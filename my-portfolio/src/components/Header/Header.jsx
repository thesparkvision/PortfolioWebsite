import { NavLink } from "react-router-dom";
import { WandSparkles } from "lucide-react";

import {socials, navLinks} from "../../misc/constants";

const SocialLink = ({item}) => {
    return (
        <li className="list-none">
            <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    className="size-5"
                    src={item.icon} 
                    alt={item.altText}
                />
            </a>
        </li>
    )
}

const SocialLinks = () => {
    return (
        <div className="flex flex-row gap-3 justify-center">
            {socials.filter(social => social.show).map(
                (socialItem, index) => (
                    <SocialLink key={index} item={socialItem} />
                )
            )}
        </div>
    )
}

const NavigationLink = ({navLink}) => {
    return (
        <li>
            <NavLink 
                to={navLink.path}
                className={({isActive}) => isActive ? "text-amber-700 text-xl": "text-xl"}
            >
                {navLink.name}
            </NavLink>
        </li>
    )
}

const Navigation = () => {
    return (
        <nav>
            <ul className="flex md:flex-row justify-center items-center gap-4 mb-4">
                {navLinks.sort((a,b) => a.order - b.order).filter(navLink => navLink.show).map((navLink, index) => (
                    <NavigationLink 
                        key={index}
                        navLink={navLink}
                    />
                ))}
            </ul>
        </nav>
    )
}


const Header = () => {
    return (
        <header className="pt-6 pb-2 px-4 md:px-40 lg:px-50 xl:px-60">
            <h2 className="text-center lg:text-left">
                <NavLink 
                    to="/" 
                    className="text-3xl no-underline font-extrabold"
                >
                    <WandSparkles className="inline-block"/> Aman Pandya
                </NavLink>
            </h2>

            <hr className="mt-2 mb-4 border-gray-400"/>

            <div className="flex flex-col lg:flex-row lg:justify-between">
                <Navigation />
                <SocialLinks />
            </div>
        </header>
    )
}

export default Header;
