import { api } from "@/api/server-api";
import { ProjectsResponse } from "@/types/types";

export const fetchProjects = async () => {
  try {
    const data = await api.get<ProjectsResponse>("projects", {
      params: { page: 1, limit: 10 },
      revalidate: 60,
    });
    return data;
  } catch (error) {
    console.error("Error fetching projects, falling back to local mock data:", error);
  }
};