import React, { Component } from 'react';
import {connect} from 'react-redux'
import { putPhonebook } from '../action';

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

    handleChange = e => {
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
                    <button type="submit" class="btn btn-success mb-2" onClick={ this.handleEditOn}>Edit</button>

                    <button type="submit" class="btn btn-danger mb-2 text-white">Delete</button>
                </td>
                </>
                )}

                {this.state.editButton && (
                <>
                    <td>
                        <div class="form-check mb-2 mr-sm-2">
                            <input type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            id="inputname"
                            value={this.props.name}
                            placeholder="name" 
                            onChange={this.handelChange}/>
                        </div>
                    </td>
                    <td>
                        <div class="form-check mb-2 mr-sm-2">
                            <input type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            id="inlineFormInputName2"
                            placeholder="phone"
                            value={this.props.phone} 
                            onChange={this.handelChange} />
                        </div>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-primary mb-2">save</button>
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


export default connect(
null,
)
(ItemList);