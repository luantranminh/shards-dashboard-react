import React, { Component } from "react";
import * as appAction from "../../redux/Action/appAction";
import CreatableSelect from "react-select/creatable";
import { connect } from "react-redux";
const components = {
  DropdownIndicator: null
};

const createOption = (label: string) => ({
  label,
  value: label
});

class CreatableInputOnly extends Component<*, State> {
  state = {
    inputValue: "",
    value: []
  };
  handleChange = (value: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    let isExisted = false;
    switch (event.key) {
      case "Enter":
        for (let i = 0; i < value.length; i++) {
          if (value[i]["label"] === inputValue) {
            isExisted = true;
            break;
          }
        }
        if (!isExisted) {
          isExisted = false;
          this.props.onGetProductValue([...value, createOption(inputValue)]);
          this.setState({
            inputValue: "",
            value: [...value, createOption(inputValue)]
          });
        } else {
          this.setState({
            inputValue: "",
            value: [...value]
          });
          this.props.onGetProductValue(this.state.value);
        }

        event.preventDefault();
        break;
      case "Tab":
        for (let i = 0; i < value.length; i++) {
          if (value[i]["label"] === inputValue) {
            isExisted = true;
            break;
          }
        }
        if (!isExisted) {
          isExisted = false;
          this.props.onGetProductValue([...value, createOption(inputValue)]);
          this.setState({
            inputValue: "",
            value: [...value, createOption(inputValue)]
          });
        } else {
          this.setState({
            inputValue: "",
            value: [...value]
          });
          this.props.onGetProductValue(this.state.value);
        }

        event.preventDefault();
        break;
      default:
        console.log("none");
    }
  };
  render() {
    const { inputValue, value } = this.state;
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Nhập danh sách sản phẩm, dịch vụ"
        value={value}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetProductValue: value => {
      dispatch(appAction.getProductValue(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatableInputOnly);
