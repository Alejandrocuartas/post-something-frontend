import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "../components/Comment";
import FormModal from "../components/FormModal";
import { useGet } from "../hooks/petitions";


const api = 'https://ale31jofirst.herokuapp.com/api/session/'

const Comments = () => {
    //opens the modal used to post a new comment
    const [ isOpen, setOpen ] = useState(false)
    const { id } = useParams()
    
    const onClose = () => {
        setOpen(false)
    }

    const openModal = () => {
        setOpen(true)
    }

    
    const data = useGet(api + id)


    if(data) return(
                <div className="container-fluid">
                    <div className="row">
                        {data.comments.length !== 0 
                                ? data.comments.map(comment=>{
                                        return <Comment key={comment._id} comment={comment}/>
                                  })
                                :  <h1>No comments yet</h1>
                        }
                                    
                    </div>
                    <button className="fixed-bottom btn btn-secondary btn-lg" onClick={openModal}>New comment</button>
                    <FormModal id={id} isOpen={isOpen} onClose={onClose} formType='comment'/>
                </div>        
            )
    return <h1>Loading</h1>

}

export default Comments