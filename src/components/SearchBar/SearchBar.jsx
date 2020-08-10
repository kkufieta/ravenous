import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit(event) {
        console.log("Searching for: ", this.state.term, " in : ", this.state.location, " sorted by: ", this.state.sortBy);
    }

    getSortByClass(sortByOption) {
        return (this.state.sortBy === sortByOption) ? 'active' : '';
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sboKey) => {
            return (
                <li
                    key={sboKey}
                    className={this.getSortByClass(this.sortByOptions[sboKey])}
                    onClick={this.handleSortByChange.bind(this, this.sortByOptions[sboKey])}>
                    {sboKey}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange} />
                    <input
                        placeholder="Where?"
                        onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSubmit}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;