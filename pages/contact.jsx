import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaShieldAlt, FaRocket, FaGlobe } from 'react-icons/fa';
import { HiMail, HiUser, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Modal } from 'antd';
import { CONTACTS, SOCIAL_LINKS } from '../constants/constants';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-[#f15a24] selection:text-white">
            {/* Dark Navy Header */}
            <section className="bg-[#003152] py-32 text-center text-white px-6">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Let's Build Smarter, <span className="text-[#f15a24]">Together.</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Get in touch with the leading software engineering and technical resource hub.
                    </p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Scale your engineering team.</h2>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                Direct access to senior full-stack expertise and secure FinTech architectural governance.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                    <FaRocket />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Managed Scaling</h4>
                                    <p className="text-slate-500 text-sm">Senior engineers available for immediate impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">FinTech Governance</h4>
                                    <p className="text-slate-500 text-sm">Architectural standards managed locally by Monjur.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <FaGlobe />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Global Execution</h4>
                                    <p className="text-slate-500 text-sm">High-standard output with incredible efficiency.</p>
                                </div>
                            </div>
                        </div>

                        {/* Direct Contact Card */}
                        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-4">Direct Contact</div>

                            <a href={`mailto:${CONTACTS.EMAIL}`} className="flex items-center gap-6 group">
                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-indigo-500 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <HiMail />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Email Us</div>
                                    <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{CONTACTS.EMAIL}</div>
                                </div>
                            </a>

                            <a href={`tel:${CONTACTS.PHONE}`} className="flex items-center gap-6 group">
                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-indigo-500 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <FaPhone />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Call Us</div>
                                    <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{CONTACTS.PHONE}</div>
                                </div>
                            </a>

                            <a href={`https://wa.me/${CONTACTS.PHONE.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-emerald-500 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black uppercase text-slate-400 mb-1">WhatsApp</div>
                                    <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{CONTACTS.PHONE}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group border-t border-slate-200 pt-8">
                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 shadow-sm">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Headquarters</div>
                                    <div className="font-bold text-slate-900">Dhaka, Bangladesh</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-100 relative">
                        <h3 className="text-3xl font-bold text-slate-900 mb-12">Drop us a line</h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 ml-1">Name *</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-[#f15a24] transition-all font-medium text-slate-900" placeholder="Write your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 ml-1">Email *</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-[#f15a24] transition-all font-medium text-slate-900" placeholder="Write your email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 ml-1">Company Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-[#f15a24] transition-all font-medium text-slate-900" placeholder="Write company name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 ml-1">Service</label>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-[#f15a24] transition-all font-medium text-slate-500">
                                        <option>Select a service</option>
                                        <option>FinTech Architecture</option>
                                        <option>Full-Stack Development</option>
                                        <option>System Consultation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 ml-1">Message Content *</label>
                                <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#f15a24] transition-all font-medium text-slate-900 resize-none" placeholder="Tell us about your requirements..." />
                            </div>


                            <button
                                onClick={() => setIsOpen(true)}
                                className="w-full py-5 bg-[#f15a24] text-white font-bold rounded-2xl hover:bg-[#d94e1c] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-orange-200"
                            >
                                Send Message <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Modal
                centered
                open={isOpen}
                footer={null}
                onCancel={() => setIsOpen(false)}
                className="premium-modal"
                bodyStyle={{ padding: 0 }}
            >
                <div className='flex flex-col items-center justify-center p-16 text-center bg-white rounded-[3rem]'>
                    <div className='w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-8 animate-bounce text-4xl'>
                        🚀
                    </div>
                    <h2 className='text-slate-900 font-bold text-4xl mb-4 tracking-tighter'>ALMOST LIVE!</h2>
                    <p className='text-slate-500 mb-10 font-medium leading-relaxed'>
                        Your message has been captured. We are currently optimizing our direct routing system.
                    </p>
                    <button onClick={() => setIsOpen(false)} className="px-12 py-4 bg-[#f15a24] text-white font-bold rounded-2xl hover:bg-[#d94e1c] transition-all">
                        UNDERSTOOD
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "Contact",
            description: "Get in touch with Monjurul Islam Ajad for tech consultation, software development projects, or leadership roles.",
        },
    }
}

export default Contact;