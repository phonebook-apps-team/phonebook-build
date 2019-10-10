import React from 'react';

class ListPhonebook extends React.Component {
    render() {
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
            </table>
        )
    }
}

export default ListPhonebook;