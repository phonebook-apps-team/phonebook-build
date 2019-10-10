import React from 'react';
import Title from './Title';
import AddPhonebook from './AddPhonebook';
import SearchPhonebook from './SearchPhonebook';
import ListPhonebook from './ListPhonebook';

class Phonebook extends React.Component {
    constructor(){
        super()
        this.state={
            showForm: false
        }
    }

    handleShow(){
        // this.setState={
        //     showForm : true
        // }    
        alert('test button')
    }


    render() {
        return (
            <body>
                <div className="container mt-5" >
                    <Title />
                    <div className="container">
                        <button type="submit" className="btn btn-success mb-2 mt-3" onClick={()=>this.handleShow()}><i className='fa fa-plus'></i> Add</button>
                        {
                            this.state.showForm ? '' : <AddPhonebook />
                        }
                        <SearchPhonebook />
                        <ListPhonebook />
                    </div>
                </div>
            </body>
        )
    }
}

export default Phonebook;