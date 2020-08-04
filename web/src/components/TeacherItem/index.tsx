import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/42000522?s=460&u=5dfefd38b0a639067fa46dea2036b8bd6acc4790&v=4" alt="Samuel Soares" />
            <div>
              <strong>Samuel Soares</strong>
              <span>Programação</span>
            </div>
          </header>
          <p> Apaixonado por programção, tecnologias e em vomitar conhecimento em pessoas
          <br /><br />
          cade o codigo pra nois debugar irmão
          </p>
          <footer>
            <p>Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button className="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;