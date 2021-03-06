import styled from 'styled-components'

export const Style = styled.div`
  .place-list {
    display: flex;
    align-items: flex-start;
    background-color: #f5f6f8;
    font-size: 20px;
    flex-direction: column;
  }
  .place-list .main {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 35px;
    row-gap: 35px;
    padding: 80px 2px 0;
  }
  .place-list .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 170px);
    position: fixed;
    z-index: 2;
    background-color: #f5f6f8;
  }

  .title-page {
    width: 104px;
    height: 32px;
    margin: 20px 0;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 133.4%;
    color: #000000;
  }

  .search {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  .pagination {
    display: flex;
    margin: 53px auto 36px;
    column-gap: 36px;
  }

  .pagination-number,
  .button-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
  }
  .pagination-number {
    background: beige;
  }
  .button-pagination {
    background: #ffffff;
    border: 1.5px solid #9e9e9e;
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    .place-list .main {
      grid-template-columns: auto auto;
    }
  }

  @media screen and (max-width: 768px) {
    .place-list .main {
      grid-template-columns: auto;
      margin: 70px auto 0;
    }
    .top {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 551px) {
    .place-list .top {
      width: 100%;
      align-items: flex-start;
      margin-right: 9px;
    }
    .place-list .main {
      margin: 104px 0 0;
      width: 99%;
      row-gap: 13px;
    }
  }
`
