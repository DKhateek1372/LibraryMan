export const libraryManagementAction = {


    FETCH_BOOKS_DATA_REQUEST: 'FETCH_BOOKS_DATA_REQUEST',
    FETCH_BOOKS_DATA_SUCCESS: 'FETCH_BOOKS_DATA_SUCCESS',
    FETCH_BOOKS_DATA_ERROR: 'FETCH_BOOKS_DATA_ERROR',

    fetchBooksDataRequest: params => ({
        type: libraryManagementAction.FETCH_BOOKS_DATA_REQUEST,
        payload: params
    }),

   fetchBooksDataSuccess: data =>
        ({
            type: libraryManagementAction.FETCH_BOOKS_DATA_SUCCESS,
            payload: data
        }),

   fetchBooksDataError: message => ({
        type: libraryManagementAction.FETCH_BOOKS_DATA_ERROR,
        payload: message
    }),

    FETCH_BOOKS_DETAILS_REQUEST: 'FETCH_BOOKS_DETAILS_REQUEST',
    FETCH_BOOKS_DETAILS_SUCCESS: 'FETCH_BOOKS_DETAILS_SUCCESS',
    FETCH_BOOKS_DETAILS_ERROR: 'FETCH_BOOKS_DETAILS_ERROR',

    fetchBookDetailsRequest: params => ({
        type: libraryManagementAction.FETCH_BOOKS_DETAILS_REQUEST,
        payload: params
    }),

    fetchBookDetailsSuccess: data =>
        ({
            type: libraryManagementAction.FETCH_BOOKS_DETAILS_SUCCESS,
            payload: data
        }),

    fetchBookDetailsError: message => ({
        type: libraryManagementAction.FETCH_BOOKS_DETAILS_ERROR,
        payload: message
    }),


    FETCH_BOOKS_EMPTYLIST_REQUEST: 'FETCH_BOOKS_EMPTYLIST_REQUEST',
    FETCH_BOOKS_EMPTYLIST_SUCCESS: 'FETCH_BOOKS_EMPTYLIST_SUCCESS',
    FETCH_BOOKS_EMPTYLIST_ERROR: 'FETCH_BOOKS_EMPTYLIST_ERROR',

    fetchEmptyListRequest: params =>
        ({
            type: libraryManagementAction.FETCH_BOOKS_EMPTYLIST_REQUEST,
            payload: params
        }),
    fetchEmptyListSuccess: data =>
        ({
            type: libraryManagementAction.FETCH_BOOKS_EMPTYLIST_SUCCESS,
            payload: data
        }),
    fetchEmptyListError: message => ({
        type: libraryManagementAction.FETCH_BOOKS_EMPTYLIST_ERROR,
        payload: message
    }),


    USER_BORROWED_BOOKS_LIST_REQUEST: 'USER_BORROWED_BOOKS_LIST_REQUEST',
    USER_BORROWED_BOOKS_LIST_SUCCESS: 'USER_BORROWED_BOOKS_LIST_SUCCESS',
    USER_BORROWED_BOOKS_LIST_ERROR: 'USER_BORROWED_BOOKS_LIST_ERROR',

    userBorrowedBooksListRequest: params =>
        ({
            type: libraryManagementAction.USER_BORROWED_BOOKS_LIST_REQUEST,
            payload: params
        }),
    userBorrowedBooksListSuccess: data =>
        ({
            type: libraryManagementAction.USER_BORROWED_BOOKS_LIST_SUCCESS,
            payload: data
        }),
    userBorrowedBooksListError: message => ({
        type: libraryManagementAction.USER_BORROWED_BOOKS_LIST_ERROR,
        payload: message
    }),

};







