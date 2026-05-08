import { HiOutlineExternalLink } from "react-icons/hi";

const PortfolioCard = ({ data }) => {
    return (
        <div className="glass-card group overflow-hidden flex flex-col rounded-[2rem]">
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={data?.image}
                    alt={data?.projectName}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-center">
                    <div className="flex gap-2">
                        {data.technologiesUsed.slice(0, 3).map((tech, key) => (
                            <span key={key} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                                {tech.tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black tracking-tighter leading-tight group-hover:text-Green transition-colors">
                        {data?.projectName}
                    </h3>
                    <a
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl text-gray-500 hover:text-white transition-colors"
                    >
                        <HiOutlineExternalLink />
                    </a>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {data?.projectDetail}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-600">Case Study</span>
                    <a href={data?.url} target="_blank" rel="noreferrer" className="text-xs font-bold text-white group-hover:text-Green transition-colors flex items-center gap-2">
                        EXPLORE <HiOutlineExternalLink />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
