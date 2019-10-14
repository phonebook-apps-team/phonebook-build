import React, { Component } from 'react';
import ItemList from '../container/ItemList';
import { connect } from 'react-redux';
import { LoadItem } from '../action';


class ListPhonebook extends Component {

    componentDidMount() {
        this.props.LoadItem();
    }

    render() {

        let dataItem = this.props.store.map((item, index) => {
            return (
                <ItemList
                    key={index}
                    idUser={item.idUser}
                    name={item.name}
                    phone={item.phone}
                />
            )
        })
        console.log('data Item > ', dataItem);
        

        return (
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataItem}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    store: state.store
})

const mapDispatchToProps = (dispatch) => ({
    LoadItem: () => dispatch(LoadItem())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPhonebook)


