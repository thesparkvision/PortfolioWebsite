const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-1.5 text-center text-lg border-t border-zinc-200 px-4 md:px-40 lg:px-50 xl:px-60 bg-amber-100">
            <div className="py-0.5 px-3 text-sm font-bold text-amber-700">
                &copy; {currentYear} Aman Pandya. Made with fun.
            </div>
        </footer>
    )
}

export default Footer;