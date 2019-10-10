import React, { Component } from 'react';

class AddPhonebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            added: false
        }
    }

    handleButtonAdd() {
        this.setState = ({
            added: true
        })
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-success mb-2 mt-3" onClick={this.handleButtonAdd.bind(this)}><i className='fa fa-plus'></i> Add</button>
                {this.state.added &&
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Form</strong>
                        </div>
                        <div className="card-body">
                            <form className="form-inline">
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>name</h6>
                                    </label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="name" />
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>phone</h6>
                                    </label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="phone" />
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <button type="submit" className="btn btn-success mb-2"><i className="fa fa-check-circle"></i> Submit</button>
                                    <button type="submit" className="btn btn-danger mb-2 ml-1 text-white"><i className="fa fa-ban"></i> Cancle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default AddPhonebook