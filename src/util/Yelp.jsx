const apiKey = 'ie0yWMFWOtNXKPQlI0dPYJYtv-ucR5OwltFyamB_uei1GQ1s-xIYkyeke45Kd1V5fjE2IPPCljEU1hzncDbGHRQimD0cRvDaJfZ4elXyG0tZHwcEeTqiiv-CECYxX3Yx';

const Yelp = {};

const search = (term, location, sortBy) => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(corsAnywhere + endpoint,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed.');
        })
        .then((json_response) => {
            if ('businesses' in json_response) {
                return json_response.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.length > 0 ? business.categories[0].title : '',
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                })
            }
            throw new Error('JSON response does not have the key "businesses".');
        })
        .catch((networkError) => {
            console.log(networkError);
        })
}

Yelp.search = search;

export default Yelp;