import { request } from "../../../config/request";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetComputers = () => {
    return (
        useInfiniteQuery({
            queryKey: ["product"],
            initialPageParam: 1,
            queryFn: ({pageParam = 1}) => {
                return request.get("/computer", {params:{_page: pageParam,_limit:6}}).then((res) => res.data)
            },
            getNextPageParam:(lastpage,allpage,lastPageParms)=> {
                let last = allpage.length + 1
                
                return  last < 6 ? last : undefined
              } 
        })
    )
    

}