import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoadItem } from '../action/index'

class ItemList extends Component {
    state = {
        fullname: '',
        message: '',
        content: []
    }

    componentDidMount() {
        this.props.LoadItem();

        this.props.DeleteItem();
    }


    handleClick = idUser => {
        const requestOptions = {
            method: 'delete'
        };
        fetch('http://localhost:3001/api/phonebooks' + idUser,
            requestOptions.then((response) => {
                console.log(response);
                return response.json();

            }).then((userRemove) => {
                console.log(userRemove);

            })
        )
    }
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

const mapStateToProps = (state) => ({
    getting: state.getting
})

const mapDispatchToProps = (dispatch) => ({
    LoadItem: () => dispatch(LoadItem())
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)