
export type Locale = "FR" | "MG" | "EN";

export interface CategoryTranslation {
  id?: number;
  locale: Locale;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: number;
  translations: CategoryTranslation[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryFormData {
  translations: CategoryTranslation[];
}


export interface CategoryGetAllResult {
  content: Category[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}


export interface CategorySearchResult {
  content: Category[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}


export interface CategorySearchQuery {
  name: string;
  page: number;
  size: number;
}
