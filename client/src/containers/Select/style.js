import styled from 'styled-components'

export const Style = styled.div`
  .dropdown-content {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 50px;
    padding: 0;
    margin: 10px 5px;
  }

  .dropdown-content li {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 12px;
  }
  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }

  .dropdown-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 185px;
    height: 40px;
    left: 789px;
    top: 80px;
    background: #ffffff;
    border: 1px solid beige;
    border-radius: 50px;
    padding: 0 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: rgba(0, 0, 0, 0.54);
  }
  .dropdown-button:hover {
    background: #ffffff;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .category-option.selected {
    color: #333333;
    background: beige;
  }
  @media screen and (max-width: 768px) {
    .dropdown-content {
      top: 107px;
    }
  }
  @media screen and (max-width: 551px) {
    .dropdown-content {
      width: 95%;
    }

    .dropdown-button {
      width: 100%;
    }
  }
`
