import React from 'react';
// import { connect } from 'react-redux'

export default class ItemList extends React.Component {
    
    // componentDidMount(){
    //     this.props.LoadItem();
    //   }
    
      
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

// const mapStateToProps = (state) => ({
//     comments: state.comments
//   })

//   const mapDispatchToProps = (dispatch) => ({
//     LoadItem: () => dispatch(LoadItem())
//   })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ItemList)