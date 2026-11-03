
import { Gender, GenderFormData } from "@/models/gender.model";
import { api } from "./api";

const ENDPOINT = "/api/genders";

const genderService = {
  async getAll(): Promise<Gender[]> {
    const response = await api.get<Gender[]>(ENDPOINT);
    return response.data;
  },

  async getById(id: number): Promise<Gender> {
    const response = await api.get<Gender>(`${ENDPOINT}/${id}`);
    return response.data;
  },

  async create(data: GenderFormData): Promise<Gender> {
    const response = await api.post<Gender>(ENDPOINT, data);
    return response.data;
  },

  async update(
    id: number,
    data: GenderFormData
  ): Promise<Gender> {
    const response = await api.put<Gender>(`${ENDPOINT}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${ENDPOINT}/${id}`);
  },
};

export default genderService;
