import { api } from "@/api/server-api";
import { CategoriesResponse } from "@/types/types";

export const fetchCategories = async () => {
    try {
        const data = await api.get<CategoriesResponse>("categories", {
            revalidate: 60,
        });
        return data;
    } catch (error) {
        console.error("Error fetching categories, falling back to local mock data:", error);
    }
};