import { FaGithub, FaBug, FaStar, FaCode, FaBolt, FaShieldAlt, FaCheckCircle, FaGitAlt, FaExternalLinkAlt, FaHourglassHalf } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight, HiOutlineClock } from 'react-icons/hi';
import { SOCIAL_LINKS } from '../constants/constants';

const Contributor = () => {
    const stats = [
        { label: 'Total PRs', count: 1, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
        { label: 'Repos Helped', count: 1, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
        { label: 'Status', count: 'In Review', isText: true, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    ];

    const contributions = [
        { 
            repo: 'firstcontributions/first-contributions', 
            title: 'Add Monjur Ajad to contributors list', 
            id: '#116176', 
            date: 'May 08, 2026', 
            url: 'https://github.com/firstcontributions/first-contributions/pull/116176', 
            status: 'Pending',
            icon: <FaHourglassHalf className="text-amber-500" /> 
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white pb-20">
            {/* Header Gradient */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-indigo-600 via-violet-600 to-emerald-500 -z-10 opacity-[0.03]"></div>
            
            <div className="container mx-auto px-6 py-20">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="flex-1">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="w-16 h-16 bg-white rounded-[1.5rem] shadow-2xl shadow-indigo-200 flex items-center justify-center text-4xl border border-white">
                                <FaGithub className="text-slate-900" />
                            </div>
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                                    The Journey Begins
                                </h1>
                                <p className="text-slate-500 font-bold text-lg mt-2">
                                    Taking my first steps in the <span className="text-indigo-600">Global Open Source</span> community.
                                </p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-200 rounded-full text-slate-600 text-xs font-bold mb-10">
                            <FaGitAlt className="text-indigo-500" />
                            Rising Contributor · <span className="text-indigo-600">Joining the Ecosystem</span>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all group">
                                View GitHub Profile <HiOutlineArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                                Track Progress
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full lg:w-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className={`p-8 ${stat.bg} ${stat.border} border rounded-[2rem] text-center shadow-sm min-w-[180px]`}>
                                    <div className={`text-4xl font-black ${stat.color} ${stat.isText ? 'text-2xl' : ''}`}>{stat.count}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-black mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                    <div className="px-12 py-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-emerald-100 rounded-lg">
                                <HiOutlineClock className="text-emerald-600 text-xl" />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-slate-800">My Contribution</h2>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-100">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-amber-600">Pending Review</span>
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {contributions.map((item, i) => (
                            <a 
                                key={i} 
                                href={item.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="px-12 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-all group gap-6 md:gap-0 cursor-pointer"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-4 mb-2">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-200 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 transition-all">
                                                {item.repo}
                                            </span>
                                            <span className="text-slate-400 font-bold text-xs">{item.id}</span>
                                        </div>
                                        <h3 className="text-slate-800 font-black text-lg md:text-xl tracking-tight group-hover:text-indigo-600 transition-colors flex items-center gap-3">
                                            {item.title}
                                            <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-50 transition-all" />
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between md:justify-end gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                    <span className="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-100 rounded-full text-[9px] font-black group-hover:bg-amber-100 transition-all">
                                        {item.status}
                                    </span>
                                    <span className="w-32 text-right group-hover:text-slate-600 transition-colors">{item.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Growth Card */}
                <div className="mt-20 p-16 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[4rem] text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
                    <div className="absolute top-0 right-0 w-[600px] h-full bg-indigo-500/10 blur-[100px] -rotate-12 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <FaGithub className="text-7xl mx-auto mb-10 opacity-20" />
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                            EVERY EXPERT WAS <br />
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">ONCE A BEGINNER.</span>
                        </h2>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm mb-12">Proudly supporting open source and community growth</p>
                        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-lg font-black tracking-tight text-white hover:text-emerald-400 transition-colors group">
                            Follow my contribution journey <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "Open Source Contributor",
            description: "Explore the open-source contribution journey of Monjur Ajad. Committed to building the global developer ecosystem through code contributions and collaboration.",
        },
    }
}

export default Contributor;
