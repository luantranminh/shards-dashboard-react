import React from "react";
import { Container, Row, Col, Card, CardHeader } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddProject from "../components/add-new-project/AddProject";

const AddNewProject = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Thêm một dự án" subtitle="Khởi tạo" className="text-sm-left" />
    </Row>

    <Row>
      <Col lg="12" md="12">
        {/* Complete Form Example */}
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Dự án</h6>
          </CardHeader>
          <AddProject />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AddNewProject;
