const postsReducer = (prevState = [], action) =>
{
    switch(action.type)
    {
        case "FETCH_POSTS":
        {
            return action.payload;
        }
        case "ADD_POST":
        {
            return [...prevState, action.payload];
        }
        default:
        {
            return prevState;   
        }
    }
}

export default postsReducer;