import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";

import "axios";
import Axios from "../../node_modules/axios/index";

const queryString = require("query-string");

class ProjectDetail extends Component {
  async componentDidMount() {
    var parsed = queryString.parse(this.props.location.search);
    var id = parsed.id;

    const reports = await Axios.get("http://127.0.0.1:5000/reports?id=" + id);

    const pages = await Axios.get("http://127.0.0.1:5000/pages");

    let pagesData = pages.data.data;

    console.log(pagesData);

    // for (let j = 0; j < pagesData.length; j ++) {}

    pagesData.forEach(e => {
      if (e.id == id) {
        this.setState({
          pageName: e.readable_name
        });

        return;
      }
    });

    var data = [];
    data = JSON.parse(reports.data);
    //fill missing month
    var tempData = data.map(function(e) {
      let injectArray = [];
      for (let i = 1; i <= 12; i++) {
        let injectData = { pos: 0, neg: 0, month: i };
        injectArray.push(injectData);
      }
      e.data.forEach(b => {
        let thisMonth = b.month;
        injectArray[thisMonth - 1] = { pos: b.pos, neg: b.neg, month: b.month };
      });
      return { name: e.name, data: injectArray };
    });

    var chartsData = tempData.map(function(e) {
      let makePosArray = [];
      let makeNegArray = [];

      e.data.forEach(b => {
        makePosArray.push(b.pos);
        makeNegArray.push(b.neg);
      });

      return {
        name: e.name,
        chart: {
          labels: Array.from(new Array(12), (_, i) => (i === 0 ? 1 : i + 1)),
          datasets: [
            {
              label: "Tích cực",
              fill: "start",
              data: makePosArray,
              backgroundColor: "rgba(0,123,255,0.1)",
              borderColo: "rgba(0,123,255,1)",
              pointBackgroundColor: "#ffffff",
              pointHoverBackgroundColor: "rgb(0,123,255)",
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 3
            },
            {
              label: "Tiêu cực",
              fill: "start",
              data: makeNegArray,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgba(255,65,105,1)",
              pointBackgroundColor: "#ffffff",
              pointHoverBackgroundColor: "rgba(255,65,105,1)",
              borderDash: [3, 3],
              borderWidth: 1,
              pointRadius: 0,
              pointHoverRadius: 2,
              pointBorderColor: "rgba(255,65,105,1)"
            }
          ]
        }
      };
    });
    // var projects = users.data.data;

    // var Test = projects.map(function(project) {
    //   return {
    //     id: project.id,
    //     name: project.name,
    //     backgroundImage: project.cover,
    //     authorAvatar: project.picture,
    //     title: project.readable_name,
    //     body: project.about
    //   };
    // });

    this.setState({
      chartInfos: chartsData
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      chartInfos: [],
      smallStats: [
        {
          label: "Bài đăng",
          value: "2,390",
          percentage: "4.7%",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        },
        {
          label: "Lượt đề cập",
          value: "182",
          percentage: "12.4",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Bình luận tích cực",
          value: "8,147",
          percentage: "3.8%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,180,0,0.1)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        },
        {
          label: "Bình luận tiêu cực",
          value: "29",
          percentage: "2.71%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgb(255,65,105)",
              data: [1, 7, 1, 3, 1, 4, 8]
            }
          ]
        },
        {
          label: "Mức ảnh hưởng",
          value: "17,281",
          percentage: "2.4%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgb(0,123,255,0.1)",
              borderColor: "rgb(0,123,255)",
              data: [3, 2, 3, 2, 4, 5, 4]
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={this.state.pageName}
            subtitle="Dự án"
            className="text-sm-left"
          />
        </Row>

        {/* Small Stats Blocks */}
        <Row>
          {this.state.smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        {/* TEST */}
        <Row>
          {this.state.chartInfos.map((stats, idx) => (
            <Row key={idx + "jrows"}>
              <Col lg="10" md="12" sm="12" key={idx} className="mb-4">
                <UsersOverview title={stats.name} chartData={stats.chart} />
              </Col>
              <Col lg="4" md="6" sm="12" key={idx + "jcharts"} className="mb-4">
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Dmax</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                            Tháng
                          </th>
                          <th scope="col" className="border-0">
                            Tích cực
                          </th>
                          <th scope="col" className="border-0">
                            Tiệu cực
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>11</td>
                          <td>13</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>31</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>31</td>
                          <td>55</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>621</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>123</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>131</td>
                          <td>133</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))}
        </Row>

        <Row>
          {/* Users Overview */}
          {/* <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview title="Dmax" />
          </Col> */}
          {/* 
          <Col lg="4" md="6" sm="12" className="mb-4">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Dmax</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Tháng
                      </th>
                      <th scope="col" className="border-0">
                        Tích cực
                      </th>
                      <th scope="col" className="border-0">
                        Tiệu cực
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>11</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Clark</td>
                      <td>Angela</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>31</td>
                      <td>55</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>621</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>123</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>131</td>
                      <td>133</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col> */}

          {/* 
          <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview title="11" />
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default ProjectDetail;

// const ProjectDetail = () => (
//   <Container fluid className="main-content-container px-4 pb-4">
//     {/* Page Header */}
//     <Row noGutters className="page-header py-4">
//       <PageTitle
//         sm="4"
//         title="Viettel Telecom"
//         subtitle="Dự án"
//         className="text-sm-left"
//       />
//     </Row>

//     <Row>
//       <Col lg="12" md="12">
//         {/* Complete Form Example */}
//         <Card small>
//           <CardHeader className="border-bottom">
//             <h6 className="m-0">Dự án</h6>
//           </CardHeader>
//           <AddProject />
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// );

// export default ProjectDetail;
