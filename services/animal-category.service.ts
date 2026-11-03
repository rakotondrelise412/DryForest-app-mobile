
import { api } from "./api";

import type {
  Category,
  CategoryFormData,
  CategorySearchQuery,
  CategorySearchResult,
} from "@/models/animal-category.model";

const BASE_URL = "/api/categories";

const findAll = async (
  page = 0,
  size = 10,
): Promise<CategorySearchResult> => {
  const response = await api.get<CategorySearchResult>(BASE_URL, {
    params: { page, size },
  });

  return response.data;
};

const findById = async (id: number): Promise<Category> => {
  const response = await api.get<Category>(`${BASE_URL}/${id}`);

  return response.data;
};

const search = async (
  query: CategorySearchQuery,
): Promise<CategorySearchResult> => {
  const response = await api.post<CategorySearchResult>(
    `${BASE_URL}/search`,
    query,
  );

  return response.data;
};

const create = async (
  data: CategoryFormData,
): Promise<Category> => {
  const response = await api.post<Category>(BASE_URL, data);

  return response.data;
};

const update = async (
  id: number,
  data: CategoryFormData,
): Promise<Category> => {
  const response = await api.put<Category>(`${BASE_URL}/${id}`, data);

  return response.data;
};

const remove = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`);
};

const categoryService = {
  findAll,
  findById,
  search,
  create,
  update,
  remove,
};

export default categoryService;
