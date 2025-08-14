import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import expertise from "../../../pages/api/expertise";
import { useEffect } from "react";
const MyExpertise = () => {

    const data = expertise;
    let  isLoading = false
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         isLoading = false
    //     },800)
    // },[data])

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default MyExpertise