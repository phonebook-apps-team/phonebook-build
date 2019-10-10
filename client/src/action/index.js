import axios from 'axios'

const API_URL = 'localhost:3001/api/phonebooks/'

const request =  axios.create({
    baseUrl: API_URL,
    timeout: 1000
});

// start load ItemList from database
export const loadItemDataSuccess = (store) => ({
    type: 'LOAD_ITEM_SUCCESS',
    store

  })
  console.log('data item success >',store);
  
  
  export const loadItemDataFailure = () => ({
    type: 'LOAD_ITEM_FAILURE'
  })
  
  export const LoadItem = () => {
    return dispatch => {
      return request.get('store')
      .then(function (response) {
        dispatch(loadItemDataSuccess(response.data))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadItemDataFailure())
      });
    }
  }
  
  // end load item data