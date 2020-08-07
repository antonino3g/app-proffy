import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/19830645?s=460&u=9cbbcfd47fc74c54a1853802e08daf8667732804&v=4"
          alt="Antonino"
        />
        <div>
          <strong>Antonino Praxedes</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avancada.
        <br />
        <br />
        Apaixonado por explodir coisas no quadro com números e por mudar a vida
        das pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
