import { hackerNewsActionTypes, hackerNewsUserActionTypes, hackerNewsVoteCountActionTypes } from '../constants';

// export named actions
export const fetchDataRequest = params => {
    console.log('hye you you are getting params?', params);
    return { 
        type: hackerNewsActionTypes.FETCH_DATA_REQUEST, 
        payload: params 
     }; 
}

export const fetchDataSuccess = data =>
{
    console.log('how many times i am calling for data?', data);
    return { 
        type: hackerNewsActionTypes.FETCH_DATA_SUCCESS, 
        payload: data 
     }; 
}

export const fetchDataError = message => ({ 
    type: hackerNewsActionTypes.FETCH_DATA_ERROR,
    payload: message 
});

export const fetchUserRequest = params => 
 ({ 
     type: hackerNewsUserActionTypes.FETCH_USER_REQUEST, 
     payload: params 
 });
export const fetchUserSuccess = data => 
({ 
    type: hackerNewsUserActionTypes.FETCH_USER_SUCCESS,
    payload: data 
});
export const fetchUserError = message => ({ 
    type: hackerNewsUserActionTypes.FETCH_USER_ERROR,
    payload: message 
});


export const updateVoteCountRequest = params => 
 ({ 
     type: hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_REQUEST, 
     payload: params 
 });
export const updateVoteCountSuccess = data => 
({ 
    type: hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_SUCCESS,
    payload: data 
});
export const updateVoteCountError = message => ({ 
    type: hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_ERROR,
    payload: message 
});