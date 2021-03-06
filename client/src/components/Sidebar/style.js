import styled from 'styled-components'

export const Style = styled.div`
  .sidebar {
    width: 90px;
    height: 97%;
    position: fixed;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 50px 50px 0px;
    top: -2px;
    z-index: 4;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
  }

  .sidebar div {
    width: 96px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 551px) {
    .sidebar {
      display: none;
    }
  }
`
