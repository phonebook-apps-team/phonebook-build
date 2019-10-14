import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStore } from '../action';
// import axios from 'axios';

// import ListPhonebook from '../components/ListPhonebook';

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idUser: props.idUser,
            name: props.name,
            phone: props.phone,
            content: []
        }

        this.handleButtonDelete = this.handleButtonDelete.bind(this)
    }

    handleButtonDelete = (idUser) => {
        console.log('this idUser>',idUser);
        
        // e.preventDefault();
        // const {idUser} =this.state;
        this.props.deleteStore(idUser);
        
    };
       
    render() {
        return (
            <tr>
                <th scope="row">{this.props.idUser}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    <button type="submit" className="btn btn-success mb-2">Edit</button>
                    <button type="submit" className="btn btn-danger mb-2 ml-1 text-white" onClick={() => this.handleButtonDelete(this.props.idUser)} >Delete</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteStore: (idUser, name, phone) => {
        dispatch(deleteStore(idUser, name, phone))
    }
})


export default connect(
    null,
    mapDispatchToProps
)(ItemList)
