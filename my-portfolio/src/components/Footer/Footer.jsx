import { socials } from "../../misc/constants";

const SocialLinks = () => {
    return (
        <ul className="flex flex-row justify-center gap-2">
            {socials.filter(social => social.show).map((socialItem, index) => (
                <li key={index}>
                    <a
                        href={socialItem.url}
                        aria-label={socialItem.altText}
                        {...(socialItem.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex size-11 items-center justify-center"
                    >
                        <img className="size-5" src={socialItem.icon} alt={socialItem.altText} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-secondary)] bg-[var(--color-secondary)] px-4 py-3 text-center sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-sm font-bold text-[var(--color-text)]">
                <SocialLinks />
                <div>&copy; {currentYear} Aman Pandya. Made with fun.</div>
            </div>
        </footer>
    )
}

export default Footer;
