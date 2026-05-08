import { MdOutlineDesignServices } from 'react-icons/md';
import { HiOutlineCode, HiOutlineServer, HiOutlineUsers } from 'react-icons/hi';

const ServiceCard = ({ service }) => {
    const getIcon = (title) => {
        if (title.includes('Development')) return <HiOutlineCode className="text-3xl text-Green" />;
        if (title.includes('Architecture')) return <HiOutlineServer className="text-3xl text-Green" />;
        if (title.includes('FinTech')) return <MdOutlineDesignServices className="text-3xl text-Green" />;
        if (title.includes('Leadership')) return <HiOutlineUsers className="text-3xl text-Green" />;
        return <MdOutlineDesignServices className="text-3xl text-Green" />;
    };

    return (
        <div className="card_stylings p-8 flex flex-col gap-y-4 hover:translate-y-[-5px] transition-all duration-300">
            <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl border border-Green/20">
                {getIcon(service.title)}
            </div>
            <h3 className="text-xl text-Snow font-bold">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
        </div>
    );
};

export default ServiceCard;
