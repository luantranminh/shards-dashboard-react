import React from "react";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    Button,

} from "shards-react";

import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect'

const AddProject = () => (
    <ListGroup flush>
        <ListGroupItem className="p-3">
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <label htmlFor="feInputPageName">Tên trang</label>
                            <FormInput id="feInputPageName" size="lg" className="mb-3" placeholder="Nhập tên trang dạng https://facebook.com/vietteltelecom sẽ nhập vào vietteltelecom" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="feInputProduct">Danh sách sản phẩm</label>
                            <Multiselect busy />
                        </FormGroup>

                        <Button type="submit">Tạo dự án</Button>
                    </Form>
                </Col>
            </Row>
        </ListGroupItem>
    </ListGroup>
);

export default AddProject;
