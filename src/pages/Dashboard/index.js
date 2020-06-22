import React, { useState, useEffect } from "react";

import { Container, Card, MiniCard } from "./styles";
import Switch from "react-switch";

function Dashboard() {
  const [checked, setChecked] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [headerBackGroundColor, setHeaderBackGroundColor] = useState("#20222F");
  const [mainBackGroundColor, setMainBackGroundColor] = useState("#1d2029");
  const [cardBackGroundColor, setCardBackGroundColor] = useState("#252b43");
  const [headerTitleColor, setHeaderTitleColor] = useState("#20222F");
  const [numberColor, setNumberColor] = useState("#fff");
  const [userLinkColor, setUserLinkColor] = useState("#61636F");
  const [headerSubTitleColor, setHeaderSubTitleColor] = useState(
    "rgb(147, 154, 183)"
  );

  const setDark = () => {
    setHeaderBackGroundColor("#20222F");
    setHeaderTitleColor("#fff");
    setHeaderSubTitleColor("#fff");
    setMainBackGroundColor("#1d2029");
    setCardBackGroundColor("#252b43");
    setNumberColor("#fff");
    setUserLinkColor("#8189ad");
  };

  const setLight = () => {
    setHeaderBackGroundColor("#F8F9FE");
    setHeaderTitleColor("#23262F");
    setHeaderSubTitleColor("rgb(147, 154, 183)");
    setMainBackGroundColor("#fff");
    setCardBackGroundColor("#F0F3FA");
    setNumberColor("#1B1E27");
    setUserLinkColor("#61636F");
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        setChecked(true);
        setDark();

        break;
      case "light":
        setChecked(false);
        setLight();
        break;
      default:
        break;
    }
  }, []);

  const changeTheme = () => {
    setChecked(!checked);
    if (theme === "dark") {
      setTheme("light");
      setLight();

      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      setDark();

      localStorage.setItem("theme", "dark");
    }
  };

  const Data = [
    {
      icon: "fab fa-facebook-square",
      user: "@vafucaju",
      followers: 5,
      color1: "#1B8FF6",
      color2: "#3D998A",
      margin: "20px",
      score: "positive",
      scoreNumber: 1,
    },
    {
      icon: "fab fa-twitter",
      user: "@carollina22",
      followers: 1892,
      color1: "#19A2F3",
      color2: "#3D998A",
      margin: "20px",
      score: "positive",
      scoreNumber: 200,
    },
    {
      icon: "fab fa-instagram",
      user: "@manajj",
      followers: 1092,
      color1: "#E5578F",
      color2: "#3D998A",
      margin: "20px",
      score: "positive",
      scoreNumber: 1000,
    },
    {
      icon: "fab fa-youtube-square",
      user: "Linda Parker",
      followers: 900,
      color1: "#C4062C",
      color2: "#BD0B2F",
      margin: "0",
      score: "negative",
      scoreNumber: 200,
    },
  ];

  const Data2 = [
    {
      name: "Page Views",
      color: "#1B8FF6",
      icon: "fab fa-facebook-square",
      number: 84,
      porcent: 3,
      score: "positive",
      margin: "20px",
    },
    {
      name: "Likes",
      color: "#1B8FF6",
      icon: "fab fa-facebook-square",
      number: 50,
      porcent: 2,
      score: "negative",
      margin: "20px",
    },
    {
      name: "Likes",
      color: "#E5578F",
      icon: "fab fa-instagram",
      number: 800,
      porcent: 200,
      score: "positive",
      margin: "20px",
    },
    {
      name: "Profile Views",
      color: "#E5578F",
      icon: "fab fa-instagram",
      number: "52K",
      porcent: 500,
      score: "positive",
      margin: 0,
    },
    {
      name: "Retweets",
      color: "#19A2F3",
      icon: "fab fa-twitter",
      number: 117,
      porcent: 300,
      score: "positive",
      margin: "20px",
    },
    {
      name: "Likes",
      color: "#19A2F3",
      icon: "fab fa-twitter",
      number: 507,
      porcent: 500,
      score: "positive",
      margin: "20px",
    },
    {
      name: "Likes",
      color: "#C4062C",
      icon: "fab fa-youtube-square",
      number: 107,
      porcent: 19,
      score: "negative",
      margin: "20px",
    },
    {
      name: "Total Views",
      color: "#C4062C",
      icon: "fab fa-youtube-square",
      number: 1407,
      porcent: 12,
      score: "negative",
      margin: 0,
    },
  ];

  return (
    <Container>
      <header style={{ backgroundColor: headerBackGroundColor }}>
        <div className="headerContent">
          <div>
            <h1 style={{ color: headerTitleColor }}>Social Media Dashboard</h1>
            <span className="follow">Total Followers: 30,008</span>
          </div>
          <div className="theme">
            <span style={{ color: headerSubTitleColor }} className="theme">
              Dark Mode
            </span>
            <Switch
              onChange={changeTheme}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#3DB9AE"
              offColor="#3DB9AE"
              onHandleColor="#353C59"
              offHandleColor="#fff"
              handleDiameter={22}
              checked={checked}
            />
          </div>
        </div>
      </header>
      <main style={{ backgroundColor: mainBackGroundColor }}>
        <div className="content">
          {Data.map((card, i) => (
            <Card
              light={theme === "dark" ? "140%" : "95%"}
              margin={card.margin}
              today={card.color2}
              key={i}
              cor={card.color1}
              style={{ backgroundColor: cardBackGroundColor }}
            >
              <div className="icon">
                <i
                  style={{ color: card.color1, fontSize: 26, marginRight: 10 }}
                  class={card.icon}
                />
                <span style={{ color: userLinkColor }}>{card.user}</span>
              </div>
              <div className="followers">
                <p style={{ color: numberColor }} className="number">
                  {card.followers}
                </p>
                <p style={{ color: userLinkColor }} className="text">
                  F o l l o w e r s
                </p>
              </div>
              <div className="today">
                {card.score === "positive" ? (
                  <i class="fas fa-caret-up"></i>
                ) : (
                  <i class="fas fa-caret-down"></i>
                )}

                <span>{card.scoreNumber} Today</span>
              </div>
            </Card>
          ))}
        </div>
        <div className="overview">
          <h2 style={{ color: headerSubTitleColor }}>Overview - Today</h2>
          <div>
            {Data2.map((card) => (
              <MiniCard
                light={theme === "dark" ? "140%" : "95%"}
                style={{ backgroundColor: cardBackGroundColor }}
                margin={card.margin}
                color={card.score === "positive" ? "#3D998A" : "#BD0B2F"}
              >
                <div className="header">
                  <span style={{ color: userLinkColor }} className="name">
                    {card.name}
                  </span>
                  <i
                    style={{ fontSize: 26, color: card.color }}
                    class={card.icon}
                  ></i>
                </div>
                <div className="body">
                  <span style={{ color: numberColor }} className="number">
                    {card.number}
                  </span>
                  <span className="percent">
                    {card.score === "positive" ? (
                      <i style={{ marginRight: 5 }} class="fas fa-caret-up" />
                    ) : (
                      <i style={{ marginRight: 5 }} class="fas fa-caret-down" />
                    )}
                    {card.porcent}%
                  </span>
                </div>
              </MiniCard>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;
