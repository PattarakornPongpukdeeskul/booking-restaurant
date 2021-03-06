import styled from 'styled-components'

export const Style = styled.div`
  .form-tab {
    width: 75%;
    font-size: 16px;
  }
  input[type='text'],
  input[type='password'] {
    width: 350px;
    height: 24px;
  }
  .form-login p,
  .form-register p {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .form-register .choose-role {
    flex-direction: row;
  }
  .error {
    color: red;
  }

  @media screen and (max-width: 500px) {
    .form-tab {
      width: 100%;
    }
    input[type='text'],
    input[type='password'] {
      width: 250px;
      height: 24px;
    }
  }
`
