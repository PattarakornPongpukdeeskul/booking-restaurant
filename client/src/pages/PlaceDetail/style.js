import styled from 'styled-components'

export const Style = styled.div`
  .place-detail {
    padding: 60px 24px 0;
  }
  .place-detail .main {
    background: bisque;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto;
    margin-bottom: 69px;
    padding: 30px 17px 117px 30px;
    column-gap: 23px;
  }
  .place-detail-desktop {
    display: grid;
    grid-template-columns: 9fr 8fr;
    column-gap: 23px;
  }
  .place-detail-mobile {
    display: none;
  }
  .place-detail .top {
    margin-top: 28px;
    padding: 0 32px 30px;
  }

  .button-back {
    width: 98px;
    height: 39px;
    background: beige;
    border-radius: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
    color: #333333;
    border: none;
    font-family: 'Kanit';
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    .place-detail-desktop {
      grid-template-columns: auto;
      row-gap: 20px;
    }
  }
  .tab-group {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 46px;
  }

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    position: absolute;
    height: 34px;
    width: 50%;
    background: #ffffff;
    border-radius: 30px;
    color: beige;
    background: #ffffff;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    z-index: 0;
    cursor: pointer;
  }
  .tab.selected {
    width: 60%;
    color: #333333;
    background: beige;
    z-index: 1;
  }

  .tab.information {
    left: 10px;
  }

  .tab.image {
    right: 10px;
  }

  button {
    width: 150px;
    height: 32px;
    background-color: #0bb783;
    border: 0;
    border-radius: 0.475rem;
    color: #333333;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 551px) {
    .place-detail {
      padding: 60px 0px 0;
    }
    .place-detail .main {
      padding: 0;
      background: none;
      box-shadow: none;
    }
    .place-detail-mobile {
      display: block;
    }
    .place-detail-desktop {
      display: none;
    }
    .image-card {
      padding: 18px 16px 39px 15px;
    }
    .information-card-name {
      margin-bottom: 13px;
    }
    .information-card-main-address {
      margin-bottom: 30px;
    }
    .information-card-main-address,
    .information-card-main-operation-time {
      flex-direction: column;
    }
  }
`
