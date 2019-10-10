import React from 'react';
import Title from './Title';
import AddPhonebook from '../container/AddPhonebook';
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
                        <AddPhonebook />
                        <SearchPhonebook />
                        <ListPhonebook />
                    </div>
                </div>
            </body>
        )
    }
}

export default Phonebook;