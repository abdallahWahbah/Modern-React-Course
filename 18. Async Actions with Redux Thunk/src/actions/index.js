import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPosts = ()=>
{
    return async (dispatch, getState) =>
    {
        const response = await jsonPlaceholder('/posts');
        dispatch({type: "FETCH_POSTS", payload: response})
    }
}

// a shorthand for the function above

// export const fetchPosts2 = () => async dispatch =>
// {
//     const response = await jsonPlaceholder('/posts');
//     dispatch({type: "FETCH_POSTS", payload: response})
// };