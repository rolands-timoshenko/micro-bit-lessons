import React from "react";
import "./App.css";
import AppPanel from "./shared/appPanel/AppPanel";
import { Container } from "@material-ui/core";
import AppActivity from "./shared/appActivity/AppActivity";
import lesson1 from "./lessons/lesson1";
import AppLesson from "./shared/appLesson/AppLesson";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <AppLesson lesson={lesson1} />
    </Container>
  );
};

export default App;
