import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});


// start load ItemList from database

export const loadItemDataSuccess = store => ({
    type: 'LOAD_ITEM_SUCCESS',
    store
    
  })
  
  console.log('result from', loadItemDataSuccess());
  
  
  export const loadItemDataFailure = () => ({
    type: 'LOAD_ITEM_FAILURE'
  })

  
  // end load item data
  
  export const LoadItem = () => {
    return dispatch => {
      return request.get('phonebooks')
      .then(response => {
        
        console.log('result dari phonebooks >', response.data)

        dispatch(loadItemDataSuccess(response.data))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadItemDataFailure())
      });
    }
  }
  
  // start post data
 const postDataSuccess = phonebooks => ({
    type: 'POST_STORE_SUCCESS',
    phonebooks
  })

  export const postDataFailure = (_id) => ({
    type: 'POST_STORE_SUCCESS',
    _id
  })

  export const postDataRedux = (_id, name, phone) => ({
    type:'POST_STORE',
    _id, name, phone
  })

  export const postStore = (name, phone) => {
    let _id = Date.now();
    return dispatch => {
      dispatch(postDataRedux(_id, name, phone))
      return request.post('phonebooks', {_id, name, phone})
      .then(result => {
        console.log('this result data post > ', result.data);
        
        dispatch(postDataSuccess(result.data))
      })
      .catch(err => {
        dispatch(postDataFailure(err))
      })
    }
  }
  // End post data

  // Start Delete data
  const deleteStoreRedux = (_id) => ({
    type: 'DELETE_STORE',
    _id
  })

  export const deleteStoreSuccess = (store) => ({
    type: 'DELETE_STORE_SUCCESS',
    store
  })

  export const deleteStoreFailure = () => ({
    type: 'DELETE_STORE_FAILURE'
  })

  export const deleteStore = (_id) => {
    return dispatch => {
      dispatch(deleteStoreRedux(_id))
      return request.delete(`phonebooks/${_id}`)
      .then(result => {
        dispatch(deleteStoreSuccess(result.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(deleteStoreFailure(_id))
      });
    }
  }
  
  //END Delete Data

  // Start Resend data

  export const resendStore = (id, name, phone) => {
    return dispatch => {
      return axios.post('http://localhost:3001/api/phonebooks', {id, name, phone})
      .then(response => {
        dispatch(postDataSuccess(response.data))
      })
      .catch(function (err) {
        console.log(err);
        dispatch(postDataFailure(id))
      })
    }
  }
  // End resend data

  //start edit data
  export const putPhonebookSuccess = store => ({
    type: 'PUT_PHONEBOOKS_SUCCESS',
    store
  })
  export const putPhonebookFailure = _id => ({
    type: 'PUT_PHONEBOOKS_FAILURE',
    _id
  })
  const putPhonebookRedux = (_id, name, phone) => ({
    type: 'PUT_PHONEBOOKS',
    _id, 
    name,
    phone
  });
  export const putPhonebook = (_id, name, phone) => {
    return dispatch => {
      dispatch(putPhonebookRedux(_id, name, phone));
      return request
      .put(`phonebooks/${_id}`, {name, phone})
      .then(response => {
        dispatch(putPhonebookSuccess(response.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(putPhonebookFailure());
      })
    }
  }
  // end edit data