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
 const postDataSuccess = (store) => ({
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
    let id = Date.now();
    return dispatch => {
      dispatch(postDataRedux(id, name, phone))
      return request.post('phonebooks', {id, name, phone})
      .then(result => {
        dispatch(postDataSuccess(result.data))
      })
      .catch(err => {
        dispatch(postDataFailure(err))
      })
    }
  }
  // End post data

  // Start Delete data
  const deleteStoreRedux = (id) => ({
    type: 'DELETE_STORE',
    id
  })

  export const deleteStoreSuccess = (store) => ({
    type: 'DELETE_STORE_SUCCESS',
    store
  })

  export const deleteStoreFailure = () => ({
    type: 'DELETE_STORE_FAILURE'
  })

  export const deleteStore = (id) => {
    return dispatch => {
      dispatch(deleteStoreRedux(id))
      return axios.delete(`http://localhost:3001/api/phonebooks/${id}`)
      .then(result => {
        dispatch(deleteStoreSuccess(result.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(deleteStoreFailure(id))
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
  export const putPhonebookFailure = idUser => ({
    type: 'PUT_PHONEBOOKS_FAILURE',
    idUser
  })
  const putPhonebookRedux = (idUser, name, phone) => ({
    type: 'PUT_PHONEBOOKS',
    idUser, 
    name,
    phone
  });
  export const putPhonebook = (idUser, name, phone) => {
    return dispatch => {
      dispatchEvent(putPhonebookRedux(idUser, name, phone));
      return request
      .put(`phonebooks/${idUser}`, {name, phone})
      .then(response => {
        dispatchEvent(putPhonebookSuccess(response.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(putPhonebookFailure());
      })
    }
  }
  // end edit data