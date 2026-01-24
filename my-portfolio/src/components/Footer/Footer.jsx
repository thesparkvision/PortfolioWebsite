const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-1.5 px-0 fixed bottom-0 inset-x-64 text-center text-lg border-t border-zinc-200">
            <div className="py-0.5 px-3 text-sm font-bold text-amber-700">
                &copy; {currentYear} Aman Pandya. Made with fun.
            </div>
        </footer>
    )
}

export default Footer;