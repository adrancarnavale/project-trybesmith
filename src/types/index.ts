import {
  PRODUCT_NAME_REQUIRED,
  PRODUCT_AMOUNT_REQUIRED,
  PRODUCT_NAME_BASE,
  PRODUCT_AMOUNT_BASE,
  PRODUCT_NAME_MIN,
  PRODUCT_AMOUNT_MIN,
  USER_USERNAME_BASE,
  USER_USERNAME_MIN,
  USER_USERNAME_REQUIRED,
  USER_CLASSE_BASE,
  USER_CLASSE_MIN,
  USER_CLASSE_REQUIRED,
  USER_LEVEL_BASE,
  USER_LEVEL_MIN,
  USER_LEVEL_REQUIRED,
  USER_PASSWORD_BASE,
  USER_PASSWORD_MIN,
  USER_PASSWORD_REQUIRED,
} from '../constants';

export interface IProduct {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

export interface IProductCreationObject {
  name: string;
  amount: string;
}

export interface IProductsErrorHandling {
  [PRODUCT_NAME_REQUIRED]: () => void;
  [PRODUCT_AMOUNT_REQUIRED]: () => void;
  [PRODUCT_NAME_BASE]: () => void;
  [PRODUCT_AMOUNT_BASE]: () => void;
  [PRODUCT_NAME_MIN]: () => void;
  [PRODUCT_AMOUNT_MIN]: () => void;
}

export interface IUsersErrorHandling {
  [USER_USERNAME_BASE]: () => void;
  [USER_USERNAME_MIN]: () => void;
  [USER_USERNAME_REQUIRED]: () => void;

  [USER_CLASSE_BASE]: () => void;
  [USER_CLASSE_MIN]: () => void;
  [USER_CLASSE_REQUIRED]: () => void;

  [USER_LEVEL_BASE]: () => void;
  [USER_LEVEL_MIN]: () => void;
  [USER_LEVEL_REQUIRED]: () => void;

  [USER_PASSWORD_BASE]: () => void;
  [USER_PASSWORD_MIN]: () => void;
  [USER_PASSWORD_REQUIRED]: () => void;
}

export interface IUserCreationObjectRequest {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IOrderResponse {
  productsIds: number[];
  id: number;
  userId: number;
}

export interface ILoginObjectRequest {
  username: string;
  password: string;
}