import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, SELLER_LIST_FAIL, SELLER_LIST_SUCCESS } from "../Constants/Constant";




function productListReducer(state = {product: {},loading:true }, action) {

    switch (action.type) {
      
      case PRODUCT_LIST_SUCCESS:
        return { product: action.payload,loading:false };
      case PRODUCT_LIST_FAIL:
        return { error: action.payload,loading:false }
      default:
        return state;
    }
  }



  function sellerListReducer(state = {seller: {},loading:true }, action) {

    switch (action.type) {
      
      case SELLER_LIST_SUCCESS:
        return { seller: action.payload,loading:false };
      case SELLER_LIST_FAIL:
        return { error: action.payload,loading:false }
      default:
        return state;
    }
  }


  export { productListReducer,sellerListReducer }
