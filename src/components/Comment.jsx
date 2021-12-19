import React from "react";

const Comment = ({ comment }) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{comment.nick}</h5>
                <p className="card-text">{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment