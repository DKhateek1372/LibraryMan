import Api from './api_config';

export default { 

    //get data
    getBooks: params =>  Api.get(`https://www.googleapis.com/books/v1/volumes?q=books`),
  
};