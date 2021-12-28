import lodash, { memoize } from 'lodash';

import jsonPlaceholder from "../apis/jsonPlaceholder"


export const fetchPosts = ()=>
{
    return async (dispatch, getState) =>
    {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: "FETCH_POSTS", payload: response.data})
    }
}

// a shorthand for the function above

// export const fetchPosts2 = () => async dispatch =>
// {
//     const response = await jsonPlaceholder('/posts');
//     dispatch({type: "FETCH_POSTS", payload: response})
// };



// export const fetchUser = id => async dispatch =>
// {
//     const response = await jsonPlaceholder.get(`users/${id}`);
//     dispatch({type:"FETCH_USER", payload: response.data})
// }

// we are rendering this page a 100 times (for each post) although we must render it 10 times only cause each user has 10 posts
// so, we must find a way to make a request for each user only 1 time instead of 10 times (use lodash library, _.memoize function)

export const fetchUser = id => dispatch =>
{
    _fetchUser(id, dispatch);
}

const _fetchUser = memoize(async (id, dispatch) =>
{
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch({type:"FETCH_USER", payload: response.data})
})