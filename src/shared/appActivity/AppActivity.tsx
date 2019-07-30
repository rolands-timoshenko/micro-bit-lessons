import React, { Component } from "react";
import AppSnippet from "../appSnippet/AppSnippet";
import AppSelect from "../appSelect/AppSelect";
import AppLoader from "../appLoader/AppLoader";

interface IProps {
  steps: {
    text: string;
    javaScriptBlocks?: string;
  }[];
}

class AppActivity extends Component<IProps, any> {
  state = {
    step: 0
  };

  handleChangeStep = (evt: any) => {
    this.setState({
      step: evt.target.value * 1
    });
  };

  generateSelectItems = () =>
    this.props.steps.map((step, index) => ({
      value: index.toString(),
      name: `${index + 1}`
    }));

  render() {
    const text = this.props.steps[this.state.step].text;
    const javaScriptBlocks = this.props.steps[this.state.step].javaScriptBlocks
      ? this.props.steps[this.state.step].javaScriptBlocks
      : null;

    console.info("###: ", text, javaScriptBlocks);
    return (
      <div>
        <AppSelect
          items={this.generateSelectItems()}
          selectedValue={this.state.step.toString()}
          onChange={this.handleChangeStep}
        />
        <p>{text}</p>
        {javaScriptBlocks && <AppSnippet loaderCmp={<AppLoader />} code={javaScriptBlocks} />}
      </div>
    );
  }
}

export default AppActivity;
