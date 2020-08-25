import { libraryManagementAction } from './actions';

const initialState = {
  loading: true,
  libraryData: [],
  borrowedBooks: []
};



const libraryManagementReducer = (state = initialState, action) => {

  // fecth initial data from search //
  switch (action.type) {
    case libraryManagementAction.FETCH_BOOKS_DATA_REQUEST: {
      return { ...state };
    }

    case libraryManagementAction.FETCH_BOOKS_DATA_SUCCESS: {
      let data = Object.assign([], action.payload);
      !!data && data.items.forEach((element, index) => {
        element.key = index;
      });
      state.loading = false;
      state.libraryData = data;
      return state;
    }

    // update vote count //
    case libraryManagementAction.FETCH_BOOKS_DETAILS_REQUEST: {
      return { ...state, loading: true };
    }
    case libraryManagementAction.FETCH_BOOKS_DETAILS_SUCCESS: {
      let data = Object.assign([],state.libraryData &&state.libraryData.items  );
      let BookKey = action.payload.key;
      const bookDetails = data.filter(data =>
        data.key.toString().includes(BookKey)
      );
      state.loading = false;
      state.libraryData= bookDetails;
      return state;
    }


    // update Presist data in redux state//
    case libraryManagementAction.FETCH_BOOKS_EMPTYLIST_REQUEST: {
      return { ...state, loading: true };
    }
    case libraryManagementAction.FETCH_BOOKS_EMPTYLIST_SUCCESS: {
      state.loading = false;
      // state.hackerNewsData = action.hackerNewsData;
      // state.hackerNewsGraphData = action.hackerNewsData.hackerNewsGraphData;
      return state;
    }



    // fecth user details //
    case libraryManagementAction.USER_BORROWED_BOOKS_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case libraryManagementAction.USER_BORROWED_BOOKS_LIST_SUCCESS: {
      let myBooks =[];
      let data = Object.assign([],state.libraryData &&state.libraryData.items  );
      let BookKey = action.payload.key;
      const bookDetails = data.filter(data =>
        data.key.toString().includes(BookKey)
      );
      myBooks.concat(bookDetails);
      const length = myBooks.length;
      const borrowedBooks =  myBooks.length > 0 ? myBooks.splice(1, length): myBooks
      state.borrowedBooks = borrowedBooks;
      state.loading = false;
      return state;
    }


    case libraryManagementAction.FETCH_BOOKS_DATA_ERROR:
    case libraryManagementAction.FETCH_BOOKS_DETAILS_ERROR:
    case libraryManagementAction.FETCH_BOOKS_EMPTYLIST_ERROR:
    case libraryManagementAction.USER_BORROWED_BOOKS_LIST_ERROR:
      {
        return {
          ...state,
          loading: true,
          errors: ''
        };
      }
    default:
      return state;
  }
};

export default libraryManagementReducer;
