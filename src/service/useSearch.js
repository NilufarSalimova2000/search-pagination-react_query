import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useSearch = (input = "") => {
    return (
        useQuery({
            queryKey: ["search", input],
            queryFn: () => request.get("/all", {
                params: {
                    title_like: input ? input : "00000"
                }
            }).then((res) => res.data)
        })
    )
}