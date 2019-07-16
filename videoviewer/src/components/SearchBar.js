import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    // Called when there is a change in the search bar
    onInputChange = (event) =>{ 
        this.setState({term:event.target.value})
    };
    
    onFormSubmit = (event) => {
        // Prevents page from refreshing 
        event.preventDefault();

        // TODO: Make sure we call 
        // Callback from parent component
    };

    render()
    {
        return (
            <div className ="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" value={this.state.term}
                        onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;