import React, { useState } from 'react';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero'></img>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>
          <Link to='/' className='back-link'>
            <FiArrowLeft size={16} color='#E02041' />
            Login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type='text'
            name=''
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Nome da ONG'
            id=''
          />
          <input
            type='email'
            name=''
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            id=''
          />
          <input
            type='text'
            name=''
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder='WhatsApp'
            id=''
          />
          <div className='input-group'>
            <input
              type='text'
              name=''
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder='Cidade'
              id=''
            />
            <input
              type='text'
              name=''
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder='UF'
              style={{ width: 80 }}
              id=''
            />
          </div>
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
