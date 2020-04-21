import React from 'react';
import logo from '../../assets/logo-github_explore.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o usuario/repositório" />
        <button type="submit">PESQUISAR</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17276957?s=460&u=910b24d7b50d03b485ecd27ba68866b361c1ee83&v=4"
            alt="Imagem Profile"
          />
        </a>
        <div>
          <strong>jaimebs/be-the-hero</strong>
          <p>Qualquer coisa</p>
        </div>
      </Repositories>
    </>
  );
};

export default Dashboard;
