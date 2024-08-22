// src/App.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    matrícula: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulário enviado! Verifique o console para os dados.');
  };

  return (
    <>
      <h1>QUIZ</h1>
      <form onSubmit={handleSubmit}>
        <div className='pergunta'>

          <h4>Pergunta 1:</h4><br />
          <div className='quest'>
          <label>Qual das seguintes opções é usada para criar um componente funcional em React?</label><br /></div>
          <label>
          <input
            type="radio"
            name="question1"
            value={formData.question2}
            onChange={handleChange}
            required
          />
          a) React.Component
          </label>
            <br></br>
          <input
            type="radio"
            name="question11"
            value={formData.question2}
            onChange={handleChange}
            required
          /> b) React.createElement<br></br>
          
          <input
            type="radio"
            name="question111"
            value={formData.question2}
            onChange={handleChange}
            required
          /> c) function ComponentName() { "return <div> </div>" }<br />
          
        </div>
        <div className='pergunta'>
          <h4>Pergunta 2:</h4><br />
          <div className='quest'>
          <label>Qual é a principal diferença entre um componente funcional e um componente de classe em React?</label><br /></div>
          <input
             type="radio"
             name="question2"
             value={formData.question2}
             onChange={handleChange}
             required
          /> a) Componentes de classe usam hooks, enquanto componentes funcionais não.<br></br>
          <input
             type="radio"
             name="question22"
             value={formData.question2}
             onChange={handleChange}
             required
          /> b) Componentes de classe têm métodos de ciclo de vida, enquanto componentes funcionais usam hooks para gerenciamento de estado e efeitos.<br></br>
          <input
             type="radio"
             name="question222"
             value={formData.question2}
             onChange={handleChange}
             required
          /> c) Componentes funcionais são mais lentos que componentes de classe porque não podem ser otimizados.<br></br>
        </div>
        <div className='pergunta'>
          <h4>Pergunta 3:</h4><br />
          <label>Como você pode evitar a re-renderização desnecessária de um componente funcional?</label><br />
          <input
             type="radio"
             name="question3"
             value={formData.question2}
             onChange={handleChange}
             required
          /> a) Usando React.memo<br></br>
          <input
             type="radio"
             name="question33"
             value={formData.question2}
             onChange={handleChange}
             required
          /> b) Usando shouldComponentUpdate()<br />
          <input
             type="radio"
             name="question333"
             value={formData.question2}
             onChange={handleChange}
             required
          /> c) Usando useReducer<br />
        </div>
        <div className='pergunta'>
          <h4>Pergunta 4:</h4> <br />
          <div>
          <label>O React é mantido pela Microsoft.</label><br />
          <label>
            <input
              type="radio"
              name="question5"
              value="true"
              checked={formData.question5 === 'true'}
              onChange={handleChange}
            />
            Verdadeiro
          </label><br />
          <label>
            <input
              type="radio"
              name="question5"
              value="false"
              checked={formData.question5 === 'false'}
              onChange={handleChange}
            />
            Falso
          </label>
        </div>
        </div>
        <div>
        <div className='pergunta'>
          <h4>Pergunta 5:</h4></div>
          <div className='quest'>
            <label>O React é um framework de:</label><br />
            <label>
              <input type="radio" name="question5" />
              Front-End
            </label>
            < br/>
            <input type="radio" name="question55"/>
            Back-End
          </div>
          </div>
      </form>
    </>
  );
}

export default App;
