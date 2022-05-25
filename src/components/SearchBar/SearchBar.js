import React, {useState} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(term);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Pics Search</label>
                    <input 
                        type="text"
                        onChange={ (e) => setTerm(e.target.value) } />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
