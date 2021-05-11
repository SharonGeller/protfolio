import React from "react";
import styled from "styled-components";
import Typewriter from "react-simple-typewriter";
import { Row, Column } from "../../components/layout";
import Bubbles from "./components/Bubbles";

const Welcome = () => {
  return (
    <Column
      height={"100%"}
      width={"60%"}
      style={{
        justifyContent: "center",
      }}
    >
      <TitleContiner>
        <Title>Hi! My name is Sharon Geller, </Title>
        <Span>
          I a'm
          <SpanColored>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                " a web developer.",
                " a backend developer.",
                " an automation developer.",
                " a QA engineer.",
                " a game developer (wannabe).",
              ]}
            />
          </SpanColored>
        </Span>
      </TitleContiner>
      <Bubbles>ssd</Bubbles>
    </Column>
  );
};

const TitleContiner = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-left: 10%;
`;

const Title = styled.h1`
  font-family: RobotoMono;
  font-size: 90px;
  color: #edf5e1;
`;

const Span = styled.span`
  font-family: RobotoMono;
  font-size: 40px;
  color: #edf5e1;
`;

const SpanColored = styled.span`
  font-family: RobotoMono;
  font-size: 40px;
  color: #05386b;
`;

export default Welcome;
