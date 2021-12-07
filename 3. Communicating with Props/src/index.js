// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

if (module.hot) 
{
    module.hot.accept();
}
// Create a React component
const App = () =>
{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h1>Warning</h1>
                    Are you sure you wanna do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAge="Today at 2:22pm" 
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAge="Today at 2:00Am" 
                    content="I like the subject"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                timeAge="Today at 5:00pm" 
                content="Writing is great"
                avatar={faker.image.avatar()}/>            
            </ApprovalCard>
        </div>
    )
}

// Take the React component and show it to the screen
ReactDOM.render(<App/>, document.querySelector("#root"));