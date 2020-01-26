import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form' action=''>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='checkbox' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='twitter' />
          Inicia sesión con twitter
        </div>
      </section>
      <p className='login__container--register'>
        ¿No tienes ninguna cuenta?
        <Link to='/Register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;