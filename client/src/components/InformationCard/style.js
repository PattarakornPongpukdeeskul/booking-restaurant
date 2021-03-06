import styled from 'styled-components'

export const Style = styled.div`
  .information-card {
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
    height: fit-content;
  }

  .information-card .image {
    width: 100%;
    height: 380.44px;
  }

  .information-card-content {
    padding: 23.5px 18px 57px 24px;
  }

  .information-card-main-top {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .information-card-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    color: rgba(0, 0, 0, 0.87);
  }
  .information-card-rating span {
    padding-left: 5px;
  }
  .information-card-main-address,
  .information-card-main-operation-time {
    display: flex;
    margin-bottom: 10px;
  }
  .information-card-main-address div,
  .information-card-main-operation-time div {
    min-width: 120px;
  }

  .operation-time-group {
    display: flex;
    flex-direction: column;
  }
  .address,
  .open-hour {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 6px;
  }
`
