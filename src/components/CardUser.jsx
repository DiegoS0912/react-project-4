import React from 'react';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
  
    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true)
    }

  return (
    <article>
        <h3>{user.first_name} {user.last_name}</h3>
        <ul>
            <li><span>correo:</span><span> {user.email}</span></li>
            <li><span>cumpleaños:</span><span> {user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleEdit}>Editar</button>
    </article>
  )
}

export default CardUser;