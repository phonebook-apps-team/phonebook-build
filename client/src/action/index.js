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
  
  export const loadItemDataFailure = () => ({
    type: 'LOAD_ITEM_FAILURE'
  })
  
  // end load item data
  
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
  
  // start post data
  export const postDataSuccess = (store) => ({
    type: 'POST_STORE_SUCCESS',
    store
  })

  export const postDataFailure = (id) => ({
    type: 'POST_STORE_SUCCESS',
    id
  })

  export const postDataRedux = (id, name, phone) => ({
    type:'POST_STORE',
    id, name, phone
  })

  export const postStore = (name, phone) => {
    let id = Math.random();
    return dispatch => {
      dispatch(postDataRedux(id, name, phone))
      return request.post('store', {id, name, phone})
      .then(result => {
        dispatch(postDataSuccess(result.data))
      })
      .catch(err => {
        dispatch(postDataFailure(err))
      })
    }
  }
  