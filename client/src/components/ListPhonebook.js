import React, { Component } from 'react';
import ItemList from '../container/ItemList';
import { connect } from 'react-redux';
import { LoadItem } from '../action';


class ListPhonebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Fname: '',
            Fphone: ''
        }
        this.handleFilterNameChange = this.handleFilterNameChange.bind(this)
        this.handleFilterPhoneChange = this.handleFilterPhoneChange.bind(this)
    }

    componentDidMount() {
        this.props.LoadItem();
    }

    handleFilterNameChange(e) {
        this.setState({ Fname: e.target.value })
    }

    handleFilterPhoneChange(e) {
        this.setState({ Fphone: e.target.value })
    }

    filterData = () => {
        const { Fname, Fphone } = this.state;
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <strong>Search Form</strong>
                </div>
                <div className="card-body">
                    <form className="form-inline">
                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>name</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="name" name="name" value={Fname} onChange={this.handleFilterNameChange} />
                        </div>
                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>phone</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="phone" name="phone" value={Fphone} onChange={this.handleFilterPhoneChange} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }


    render() {
        let { phonebooks } = this.props;
        console.log('ini hasil phonebook', phonebooks)
        let { Fname, Fphone } = this.state;
        if (Fname && Fphone) {
            const filters = (name, phone) => {
                return phonebooks.filter(e => {
                    return (
                        e.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                        e.phone.indexOf(phone) > -1
                    )
                })
            }
            phonebooks = filters(Fname, Fphone);
        }

        if (Fname) {
            const filters = name => {
                console.log('ini', name)
                return phonebooks.filter(e => {
                    return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1
                })
            }
            phonebooks = filters(Fname)
        }

        if (Fphone) {
            const filters = phone => {

                console.log('ini', phone)
                return phonebooks.filter(e => {
                    return e.phone.indexOf(phone) > -1
                })
            }
            phonebooks = filters(Fphone)
        }

        console.log('phonebooks> ', phonebooks);
        // this.props.phonebooks = phonebooks;

        const dataItem = phonebooks.map((item, index) => {
            return (
                <ItemList
                    key={index}
                    idUser={item.idUser}
                    name={item.name}
                    phone={item.phone}
                />
            )
        })
        return (
            <div>
                {this.filterData()}

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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    phonebooks: state.store
})

const mapDispatchToProps = (dispatch) => ({
    LoadItem: () => dispatch(LoadItem())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPhonebook)


