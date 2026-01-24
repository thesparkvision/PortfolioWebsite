import { NavLink } from "react-router-dom";
import {socials, navLinks} from "../../misc/constants";

const SocialLink = ({item}) => {
    return (
        <li className="list-none">
            <a href={item.url}>
                <img 
                    className="size-6"
                    src={item.icon} 
                    alt={item.altText}
                />
            </a>
        </li>
    )
}

const SocialLinks = () => {
    return (
        <div className="flex gap-3">
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
            <ul className="flex gap-4">
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
        <header className="py-6">
            <h2>
                <NavLink 
                    to="/" 
                    className="text-3xl no-underline"
                >
                    Aman Pandya
                </NavLink>
            </h2>

            <hr className="mt-2 mb-4 border-gray-400"/>

            <div className="flex justify-between">
                <Navigation />
                <SocialLinks />
            </div>
        </header>
    )
}

export default Header;
