import React from "react";

import {connect} from 'react-redux';

import {fetchUser} from '../actions';

class UserHeader extends React.Component
{
    componentDidMount() 
    { 
        this.props.fetchUser(this.props.userId);
    }

    render()
    { 
        const {user} = this.props;
        if(!user) return <div>Loading...</div> // return null;
        return(
            <div className="header">{user.name}</div>
        )
    }
}

const matStateToProps = (state, ownProps) =>
{
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(matStateToProps, {fetchUser})(UserHeader);