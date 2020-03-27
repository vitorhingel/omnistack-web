import React, { useState } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (e) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero'></img>
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to='/profile' className='back-link'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type='text'
            name=''
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Titulo do caso'
            id=''
          />
          <textarea
            name=''
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Descrição'
            id=''
          />
          <input
            type='text'
            name=''
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Valor em reais'
            id=''
          />

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
