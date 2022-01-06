import React, { useState } from 'react';
import { useSave } from '../hooks/petitions';

import Modal from './Modal';

const FormModal = ({ isOpen, onClose, formType, id='' }) => {
  const [ newForm, setNewForm ] = useState({ nickname: '', content: '', nick: '', comment: '' })

  const handleNickname = e => {
    const nickname = e.target.value
    if(formType==='session'){
      setNewForm({ ...newForm, nickname })
    }else{
      setNewForm({ ...newForm, nick: nickname })
    }
  }
  const handleContent = e => {
    const content = e.target.value
    if(formType==='session'){
      setNewForm({ ...newForm, content })
    }else{
      setNewForm({ ...newForm, comment: content})
    }
  }

  const onSave = async() => {
      if((newForm.nickname.length >= 5 && newForm.content.length >= 10) || (newForm.nick.length>=5 && newForm.comment.length>=10)){
          if(formType==='session'){
            await useSave(newForm)
            location.reload()
          }else{
            await useSave(newForm, `/session/${id}`)
            location.href = 'https://alejandrocuartas.github.io/post-something-frontend/'
          }
      }else{
        alert('The nickname must have at least 5 characters and the content 10.')
      }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{formType==='session' ? 'nickname' : 'nick'}</label>
                <input onChange={handleNickname} type="email" className="form-control" id="exampleFormControlInput1" placeholder="nickname"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">comment</label>
                <textarea onChange={handleContent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={onSave} type="button" className="btn btn-primary mr-2">Save</button>
            <button onClick={onClose} type="button" className="btn btn-dark">Cancel</button>
        </div>
    </Modal>
  );
}

export default FormModal;