import React from "react";
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component
{
    componentDidMount()
    {
        console.log(this.props)
        // props are passed automatically because we are using Router in the App (parent) component = ownProps below
        this.props.fetchStream(this.props.match.params.id); // action
    }

    onSubmit = (values) =>
    {
        // console.log(values);
        this.props.editStream(this.props.match.params.id, values); // action
    }

    render()
    {
        if(!this.props.stream) return <div>Loading...</div>
        
        // console.log(this.props)
        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* 
                    // initialValues in a special property of ReduxForm
                    // StreamForm is wrapped by ReduxForm, so when you pass initial values from title and description
                    // these values will be passed to ReduxForm not StreamForm
                */}
                <StreamForm 
                onSubmit={this.onSubmit} 
                initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {stream: state.streams[ownProps.match.params.id]}
}

// ownProps are the props of the StreamEdit component
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);