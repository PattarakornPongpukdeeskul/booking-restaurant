import styled from 'styled-components'

export const Style = styled.div`
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
  }

  .card {
    background: #ffffff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 17px 20px;
    max-width: 360px;
    height: 191px;
  }

  .image-profile {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
  .top-card {
    display: flex;
    justify-content: flex-start;
    column-gap: 16px;
    margin-bottom: 11px;
  }

  .name-card {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: rgba(0, 0, 0, 0.87);
  }

  .top-card-right {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .card-description {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    align-items: content;
  }

  .card-time-operation,
  .card-rating {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  .group-image-foods {
    border-radius: 10px;
    overflow: hidden;
    height: 120px;
  }

  .group-image-foods img {
    width: 33.33333%;
    object-fit: cover;
  }

  .group-image-foods-mobile {
    display: none;
  }

  @media screen and (max-width: 551px) {
    .card {
      max-width: none;
      padding: 0 0 13px 0;
      height: fit-content;
    }
    .top-card {
      flex-direction: column;
    }
    .image-profile {
      width: 100%;
      height: 87px;
      border-radius: 10px 10px 0px 0px;
      object-fit: cover;
    }
    .top-card-right {
      position: relative;
      width: 100%;
    }
    .name-card {
      font-size: 12px;
      margin: 6px 0 0 9px;
    }
    .card-description {
      font-size: 10px;
      margin-left: 9px;
    }
    .card-rating svg {
      display: none;
    }
    .card-rating {
      display: block;
      position: absolute;
      right: 20px;
      top: -12px;
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      text-align: center;
      color: #333333;
      background: beige;
      border-radius: 30px;
      width: 67px;
      height: 31px;
    }
    .main-card {
      padding: 0 12px;
    }
    .group-image-foods {
      display: none;
    }
    .group-image-foods-mobile {
      display: block;
    }
    .image-foods-mobile {
      width: 100%;
      position: relative;
    }
    .image-foods-mobile img {
      width: 100%;
      height: 176px;
      border-radius: 10px;
      object-fit: cover;
    }

    .image-foods-mobile .button-pagination {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 50px;
      color: #333333;
      font-weight: 500;
      font-size: 16px;
      background: #ffffff;
      border: 1.5px solid #9e9e9e;
      cursor: pointer;
    }
    .image-foods-mobile .button-pagination.next {
      top: 50%;
      left: 90%;
    }
    .image-foods-mobile .button-pagination.prev {
      top: 50%;
      right: 90%;
    }
    .image-foods-mobile .button-pagination svg {
      transform: scale(4);
    }
  }
`
