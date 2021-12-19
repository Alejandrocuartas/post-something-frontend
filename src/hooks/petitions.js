import React, { useEffect, useState } from 'react'

const useGet = (url='') => {
    const [ data, setData ] = useState()
    useEffect(()=>{
        fetch(url)
            .then(async(response)=>{
                if(response.ok) setData(await response.json())
            })
    }, [])
    return data
}

const usePostReaction = (_id, reaction ) => {


    const api = 'https://ale31jofirst.herokuapp.com/api/reaction/' + _id

    const data = {
        reaction: reaction
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const request = new Request(api, options)
    
    fetch(request)
        .then(response=>{
            if(response.ok) console.log('ya')
        })
        .catch(err => {
            console.log(err)
        })


}

const useSave = (data, id='') => {
    const api = 'https://ale31jofirst.herokuapp.com/api'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const request = new Request(api+id, options)

    fetch(request)
        .then(response=>{
            if(!response.ok) return alert('There was an error. Please try again.') 
            if(id===''){
                alert('Session saved.')
            }else{
                alert('Comment saved.')
            }
        })
}



export { 
    useGet,
    usePostReaction,
    useSave
}