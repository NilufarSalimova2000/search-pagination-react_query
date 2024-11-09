import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useGetPhones = (page = 1) => {
    return useQuery({
        queryKey: ["product", page],
        queryFn: () =>
            request.get("/phones", {
                params: {
                    _limit: 8,
                    _page: page,
                },
            }).then((res) => {
                const data = res.data;  // Ma'lumotlarni olamiz
                const countData = res?.headers["x-total-count"]; // "X-Total-Count" headerini olish
                const pageSize = countData
                    ? Math.ceil(Number(countData) / 8) // Sahifa sonini hisoblash
                    : 0;
                return { data, pageSize }; // Ma'lumot va sahifa sonini qaytarish
            }),
    });
};
