import React from 'react';

class AddPhonebook extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>Add Form</strong>
                </div>
                <div className="card-body">
                    <form className="form-inline">
                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h5>name</h5>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="name" />
                        </div>
                        <div class="form-check mb-2 mr-sm-2">
                            <label class="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>phone</h6>
                            </label>
                            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="phone" />
                        </div>

                        <div class="form-check mb-2 mr-sm-2">
                            <button type="submit" class="btn btn-success mb-2"><i className="fa fa-check-circle"></i> Submit</button>
                            <button type="submit" class="btn btn-danger mb-2 ml-1 text-white"><i className="fa fa-ban"></i> Cancle</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhonebook