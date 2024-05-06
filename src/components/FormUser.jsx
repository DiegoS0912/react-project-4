import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/formUser.css'

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {
  
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
      reset(editUser);
    }, [editUser]);
    
    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data);
            setEditUser();
        } else {
            createUser('/users', data);
        }
        reset({
            first_name: '',
            email: '',
            password: '',
            last_name: '',
            birthday: '',
        });
        setIsOpen(false);
    }

    const handleClose = () => {
        setIsOpen(false);
    }
   
  return (
    <div className={`form_background ${isOpen&&'able'}`}>
        <form className='form_container' onSubmit={handleSubmit(submit)}>
            <div className='form_close' onClick={handleClose}>
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <h2 className='form_title'>Nuevo Usuario</h2>
            <div className='form_item'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="email" />
            </div>
            <div className='form_item'>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='form_item'>
                <label htmlFor="first_name">First_name</label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="last_name">Last_name</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')} id='birthday' type="date" />
            </div>
            <button className='form_btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormUser;