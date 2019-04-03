export const GET_DATA = "GET_DATA";
export const SORT = "SORT";
export const GET_PAGES_NUMBERS = "GET_PAGES_NUMBERS";
export const GET_PRODUCTS_ON_PAGE = "GET_PRODUCTS_ON_PAGE";
export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const UPDATE_PRODUCTS_IN_MAGAZINE = "UPDATE_PRODUCTS_IN_MAGAZINE";
export const PRODUCT_IN_CART_COUNTER = "PRODUCT_IN_CART_COUNTER";

export function getData() {
  return {
    type: GET_DATA
  };
}

export function sort(sortParams) {
  return {
    type: SORT,
    sortParams
  };
}

export function pagesNumbers() {
  return {
    type: GET_PAGES_NUMBERS
  };
}

export function getProductsOnPage() {
  return {
    type: GET_PRODUCTS_ON_PAGE
  };
}

export function activePage(number) {
  return {
    type: ACTIVE_PAGE,
    number
  };
}

export function getProduct(id) {
  return {
    type: GET_PRODUCT,
    id
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id
  };
}

export function defFromCart(id) {
  return {
    type: DEL_FROM_CART,
    id
  };
}

export function productInCartCount(id, value) {
  return {
    type: PRODUCT_IN_CART_COUNTER,
    id,
    value
  };
}

export function updateProductsInMagazine() {
  return {
    type: UPDATE_PRODUCTS_IN_MAGAZINE
  };
}
