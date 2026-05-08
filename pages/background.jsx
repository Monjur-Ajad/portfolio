import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import background from "./api/background";

function Background() {
    const isLoading = false
    const data = background

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <div className="flex flex-col mb-16">
                <div className="text-emerald-500 text-[10px] uppercase tracking-[0.4em] font-black mb-4">Journey</div>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">CAREER <br /> <span className="text-gray-600">PATH.</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Experience Column */}
                <div className="flex flex-col gap-y-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-2xl font-black tracking-tighter">EXPERIENCE</div>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        {isLoading ?
                            [1, 2, 3].map((_, index) => (
                                <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }
                    </div>
                </div>

                {/* Education Column */}
                <div className="flex flex-col gap-y-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-2xl font-black tracking-tighter text-gray-600">EDUCATION</div>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        {isLoading ?
                            [1, 2, 3].map((_, index) => (
                                <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[0]?.eduCards?.map((data, key) => (
                                <Edu_Card key={key} data={data} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Career Path",
            description: "Explore the academic and professional journey of Monjurul Islam Ajad, featuring educational milestones and career experiences.",
        },
    }
}

export default Background;
