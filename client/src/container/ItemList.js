import React from 'react';

export default class ItemList extends React.Component {

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