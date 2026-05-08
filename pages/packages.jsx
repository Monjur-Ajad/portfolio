import { FaGithub, FaBoxOpen, FaDownload, FaCopy, FaCheck, FaShieldAlt } from 'react-icons/fa';
import { SiPackagist, SiLaravel, SiPhp } from 'react-icons/si';
import { useState } from 'react';

const Packages = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const packages = [
        {
            title: 'bKash Payment Gateway',
            name: 'monjur/bkash',
            desc: 'A seamless bKash payment gateway integration for Laravel. Handles payment requests, verification, and automated callback processing with ease.',
            tags: ['Payment Integration', 'Automatic Verification', 'Callback Handling', 'Secure Transactions'],
            techs: ['LARAVEL', 'PHP 8.0+', 'BKASH API', 'FINTECH'],
            command: 'composer require monjur/bkash',
            packagist: 'https://packagist.org/packages/monjur/bkash',
            github: 'https://github.com/Monjur-Ajad/bkash',
            color: 'border-pink-500',
            iconColor: 'bg-pink-500',
            version: 'Laravel 9+',
            license: 'MIT'
        },
        {
            title: 'Contact Logic',
            name: 'monjur/contact',
            desc: 'Robust contact form and messaging logic for Laravel. Includes automated email notifications, database logging, and validation out of the box.',
            tags: ['Contact Forms', 'Email Notifications', 'DB Logging', 'Validation'],
            techs: ['LARAVEL', 'PHP 8.0+', 'MAILABLE', 'LOGGING'],
            command: 'composer require monjur/contact',
            packagist: 'https://packagist.org/packages/monjur/contact',
            github: 'https://github.com/Monjur-Ajad/contact',
            color: 'border-emerald-500',
            iconColor: 'bg-emerald-500',
            version: 'Laravel 9+',
            license: 'MIT'
        }
    ];

    const handleCopy = (command, index) => {
        navigator.clipboard.writeText(command);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="container mx-auto px-6 py-20 text-center">
            {/* Header */}
            <div className="flex flex-col items-center mb-16">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-orange-500/20 mb-8">
                    <FaBoxOpen className="text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase italic">Laravel Packages</h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px]">
                    Open-source packages published to Packagist for the Laravel community.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {packages.map((pkg, i) => (
                    <div key={i} className={`glass-card p-10 rounded-[3rem] border-t-8 ${pkg.color} flex flex-col text-left hover:scale-[1.01] transition-all duration-500 bg-white/[0.02]`}>
                        {/* Header */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className={`w-16 h-16 ${pkg.iconColor} rounded-[1.5rem] flex items-center justify-center text-3xl text-white shadow-xl shadow-white/5`}>
                                {pkg.title.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tight">{pkg.title}</h3>
                                <div className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">{pkg.name}</div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 h-28 overflow-hidden font-medium">
                            {pkg.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {pkg.tags.map((tag, j) => (
                                <div key={j} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                    <div className={`w-1.5 h-1.5 rounded-full ${pkg.iconColor}`}></div>
                                    {tag}
                                </div>
                            ))}
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {pkg.techs.map((tech, j) => (
                                <span key={j} className="px-3 py-1 bg-white/[0.05] text-[10px] font-black tracking-widest text-gray-400 border border-white/5 rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Command Block */}
                        <div className="bg-black p-5 rounded-2xl flex items-center justify-between gap-4 mb-10 border border-white/10 group shadow-inner">
                            <code className="text-xs font-mono text-emerald-400 overflow-hidden whitespace-nowrap">
                                <span className="text-gray-600 mr-2">$</span> {pkg.command}
                            </code>
                            <button 
                                onClick={() => handleCopy(pkg.command, i)}
                                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all border border-white/5"
                            >
                                {copiedIndex === i ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                            </button>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-6 mt-auto">
                            <a 
                                href={pkg.packagist} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-emerald-500 transition-all shadow-xl shadow-black/20"
                            >
                                <SiPackagist className="text-xl" /> Packagist
                            </a>
                            <a 
                                href={pkg.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all"
                            >
                                <FaGithub className="text-xl" /> GitHub
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/5 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <FaDownload className="text-emerald-500" /> {pkg.version}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaShieldAlt className="text-sm text-gray-600" /> {pkg.license}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;
