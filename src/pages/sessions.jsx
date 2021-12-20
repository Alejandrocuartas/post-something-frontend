import React, { useEffect, useState } from "react";
import FormModal from "../components/FormModal";

import Session from "../components/Session";
import { useGet } from "../hooks/petitions";

const api = 'https://ale31jofirst.herokuapp.com/api'

const Sessions = () => {

    //open and close the modal used to post a new session
    const [ isOpen, setOpen ] = useState(false)
    
    const onClose = () => {
        setOpen(false)
    }

    const openModal = () => {
        setOpen(true)
    }

    //get sessions
    const data = useGet(api)
    
    if(data) return(
        <div className="container-fluid">
            <div className="row">

                {data.sessions.reverse().map(session => {
                    return <Session key={session._id} session={session}/>
                })}

            </div>
            <button className="fixed-bottom btn btn-secondary btn-lg" onClick={openModal}>New session</button>
            <FormModal formType='session' isOpen={isOpen} onClose={onClose}></FormModal>
        </div>
    )

    return <h1>Loading</h1>
 
}

export default Sessions

