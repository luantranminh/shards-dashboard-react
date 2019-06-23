/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import "axios";
import Axios from "../../node_modules/axios/index";
import ReactLoading from "react-loading";

class BlogPosts extends React.Component {
  async componentDidMount() {
    const users = await Axios.get("http://127.0.0.1:5000/pages");

    var projects = users.data.data;

    var Test = projects.map(function(project) {
      return {
        id: project.id,
        name: project.name,
        backgroundImage: project.cover,
        authorAvatar: project.picture,
        title: project.readable_name,
        body: project.about
      };
    });

    this.setState({
      PostsListOne: Test,
      isLoading: false
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      // First list of posts.
      PostsListOne: [
        // {
        //   backgroundImage:
        //     "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/61459736_2759220867482733_4097566411482726400_o.jpg?_nc_cat=103&_nc_oc=AQmgfK_qA1Z63QTDViw2WRcVZnlPS_L8_LLnua5P0E-5iOgdtV54BuRjVnoSbh3kj14&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=89f23b7a64baf2fa0deda83ad84fd075&oe=5D50F1A4",
        //   authorAvatar:
        //     " https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/61544922_2759221387482681_1100847804986687488_n.jpg?_nc_cat=108&_nc_ht=scontent.xx&oh=092bd55c97e899477374eed552f8341a&oe=5D89B34D",
        //   title: "Viettel Telecom",
        //   body:
        //     "Fanpage chính thức của Viettel Telecom, nơi cung cấp và giải đáp thông tin về sản phẩm, dịch vụ của Viettel. Viettel Telecom nơi bạn hỏi Viettel trả lời.",
        //   date: "28 February 2019"
        // },
        // {
        //   backgroundImage: require("../images/content-management/2.jpeg"),
        //   authorAvatar: require("../images/avatars/2.jpg"),
        //   title: "Off tears are day blind smile alone had ready",
        //   body:
        //     "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
        //   date: "29 February 2019"
        // },
        // {
        //   backgroundImage: require("../images/content-management/3.jpeg"),
        //   authorAvatar: require("../images/avatars/2.jpg"),
        //   title: "Difficult in delivered extensive at direction",
        //   body:
        //     "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
        //   date: "29 February 2019"
        // },
        // {
        //   backgroundImage: require("../images/content-management/4.jpeg"),
        //   author: "John James",
        //   authorAvatar: require("../images/avatars/3.jpg"),
        //   title: "It so numerous if he may outlived disposal",
        //   body:
        //     "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
        //   date: "29 February 2019"
        // }
      ]

      // Second list of posts.
      // PostsListTwo: [
      //   {
      //     backgroundImage: require("../images/content-management/5.jpeg"),
      //     category: "Travel",
      //     categoryTheme: "info",
      //     author: "Anna Ken",
      //     authorAvatar: require("../images/avatars/0.jpg"),
      //     title:
      //       "Attention he extremity unwilling on otherwise cars backwards yet",
      //     body:
      //       "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/6.jpeg"),
      //     category: "Business",
      //     categoryTheme: "dark",
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title:
      //       "Totally words widow one downs few age every seven if miss part by fact",
      //     body:
      //       "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      //     date: "29 February 2019"
      //   }
      // ],

      // // Third list of posts.
      // PostsListThree: [
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title: "Had denoting properly jointure which well books beyond",
      //     body:
      //       "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/2.jpg"),
      //     title: "Husbands ask repeated resolved but laughter debating",
      //     body:
      //       "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/3.jpg"),
      //     title:
      //       "Instantly gentleman contained belonging exquisite now direction",
      //     body:
      //       "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
      //     date: "29 February 2019"
      //   }
      // ],

      // Fourth list of posts.
      // PostsListFour: [
      //   {
      //     backgroundImage: require("../images/content-management/7.jpeg"),
      //     author: "Alene Trenton",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Extremity so attending objection as engrossed",
      //     body:
      //       "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/8.jpeg"),
      //     author: "Chris Jamie",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Bed sincerity yet therefore forfeited his",
      //     body:
      //       "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/9.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Object remark lively all did feebly excuse our",
      //     body:
      //       "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/10.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "His followed carriage proposal entrance",
      //     body:
      //       "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
      //     date: "29 February 2019"
      //   }
      // ]
    };
  }

  render() {
    const { PostsListOne, isLoading } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Các dự án đang theo dõi"
            subtitle="Dự án"
            className="text-sm-left"
          />
        </Row>

        {!isLoading ? (
          <Row>
            {PostsListOne.map((post, idx) => (
              <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.backgroundImage})` }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href={"/project-detail?id=" + post.id}
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${post.authorAvatar}')`
                        }}
                      >
                        Written by {post.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a
                        href={"/project-detail?id=" + post.id}
                        className="text-fiord-blue"
                      >
                        {post.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.body}</p>
                    <span className="text-muted">{post.date}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <ReactLoading className="mx-auto " type="bubbles" color="#585858" />
        )}
        {/* First Row of Posts */}

        {/* 
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    By
                    <a className="text-fiord-blue" href={post.authorUrl}>
                      {post.author}
                    </a>{" "}
                    in
                    <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
       */}
      </Container>
    );
  }
}

export default BlogPosts;
