import { STATS, NAME, EDUCATION, SKILLS } from '../constants/constants';
import { HiOutlineDownload, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaAward, FaUniversity, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white pb-20">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent -z-10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 py-24">
                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-emerald-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl shadow-indigo-100 border border-white">
                            <img src="/cover.png" alt="Profile" className="w-full h-auto rounded-[2.5rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] uppercase tracking-[0.3em] font-black mb-8">About Me</div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-slate-900">
                            {NAME.split(' ')[0]} <br /> <span className="text-indigo-600 italic">{NAME.split(' ')[1]} {NAME.split(' ')[2] || ''}.</span>
                        </h1>
                        <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium">
                            Senior Software Engineer & Team Lead with 7+ years of experience. I specialize in building clean, scalable, and business-focused software solutions with an engineering mindset centered on performance and reliability.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {STATS.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-black text-slate-900">{stat.count}</div>
                                    <div className="text-[10px] text-indigo-600 uppercase tracking-widest font-black mt-1">{stat.title}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="/CV-Of-MONJURUL-ISLAM.pdf" 
                                download 
                                className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-900/10"
                            >
                                Download CV <HiOutlineDownload className="text-lg" />
                            </a>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/monjurul-islam-ajad/" target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all"><FaLinkedin className="text-xl" /></a>
                                <a href="https://github.com/Monjur-Ajad" target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all"><FaGithub className="text-xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {/* Education */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 text-2xl"><FaUniversity /></div>
                                <h2 className="text-3xl font-black tracking-tight text-slate-900">Academic Foundation</h2>
                            </div>
                            <div className="space-y-10">
                                {EDUCATION.map((edu, i) => (
                                    <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-emerald-100">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-xl font-black text-slate-900">{edu.degree}</h3>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{edu.result}</span>
                                        </div>
                                        <div className="text-emerald-500 font-bold text-sm">{edu.institution}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Languages</h2>
                            <div className="flex flex-wrap gap-4">
                                {['Bangla', 'English', 'Hindi'].map((lang, i) => (
                                    <div key={i} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        {/* Expertise Sidebar */}
                        <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-200">
                            <div className="flex items-center gap-4 mb-10">
                                <FaCode className="text-emerald-400 text-2xl" />
                                <h2 className="text-2xl font-black tracking-tight">Core Skills</h2>
                            </div>
                            <div className="space-y-6">
                                {SKILLS.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">
                                            <span>{skill.name || skill.title}</span>
                                            <span>{skill.level}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: skill.level }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Current Focus */}
                        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                            <h2 className="text-2xl font-black tracking-tight mb-8">Current Focus</h2>
                            <ul className="space-y-4">
                                {['Fintech & Payment Systems', 'Scalable Applications', 'System Architecture', 'Agile Leadership'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                                        <FaAward className="text-indigo-500 mt-1 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "About Me",
            description: "Learn more about Monjurul Islam Ajad, a Senior Software Engineer and Team Lead with expertise in FinTech, POS systems, and scalable web architectures.",
        },
    }
}

export default About;
