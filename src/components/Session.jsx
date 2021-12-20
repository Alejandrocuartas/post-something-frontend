import React, { useState } from "react";
import { Link } from "react-router-dom";

import { usePostReaction } from "../hooks/petitions";

const Session = ({ session = {},  }) => {

    const { _id, content, nickname, reactions  } = session

    const [ sadState, setSad ] = useState(reactions[1].number)
    const [ happyState, setHappy ] = useState(reactions[2].number)
    const [ careState, setCare ] = useState(reactions[0].number)


    const careHandler = () => {
        usePostReaction(_id, 'care')
        let  careCounter = careState
        setCare(careCounter + 1)
    }
    const happyHandler = () => {
        usePostReaction(_id, 'happy')
        let happyCounter = happyState
        setHappy(happyCounter + 1)
    }
    const sadHandler = () => {
        usePostReaction(_id, 'sad')
        let sadCounter = sadState
        setSad(sadCounter + 1)
    }

    return(
            <div className="card text-white bg-primary mb-2" style={{maxWidth: "18rem"}}>
                <div className="card-header">{nickname || "nickname"}</div>
                <div className="card-body">
                    <p className="card-text">{content || ''}</p>
                    <div className="card-title">
                        <button onClick={happyHandler} className="badge rounded-pill bg-primary">{`Happy  ${happyState}`}</button>
                        <button onClick={sadHandler} className="badge rounded-pill bg-danger">{`Sad  ${sadState}`}</button>
                        <button onClick={careHandler} className="badge rounded-pill bg-info text-dark">{`Care  ${careState}`}</button>
                        <Link to={`/post-something-frontend/comments/${_id}`} className="badge bg-dark">comment</Link>
                    </div>
                </div>
            </div>
    )
}



export default Session