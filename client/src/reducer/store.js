const store = (state = [], action) => {

  switch (action.type) {

    case 'LOAD_ITEM_SUCCESS':
    return action.phonebooks.map((item)=>{
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
      return action.phonebooks.map((item) => {
        item.sent = true;
        return item
      })

    case 'POST_STORE_FAILURE':
      return state.map((item) => {
        if (item.idUser === action.idUser) {
          item.sent = false;
        }
        return item
      })

    case 'DELETE_STORE':
      return state.filter((item) => item.idUser !== action.idUser)

    case 'DELETE_STORE_SUCCESS':
      console.log('store suksess');
      return state

    case 'DELETE_STORE_FAILURE':
    default:
      return state
  }
}

export default store