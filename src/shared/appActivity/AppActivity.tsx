import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import AppLoader from "../appLoader/AppLoader";
import AppSnippet from "../appSnippet/AppSnippet";
import AppActivitySelector from "./appActivitySelector/AppActivitySelector";
import AppActivityNavigation from "./appActivityNavigation/AppActivityNavigation";

const stepAsText = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

// TODO: improve to handle bigger numbers
// Also could be moved into utils
const tranformNumberIntoText = (num: number): string =>
  stepAsText[num] ? stepAsText[num] : "unknown";

interface IProps {
  steps: {
    text: string;
    javaScriptBlocks?: string;
  }[];
}

interface IState {
  step: number;
}

class AppActivity extends Component<IProps, IState> {
  state = {
    step: 0
  };

  handleChangeStep = (evt: any): void => {
    this.setState({
      step: evt.target.value * 1
    });
  };

  generateSelectItems = (): { value: string; name: string }[] =>
    this.props.steps.map((_step, index) => ({
      value: index.toString(),
      name: `${index + 1}`
    }));

  renderActiveStep = (step: number): JSX.Element => {
    return (
      <Typography style={{ textTransform: "capitalize" }} variant="h5">
        Step {tranformNumberIntoText(step)}
      </Typography>
    );
  };

  hasNextStep = (): boolean => {
    return this.state.step + 1 < this.props.steps.length;
  };

  hasPrevStep = (): boolean => {
    return this.state.step !== 0;
  };

  handleNext = (): void => {
    this.setState(prevState => ({
      step: prevState.step + 1
    }));
  };

  handlePrev = (): void => {
    this.setState(prevState => ({
      step: prevState.step - 1
    }));
  };

  render(): JSX.Element {
    const text = this.props.steps[this.state.step].text;
    const javaScriptBlocks = this.props.steps[this.state.step].javaScriptBlocks
      ? this.props.steps[this.state.step].javaScriptBlocks
      : null;

    return (
      <>
        <AppActivitySelector
          items={this.generateSelectItems()}
          selectedValue={this.state.step.toString()}
          onChange={this.handleChangeStep}
        />
        {this.renderActiveStep(this.state.step)}
        <p>{text}</p>
        {javaScriptBlocks && (
          <AppSnippet loaderCmp={<AppLoader />} code={javaScriptBlocks} />
        )}
        <AppActivityNavigation
          hasNextStep={this.hasNextStep()}
          hasPrevStep={this.hasPrevStep()}
          onNext={this.handleNext}
          onPrev={this.handlePrev}
        />
      </>
    );
  }
}

export default AppActivity;
