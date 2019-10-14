import React from 'react';
import ItemList from '../container/ItemList';
import { connect } from 'react-redux';
import { LoadItem } from '../action';

class SearchPhonebook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleFilterNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleFilterPhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    render() {
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
                                placeholder="name" name="name" value={this.state.name} onChange={this.handleFilterNameChange.bind(this)} />
                        </div>

                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>phone</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="phone" name="phone" value={this.state.phone} onChange={this.handleFilterPhoneChange.bind(this)} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchPhonebook;