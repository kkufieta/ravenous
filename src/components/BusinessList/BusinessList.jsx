import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.jsx';


class BusinessList extends React.Component {
    render() {
        const businesses = this.props.businesses;
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