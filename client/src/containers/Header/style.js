import styled from 'styled-components'

export const Style = styled.div`
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    background: beige;
    position: fixed;
    width: 100%;
    z-index: 3;
  }
  .header-title {
    margin-left: 20px;
    font-size: 32px;
    font-weight: 600;
  }
  .header-content {
    display: flex;
    column-gap: 11.5px;
    align-items: center;
    position: relative;
    height: 100%;
    padding-right: 41.5px;
  }
  .icon-profile {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-image: url(../asset/image/profile.png);
  }

  .user-name {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 157%;
    color: #333333;
    letter-spacing: 0.1px;
  }

  .logo-company.mobile {
    display: none;
  }

  .dropdown-button {
    border: none;
    background: none;
    color: #333333;
    justify-content: space-between;
    width: fit-content;
  }

  .dropdown-button svg {
    color: #333333;
    padding-left: 10px;
  }

  .dropdown-content {
    right: 37px;
    top: 44px;
  }
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

  @media screen and (max-width: 500px) {
    .header-content {
      padding-right: 10px;
      width: 100%;
      justify-content: flex-end;
    }
    .dropdown-content {
      width: 50%;
    }

    .user-name {
      display: none;
    }
    header {
      justify-content: space-between;
      height: 65px;
    }
    .header-title {
      font-size: 24px;
    }
    .logo-company.mobile {
      display: block;
    }
    .logo-company.mobile img {
      border-radius: 10px;
      margin: 8px 0px 7px 9px;
      width: 50px;
      height: 50px;
    }
  }
`
