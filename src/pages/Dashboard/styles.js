import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  header {
    background: rgb(32, 34, 47);
    min-height: 250px;

    width: 100%;
    display: flex;

    .headerContent {
      max-width: 1000px;
      margin: 0 auto;
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;

      div.theme {
        display: flex;

        span {
          margin-top: 5px;
          margin-right: 10px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    h1 {
      color: #fff;
      font-size: 26px;
    }
    span.follow {
      color: rgb(147, 154, 183);
      font-size: 14px;
      font-weight: bold;
    }
  }

  main {
    background: #1d2029;
    min-height: 380px;
    display: Flex;
    flex-direction: column;
    padding-bottom: 80px;
    .content {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
    }
    .overview {
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 45px;
      width: 100%;
    }
    .overview h2 {
      color: #fff;
    }

    .overview > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  height: 220px;
  width: 235px;
  background: #252b43;
  border-radius: 5px;
  border-top: 4px solid ${(props) => props.cor};
  margin-right: ${(props) => props.margin};
  margin-top: -100px;
  cursor: pointer;
  transition: all 0.6s;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .icon {
    display: flex;
    align-items: center;
  }

  .icon span {
    color: #8189ad;
    font-size: 13px;
    font-weight: bold;
  }

  .followers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .followers .number {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
  }

  .followers .text {
    color: rgb(147, 154, 183);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 300;
  }
  .today {
    color: ${(props) => props.today};
    font-weight: bold;
    font-size: 13px;
  }

  .today span {
    margin-left: 5px;
  }

  &:hover {
    filter: brightness(${(props) => props.light});
  }
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 125px;
  background: #252b43;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  padding: 30px;
  transition: all 0.6s;
  margin-right: ${(props) => props.margin};

  .header,
  .body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    margin-bottom: 20px;
  }

  .body span.number {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
  .body span.percent {
    color: ${(props) => props.color};
    font-weight: bold;
    font-size: 13px;
  }

  .header span.name {
    color: rgb(147, 154, 183);
    font-weight: bold;
    font-size: 13px;
  }

  &:hover {
    filter: brightness(${(props) => props.light});
  }
`;
