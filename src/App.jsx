import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState();
  const url = 'https://users-crud.academlo.tech/';
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers('/users/');
  }, []);
  
  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <div className='content'>
      <header className='header'>
        <h1 className='title'>Crud de usuarios</h1>
        <button className='user_buttom' onClick={handleOpen}>+ crear nuevo usuario</button>
      </header>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='card_container'>
        {
          users?.map(user => (
            <CardUser 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              setIsOpen={setIsOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
