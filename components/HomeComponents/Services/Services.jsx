import { SERVICES } from "../../../constants/constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div id="services" className="px-2 md:px-8 py-10">
            <div className="flex flex-col mb-8">
                <span className="text-Green font-cascadia-normal text-sm uppercase tracking-widest">My Services</span>
                <h2 className="text-3xl md:text-4xl text-Snow font-bold mt-2">Specializing In</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
