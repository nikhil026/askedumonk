import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="nav navbar-nav navbar-left">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Ask 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

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
                                            <Link to="/bachelor_computer">
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
                                            <Link to="/bachelor_ayurveda">
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
                                          <Link to="/media_mass">
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
                                          <Link to="/travel_tourism">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-business-administration">
                                              Master of Business Administration
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/mba-in-human-resource-management">
                                              MBA in Human Resource Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/mba-in-finance">
                                              MBA in Finance
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/mba-in-marketing">
                                              MBA in Marketing
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/logistics-and-supply-chain-management">
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
                                            <Link to="https://www.careerpotli.com/course-details/mtech-in-mechanical-engineering">
                                              M.Tech in Mechanical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/m-tech-in-chemical-engineering">
                                              M. Tech in Chemical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/m-tech-in-electrical-engineering">
                                              M. Tech in Electrical Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/m-tech-computer-science-engineering">
                                              M. Tech Computer Science
                                              Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/m-tech-in-electronics--communication-engineering">
                                              M. Tech in Electronics &amp;
                                              communication Engineering
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/masters-in-aeronautical-engineering">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-commerce">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-arts">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-computer-applications">
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
                                            <Link to="https://www.careerpotli.com/course-details/masters-of-architecture">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-law">
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
                                            <Link to="https://www.careerpotli.com/course-details/masters-in-education">
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
                                            <Link to="https://www.careerpotli.com/course-details/mass-communication">
                                              Mass Communication
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/media-pg">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-pharmacy">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-dental-surgery">
                                              Master of Dental Surgery
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="https://www.careerpotli.com/course-details/masters-of-physiotherapy">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-design">
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
                                            <Link to="https://www.careerpotli.com/course-details/msc-aviation">
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
                                            <Link to="https://www.careerpotli.com/course-details/master-of-science">
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
                                        <Link to="/upsc_ias">
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
                                        to="/medical_exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/medical_exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Medical Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/aiims">
                                          AIIMS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/neet">
                                          NEET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/jipmer">
                                          JIPMER
                                        </Link>
                                      </li>
                                      <li>
                      
                      
                                           <Link to="/gujcet">
                                          GUJCET
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/bhu_pmt">
                                          BHU PMT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/pmet">
                                          PMET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="/law_exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/law_exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Law Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/ap_lawcet">
                                          AP LAWCET 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/clat">
                                          CLAT 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ailet">
                                          AILET 2019
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/lsat">
                                          LSAT
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/mh_cet">
                                          MH CET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4 col-sm-4 col-xs-6">
                                    <p>
                                      <Link
                                        to="/other_exams"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/other_exams"
                                        className="exmheadcate"
                                      >
                                        <i className="fa fa-gears" />
                                        Other Exams
                                      </Link>
                                    </h2>
                                    <p />
                                    <ul className="menu-item">
                                      <li>
                                        <Link to="/comedk_uget">
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                                        to="/engineering"
                                        className="exmheadcate"
                                      />
                                    </p>
                                    <h2>
                                      <Link
                                        to="/engineering"
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
                     
                     
                      <li>
                        <Link
                          title=""
                          to="https://www.careerpotli.com/career-counselling-experts-in-india.php"
                        >
                          Live Webinar
                        </Link>
                      </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="nav navbar-nav navbar-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Profiles
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
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

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
