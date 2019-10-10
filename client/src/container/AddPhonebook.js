import React, { Component } from 'react';

class AddPhonebook extends Component {
    constructor(props) {
        let id = Math.random()
        super(props)
        this.state = {
            userId: `${id}`,
            name: '',
            phone: '',
            added: false
        }
        
        this.handleButtonAdd = this.handleButtonAdd.bind(this)
        this.handleButtonCancle = this.handleButtonCancle.bind(this)
    }

    handleButtonAdd() {
        this.setState ({ added: true })
    }

    handleButtonCancle(){
        this.setState ({ added: false })
    }

    handleChangeName(e){
        this.state({name: e.target.value})
    }

    handeleChangePhone(e){
        this.state({phone: e.target.value})
    }

    handleSubmit(){

    }



    render() {
        if (this.state.added) {
            return (
                <div className="mt-3">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Form</strong>
                        </div>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>name</h6>
                                    </label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="name" value={this.state.name} onChange={this.handleChangeName} />
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>phone</h6>
                                    </label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="phone" value={this.state.phone} onChange={this.handeleChangePhone} />
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <button type="submit" className="btn btn-success mb-2"><i className="fa fa-check-circle"></i> Submit</button>
                                    <button type="button" className="btn btn-danger mb-2 ml-1 text-white" onClick={this.handleButtonCancle}><i className="fa fa-ban"></i> Cancle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <button type="button" className="btn btn-success mb-2 mt-3" onClick={this.handleButtonAdd}><i className='fa fa-plus'></i> Add</button>
            )
        }
    }
}

export default AddPhonebook