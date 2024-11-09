import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const usePagination = () => {
    return useQuery ({
        queryKey: ["pagination", page],
        queryFn: () => request.get("phone", {
            params: {_limit:8, page: page}
        }).then((res) => res.data)
    })
}