import { 
  GET_CATEGORIES, 
  GET_DETAILED_CATEGORIES,
  GET_PRODUCTS,
  API, 
  FETCH_DETAILS 
} from "./types";

export function getMainCategories() {
  return apiAction({
    url: "http://23.111.122.219:8080/market/categories/",
    onSuccess: setCategories,
    onFailure: () => console.log("Error"),
    label: FETCH_DETAILS
  });
}

export function getDetailedCategories(categoryId){
  return apiAction({
    url: `http://23.111.122.219:8080/market/categories/detailed/${categoryId}`,
    onSuccess: setDetailedCategories,
    onFailure: () => console.log("Error"),
  });
}

function setDetailedCategories(data){
  console.log(data)
  return {
    type: GET_DETAILED_CATEGORIES,
    payload: data
  };
}

function setCategories(data) {
  const mainCategories = data.filter(val => val.parent_category === null)
  
  return {
    type: GET_CATEGORIES,
    payload: mainCategories
  };
}

export function getProducts() {
  return apiAction({
    url: `http://23.111.122.219:8080/market/products/`,
    onSuccess: setProducts,
    onFailure: () => console.log("Error"),
  });
}

export function getProductsNextPage(page){
  // console.log(page)
  return apiAction({
    url: `http://23.111.122.219:8080/market/products/?page=${page}`,
    onSuccess: setProducts,
    onFailure: () => console.log("Error"),
  });
}

function setProducts(data){
  return {
    type: GET_PRODUCTS,
    payload: data.results
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
