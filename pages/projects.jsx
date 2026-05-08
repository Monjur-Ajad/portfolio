import { useState } from 'react';
import PortfolioData from './api/portfolio';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import { HiOutlineFolderOpen } from 'react-icons/hi';

const Projects = () => {
    const [filter, setFilter] = useState('All Projects');
    const categories = ['All Projects', 'International', 'Local'];

    const filteredData = filter === 'All Projects'
        ? PortfolioData
        : PortfolioData.filter(item => item.category === filter);

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white pb-20">
            {/* Unique "Split-Layer" Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                {/* Background Text Overlay */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                    <div className="text-[20rem] font-black tracking-tighter uppercase whitespace-nowrap">CREATIVE WORKS</div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-lg text-emerald-500 text-[9px] uppercase tracking-[0.4em] font-black mb-6">
                                Portfolio
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                                Selected <br /> <span className="text-emerald-500 italic">Projects.</span>
                            </h1>
                            <p className="text-slate-500 text-sm font-bold max-w-sm leading-relaxed border-l-4 border-emerald-500 pl-4">
                                A compact showcase of mission-critical systems and high-performance digital products.
                            </p>
                        </div>

                        <div className="md:w-1/2 flex justify-end">
                            <div className="flex flex-wrap gap-3 justify-end">
                                {categories.map((cat, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setFilter(cat)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 transform hover:-translate-y-1 ${filter === cat
                                            ? 'bg-slate-900 text-white shadow-2xl shadow-slate-400 border-slate-900 scale-105'
                                            : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300 hover:text-slate-600 shadow-sm'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Compact but Highly Visible Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((data, key) => (
                        <div key={key} className="group">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl hover:border-indigo-500 transition-all duration-500">
                                {/* Clear Image Container */}
                                <div className="relative aspect-video overflow-hidden bg-slate-50 border-b border-slate-100">
                                    <img
                                        src={data.image}
                                        alt={data.projectName}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Action Link */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <a
                                            href={data.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2 bg-white text-slate-900 font-black uppercase tracking-widest text-[9px] rounded-lg shadow-xl"
                                        >
                                            Visit Site
                                        </a>
                                    </div>
                                </div>

                                {/* Content - Visible & Compact */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-[8px] font-black uppercase tracking-widest text-indigo-500">{data.category}</div>
                                        <div className="text-[10px] font-black text-slate-200">0{key + 1}</div>
                                    </div>
                                    <h3 className="text-lg font-black tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-1">
                                        {data.projectName}
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium line-clamp-2">
                                        {data.projectDetail}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-50">
                                        {data.technologiesUsed.map((tech, idx) => (
                                            <span key={idx} className="px-2 py-0.5 bg-slate-50 text-[8px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 rounded">
                                                {tech.tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal CTA */}
                <div className="mt-20 p-12 bg-white border border-slate-100 rounded-[3rem] text-center shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                    <h2 className="text-2xl font-black tracking-tighter mb-4">WANT TO SEE THE REPOS?</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Full source code available on GitHub</p>
                    <a
                        href="https://github.com/Monjur-Ajad"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-slate-900 transition-colors"
                    >
                        Browse GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
