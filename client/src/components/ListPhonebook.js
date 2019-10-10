import React from 'react';
import ItemList from './ItemList'

class ListPhonebook extends React.Component {
    render() {
        const dataItem = this.state.book.map((params, index) => 
        <ItemList 
        key={index}
        idUser={params.idUser}
        name={params.name}
        phone={params.phone}
        />
        )
        return (
            <table class="table table-striped mt-4">
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

export default ListPhonebook;