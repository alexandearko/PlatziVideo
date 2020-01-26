import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Inicia sesión</h2>
      <form className='register__container--form' action=''>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='email' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>
          Registrarme
        </button>
      </form>
    </section>
    <section className='register__container--social-media'>
      <div>
        <img src='../assets/google-icon.png' alt='google' />
      Regístrate con Google
      </div>
      <div>
        <img src='../assets/twitter-icon.png' alt='twitter' />
      Regístrate con twitter
      </div>
    </section>
    <Link to='/login'>
      Iniciar sesión
    </Link>
  </section>
);

export default Register;
