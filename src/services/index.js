import Api from './api_config';

export default { 

    //get data
    getItems: params =>  Api.get(`http://hn.algolia.com/api/v1/items/${params.id}`),
    getUserData: params => Api.get(`http://hn.algolia.com/api/v1/users/${params.name}`),

    //search Data
    searchStories: params =>  Api.get(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${params.id}`),
};