import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { LoadItem } from '../action/index'

class ItemList extends Component {

    // componentDidMount() {
    //     this.props.LoadItem();
    // }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.idUser}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    <button type="submit" class="btn btn-success mb-2">Edit</button>
                    <button type="submit" class="btn btn-danger mb-2 text-white">Delete</button>
                </td>
            </tr>
        )
    }
}

<<<<<<< HEAD
// const mapStateToProps = (state) => ({
//     store: state.store
// })
=======
const mapStateToProps = (state) => ({
    phonebooks: state.phonebooks
})
>>>>>>> 8f8a781bb915ac5f6be78a91a4af3d6eed9ae8e2

// const mapDispatchToProps = (dispatch) => ({
//     LoadItem: () => dispatch(LoadItem())
// })

export default ItemList