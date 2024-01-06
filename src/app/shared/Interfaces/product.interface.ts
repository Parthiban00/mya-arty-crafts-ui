export interface Product {
  name: string;
  tag: boolean;
  tagContent: string;
  discount: number;
  rating: number;
  originalPrice: number;
  actualPrice: number;
  imageUrl: string;
  _id: string;
  quantity: number;
  categoryId: string;
  prices: Prices[];
  price?: Prices,
  description: string;
  productDetails?: string[];
  reviews?: Review[];
  customizable?: boolean;
  formFields?:DynamicForm[];
  formData?:any;
  images?: Array<{imageUrl:string}>;
}

export interface Prices {
  size: string;
  price: number;
}

export interface DynamicForm {
  label: string;
  control: string;
  type: 'text input' | 'file upload';
  isRequired: boolean,
  placeholder: string
}

export interface Category {
  name: string;
  _id: string;
}

export interface Review {
  fullName: string;
  _id: string;
  rating: number;
  comments: string
}