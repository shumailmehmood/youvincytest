/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import ReadMoreReact from 'read-more-react';
// reactstrap components
import {
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <PanelHeader
          size="sm"
        // content={
        //   <Line
        //     data={dashboardPanelChart.data}
        //     options={dashboardPanelChart.options}
        //   />
        // }
        />
        <div className="content">
          <Row>
            <Col md={1}>
            </Col>
            <Col md={10}>
              <h6 className="card-category" style={{ fontWeight: "bold", color: "black" }}>Write Story Here</h6>
              <Card className="card-chart" style={{ borderRadius: "10px" }}>
                <CardBody>
                  <Row>
                    <Col md={11}></Col>
                    <Col md={1}><i className="fa fa-cog" style={{ fontSize: "20px" }} aria-hidden="true"></i></Col>
                  </Row>
                  <Row>
                    <Form>
                      <Row style={{ marginBottom: "10px" }}>
                        <Col md={1}></Col>
                        <Col className="pr-1" md={10}>
                          {/* <FormGroup> */}
                          <input
                            className="custom-form"
                            placeholder="Enter Your Title"
                            type="text"
                            style={{ height: "44px", width: "515px" }}

                          />
                          {/* </FormGroup> */}
                        </Col>
                        <Col md={1}></Col>
                      </Row>

                      <Row>
                        <Col md={1}></Col>

                        <Col md={10}>
                          {/* <FormGroup> */}
                          <textarea
                            className="custom-form"
                            cols="85"
                            placeholder="Here can be your description"
                            rows="4"
                            name="text"
                            id="exampleText"

                          ></textarea>

                          {/* </FormGroup> */}
                        </Col>
                        <Col md={1}></Col>

                      </Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={4}>
                          <select style={{ width: "162px" }} className="custom-form">
                            <option value="" disabled selected hidden>Select categories</option>
                          </select>
                        </Col>
                        <Col md={3}>
                          <input
                            className="custom-form"
                            placeholder="Enter Your Title"
                            type="text"
                            style={{ height: "44px", marginLeft: "-32px" }}
                          />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2}>
                          <Button style={{ marginTop: "-1px", width: "110px", marginLeft: "-30px", borderRadius: "12px", height: "44px" }} color="warning">Post Story</Button>
                        </Col>
                        <Col md={1}></Col>
                      </Row>
                    </Form>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={1}>
            </Col>
          </Row>
          <Row>
            <Col md={1}>
            </Col>
            {[{ back: "#FFF3F3", font: "#FF7F7F" }, { back: "#F3F9FF", font: "#70B7FF" }].map((element, i) => (
              <Col md={5}>
                <Card className="card-chart" style={{ borderRadius: "10px", backgroundColor: `${element.back}` }}>
                  <CardBody>
                    <Row>
                      <Col md={6}><h5 style={{ fontWeight: "bolder" }}>Title of Card</h5></Col>
                      <Col md={6}><h5 style={{ float: "right" }}>Title of Card</h5></Col>
                    </Row>
                    <Row>
                      <Col md={6}><h5 style={{ fontWeight: "bolder" }}>Title of Card</h5></Col>
                      <Col md={6}><h5 style={{ float: "right" }}></h5></Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <ReadMoreReact text={
                          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                          readMoreText={
                            <b style={{ color: `${element.font}` }}>Read More..</b>
                          } />
                        <p>


                        </p></Col>

                    </Row>
                    <Row>
                      <Col md={10}>
                        <div className="text-left">Fund Needed</div>
                        <Progress color={i ? null : "danger"} value="25" />
                      </Col>
                      <Col md={2}>
                        <div style={{ marginTop: "14px", fontWeight: "bold", fontSize: "20px", color: `${element.font}` }}>25%</div>

                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={3}>
                        <i class="fa fa-heart" style={{ color: `${element.font}` }} aria-hidden="true"></i><span style={{ color: `${element.font}` }}>256</span><span>likes</span>
                      </Col>
                      <Col md={4}>
                        <i class="fa fa-comment" style={{ color: `${element.font}` }} aria-hidden="true"></i><span>256</span><span style={{ color: `${element.font}` }}>comment</span>
                      </Col>
                      <Col md={3}>
                        <i class="fa fa-share" style={{ color: `${element.font}` }} aria-hidden="true"></i><span style={{ color: `${element.font}` }}>256</span><span>share</span>
                      </Col>
                      <Col md={1}></Col>

                    </Row>
                  </CardFooter>
                </Card>
              </Col>

            ))}






            <Col md={1}>
            </Col>
          </Row>


        </div>

        {/* <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Global Sales</h5>
                  <CardTitle tag="h4">Shipped Products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">2018 Sales</h5>
                  <CardTitle tag="h4">All products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Email Statistics</h5>
                  <CardTitle tag="h4">24 Hours Performance</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">Backend Development</h5>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip731609871"
                              type="button"
                            >
                              <i className="now-ui-icons ui-2_settings-90" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731609871"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip923217206"
                              type="button"
                            >
                              <i className="now-ui-icons ui-1_simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip923217206"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip907509347"
                              type="button"
                            >
                              <i className="now-ui-icons ui-2_settings-90" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip907509347"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip496353037"
                              type="button"
                            >
                              <i className="now-ui-icons ui-1_simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip496353037"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Flooded: One year later, assessing what was lost and
                            what was found when a ravaging rain swept through
                            metro Detroit
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip326247652"
                              type="button"
                            >
                              <i className="now-ui-icons ui-2_settings-90" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip326247652"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip389516969"
                              type="button"
                            >
                              <i className="now-ui-icons ui-1_simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip389516969"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3
                    minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-category">All Persons List</h5>
                  <CardTitle tag="h4">Employees Stats</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col> 
          </Row>
        </div>*/}
      </>
    );
  }
}

export default Dashboard;
