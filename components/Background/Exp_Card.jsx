const Exp_Card = ({ data }) => {
    return (
        <div className="glass-card p-10 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all duration-500 rounded-[2rem]">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-black tracking-tighter leading-tight group-hover:text-Green transition-colors">
                        {data.title}
                    </h3>
                    <div className="text-sm text-Green font-bold tracking-widest uppercase mt-1">
                        {data.role}
                    </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {data.year}
                </div>
            </div>

            <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                <a href={data.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {data.url.replace('https://', '')}
                </a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
                {data.desc}
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
                <span>{data.location}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>Full Time</span>
            </div>
        </div>
    )
}

export default Exp_Card
