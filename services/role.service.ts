import { api } from "./api";
import type { Role, RoleFormData } from "@/models/role.model";

const BASE_URL = "/api/roles";

const findAll = async (): Promise<Role[]> => {
  const response = await api.get<Role[]>(BASE_URL);
  return response.data;
};

const findById = async (id: number): Promise<Role> => {
  const response = await api.get<Role>(`${BASE_URL}/${id}`);
  return response.data;
};

const create = async (data: RoleFormData): Promise<Role> => {
  const response = await api.post<Role>(BASE_URL, data);
  return response.data;
};

const update = async (
  id: number,
  data: RoleFormData
): Promise<Role> => {
  const response = await api.put<Role>(`${BASE_URL}/${id}`, data);
  return response.data;
};

const remove = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`);
};

const roleService = {
  findAll,
  findById,
  create,
  update,
  remove,
};

export default roleService;