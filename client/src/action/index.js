import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2

const URL = 'http://localhost:3001/api/';

const request = axios.create({
<<<<<<< HEAD
  baseUrl: URL,
=======
  baseURL: API_URL,
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
  timeout: 1000
});
console.log('index Running');
console.log(request);



// start load ItemList from database

export const loadItemDataSuccess = (phonebooks) => ({
<<<<<<< HEAD
  type: 'LOAD_ITEM_SUCCESS',
  phonebooks

})

export const loadItemDataFailure = () => ({
  type: 'LOAD_ITEM_FAILURE'
})


export const LoadItem = () => {
  return dispatch => {
    return request
      .get('phonebooks')
      .then(respoense => {
        console.log('response > ', response.data);
        
        dispatch(loadItemDataSuccess(response.data));
=======
    type: 'LOAD_ITEM_SUCCESS',
    phonebooks
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
        console.log('result dari >', response.data)
        dispatch(loadItemDataSuccess(response.data))
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
      })
      .catch(error => {
        console.error(error);
        dispatch(loadItemDataFailure());
      });
<<<<<<< HEAD
  };
};




// end load item data

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
  type: 'POST_STORE',
  id, name, phone
})

export const postStore = (name, phone) => {
  let id = Math.random();
  return dispatch => {
    dispatch(postDataRedux(id, name, phone))
    return request.post('store', { id, name, phone })
=======
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
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
      .then(result => {
        dispatch(postDataSuccess(result.data))
      })
      .catch(err => {
        dispatch(postDataFailure(err))
      })
  }
<<<<<<< HEAD
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
    return request.delete(`store/${id}`)
=======
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
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
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

<<<<<<< HEAD
export const resendStore = (id, name, phone) => {
  return dispatch => {
    return request.post('store', { id, name, phone })
=======
  export const resendStore = (id, name, phone) => {
    return dispatch => {
      return axios.post('http://localhost:3001/api/phonebooks', {id, name, phone})
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
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