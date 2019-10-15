import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putPhonebook, deleteStore } from '../action';

class ItemList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            editButton: false,
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
        const { idUser, name, phone } = this.state;
        if (name && phone) {
            this.props.putPhonebook(idUser, name, phone)
            this.setState({ editButton: false });
        }
        console.log('data handleEditSave > ', idUser, name, phone);

    }

    handleDelete = (e) => {
        e.preventDefault()
        const { idUser } = this.state
        this.props.deleteStore(idUser)

    }

    


    render() {
        const { idUser, name, phone } = this.props;
        return (
            <tr>
                <th scope="row">{idUser}</th>
                {!this.state.editButton && (
                    <>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>
                            <button type="submit" class="btn btn-success mb-2" onClick={this.handleEditOn}>Edit</button>

                            <button type="submit" class="btn btn-danger mb-2 text-white" onClick={this.handleDelete}>Delete</button>
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
                                    onChange={this.handleNameChange.bind(this)} />
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
                            <button type="submit" class="btn btn-primary mb-2" onClick={this.handleEditSave}>save</button>
                        </td>
                        <td>
                            <button type="submit" class="btn btn-danger mb-2" onClick={this.handleEditOff}>cancle</button>
                        </td>

                    </>
                )}
            </tr>





        )
    }
}

const mapDispatchToProps = dispatch => ({
    putPhonebook: (idUser, name, phone) => {
        dispatch(putPhonebook(idUser, name, phone))
    },
    deleteStore: (idUser, name, phone) => {
        dispatch(deleteStore(idUser, name, phone))
    }
})

export default connect(
    null,
    mapDispatchToProps,
)(ItemList);