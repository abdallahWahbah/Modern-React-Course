
const CommentDetail = (props) =>
{
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="Avatar" src={props.avatar}></img>
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="data">{props.timeAgo}</span>
                </div>
                <div className="text">{props.content}</div>
            </div>
        </div>
    );
};

export default CommentDetail;