import React from 'react';
import Title from './Title';
import AddPhonebook from '../container/AddPhonebook';
import SearchPhonebook from './SearchPhonebook';
import ListPhonebook from './ListPhonebook';

class Phonebook extends React.Component {

    render() {
        return (
            <div className="container mt-5" >
                <Title />
                <div className="container">
                    <AddPhonebook />
                    <SearchPhonebook />
                    <ListPhonebook />
                </div>
            </div>
        )
    }
}

export default Phonebook;