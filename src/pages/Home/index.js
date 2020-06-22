import React from "react";

import { Container, Item } from "./styles";
import back from "../../images/bg.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container bg={back}>
      <header></header>
      <main>
        <Link
          style={{
            background: "#ff3",
            width: "100%",
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40,
          }}
          to="/dashboard"
        >
          <Item>
            <div className="image">
              <span>Dashboard</span>
            </div>
            <div className="infoProject">
              <span className="name">Social Media Dashboard</span>
              <span className="date">22/06/2020</span>
            </div>
            <div className="infoTechs">
              <span>React</span>
              <span>Styled-Components</span>
              <span>React Router Dom</span>
              <span>Theme Switcher</span>
            </div>
          </Item>
        </Link>
      </main>
    </Container>
  );
}

export default Home;
