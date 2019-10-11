import axios from 'axios'


const API_URL = 'http://localhost:3001/api/'

const request =  axios.create({
    baseUrl: API_URL,
    timeout: 1000
});


// start load ItemList from database

export const loadItemDataSuccess = (getting) => ({
    type: 'LOAD_ITEM_SUCCESS',
    getting

  })
  
  
  export const loadItemDataFailure = () => ({
    type: 'LOAD_ITEM_FAILURE'
  })
  
  export const LoadItem = () => {
    return dispatch => {
      return request.get(`phonebooks`)
      .then(function (response) {
        console.log('data Response >', response);
        
        dispatch(loadItemDataSuccess(response.data))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadItemDataFailure())
      });
    }
  }
  
  // end load item data