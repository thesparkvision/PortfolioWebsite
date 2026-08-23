import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sparkle, Sun, WandSparkles } from "lucide-react";

import {navLinks} from "../../misc/constants";

const NavigationLink = ({navLink}) => {
    return (
        <li>
            <NavLink 
                to={navLink.path}
                className={({isActive}) => isActive ? "text-[var(--color-link)] text-base md:text-lg focus-ring": "text-base md:text-lg focus-ring"}
            >
                {navLink.name}
            </NavLink>
        </li>
    )
}

const Navigation = () => {
    return (
        <nav>
            <ul className="flex items-center justify-center gap-4">
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

const ThemeToggle = ({isDark, onToggle}) => {
    return (
        <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggle}
            className="js-only relative inline-flex size-11 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-[var(--color-secondary)] focus-ring"
        >
            <span key={isDark ? "dark-burst" : "light-burst"} aria-hidden="true" className="pointer-events-none absolute inset-0">
                <Sparkle className="theme-toggle-spark absolute -left-1 top-0 size-3 text-[var(--color-accent)]" style={{"--spark-x": "-6px", "--spark-y": "-7px"}} />
                <Sparkle className="theme-toggle-spark absolute -right-1 top-1 size-2.5 text-[var(--color-accent)]" style={{"--spark-x": "7px", "--spark-y": "-5px"}} />
                <Sparkle className="theme-toggle-spark absolute bottom-0 right-0 size-3 text-[var(--color-accent)]" style={{"--spark-x": "8px", "--spark-y": "7px"}} />
                <Sparkle className="theme-toggle-spark absolute bottom-0 left-0 size-2.5 text-[var(--color-accent)]" style={{"--spark-x": "-7px", "--spark-y": "6px"}} />
                <Sparkle className="theme-toggle-spark absolute right-1 top-0 size-2 text-[var(--color-accent)]" style={{"--spark-x": "5px", "--spark-y": "-9px"}} />
            </span>
            <span key={isDark ? "dark" : "light"} className="wand-toggle-icon inline-flex">
                {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </span>
        </button>
    )
}

const MagicWand = () => {
    const [isMagicActive, setIsMagicActive] = useState(false)

    const makeMagic = () => {
        setIsMagicActive(true)
        window.setTimeout(() => setIsMagicActive(false), 900)
    }

    return (
        <>
            <span className="relative inline-flex">
            <button
                type="button"
                aria-label="Cast a spell"
                title="Cast a spell"
                onClick={makeMagic}
                className="relative inline-flex size-8 items-center justify-center rounded-full hover:bg-[var(--color-secondary)] focus-ring"
            >
                <WandSparkles key={isMagicActive ? "magic" : "idle"} className="wand-toggle-icon size-5" />
            </button>
            </span>
            {isMagicActive && (
                <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50">
                    <Sparkle className="magic-page-spark absolute left-[8%] top-[5%] size-6 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[15%] top-[8%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[20%] top-[3%] size-3 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[12%] top-[18%] size-5 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[28%] top-[42%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[45%] top-[16%] size-6 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[62%] top-[34%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[78%] top-[20%] size-5 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[88%] top-[55%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[20%] top-[74%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[52%] top-[68%] size-5 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[72%] top-[82%] size-4 text-[var(--color-accent)]" strokeWidth={2.5} />
                    <Sparkle className="magic-page-spark absolute left-[92%] top-[88%] size-5 text-[var(--color-accent)]" strokeWidth={2.5} />
                </div>
            )}
        </>
    )
}

const Header = ({isDark, onToggleTheme}) => {
    return (
        <header className="sticky top-0 z-40 w-full bg-[var(--color-background)] px-4 pb-3 pt-5 sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 border-b border-[var(--color-text)]/25 pb-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-left text-2xl md:text-3xl">
                    <MagicWand />
                    <NavLink
                      to="/"
                      className="ml-1 no-underline font-extrabold focus-ring"
                    >
                      Aman Pandya
                    </NavLink>
                    </div>
                    <span className="md:hidden">
                        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
                    </span>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Navigation />
                    <span className="hidden md:inline-flex">
                        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;
