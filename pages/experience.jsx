import { WORK_EXPERIENCE } from '../constants/constants';
import { FaBriefcase, FaAward, FaBuilding, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white pb-20">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 py-20 mb-12">
                <div className="container mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-indigo-600 text-[9px] uppercase tracking-[0.3em] font-black mb-4">
                        7+ Years Experience
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                        Professional <span className="text-indigo-600">Journey.</span>
                    </h1>
                    <p className="text-slate-500 font-bold max-w-xl text-sm leading-relaxed">
                        A concise timeline of my engineering impact across Fintech, ERP, and Enterprise systems.
                    </p>
                </div>
            </div>
            
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-100">
                    {WORK_EXPERIENCE.map((exp, i) => (
                        <div key={i} className="relative pl-14 group">
                            {/* Dot */}
                            <div className="absolute left-4 top-2 w-4 h-4 bg-white border-2 border-slate-200 rounded-full z-10 group-hover:border-indigo-500 group-hover:scale-125 transition-all"></div>

                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <div className="flex items-center gap-2 text-indigo-600 font-black text-[9px] uppercase tracking-widest mb-1">
                                            <FaBuilding className="text-xs" /> {exp.company}
                                            {exp.company.includes('Japanese') && <span className="ml-1 text-[8px] px-1.5 py-0.5 bg-red-50 text-red-500 rounded border border-red-100">JP 🇯🇵</span>}
                                        </div>
                                        <h3 className="text-xl font-black tracking-tight text-slate-800">{exp.role}</h3>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-100 self-start">
                                        <FaCalendarAlt /> {exp.period}
                                    </span>
                                </div>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                                    {exp.desc}
                                </p>

                                <div className="space-y-2 mt-4">
                                    <div className="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-2">Key Contributions & Skills</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {exp.achievements.map((ach, idx) => (
                                            <div key={idx} className="flex items-start gap-2 p-2 bg-slate-50/30 rounded-lg border border-slate-100/50 hover:bg-indigo-50 transition-colors group/item">
                                                <FaChevronRight className="text-indigo-400 mt-1 text-[8px] flex-shrink-0" />
                                                <span className="text-slate-600 font-bold text-[10px] leading-tight">{ach}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Quote */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 italic">Crafting Excellence.</h2>
                        <p className="text-indigo-100 font-bold uppercase tracking-widest text-[10px] opacity-80">Every role was a step towards architectural mastery.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "Experience",
            description: "Work experience of Monjur Ajad as a Senior Software Engineer and Team Lead in various multi-national and local tech firms.",
        },
    }
}

export default Experience;
