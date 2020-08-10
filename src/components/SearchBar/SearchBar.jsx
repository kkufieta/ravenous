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
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
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
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;