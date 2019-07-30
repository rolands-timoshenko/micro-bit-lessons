import React from "react";
import "./App.css";
import AppPanel from "./shared/appPanel/AppPanel";
import { Container } from "@material-ui/core";
import AppActivity from "./shared/appActivity/AppActivity";
import lesson1 from "./lessons/lesson1";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <AppPanel title="Introduction">
        <p>
          This project teaches you how to create a game of rock paper scissors
          using the "random" block and the LEDs.
        </p>
      </AppPanel>
      <AppPanel title="Teacher Guide">
        <p>
          This project teaches you how to create a game of rock paper scissors
          using the "random" block and the LEDs.
        </p>
      </AppPanel>
      <AppPanel title="Activity">
        <AppActivity steps={lesson1.activity.steps} />
      </AppPanel>
    </Container>
  );
};

export default App;
