import { CERTIFICATES } from '../constants/constants';
import { HiBadgeCheck, HiDownload, HiExternalLink, HiEye } from 'react-icons/hi';
import { FaAward, FaCertificate } from 'react-icons/fa';

const Certificates = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white pb-20">
            {/* Premium Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
                {/* Background Text Overlay */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <div className="text-[15rem] font-black tracking-tighter uppercase whitespace-nowrap">CERTIFICATIONS</div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-lg text-indigo-600 text-[9px] uppercase tracking-[0.4em] font-black mb-6">
                            Recognition
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                            Professional <br /> <span className="text-indigo-600 italic">Credentials.</span>
                        </h1>
                        <p className="text-slate-500 text-sm font-bold max-w-sm leading-relaxed border-l-4 border-indigo-500 pl-4">
                            A collection of verified skills, academic achievements, and professional certifications.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATES.map((cert, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-indigo-500 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                {/* Decorative Icon Background */}
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <FaCertificate className="text-9xl rotate-12" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                                        <FaAward />
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                                                {cert.date}
                                            </span>
                                            <span className="text-[8px] font-black text-slate-200">
                                                ID: 0{index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black tracking-tight text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                                            {cert.title.replace('.pdf', '')}
                                        </h3>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                                            Issued by: <span className="text-slate-900">{cert.organization}</span>
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                                        <a 
                                            href={cert.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95"
                                        >
                                            <HiEye className="text-base" /> View PDF
                                        </a>
                                        <a 
                                            href={cert.url} 
                                            download
                                            className="w-12 h-12 inline-flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 border border-slate-100"
                                            title="Download Certificate"
                                        >
                                            <HiDownload className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Verification Note */}
                <div className="mt-20 p-10 bg-slate-50 border border-slate-100 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl text-emerald-500 shadow-sm border border-slate-100">
                            <HiBadgeCheck />
                        </div>
                        <div>
                            <h4 className="text-lg font-black text-slate-900">Verified Credentials</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">All certificates are authentic and verifiable upon request.</p>
                        </div>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-slate-200"></div>
                    <div className="text-center md:text-right">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Total Certifications</p>
                        <div className="text-4xl font-black text-slate-900">{CERTIFICATES.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
