const Edu_Card = ({ data }) => {
    return (
        <div className="glass-card p-10 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all duration-500 rounded-[2rem]">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-black tracking-tighter leading-tight group-hover:text-Green transition-colors">
                        {data.title}
                    </h3>
                    <div className="text-sm text-gray-500 font-bold tracking-widest uppercase mt-1">
                        {data.degree}
                    </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-Green bg-Green/5 px-3 py-1 rounded-full border border-Green/10">
                    {data.year}
                </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
                {data.detail}
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
                <span>{data.location}</span>
                {data.cgpa && (
                    <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span>CGPA: {data.cgpa}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Edu_Card
