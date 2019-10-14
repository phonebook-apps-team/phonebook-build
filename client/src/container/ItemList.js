import React, { Component } from 'react';

class ItemList extends Component {
    
    render() {
        return (
            <tr>
                <th scope="row">{this.props.idUser}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    <button type="submit" className="btn btn-success mb-2">Edit</button>
                    <button type="submit" className="btn btn-danger mb-2 ml-1 text-white">Delete</button>
                </td>
            </tr>
        )
    }
}


export default  ItemList