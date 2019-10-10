import React from 'react';

class SearchPhonebook extends React.Component {
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
                                placeholder="name" />
                        </div>

                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>phone</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="phone" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchPhonebook;