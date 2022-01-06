import React, { useEffect, useState } from 'react'
//this method gets the data from de DB
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

//this method posts new reactions
const usePostReaction = (_id, reaction ) => {


    const api = 'https://ale31jofirst.herokuapp.com/api/reaction/' + _id

    const data = {
        reaction
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
//this method posts new comments or sessions
const useSave = async(data, id='') => {
    const api = 'https://ale31jofirst.herokuapp.com/api'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const request = new Request(api+id, options)

    await fetch(request)
            .then(response=>{
                if(!response.ok) return alert('There was an error. Please try again.') 
                if(id===''){
                    alert('Session saved.')
                    location.reload()
                }else{
                    alert('Comment saved.')
                    location.href = 'https://alejandrocuartas.github.io/post-something-frontend/'
                }
            })
}



export { 
    useGet,
    usePostReaction,
    useSave
}