import React from "react";
import Modal from "../Modal";
import history from '../../history';
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from '../../actions';
import { connect } from "react-redux";

class StreamDelete extends React.Component
{
    componentDidMount()
    {
        // props are passed automatically because we are using Router in the App (parent) component = ownProps below
        this.props.fetchStream(this.props.match.params.id); // action
    }

    renderActions()
    {
        const { id } =this.props.match.params;
        return(
            <React.Fragment>
                <button className='ui button negative '
                        onClick={() => this.props.deleteStream(id)}
                >
                    Delete
                    </button>
                <Link to="/" className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    
    }

    renderContent () 
    {
        if(!this.props.stream)
        return 'Are you sure you want to delete the stream?';
        else return `Are you sure you want to delete the stream with title: "${this.props.stream.title}"`
    }

    render()
    {
        console.log(this.props.stream)
        return (
            <Modal 
                title="Delete a Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={ ()=>history.push("/")}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) =>
{
    // ownProps are the props of the StreamEdit component
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);