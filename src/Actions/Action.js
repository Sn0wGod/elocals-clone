import axios from 'axios';
import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, SELLER_LIST_SUCCESS, SELLER_LIST_FAIL } from '../Constants/Constant';


const listProducts = () => async (dispatch) => {
    try {
  
      
      const { data } = await axios.get("http://35.225.50.138:9091/productDetail?sellerId=12&productId=9&variantId=6");
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
  
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  }


  

  const listSeller = () => async (dispatch) => {
    try {
  
      
      const { data } = await axios.get("http://35.225.50.138:9091/otherSellers?productId=9&variantId=6");
      dispatch({ type: SELLER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
  
      dispatch({ type: SELLER_LIST_FAIL, payload: error.message });
    }
  }



  export { listProducts,listSeller }