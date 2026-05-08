import { api } from "@/api/server-api";
import { CategoriesResponse, ProjectsResponse } from "@/types/projects";

export const fetchProjects = async () => {
  try {
    const data = await api.get<ProjectsResponse>(
      "projects",
      {
        params: {
          page: 1,
          limit: 10,
        },
        revalidate: 60,
      }
    );

    return data;
  } catch (error) {
    console.error(
      "Error fetching projects, falling back to local mock data:",
      error
    );

  }
};

export const fetchCategories = async () => {
  try {
    const data = await api.get<CategoriesResponse>(
      "categories",
      {
        revalidate: 60,
      }
    );

    return data;
  } catch (error) {
    console.error("Error fetching categories, falling back to local mock data:", error);
  }
};