import React, { Component } from "react";
import { Link } from "react-router-dom";
class Graduation extends Component {
  render() {
    return (
      <div className="homepagem">
        <div id="wrapper">
          <header
            className="header normal-header affix-top"
            data-spy="affix"
            data-offset-top="197"
          >
            <div className="container1">
              <nav className="navbar navbar-default yamm">
                <div className="container-full">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#navbar"
                      aria-expanded="false"
                      aria-controls="navbar"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand with-text" to="/">
                      <img
                        alt=""
                        src={require("../.././images/logo-edumonk1.png")}
                        width="100%"
                      />
                    </Link>
                    <Link
                      className="logheader with-text nodesktop"
                      data-toggle="modal"
                      data-target="#loginform"
                      to=""
                    >
                      <i className="fa fa-user" />
                    </Link>
                  </div>

                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="dropdown yamm-fw">
                        <Link to="/" className="active">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link title="" to="/about-us">
                          Our-Team
                        </Link>
                      </li>
                      <li className="dropdown yamm-fw">
                        <Link
                          to="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle active"
                        >
                          Course Library <b className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu coursedrop container-fluid">
                          <li>
                            <div className="yamm-content clearfix">
                              <div className="row-fluid coursesnavv">
                                <ul id="myTab" className="nav nav-pills">
                                  <li className="jobpane1 ">
                                    <Link to="/navbar" data-toggle="tab">
                                      After 12th
                                    </Link>
                                  </li>
                                  <li className="clgpane1 active">
                                    <Link
                                      to="/graduation"
                                      data-toggle="tab"
                                    >
                                      Graduation
                                    </Link>
                                  </li>{" "}
                                </ul>
                              </div>
                              <div>
                                <div id="myTabContent" className="tab-content">
                                  <div
                                    className="tab-pane jobpane1box fade in active"
                                    id="after12pn"
                                  >
                                    <div className="masonry navcoursesit">
                                      <div className="item">
                                        <h2>
                                          <Link to="/ManagementandBusiness">
                                            <i className="fa fa-bar-chart" />
                                            Management &amp; Business
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/Business_Administration">
                                              Bachelor of Business
                                              Administration
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/Management_Business">
                                              Bachelor of Business Management
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/Engineering">
                                            <i className="fa fa-gears" />
                                            Engineering
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/agriculture">
                                              Agriculture Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/information">
                                              Information Technology Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/electronics">
                                              Electronics &amp;
                                              Tele-communication
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/chemical">
                                              Chemical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/biochemical">
                                              Biochemical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/metallurgical">
                                              Metallurgical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/electrical">
                                              Electrical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/mechanical">
                                              Mechanical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/civil">
                                              Civil Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/aeronautical">
                                              Aeronautical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/mining">
                                              Mining engineering
                                            </Link>
                                          </li>

                                          <li>
                                            <Link to="electrical_instrumental">
                                              Electrical and Instrumentation
                                              Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/astronautical">
                                              Astronautical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/aircraft">
                                              Aircraft Maintenance Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/computer">
                                              Computer Science Engineering
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/architecture">
                                            <i className="fa fa-building-o" />
                                            Architecture
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_architecture">
                                              Bachelor of Architecture
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/computer_app">
                                            <i className="fa fa-desktop" />
                                            Computers &amp; IT
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor-computer">
                                              Bachelor of Computer Applications
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/medical">
                                            <i className="fa fa-medkit" />
                                            Medical &amp; Health Care
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_medicine">
                                              Bachelor of Medicine &amp;
                                              Bachelor of Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor-ayurveda">
                                              Bachelor of Ayurveda, Medicine and
                                              Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_homeopathy">
                                              Bachelor of Homeopathy medicine
                                              and Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_unani">
                                              Bachelor of Unani Medicine and
                                              Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_physiotherapy">
                                              Bachelor of Physiotherapy
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_dental">
                                              Bachelor of Dental Surgery
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/law">
                                            <i className="fa fa-gavel" />
                                            Law
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_law">
                                              Bachelor of Laws
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_art">
                                              Bachelor of Arts &amp; Law (B.A,
                                              LLB)
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_comLaw">
                                              Bachelor of Commerce &amp; Law
                                              (B.Com, LLB)
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="bachelor_businessadd">
                                              Bachelor of Business
                                              Administration &amp; Law (BBA,
                                              LLB)
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/commerce">
                                            <i className="fa fa-rupee" />
                                            Commerce
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_commerce">
                                              Bachelor of Commerce
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/chartedAccountent">
                                              Chartered Accountant (CA)
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/science">
                                            <i className="fa fa-flask" />
                                            Science
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_science">
                                              Bachelor of Science(Nursing)
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/art_huminities">
                                            <i className="fa fa-paint-brush" />
                                            Arts &amp; Humanities
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_arts">
                                              Bachelor of Arts
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_fineart">
                                              Bachelor of Fine Arts (BFA)
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_fineArts">
                                              Diploma in Fine Arts
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/diploma">
                                            <i className="fa fa-gears" />
                                            Diploma in Engineering
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/diploma_civil">
                                              Diploma in Civil Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_automobile">
                                              Diploma in Automobile Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_computer">
                                              Diploma in Computer Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_electrical">
                                              Diploma in Electrical &amp;
                                              Electronics Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_electronics">
                                              Diploma in Electronics &amp;
                                              Communication Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/diploma_mechanical">
                                              Diploma in Mechanical Engineering
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/pharmecy">
                                            <i className="fa fa-medkit" />
                                            Pharmacy
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_pharmecy">
                                              Bachelor of Pharmacy
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/hotal_management">
                                            <i className="fa fa-bed" />
                                            Hotel Management
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_hmanagement">
                                              Bachelor of Hotel Management
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/fashion_design">
                                            <i className="fa fa-black-tie" />
                                            Fashion &amp; Design
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_design">
                                              Bachelor of Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/fashion_designcourse">
                                              Fashion Design Courses
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/media-mass">
                                            <i className="fa fa-camera" />
                                            Media &amp; Mass Communication
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/Bachelor_journalism">
                                              Bachelor's in Journalism and Mass
                                              Communication
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/Agriculture1">
                                            <i className="fa fa-crop" />
                                            Agriculture
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bachelor_horiculture">
                                              Bachelor of Technology (B.Tech) in
                                              Horticulture
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_scienceHorticulture">
                                              Bachelor of Science (B.Sc) in
                                              Horticulture
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/agriculture_business">
                                              Agriculture Business Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bachelor_scienceAgriculture">
                                              Bachelor of Science (B.Sc) in
                                              Agriculture
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/teaching">
                                            <i className="fa fa-graduation-cap" />
                                            Teaching
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bed">B.Ed</Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/aviation">
                                            <i className="fa fa-plane" />
                                            Aviation
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/bba_airport">
                                              BBA in Airport Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/bsc_avaition">
                                              B.Sc. Aviation
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/diploma_certificate">
                                            <i className="fa fa-file" />
                                            Diploma and Certificate Courses
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/Airfare_ticketing">
                                              Airfare and Ticketing Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/aviation_hospitality">
                                              Aviation Hospitality
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="/travel-tourism">
                                            <i className="fa fa-plane" />
                                            Travel and Tourism
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="/tourism_management">
                                              Tourism Management
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane clgpane1box fade"
                                    id="aftergraduation"
                                  >
                                    <div className="masonry navcoursesit graduationcrs">
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/management--business">
                                            <i className="fa fa-chart-bar" />
                                            Management &amp; Business
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-business-administration">
                                              Master of Business Administration
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="mba-in-human-resource-management">
                                              MBA in Human Resource Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="mba-in-finance">
                                              MBA in Finance
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="mba-in-marketing">
                                              MBA in Marketing
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="logistics-and-supply-chain-management">
                                              Logistics and Supply Chain
                                              Management
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/engineering">
                                            <i className="fa fa-cog" />
                                            Engineering
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="mtech-in-mechanical-engineering">
                                              M.Tech in Mechanical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="m-tech-in-chemical-engineering">
                                              M. Tech in Chemical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="m-tech-in-electrical-engineering">
                                              M. Tech in Electrical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="m-tech-computer-science-engineering">
                                              M. Tech Computer Science
                                              Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="m-tech-in-electronics--communication-engineering">
                                              M. Tech in Electronics &amp;
                                              communication Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="masters-in-aeronautical-engineering">
                                              Masters in Aeronautical
                                              Engineering
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/commerce">
                                            <i className="fa fa-rupee" />
                                            Commerce
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-commerce">
                                              Master of Commerce
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/arts--humanities">
                                            <i className="fa fa-paint-brush" />
                                            Arts &amp; Humanities
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-arts">
                                              Master of Arts
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/computers">
                                            <i className="fa fa-desktop" />
                                            Computers
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-computer-applications">
                                              Master of Computer Applications
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/architecture">
                                            <i className="fa fa-building" />
                                            Architecture
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="masters-of-architecture">
                                              Masters of Architecture
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/law">
                                            <i className="fa fa-gavel" />
                                            Law
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-law">
                                              Master of Law
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/teaching">
                                            <i className="fa fa-user" />
                                            Teaching
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="masters-in-education">
                                              Masters in Education
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/media--mass-communication">
                                            <i className="fa fa-camera" />
                                            Media &amp; Mass Communication
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="mass-communication">
                                              Mass Communication
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="media-pg">
                                              Media PG
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/pharmacy">
                                            <i className="fa fa-medkit" />
                                            Pharmacy
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-pharmacy">
                                              Master of Pharmacy
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/medical--health-care">
                                            <i className="fa fa-plus-square" />
                                            Medical &amp; Health Care
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-dental-surgery">
                                              Master of Dental Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="masters-of-physiotherapy">
                                              Masters of Physiotherapy
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/fashion--design">
                                            <i className="fa fa-paint-brush" />
                                            Fashion &amp; Design
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-design">
                                              Master of Design
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/aviation">
                                            <i className="fa fa-plane" />
                                            Aviation
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="msc-aviation">
                                              M.Sc. Aviation
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="item">
                                        <h2>
                                          <Link to="https://www.careerpotli.com/course-category/graduation/science">
                                            <i className="fa fa-filter" />
                                            Science
                                          </Link>
                                        </h2>
                                        <ul>
                                          <li>
                                            <Link to="master-of-science">
                                              Master of Science
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>{" "}
                                  </div>
                                </div>

                                <div className="col-md-12 imgchoose">
                                  <div className="col-md-4 col-md-offset-2">
                                    <img
                                      alt=""
                                      src={require("../.././images/confuse-choose.png")}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <Link
                                      to="https://www.careerpotli.com/course-options.php"
                                      className="imgchoosea"
                                    >
                                      Help me to choose
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown yamm-fw">
                        <Link
                          to="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle active"
                        >
                          Exam Library <b className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu coursedrop container-fluid">
                          <li>
                            <div className="yamm-content clearfix coursenav exmnavcoursesit">
                              <div className="row-fluid">
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="/Engineering1"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/Engineering1"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Engineering
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/jee-main">JEE Mains</Link>
                                      </li>
                                      <li>
                                        <Link to="/jee-advance">
                                          JEE Advance
                                        </Link> 
                                      </li>
                                      <li>
                                        <Link to="/bitsat">
                                          BITSAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/vitee">
                                          VITEEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/wbjee">
                                          WBJEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/jcece">
                                          JCECE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/upsee">
                                          UPSEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ojee">
                                          OJEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/bcece">
                                          BCECE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/gate">
                                          GATE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/srmjeee">
                                          SRMJEEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/aeee">
                                          AEEE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/nata">
                                          NATA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/muoet">
                                          MUOET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ceed">
                                          CEED
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/iiith-pgee">
                                          IIITH PGEE
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="/Management11"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/Management11"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-bars" />
                                        Management
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/cat">
                                          CAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/mat">
                                          MAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/xat">
                                          XAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/snap">
                                          SNAP
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/nmat">
                                          NMAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ibsat">
                                          IBSAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/cmat">
                                          CMAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/atma">
                                          ATMA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/iift">
                                          IIFT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/tancet">
                                          TANCET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/mah-cet">
                                          MAH-CET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/irma">
                                          IRMA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/kiitee-management">
                                          KIITEE MANAGEMENT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/kmat">
                                          KMAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/tsicet">
                                          TSICET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/hpu-mat">
                                          HPU MAT
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="/compititive_exam"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/compititive_exam"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Compititive Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/upsc-ias">
                                          UPSC-IAS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ssc-cgl">
                                          SSC-CGL
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ctet">
                                          CTET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/kvpy">
                                          KVPY
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ibps-po">
                                          IBPS-PO
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/sbi-clerk">
                                          SBI Clerk
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ibps-clerk">
                                          IBPS-Clerk
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ies">
                                          IES
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ntse">
                                          NTSE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/psu-through-gate">
                                          PSU Through GATE
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ssc-chsl">
                                          SSC-CHSL
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/uptet">
                                          UPTET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/icar-aieea">
                                          ICAR AIEEA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/fddi---aist">
                                          FDDI - AIST
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/medical-exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/medical-exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Medical Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/aiims">
                                          AIIMS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/neet">
                                          NEET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/jipmer">
                                          JIPMER
                                        </Link>
                                      </li>
                                      <li>
                      
                      
                                           <Link to="https://www.careerpotli.com/exam-details/gujcet">
                                          GUJCET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/bhu-pmt">
                                          BHU PMT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          PMET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/law-exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/law-exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Law Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/ap-lawcet-2019">
                                          AP LAWCET 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/clat-2019">
                                          CLAT 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/ailet-2019">
                                          AILET 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/lsat">
                                          LSAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/mh-cet">
                                          MH CET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/other-exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/other-exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Other Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/comedk---uget">
                                          COMEDK - UGET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown yamm-fw">
                        <Link
                          to="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle active"
                        >
                          College <b className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu coursedrop container-fluid">
                          <li>
                            <div className="yamm-content clearfix coursenav exmnavcoursesit">
                              <div className="row-fluid">
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Engineering
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            4636 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-bar-chart" />
                                        Management &amp; Business
                                      </Link>
                                    </h2>
                                    <p />

                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/manager-50.png")}
                                            title="Management"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            6014 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-desktop" />
                                        Computer Application
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            3934 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-medkit" />
                                        Medical &amp; Health Care
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/dna_helix-50.png")}
                                            title="Life sciences"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            1534 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gavel" />
                                        Law
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/law-50.png")}
                                            title="Law"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            1052 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-rupee" />
                                        Commerce
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/literature-50.png")}
                                            title="Education"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            3833 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-flask" />
                                        Science
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/geography-50.png")}
                                            title="Social sciences"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            4920 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-paint-brush" />
                                        Arts
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/art_prices-50.png")}
                                            title="Arts"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            4222 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Diploma in Engineering
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            4576 Colleges
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-medkit" />
                                        Pharmacy
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/pill-50.png")}
                                            title="Pharmacy"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            4576 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-bed" />
                                        Hotel Management
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            750 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-black-tie" />
                                        Fashion
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/3d_glasses_filled-50.png")}
                                            title="Fashion"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            276 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-camera" />
                                        Media &amp; Mass Communication
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/advertising-50.png")}
                                            title="Mass communication"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            1229 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-crop" />
                                        Agriculture
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/spade-50.png")}
                                            title="Agriculture"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            716 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-graduation-cap" />
                                        Education
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/geography-50.png")}
                                            title="Social sciences"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            2751 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-plane" />
                                        Aviation
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            144 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-file" />
                                        Diploma and Certificate Courses
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/design-50.png")}
                                            title="Design"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            714 Courses{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-plane" />
                                        Hotal Management
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            750 Colleges
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-chart-bar" />
                                        Management
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/manager-50.png")}
                                            title="Management"
                                            width="50"
                                          />
                                          <p className="each_subject_value">
                                            {" "}
                                            6014 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Architecture
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/apartment-50.png")}
                                            title="Architecture"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            516 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Dental
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            393 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Paramedical
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            997 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Veterinary Science
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            97 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Vocational Course
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link
                                          to="/courses/search?interest=1-2-3-4-5-6-7-8-9-40-41-49"
                                          className="each_subject"
                                          title="Study Engineering Programs Abroad"
                                        >
                                          <img
                                            alt=""
                                            src={require("../.././images/engineering-50.png")}
                                            title="Engineering"
                                            width="50"
                                          />

                                          <p className="each_subject_value">
                                            {" "}
                                            714 Colleges{" "}
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown yamm-fw">
                        <Link
                          to="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle active"
                        >
                          Scholarships <b className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu coursedrop container-fluid">
                          <li>
                            <div className="yamm-content clearfix coursenav exmnavcoursesit">
                              <div className="row-fluid">
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/engineering"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Select Nationality
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/jee-mains">
                                          Afghanistan
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/viteee">
                                          Argentina
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/wbjee">
                                          Australia
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/bcece">
                                          Bangladesh
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/gate">
                                          Belgium
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/srmjeee">
                                          Bhutan
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/aeee">
                                          Brazil
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/nata">
                                          Burma (Myanmar)
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/muoet">
                                          Canada
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/ceed">
                                          China
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          France
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Germany
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Greece
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Hong Kong
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          India
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Indonesia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Israel
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Italy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Japan
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Korea, South
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Kuwait
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Malaysia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Maldives
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Mexico
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          New Zealand
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Nepal
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Philippines
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Russian Federation
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Saudi Arabia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Singapore
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          South Africa
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Spain
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Sri Lanka
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Switzerland
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Thailand
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          United Kingdom
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          United States
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/management"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/management"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-bars" />
                                        Desired level of study
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/cat">
                                          High/Secondary School
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/mat">
                                          Bachelors
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/xat">
                                          Masters
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/snap">
                                          Post Doc
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/nmat">
                                          Diploma
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/ibsat">
                                          Training
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/cmat">
                                          Conferences
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/atma">
                                          Research Fellow
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iift">
                                          Short courses
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/tancet">
                                          Travel Grants
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/mah-cet">
                                          Scientist
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/irma">
                                          MBA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/kiitee-management">
                                          M.tech
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/kmat">
                                          M.S.
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/tsicet">
                                          MCA
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/hpu-mat">
                                          Other
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/compititive-exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/compititive-exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Country Looking into
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/jee-mains">
                                          Afghanistan
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/viteee">
                                          Argentina
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/wbjee">
                                          Australia
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/bcece">
                                          Bangladesh
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/gate">
                                          Belgium
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/srmjeee">
                                          Bhutan
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/aeee">
                                          Brazil
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/nata">
                                          Burma (Myanmar)
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/muoet">
                                          Canada
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/ceed">
                                          China
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          France
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Germany
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Greece
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Hong Kong
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          India
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Indonesia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Israel
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Italy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Japan
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Korea, South
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Kuwait
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Malaysia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Maldives
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Mexico
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          New Zealand
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Nepal
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Philippines
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Russian Federation
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Saudi Arabia
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Singapore
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          South Africa
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Spain
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Sri Lanka
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Switzerland
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          Thailand
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          United Kingdom
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/iiith-pgee">
                                          United States
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding">
                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/medical-exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="https://www.careerpotli.com/exam-category/medical-exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Fields Interested In
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/aiims">
                                          Art & Art studies
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/neet">
                                          Culinary Arts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/jipmer">
                                          Film and Theatre studies
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/gujcet">
                                          Language, Literature and Culture
                                          studies
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/bhu-pmt">
                                          Philosophy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Music
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Religious studies and Theology
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Medicine
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Pharmacy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Nursing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Dentistry
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Public health
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Veterinary medicine
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Physiotherapy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          History
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Geography
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Political sciences and International
                                          Relations
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Gender studies
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Physics
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Mathematics
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Chemistry
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Biology
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Civil / Construction Engineering
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Mechanical Engineering
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Computer sciences and Information
                                          Technology
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Electrical / Electronics and
                                          communications
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Biotechnology, Biomedical and other
                                          related
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Aerospace, Aeronautical and Marine
                                          Engineering
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Business, Management, Economics &
                                          Accounting
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Animation and Graphic Design
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Tourism and Hospitality
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Earth Sciences and Geology
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://www.careerpotli.com/exam-details/pmet">
                                          Sports
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 no-padding" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link title="" to="/ask_edumonk">
                          Ask
                        </Link>
                      </li>
                      <li>
                        <Link
                          title=""
                          to="https://www.careerpotli.com/career-counselling-experts-in-india.php"
                        >
                          Live Webinar
                        </Link>
                      </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li className="">
                        <Link
                          to="https://www.careerpotli.com/login.php"
                          className="loginbuttonh"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="https://www.careerpotli.com/register.php"
                          className=""
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Graduation;
