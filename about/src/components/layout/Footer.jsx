import { cn } from '../../utils/cn';

const Footer = () => {
    return (
        <footer className="relative bg-white/20 backdrop-blur-md border-t border-white/20 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-text text-sm">
                    &copy; {new Date().getFullYear()} APLGO with Gugu. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-text/70 hover:text-primary transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-text/70 hover:text-primary transition-colors text-sm">Terms of Use</a>
                    <a href="https://support.aplgo.co.za/" className="text-text/70 hover:text-primary transition-colors text-sm">Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
