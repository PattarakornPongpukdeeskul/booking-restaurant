import styled from 'styled-components'

export const Style = styled.div`
  .search {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  .search-container {
    margin-left: 14px;
    padding-left: 14px;
    border-left: 1.5px solid beige;
    position: relative;
  }
  .search-input {
    background-repeat: no-repeat;
    background-position: right;
    padding: 0 13px 0 17px;
    background-origin: content-box;
    width: 400px;
    height: 40px;
    left: 1002px;
    top: 80px;
    border: 1px solid beige;
    border-radius: 50px;
  }

  .icon-search {
    position: absolute;
    top: 7px;
    right: 14px;
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    .search-input {
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    .search-input {
      width: 200px;
    }
  }

  @media screen and (max-width: 551px) {
    .search {
      align-items: flex-start;
      flex-direction: column;
      width: calc(100% - 19px);
    }
    .search-container {
      margin: 13px 0 16px 0;
      padding-left: 0;
      border-left: none;
    }
    .search div {
      width: 100%;
    }
    .search-input {
      width: calc(100% - 31px);
    }
    .icon-search {
      display: flex;
      justify-content: flex-end;
      margin-left: -16px;
      left: auto;
      top: 14px;
      width: fit-content;
    }
  }
`
