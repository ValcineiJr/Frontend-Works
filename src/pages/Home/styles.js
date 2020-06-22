import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    height: 156px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-color: #5da5a4;
  }

  main {
    background: #f0fafb;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 154px;
  border-radius: 5px;
  border-left: 7px solid #62a2a2;
  box-shadow: 1px 1px 20px #ddd;
  padding: 0 30px;

  .image {
    border-radius: 50px;
    width: 100px;
    height: 100px;
    background: #1d2029;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .infoProject {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    justify-content: space-around;
    height: 80px;
  }
  .infoProject .date {
    color: #878b8a;
  }
  .infoProject .name {
    color: #212725;
    font-size: 26px;
    font-weight: bold;
  }

  .infoTechs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
  }

  .infoTechs span {
    background: #eef7f6;
    color: #749e9d;
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .image span {
    color: #fff;
  }
`;
