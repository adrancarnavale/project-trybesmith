export const PRODUCT_NAME_REQUIRED = '"name" is required';
export const PRODUCT_NAME_BASE = '"name" must be a string';
export const PRODUCT_NAME_MIN = '"name" length must be at least 3 characters long';

export const PRODUCT_AMOUNT_REQUIRED = '"amount" is required';
export const PRODUCT_AMOUNT_BASE = '"amount" must be a string';
export const PRODUCT_AMOUNT_MIN = '"amount" length must be at least 3 characters long';

export const errorHandlingProductsObject = {
  [PRODUCT_NAME_REQUIRED]: 400,
  [PRODUCT_AMOUNT_REQUIRED]: 400,
  [PRODUCT_NAME_BASE]: 422,
  [PRODUCT_AMOUNT_BASE]: 422,
  [PRODUCT_NAME_MIN]: 422,
  [PRODUCT_AMOUNT_MIN]: 422,
};

export const JWT_SECRET = '19C_&&_NHG';

export const USER_USERNAME_BASE = '"username" must be a string';
export const USER_USERNAME_MIN = '"username" length must be at least 3 characters long';
export const USER_USERNAME_REQUIRED = '"username" is required';

export const USER_CLASSE_BASE = '"classe" must be a string';
export const USER_CLASSE_MIN = '"classe" length must be at least 3 characters long';
export const USER_CLASSE_REQUIRED = '"classe" is required';

export const USER_LEVEL_BASE = '"level" must be a number';
export const USER_LEVEL_MIN = '"level" must be greater than or equal to 1';
export const USER_LEVEL_REQUIRED = '"level" is required';

export const USER_PASSWORD_BASE = '"password" must be a string';
export const USER_PASSWORD_MIN = '"password" length must be at least 8 characters long';
export const USER_PASSWORD_REQUIRED = '"password" is required';

export const errorHandlingUserObject = {
  [USER_USERNAME_BASE]: 422,
  [USER_USERNAME_MIN]: 422,
  [USER_USERNAME_REQUIRED]: 400,
  
  [USER_CLASSE_BASE]: 422,
  [USER_CLASSE_MIN]: 422,
  [USER_CLASSE_REQUIRED]: 400,

  [USER_LEVEL_BASE]: 422,
  [USER_LEVEL_MIN]: 422,
  [USER_LEVEL_REQUIRED]: 400,

  [USER_PASSWORD_BASE]: 422,
  [USER_PASSWORD_MIN]: 422,
  [USER_PASSWORD_REQUIRED]: 400,
};