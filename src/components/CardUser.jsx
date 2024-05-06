import React from 'react';
import '../styles/cardUser.css'

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
  
    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true)
    }

  return (
    <article className='user'>
        <h3 className='user_name'>{user.first_name} {user.last_name}</h3>
        <hr className='line'/>
        <ul className='user_list'>
            <li className='user_item'><span>correo:</span><span> {user.email}</span></li>
            <li className='user_item'><span>cumpleaños:</span><span> {user.birthday}</span></li>
        </ul>
        <hr className='line'/>
        <button className='delete_btn' onClick={handleDelete}>Eliminar</button>
        <button className='edit_btn' onClick={handleEdit}>Editar</button>
    </article>
  )
}

export default CardUser;