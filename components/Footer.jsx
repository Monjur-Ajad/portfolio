import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import { SOCIAL_LINKS } from '../constants/constants';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#020617]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-xl font-black tracking-tighter mb-2">MONJUR.AJAD</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">FinTech Architect & Team Lead</div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    <AiFillCopyrightCircle className="text-base" />
                    <span>2026 All Rights Reserved.</span>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-6 text-gray-400">
                        {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                            <a key={key} href={url} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors uppercase text-[10px] tracking-widest font-bold">
                                {key}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-[10px] uppercase tracking-widest font-bold mt-2">
                        <MdMail className="text-base" />
                        <span>monjurajad.offical@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;