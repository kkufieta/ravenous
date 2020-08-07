import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.jsx';

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

class BusinessList extends React.Component {
    render() {
        const businessList = businesses.map((business) => {
            return (
                <Business
                    key={business.id}
                    business={business}
                />
            )
        });
        return (
            <div className='BusinessList'>
                {businessList}
            </div>
        );
    }
}

export default BusinessList;