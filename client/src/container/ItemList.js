import React, { Component } from 'react';
import {connect} from 'react-redux';
import { putPhonebook, deleteStore } from '../action';

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editButton: false,
            _id: props._id,
            idUser: props.idUser,
            name: props.name,
            phone: props.phone
        }
        this.handleEditOn = this.handleEditOn.bind(this)
        this.handleEditOff = this.handleEditOff.bind(this)
    }

    handleNameChange = e => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
      };
   

    handleEditOn(e) {
        e.preventDefault();
        this.setState({ editButton: true });
    }

    handleEditOff(e) {
        e.preventDefault()
        this.setState({ editButton: false })

    }

    handleEditSave = (e) => {
        e.preventDefault();
        const {_id, name, phone} = this.state;
        if (name && phone) {
            this.props.putPhonebook(_id, name, phone)
            this.setState({ editButton: false });
        }
        console.log('data handleEditSave > ',_id, name, phone);
        
    }

    handleDelete = (e) => {
        e.preventDefault()
        const { _id } = this.state
        this.props.deleteStore(_id)

    }




    render() {
        const { _id, name, phone } = this.props;
        return (
            <tr>
                <th scope="row">{_id}</th>
                {!this.state.editButton && (
                <>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                    <button type="submit" class="btn btn-success mb-2" onClick={ this.handleEditOn}>Edit</button>

                    <button type="submit" class="btn btn-danger mb-2 text-white" onClick={ this.handleDelete}>Delete</button>
                </td>
                </>
                )}

                {this.state.editButton && (
                <>
                    <td>
                        <div class="form-check mb-2 mr-sm-2">
                            <input type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            name="name"
                            value={this.state.name}
                            placeholder="name" 
                            onChange={this.handleNameChange.bind(this)}/>
                        </div>
                    </td>
                    <td>
                        <div class="form-check mb-2 mr-sm-2">
                            <input type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            placeholder="phone"
                            name="phone"
                            value={this.state.phone} 
                            onChange={this.handleNameChange.bind(this)} />
                        </div>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-primary mb-2" onClick={ this.handleEditSave}>save</button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-danger mb-2" onClick={ this.handleEditOff}>cancle</button>
                    </td>

                </>
                )}
            </tr>




        )
    }
}

const mapDispatchToProps = dispatch => ({
    putPhonebook: (_id, name, phone) => {
        dispatch(putPhonebook(_id, name, phone))
    },
    deleteStore: (_id, name, phone) => {
        dispatch(deleteStore(_id, name, phone))
    }
})

export default connect(
null,
mapDispatchToProps,
)(ItemList);