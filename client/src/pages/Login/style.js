import styled from 'styled-components'

export const Style = styled.div`
  button {
    width: 150px;
    height: 32px;
    background-color: #0bb783;
    border: 0;
    border-radius: 0.475rem;
    color: #333333;
    font-weight: 600;
  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
    font-size: 20px;
    height: 100vh;
  }

  .login-register-form {
    display: flex;
    justify-items: center;
    width: 500px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid;
    border-radius: 1rem;
    background: beige;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
  .tabs {
    display: flex;
    column-gap: 10px;
  }
  .tab {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
  }
  .tabs .selected {
    border-bottom: 1px solid rebeccapurple;
  }
`
