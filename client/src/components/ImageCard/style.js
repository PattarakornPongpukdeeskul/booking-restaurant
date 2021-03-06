import styled from 'styled-components'

export const Style = styled.div`
  .image-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 18px 35px 39px 34px;
  }

  .image-card .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: rgba(0, 0, 0, 0.87);
    padding-bottom: 21px;
  }

  .image-card .image-group {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }

  .image-card .image {
    width: 100%;
    height: 318px;
  }
`
