import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border: 2px solid ${(props) => (props.hasError ? '#c53030' : '#fff')};
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      width: 64px;
      height: 64;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    /* Tip: Modificar somente o segundo elemento em diante.
       O & significa o próprio elemento.
     */
    & + a {
      margin-top: 16px;
    }

    /* Transações e efeitos */
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
