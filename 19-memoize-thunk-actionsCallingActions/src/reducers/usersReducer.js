const usersReducer = (prevState = [], action) =>
{
    // if(action.type === "FETCH_USER")
    // {
    //     return action.payload
    // }
    // return prevState;
    switch (action.type)
    {
        case "FETCH_USER":
        {
            return [...prevState, action.payload];   
        }
        default:
        {
            return prevState;   
        }
    }
}

export default usersReducer