import React from 'react';
import ItemList from '../container/ItemList';
import { connect } from 'react-redux';
import { LoadItem } from '../action';



class ListPhonebook extends React.Component {
    // state = {
    //     _id: '',
    //     idUser:'',
    //     name: '',
    //     phone: '',
    //     book: []

    // }

    componentDidMount(){
        this.props.LoadItem();
      }


    render() {
        const dataItem = this.state.store.map((params, index) => 
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


