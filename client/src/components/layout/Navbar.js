import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import Tada from 'react-reveal/Tada';
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
            href="/"
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
      <nav className="navbar navbar-expand-lg navbar-light ">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="logo"><Tada><img className="navbar-brand" src="/images/logo.png" alt="brand-logo" /></Tada></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                    Course Library
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item1">
                                    <Link to="/ManagementandBusiness" className="dropdown-header"><i className="fa fa-bar-chart"></i>Management & Business</Link>
                                    <Link className="dropdown-item" to="/Business-Administration">Bachelor Of Business Administration</Link>
                                    <Link className="dropdown-item" to="/Management-Business">Bachelor Of Business Management</Link>
                                </div>
                                <div className="flex-item2">
                                    <Link to="/Engineering" className="dropdown-header"><i className="fa fa-cog"></i>Engineer</Link>
                                    <Link className="dropdown-item" to="/agriculture">Agriculture Engineering</Link>
                                    <Link className="dropdown-item" to="/information">Information Technology Engineering</Link>
                                    <Link className="dropdown-item" to="/electronics">Electronics & Tele-Communication</Link>
                                    <Link className="dropdown-item" to="/chemical">Chemical Engineering</Link>
                                    <Link className="dropdown-item" to="/biochemical">Biochemical Engineering</Link>
                                    <Link className="dropdown-item" to="/metallurgical">Metallurgical Engineering</Link>
                                    <Link className="dropdown-item" to="/electrical">Electrical Engineering</Link>
                                    <Link className="dropdown-item" to="/mechanical">Mechanical Engineering</Link>
                                    <Link className="dropdown-item" to="/civil">Civil Engineering</Link>
                                    <Link className="dropdown-item" to="/aeronautical">Aeronautical Engineering</Link>
                                    <Link className="dropdown-item" to="/mining">Mining Engineering</Link>
                                    <Link className="dropdown-item" to="/electrical-instrumental">Electrical And Instrumentation Engineering</Link>
                                    <Link className="dropdown-item" to="/astronautical">Astronautical Engineering</Link>
                                    <Link className="dropdown-item" to="/aircraft">Aircraft Maintenance Engineering</Link>
                                    <Link className="dropdown-item" to="/computer">Computer Science Engineering</Link>
                                    <Link to="/teaching" className="dropdown-header"><i className="fa fa-youtube-play"></i>Teaching</Link>
                                    <Link className="dropdown-item" to="/bed">B.Ed</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item3">
                                    <Link to="/architecture" className="dropdown-header"><i className="fa fa-file-text"></i>Architecture</Link>
                                    <Link className="dropdown-item" to="/bachelor-architecture">Bachelor Of Architecture</Link>
                                    
                                    <Link to="/computer-app" className="dropdown-header"><i className="fa fa-youtube-play"></i>Computers & IT</Link>
                                    <Link className="dropdown-item" to="/bachelor-computer">Bachelor Of Computer Applications</Link>
                                </div>
                                <div className="flex-item4">
                                    <Link to="/medical" className="dropdown-header"><i className="fa fa-stethoscope"></i>Medical & Health Care</Link>
                                    <Link className="dropdown-item" to="/bachelor-medicine">Bachelor Of Medicine & Bachelor Of Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor-ayurveda">Bachelor Of Ayurveda, Medicine And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor-homeopathy">Bachelor Of Homeopathy Medicine<br />
                                                                    And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor-unani">Bachelor Of Unani Medicine And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor-physiotherapy">Bachelor Of Physiotherapy</Link>
                                    <Link className="dropdown-item" to="/bachelor-dental">Bachelor Of Dental Surgery</Link>
                                </div>
                                <div className="flex-item5">
                                    <Link to="/law" className="dropdown-header"><i className="fa fa-drupal"></i>Law</Link>
                                    <Link className="dropdown-item" to="/bachelor-law">Bachelor Of Laws</Link>
                                    <Link className="dropdown-item" to="/bachelor-art">Bachelor Of Arts & Law (B.A, LLB)</Link>
                                    <Link className="dropdown-item" to="/bachelor-comLaw">Bachelor Of Commerce & Law (B.Com, LLB)</Link>
                                    <Link className="dropdown-item" to="/bachelor-businessadd">Bachelor Of Business Administration<br />
                                                                    & Law (BBA, LLB)</Link>
                               
                                
                                    <Link to="/commerce" className="dropdown-header"><i className="fa fa-rupee"></i>Commerce</Link>
                                    <Link className="dropdown-item" to="/bachelor-commerce">Bachelor Of Commerence Chartered</Link>
                                    <Link className="dropdown-item" to="/chartedAccountent">Chartered Accountant(CA)</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item6">
                                    <Link to="/science" className="dropdown-header"><i className="fa fa-scribd"></i>Science</Link>
                                    <Link className="dropdown-item" to="/bachelor-science">Bachelor Of Science(Nursing)</Link>
                                    
                                    <Link to="/art-huminities" className="dropdown-header"><i className="fa fa-stumbleupon"></i>Art & Humanities</Link>
                                    <Link className="dropdown-item" to="/bachelor-arts">Bachelor Of Arts</Link>
                                    <Link to="/bachelor-fineart" className="dropdown-item">Bachelor of Fine Arts(BFA)</Link>
                                    <Link to="/diploma-fineArts" className="dropdown-item">Diploma In Fine Arts</Link>
                                </div>
                                <div className="flex-item7">
                                    <Link to="/diploma" className="dropdown-header"><i className="fa fa-graduation-cap"></i>Diploma in Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-civil">Diploma In Civil Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-automobile">Diploma In Automobile<br /> Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-computer">Diploma In Compe-playuter<br /> Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-electrical">Diploma In Electrical<br /> & Electronics Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-electronics">Diploma In Electronics<br /> & Communication Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma-mechanical">Diploma In Mechanical Engineering</Link>
                                </div>
                                <div className="flex-item8">
                                    <Link to="/pharmecy" className="dropdown-header"><i className="fa fa-graduation-cap"></i>Pharmacy</Link>
                                    <Link className="dropdown-item" to="/bachelor-pharmecy">Bachelor Of Pharmacy</Link>
                                    
                                    <Link to="/hotal-management" className="dropdown-header"><i className="fa fa-hotel"></i>Hotel Management</Link>
                                    <Link className="dropdown-item" to="/bachelor-hmanagement">Bachelor Of Hotel Management</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item9">
                                    <Link to="/fashion-design" className="dropdown-header"><i className="fa fa-random"></i>Fashion & Design</Link>
                                    <Link className="dropdown-item" to="/bachelor-design">Bachelor Of Design</Link>
                                    <Link className="dropdown-item" to="/fashion-designcourse">Fashion Design Courses</Link>
                                    <Link to="/media-mass" className="dropdown-header">Media & Mass Communication</Link>
                                    <Link className="dropdown-item" to="/Bachelor-journalism">Bachelor's In Journalism And Mass<br /> Communication</Link>
                                </div>
                                <div className="flex-item10">
                                    <Link to="/Agriculture1" className="dropdown-header"><i className="fa fa-shopping-baske"></i>Agriculture</Link>
                                    <Link className="dropdown-item" to="/bachelor-horiculture">Bachelor Of Technology (B.Tech)<br/> In Horticulture</Link>
                                    <Link className="dropdown-item" to="/bachelor-scienceHorticulture">Bachelor Of Science (B.Sc)<br /> In Horticulture</Link>
                                    <Link className="dropdown-item" to="/agriculture-business">Agriculture Business Management</Link>
                                    <Link className="dropdown-item" to="/bachelor-scienceAgriculture">Bachelor Of Science (B.Sc) <br />In Agriculture</Link>
                                </div>
                                <div className="flex-item11">
                                    <Link to="/aviation" className="dropdown-header"><i className="fa fa-upload"></i>Aviaiton</Link>
                                    <Link className="dropdown-item" to="/bba-airport">BBA In Airport Management</Link>
                                    <Link to="/bsc-avaition" className="dropdown-item">B.Sc. Aviation</Link>
                                </div>
                                <div className="flex-item12">
                                    <Link to="/diploma-certificate" className="dropdown-header"><i className="fa fa-university"></i>Diploma And<br />Certificate Courses</Link>
                                    <Link className="dropdown-item" to="/Airfare-ticketing">Airfare And Ticketing Management</Link>
                                    <Link to="/aviation-hospitality" className="dropdown-item">Aviation Hospitality</Link>
                                    
                                    <Link to="/travel-tourism" className="dropdown-header"><i className="fa fa-space-shuttle"></i>Travel And Tourism</Link>
                                    <Link className="dropdown-item" to="/tourism-management">Tourism Management</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Exam Library
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item11">
                                    <Link to="/Engineering1" className="dropdown-header"><i className="fa fa-cog"></i>Engineering</Link>
                                    <Link className="dropdown-item" to="/jee-main">JEE Mains</Link>
                                    <Link className="dropdown-item" to="/jee-advance">JEE Advance</Link>
                                    <Link className="dropdown-item" to="/bitsat">BITSAT</Link>
                                    <Link className="dropdown-item" to="/vitee">VITEEE</Link>
                                    <Link className="dropdown-item" to="/wbjee">WBJEE</Link>
                                    <Link className="dropdown-item" to="/jcece">JCECE</Link>
                                    <Link className="dropdown-item" to="/upsee">UPSEE</Link>
                                    <Link className="dropdown-item" to="/ojee">OJEE</Link>
                                    <Link className="dropdown-item" to="/bcece">BCECE</Link>
                                    <Link className="dropdown-item" to="/gate">GATE</Link>
                                    <Link className="dropdown-item" to="/srmjeee">SRMJEEE</Link>
                                    <Link className="dropdown-item" to="/aeee">AEEE</Link>
                                    <Link className="dropdown-item" to="/nata">NATA</Link>
                                    <Link className="dropdown-item" to="/muoet">MUOET</Link>
                                    <Link className="dropdown-item" to="/ceed">CEED</Link>
                                    <Link className="dropdown-item" to="/iiith-pgee">IIITH PGEE</Link>    
                                </div>
                            </div>
                            <div className="flex-item" >    
                                <div className="flex-item12">
                                    <Link to="/Management11" className="dropdown-header"><i className="fa fa-cog"></i>Management</Link>
                                    <Link className="dropdown-item" to="/cat">CAT</Link>
                                    <Link className="dropdown-item" to="/mat">MAT</Link>
                                    <Link className="dropdown-item" to="/xat">XAT</Link>
                                    <Link className="dropdown-item" to="/snap">SNAP</Link>
                                    <Link className="dropdown-item" to="/nmat">NMAT</Link>
                                    <Link className="dropdown-item" to="/ibsat">IBSAT</Link>
                                    <Link className="dropdown-item" to="/cmat">CMAT</Link>
                                    <Link className="dropdown-item" to="/atma">ATMA</Link>
                                    <Link className="dropdown-item" to="/iift">IIFT</Link>
                                    <Link className="dropdown-item" to="/tancet">TANCET</Link>
                                    <Link className="dropdown-item" to="/mahcet">MAH-CET</Link>
                                    <Link className="dropdown-item" to="/irma">IRMA</Link>
                                    <Link className="dropdown-item" to="/kiitee-management">KIITEE MANAGEMENT</Link>
                                    <Link className="dropdown-item" to="/kmat">KMAT</Link>
                                    <Link className="dropdown-item" to="/tsicet">TSICET</Link>
                                    <Link className="dropdown-item" to="/hpu-mat">HPU MAT</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item13">
                                    <Link to="/compititive-exam" className="dropdown-header"><i className="fa fa-cog"></i>Compitive Exams</Link>
                                    <Link className="dropdown-item" to="/upsc=ias">UPSC-IAS</Link>
                                    <Link className="dropdown-item" to="/ssc-cgl">SSC-CGL</Link>
                                    <Link className="dropdown-item" to="/ctet">CTET</Link>
                                    <Link className="dropdown-item" to="/kvpy">KVPY</Link>
                                    <Link className="dropdown-item" to="/ibps-po">IBPS-PO</Link>
                                    <Link className="dropdown-item" to="/sbi-clerk">SBI Clerk</Link>
                                    <Link className="dropdown-item" to="/ibps-clerk">IBPS-Clerk</Link>
                                    <Link className="dropdown-item" to="/ies">IES</Link>
                                    <Link className="dropdown-item" to="/ntse">NTSE</Link>
                                    <Link className="dropdown-item" to="/psu-through-gate">PSU Through GATE</Link>
                                    <Link className="dropdown-item" to="/ssc-chsl">SSC-CHSL</Link>
                                    <Link className="dropdown-item" to="/uptet">UPTET</Link>
                                    <Link className="dropdown-item" to="/icar-aieea">ICAR AIEEA</Link>
                                    <Link className="dropdown-item" to="/fddi-aist">FDDI - AIST</Link>
                                </div>
                          </div>
                          <div className="flex-item" >
                                <div className="flex-item14">
                                    <Link to="/medical-exams" className="dropdown-header"><i className="fa fa-cog"></i>Medical Exams</Link>
                                    <Link className="dropdown-item" to="/aiims">AIIMS</Link>
                                    <Link className="dropdown-item" to="/neet">NEET</Link>
                                    <Link className="dropdown-item" to="/jipmer">JIPMER</Link>
                                    <Link className="dropdown-item" to="/gujcet">GUJCET</Link>
                                    <Link className="dropdown-item" to="/bhu-pmt">BHU PMT</Link>
                                    <Link className="dropdown-item" to="/pmet">PMET</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item15">
                                    <Link to="/law-exams" className="dropdown-header"><i className="fa fa-cog"></i>Law Exams</Link>
                                    <Link className="dropdown-item" to="/ap-lawcet">AP LAWCET 2019</Link>
                                    <Link className="dropdown-item" to="/clat">CLAT 2019</Link>
                                    <Link className="dropdown-item" to="/ailet">AILET 2019</Link>
                                    <Link className="dropdown-item" to="/isat">ISAT</Link>
                                    <Link className="dropdown-item" to="/mht-cet">MHTCET</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item16">
                                    <Link to="/OtherExams" className="dropdown-header"><i className="fa fa-cog"></i>Other Exams</Link>
                                    <Link className="dropdown-item" to="/comedk-uget">COMEDK-UGET</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
               <li className="nav-item">
                    <Link className="nav-link" to="community">
                        Community
                    </Link>
                </li>
                {isAuthenticated ? authLinks : guestLinks}
        </ul>
    </div>
</nav>
    )
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
