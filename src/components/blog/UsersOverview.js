import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
} from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";
var BlogUsersOverview;
class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();


    this.state = {
      year: this.props.year,
      chartData: this.props.chartData,
    };
  }

  componentDidMount() {
    const chartOptions = {
      responsive: true,
      legend: {
        position: "top"
      },
      elements: {
        line: {
          // A higher value makes the line look skewed at this ratio.
          tension: 0.3
        },
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              callback(tick, index) {
                // Jump every 7 values on the X axis labels to avoid clutter.
                return index % 2 !== 0 ? "" : tick;
              }
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: 45,
              callback(tick) {
                if (tick === 0) {
                  return tick;
                }
                // Format the amounts using Ks for thousands.
                return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
              }
            }
          }
        ]
      },
      hover: {
        mode: "nearest",
        intersect: false
      },
      tooltips: {
        custom: false,
        mode: "nearest",
        intersect: false
      }
  };
  
  if (typeof BlogUsersOverview !== "undefined") BlogUsersOverview.destroy();

  BlogUsersOverview =  new Chart(this.canvasRef.current, {
    type: "LineWithLine",
    data: this.state.chartData,
    options: chartOptions}
  );  
  BlogUsersOverview.render()
  }


  test2 = (chartData) => {
    const chartOptions = {
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 2 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };
    
    if (typeof BlogUsersOverview !== "undefined") BlogUsersOverview.destroy();

    
    BlogUsersOverview =  new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: chartData,
      options: chartOptions}
    );  

  }
  test(chartData) {
    const chartOptions = {
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 2 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };
    
    // if (typeof BlogUsersOverview !== "undefined") BlogUsersOverview.destroy();

    
    BlogUsersOverview =  new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: chartData,
      options: chartOptions}
    );  


    // Render the chart.
    BlogUsersOverview.render();
  }

  handleChange = (e) => {
    this.props.update_year(e.target.value);
    
    this.setState({
      year: e.target.value,
      chartData: this.props.chartData,
    });

    this.setState((state, props) => ({
      chartData: props.chartData
    }), () => {
      const chartOptions = {
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 2 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };
    
    if (typeof BlogUsersOverview !== "undefined") BlogUsersOverview.destroy();
  
    BlogUsersOverview =  new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.state.chartData,
      options: chartOptions}
    );  
    });
    
  }

  render() {
    const { title } = this.props;
    return (
      <Card small  className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            <Col sm="5" className="d-flex mb-2 mb-sm-0">
              <InputGroup className="mb-3">
                <InputGroupAddon type="prepend">
                  <InputGroupText>Năm</InputGroupText>
                </InputGroupAddon>
                <FormSelect onChange={(e) => this.handleChange(e)} value={this.state.year}>
                  {this.props.years.map((y,i) => (
                    <option value={y}  key={i+y}>{y}</option>
                  ) )}
                </FormSelect>
              </InputGroup>
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
            </Col>
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: Array.from(new Array(12), (_, i) => (i === 0 ? 1 : i + 1)),
    datasets: [
      {
        label: "Tích cực",
        fill: "start",
        data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Tiêu cực",
        fill: "start",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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

export default UsersOverview;
