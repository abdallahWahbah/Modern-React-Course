import _ from 'lodash';
import { 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";

const streamReducer = (prevState={}, action) =>
{
    switch(action.type)
    {
        case FETCH_STREAMS:
            return {...prevState, ..._.mapKeys(action.payload, "id")}
        case FETCH_STREAM: 
            return {...prevState, [action.payload.id]: action.payload};
        case CREATE_STREAM:  
            return {...prevState, [action.payload.id]: action.payload};
        case EDIT_STREAM: 
            return {...prevState, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(prevState, action.payload);
        default:
            return prevState;
    }
}
export default streamReducer;
// the state will be like this
// {
//     0: {id: 0, title: "asjld", description: "alksdjlkajsd"},
//     1: {id:1, title: ";aksjdl", ............}
// }


// key interpolation
// const animalSounds = {cat:"meow", dog: "bark"};
// const lion = "lion";
// const lionSoung = "roar";
// return {...animalSounds, [lion]: sound} // {cat:"meow", dog: "bark", lion: "roar"}

// for every element in the array, use a key taken from the "id" property of each one
// we will create a new object, the key of every attribute will be taken from each id in the array
// exaple
// const arr = [
//     {
//         id: "1",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "2",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "3",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "4",
//         title: "a",
//         des: "asd"
//     },
// ]
// const newObject = _.mapKeys(arr, "id");
// // will return 
// {
//     1: {id: 1, title: "a", des: "asd"},
//     2: {id: 2, title: "a", des: "asd"},
//     3: {id: 3, title: "a", des: "asd"},
//     4: {id: 4, title: "a", des: "asd"},
// }