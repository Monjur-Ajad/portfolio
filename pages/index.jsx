import Typewriter from 'typewriter-effect';
import { HiArrowRight, HiOutlineDownload, HiOutlineMail, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode, FaRocket, FaShieldAlt, FaBriefcase, FaAward, FaExternalLinkAlt, FaBoxOpen } from 'react-icons/fa';
import { NAME, STATS, SERVICES, WORK_EXPERIENCE, TECH_STACK, EDUCATION } from '../constants/constants';
import PortfolioData from './api/portfolio';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
            {/* Hero Section - REDESIGNED FOR EYE-COMFORT (LIGHT PREMIUM DESIGN) */}
            <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020617]">
                {/* Background Image (Cover) - Premium Dark Treatment */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/cover.png"
                        alt="Cover"
                        className="w-full h-full object-cover opacity-40 grayscale-[20%]"
                    />
                    {/* Multi-layered gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/40 to-[#020617]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Compact Round Logo */}
                    <div className="mb-8 relative inline-block group">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/20 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-700 bg-white/5 backdrop-blur-sm p-1">
                            <img
                                src="/favicon.ico"
                                alt="Monjur Ajad"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-emerald-400 text-[9px]  tracking-[0.4em] font-black mb-8 shadow-2xl animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        Open for collaboration
                    </div>

                    <h1 className="text-6xl md:text-[10rem] font-black  mb-8 text-white leading-[0.8] animate-slide-up drop-shadow-2xl">
                        {NAME.split(' ').map((word, i) => (
                            <span key={i} className={i === 2 ? 'text-emerald-500 block md:inline italic' : 'block md:inline'}>{word} </span>
                        ))}
                    </h1>

                    <div className="text-gray-400 text-xl md:text-3xl font-bold max-w-4xl mx-auto mb-16 h-16 animate-fade-in delay-200">
                        <Typewriter
                            options={{
                                strings: [
                                    'FinTech Architect & Team Lead.',
                                    'Building Secure Financial Ecosystems.',
                                    'Laravel & Next.js Expert.',
                                    'Scalable Microservices Designer.'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                wrapperClassName: "text-gray-300",
                                cursorClassName: "text-emerald-500"
                            }}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <Link href="/projects" className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black   text-[11px] rounded-2xl hover:bg-white hover:text-black transition-all">
                            Explore Works
                        </Link>
                        <a href="/CV-Of-MONJURUL-ISLAM.pdf" download className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black   text-[11px] rounded-2xl hover:bg-white hover:text-black transition-all">
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Summary Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <div className="text-indigo-600 text-[10px] ] font-black mb-4 text-left">The Journey</div>
                            <h2 className="text-4xl md:text-7xl font-black  mb-8 text-left text-slate-900">Professional <span className="text-indigo-600">Overview.</span></h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-10 text-left">
                                With over 7 years in the industry, I have evolved from a full-stack developer to a team leader and FinTech architect. My focus remains on writing clean, modular, and high-performance code that drives business value.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {STATS.map((stat, i) => (
                                    <div key={i} className="group">
                                        <div className="text-4xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{stat.count}</div>
                                        <div className="text-[10px] text-indigo-600   font-black mt-2">{stat.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-100">
                            <h3 className="text-xl font-black mb-6 text-slate-900">Current Location</h3>
                            <div className="flex items-center gap-4 text-slate-600 font-bold mb-8">
                                <span className="p-3 bg-white rounded-xl text-indigo-600 text-xl border border-slate-100 shadow-sm"><FaCode /></span>
                                Dhaka, Bangladesh 🇧🇩
                            </div>
                            <h3 className="text-xl font-black mb-6 text-slate-900">Primary Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Laravel', 'Next.js', 'PHP', 'Docker', 'AWS'].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black   text-slate-400">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Expertise Sections */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="text-indigo-600 text-[10px] font-black mb-4">Expertise</div>
                        <h2 className="text-4xl md:text-6xl font-black  leading-none text-slate-900">CORE <br /> <span className="text-indigo-600">SPECIALS.</span></h2>
                    </div>
                    <div className="text-slate-400 text-[9px] font-black   border-b-2 border-indigo-500 pb-2">High-Density Information</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, i) => (
                        <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl text-indigo-600 mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {i === 0 ? <FaShieldAlt /> : i === 1 ? <FaRocket /> : <FaBriefcase />}
                            </div>
                            <h3 className="text-xl font-black mb-4 tracking-tight text-slate-900">{service.title}</h3>
                            <p className="text-slate-500 text-xs font-bold leading-relaxed mb-8 opacity-80">{service.desc}</p>

                            {/* Technical Bullet Points for Informative Density */}
                            <ul className="space-y-3 border-t border-slate-200 pt-8">
                                {[
                                    i === 0 ? ["Payment Security", "TDD Implementation", "Secure API Design"] :
                                        i === 1 ? ["System Architecture", "Performance Tuning", "Scalable Microservices"] :
                                            ["Agile Leadership", "Code Mentorship", "Stakeholder Comm."]
                                ].flat().map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[9px] font-black   text-slate-400">
                                        <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="text-emerald-600 text-[10px] font-black mb-4">Portfolio</div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">LATEST <br /> <span className="text-emerald-500">PROJECTS.</span></h2>
                    </div>
                    <Link href="/projects" className="text-xs font-black text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-widest border-b border-slate-200 pb-2">View All Works →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PortfolioData.slice(0, 3).map((item, i) => (
                        <div key={i} className="group bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="relative aspect-video overflow-hidden border-b border-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.projectName}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-black text-slate-900 mb-2">{item.projectName}</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.technologiesUsed?.slice(0, 3).map((t, idx) => (
                                        <span key={idx} className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 rounded-md px-2 py-1">{t.tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors"
                                >
                                    Visit Project <FaExternalLinkAlt className="text-[8px]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Tech Stack & Education */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Skills */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black  mb-12 text-slate-900">Technical <span className="text-indigo-600">Arsenal.</span></h2>
                        <div className="flex flex-wrap gap-3">
                            {TECH_STACK.map((tech, i) => (
                                <span key={i} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black   text-slate-500 hover:bg-white hover:shadow-xl hover:text-indigo-600 transition-all cursor-default">{tech}</span>
                            ))}
                        </div>
                    </div>
                    {/* Education Preview */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black  mb-12 text-slate-900">Academic <span className="text-indigo-600">Foundation.</span></h2>
                        <div className="space-y-8">
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 hover:bg-white transition-all group">
                                    <div className="p-4 bg-white rounded-2xl text-2xl text-indigo-600 shadow-sm group-hover:shadow-lg transition-all"><FaAward /></div>
                                    <div>
                                        <h3 className="text-xl font-black mb-2 leading-tight text-slate-900">{edu.degree}</h3>
                                        <div className="text-indigo-500 font-bold text-[10px]   mb-2">{edu.institution}</div>
                                        <div className="text-slate-400 font-black text-[10px]  ">{edu.result}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Packages Highlight */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/3">
                        <div className="text-indigo-600 text-[10px] font-black mb-4">Community</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-6">OPEN SOURCE <br /> <span className="text-indigo-600">IMPACT.</span></h2>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Building robust tools for the Laravel ecosystem, focusing on payment integrations and core logic.</p>
                        <Link href="/packages" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600 transition-colors group">
                            View All Packages <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {/* Package 1 */}
                        <div className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-white rounded-2xl text-2xl text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all"><FaBoxOpen /></div>
                                <div className="text-[8px] font-black uppercase tracking-widest text-slate-300">Packagist</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 italic">monjur/bkash</h3>
                            <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6">Seamless bKash payment gateway integration for Laravel applications.</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-black text-slate-400">Laravel</span>
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-black text-slate-400">Payment</span>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-white rounded-2xl text-2xl text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all"><FaCode /></div>
                                <div className="text-[8px] font-black uppercase tracking-widest text-slate-300">GitHub</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 italic">monjur/contact</h3>
                            <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6">Modular contact logic for handling form submissions and notifications.</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-black text-slate-400">Logic</span>
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-black text-slate-400">Modular</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Final Contact CTA */}
            <section className="py-40 text-center bg-slate-50">
                <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-8xl font-black  leading-none mb-12 text-slate-900">
                    LET'S BUILD <br /> <span className="text-indigo-600">TOGETHER.</span>
                </h2>
                <Link href="/contact" className="inline-flex items-center gap-4 text-lg font-black  tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors group">
                    Start a Conversation <HiOutlineArrowNarrowRight className="group-hover:translate-x-4 transition-transform" />
                </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
