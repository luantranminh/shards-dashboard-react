import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
import { connect } from "react-redux";

import CreatableInputOnly from "./MultiSelect";
import cogoToast from "cogo-toast";
import "axios";
import Axios from "../../../node_modules/axios/index";

class AddProject extends Component {
  async handleOnButtonClick(e) {

    // ?pagename=Vietteltelecom&product=DMAX
    let myProduct = "";
    this.props.productsValue.forEach((e) => {
      myProduct += e.value + ",";
    });
    myProduct = myProduct.substring(0, myProduct.length - 1);

    let url = `http://127.0.0.1:5000/posts?pagename=${this.state.value}&product=${myProduct}`

    console.log(url)
    
    cogoToast.loading("Đang tải", { position: "top-right" }).then(() => {
      Axios.post(url).then(u => {
        cogoToast.success("Thành công đang phân tích dự án, xin vui lòng chờ", {
          position: "top-right"
        });
      });
    });

    e.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <label htmlFor="feInputPageName">Tên trang</label>
                  <FormInput
                    id="feInputPageName"
                    size="lg"
                    className="mb-3"
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                    placeholder="Nhập tên trang dạng https://facebook.com/vietteltelecom sẽ nhập vào vietteltelecom"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="feInputProduct">Danh sách sản phẩm</label>
                  <CreatableInputOnly />
                </FormGroup>

                <Button
                  type="submit"
                  onClick={e => this.handleOnButtonClick(e)}
                >
                  Tạo dự án
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    productsValue: state.app.productsValue
  };
};

export default connect(mapStateToProps)(AddProject);
