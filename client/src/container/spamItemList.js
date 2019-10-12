// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { LoadItem,deleteStore } from '../action/index'

// class ItemList extends Component {
//     state = {
//         name: '',
//         phone: '',
//         content: []
//     }
    

//     componentDidMount() {
//         this.props.LoadItem();

//         this.props.deleteStore();
//     }


//     handleClick = idRemove => {
//         const requestOptions = {
//             method: 'delete'
//         };
//         fetch('http://localhost:3001/api/phonebooks' + idRemove,
//             requestOptions.then((response) => {
//                 console.log(response);
//                 return response.json();

//             }).then((data) => {
//                 console.log(data);
//                 this.state.LoadItem();

//             }).catch(err => {
//                 console.log(err);
                
//             })
//         )
//     }
//     render() {
        
//         {this.state.content.map((item,index) => {
//             return (
//                 <tr>
//                     <th scope="row" key={index}>{this.props.idUser}</th>
//                     <td>{this.props.name}</td>
//                     <td>{this.props.phone}</td>
//                     <td>
//                         <button type="submit" class="btn btn-success mb-2">Edit</button>
//                         <button type="submit" class="btn btn-danger mb-2 text-white" onClick={this.handleClick(item.idRemove)} >Delete</button>
//                     </td>
//                 </tr>
//             )
//         })}
//     }
// }

// const mapStateToProps = (state) => ({
//     getting: state.getting
// })

// const mapDispatchToProps = (dispatch) => ({
//     LoadItem: () => dispatch(LoadItem())
// })

// const mapDeleteToProps = (dispatch) => ({
//     deleteStore: () => dispatch(deleteStore())
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     mapDeleteToProps
// )(ItemList)