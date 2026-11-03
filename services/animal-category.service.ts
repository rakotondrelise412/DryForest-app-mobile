
import { api } from "./api";

import type {
  Category,
  CategoryFormData,
  CategoryGetAllResult,
  CategorySearchQuery,
  CategorySearchResult,
} from "@/models/animal-category.model";

const BASE_URL = "/api/categories";

const categoryService = {
  
  findAll: async (
    page = 0,
    size = 10,
  ): Promise<CategoryGetAllResult> => {
    const response = await api.get<CategoryGetAllResult>(
      BASE_URL,
      {
        params: { page, size },
      },
    );

    return response.data;
  },

  
  search: async (
    query: CategorySearchQuery,
  ): Promise<CategorySearchResult> => {
    const response = await api.post<CategorySearchResult>(
      `${BASE_URL}/search`,
      query,
    );

    return response.data;
  },

  findById: async (id: number): Promise<Category> => {
    const response = await api.get<Category>(
      `${BASE_URL}/${id}`,
    );

    return response.data;
  },

 
  create: async (
    data: CategoryFormData,
  ): Promise<Category> => {
    const response = await api.post<Category>(
      BASE_URL,
      data,
    );

    return response.data;
  },

  
  update: async (
    id: number,
    data: CategoryFormData,
  ): Promise<Category> => {
    const response = await api.put<Category>(
      `${BASE_URL}/${id}`,
      data,
    );

    return response.data;
  },

  
  remove: async (id: number): Promise<void> => {
    await api.delete(`${BASE_URL}/${id}`);
  },
};

export default categoryService;
