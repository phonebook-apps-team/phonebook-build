const store = (state = [], action) => {

    switch (action.type) {
      
      case 'LOAD_ITEM_SUCCESS':
<<<<<<< HEAD
      return action.phonbooks.map((item)=>{
=======
      return action.phonebooks.map((item)=>{
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2
        item.sent = true;
        return item
      })
  
      case 'POST_STORE':
      return [
        ...state,
        {
          idUser: action.idUser,
          name: action.name,
          phone: action.phone,
          sent: true
        }
      ]
  
      case 'POST_STORE_SUCCESS':
      return action.store.map((item)=>{
        item.sent = true;
        return item
      })
  
      case 'POST_STORE_FAILURE':
      return state.map((item)=>{
        if(item.idUser === action.idUser){
          item.sent = false;
        }
        return item
      })
  
      case 'DELETE_STORE':
      return state.filter((item) => item.idUser !== action.idUser)
  
      case 'DELETE_STORE_SUCCESS':
      return state
  
      case 'LOAD_STORE_FAILURE':
      case 'DELETE_STORE_FAILURE':
      default:
      return state
    }
  }
  
  export default store