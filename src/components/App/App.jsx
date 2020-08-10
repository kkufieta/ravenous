import React from 'react';
import BusinessList from '../BusinessList/BusinessList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Yelp from '../../util/Yelp.jsx';
import './App.css';

const businesses = [
  {
    id: 1,
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 2,
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 3,
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }
]

class App extends React.Component {
  async searchYelp(term, location, sortBy) {
    console.log("searching for ", term, " in location ", location, " sorted by: ", sortBy);
    const businesses = await Yelp.search(term, location, sortBy);
    console.log(businesses);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }

}

export default App;