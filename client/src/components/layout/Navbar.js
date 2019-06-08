import React, { Component } from 'react'
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
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to="/" className="logo"><img className="navbar-brand" src="/images/logo.png" alt="brand-logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

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
                                    <Link className="dropdown-item" to="/Business_Administration">Bachelor Of Business Administration</Link>
                                    <Link className="dropdown-item" to="/Management_Business">Bachelor Of Business Management</Link>
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
                                    <Link className="dropdown-item" to="/electrical_instrumental">Electrical And Instrumentation Engineering</Link>
                                    <Link className="dropdown-item" to="/astronautical">Astronautical Engineering</Link>
                                    <Link className="dropdown-item" to="/aircraft">Aircraft Maintenance Engineering</Link>
                                    <Link className="dropdown-item" to="/computer">Computer Science Engineering</Link>
                                    <Link className="dropdown-item" to="/Management_Business">Bachelor Of Business Management</Link>
                                    <Link to="/teaching" className="dropdown-header"><i className="fa fa-youtube-play"></i>Teaching</Link>
                                    <Link className="dropdown-item" to="/bed">B.Ed</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item3">
                                    <Link to="/architecture" className="dropdown-header"><i className="fa fa-file-text"></i>Architecture</Link>
                                    <Link className="dropdown-item" to="/bachelor_architecture">Bachelor Of Architecture</Link>
                                    
                                    <Link to="/computer_app" className="dropdown-header"><i className="fa fa-youtube-play"></i>Computers & IT</Link>
                                    <Link className="dropdown-item" to="/bachelor_computer">Bachelor Of Computer Applications</Link>
                                </div>
                                <div className="flex-item4">
                                    <Link to="/medical" className="dropdown-header"><i className="fa fa-stethoscope"></i>Medical & Health Care</Link>
                                    <Link className="dropdown-item" to="/bachelor_medicine">Bachelor Of Medicine & Bachelor Of Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor_ayurveda">Bachelor Of Ayurveda, Medicine And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor_homeopathy">Bachelor Of Homeopathy Medicine<br />
                                                                    And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor_unani">Bachelor Of Unani Medicine And Surgery</Link>
                                    <Link className="dropdown-item" to="/bachelor_physiotherapy">Bachelor Of Physiotherapy</Link>
                                    <Link className="dropdown-item" to="/bachelor_dental">Bachelor Of Dental Surgery</Link>
                                </div>
                                <div className="flex-item5">
                                    <Link to="/law" className="dropdown-header"><i className="fa fa-drupal"></i>Law</Link>
                                    <Link className="dropdown-item" to="/bachelor_law">Bachelor Of Laws</Link>
                                    <Link className="dropdown-item" to="/bachelor_art">Bachelor Of Arts & Law (B.A, LLB)</Link>
                                    <Link className="dropdown-item" to="/bachelor_comLaw">Bachelor Of Commerce & Law (B.Com, LLB)</Link>
                                    <Link className="dropdown-item" to="/bachelor_businessadd">Bachelor Of Business Administration<br />
                                                                    & Law (BBA, LLB)</Link>
                               
                                
                                    <Link to="/commerce" className="dropdown-header"><i className="fa fa-rupee"></i>Commerce</Link>
                                    <Link className="dropdown-item" to="/bachelor_commerce">Bachelor Of Commerence Chartered</Link>
                                    <Link className="dropdown-item" to="/chartedAccountent">Chartered Accountant(CA)</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item6">
                                    <Link to="/science" className="dropdown-header"><i className="fa fa-scribd"></i>Science</Link>
                                    <Link className="dropdown-item" to="/bachelor_science">Bachelor Of Science(Nursing)</Link>
                                    
                                    <Link to="/art_huminities" className="dropdown-header"><i className="fa fa-stumbleupon"></i>Art & Humanities</Link>
                                    <Link className="dropdown-item" to="/bachelor_arts">Bachelor Of Arts</Link>
                                    <Link to="/bachelor_fineart" className="dropdown-item">Bachelor of Fine Arts(BFA)</Link>
                                    <Link to="/diploma_fineArts" className="dropdown-item">Diploma In Fine Arts</Link>
                                </div>
                                <div className="flex-item7">
                                    <Link to="/diploma" className="dropdown-header"><i className="fa fa-graduation-cap"></i>Diploma in Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_civil">Diploma In Civil Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_automobile">Diploma In Automobile<br /> Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_computer">Diploma In Compe-playuter<br /> Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_electrical">Diploma In Electrical<br /> & Electronics Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_electronics">Diploma In Electronics<br /> & Communication Engineering</Link>
                                    <Link className="dropdown-item" to="/diploma_mechanical">Diploma In Mechanical Engineering</Link>
                                </div>
                                <div className="flex-item8">
                                    <Link to="/pharmecy" className="dropdown-header"><i className="fa fa-graduation-cap"></i>Pharmacy</Link>
                                    <Link className="dropdown-item" to="/bachelor_pharmecy">Bachelor Of Pharmacy</Link>
                                    
                                    <Link to="/hotal_management" className="dropdown-header"><i className="fa fa-hotel"></i>Hotel Management</Link>
                                    <Link className="dropdown-item" to="/bachelor_hmanagement">Bachelor Of Hotel Management</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item9">
                                    <Link to="/fashion_design" className="dropdown-header"><i className="fa fa-random"></i>Fashion & Design</Link>
                                    <Link className="dropdown-item" to="/bachelor_design">Bachelor Of Design</Link>
                                    <Link className="dropdown-item" to="/fashion_designcourse">Fashion Design Courses</Link>
                                    <Link to="/media_mass" className="dropdown-header">Media & Mass Communication</Link>
                                    <Link className="dropdown-item" to="/Bachelor_journalism">Bachelor's In Journalism And Mass<br /> Communication</Link>
                                </div>
                                <div className="flex-item10">
                                    <Link to="/Agriculture1" className="dropdown-header"><i className="fa fa-shopping-baske"></i>Agriculture</Link>
                                    <Link className="dropdown-item" to="/bachelor_horiculture">Bachelor Of Technology (B.Tech)<br/> In Horticulture</Link>
                                    <Link className="dropdown-item" to="/bachelor_scienceHorticulture">Bachelor Of Science (B.Sc)<br /> In Horticulture</Link>
                                    <Link className="dropdown-item" to="/agriculture_business">Agriculture Business Management</Link>
                                    <Link className="dropdown-item" to="/bachelor_scienceAgriculture">Bachelor Of Science (B.Sc) <br />In Agriculture</Link>
                                </div>
                                <div className="flex-item11">
                                    <Link to="/aviation" className="dropdown-header"><i className="fa fa-upload"></i>Aviaiton</Link>
                                    <Link className="dropdown-item" to="/bba_airport">BBA In Airport Management</Link>
                                    <Link to="/bsc_avaition" className="dropdown-item">B.Sc. Aviation</Link>
                                </div>
                                <div className="flex-item12">
                                    <Link to="/diploma_certificate" className="dropdown-header"><i className="fa fa-university"></i>Diploma And<br />Certificate Courses</Link>
                                    <Link className="dropdown-item" to="/Airfare_ticketing">Airfare And Ticketing Management</Link>
                                    <Link to="/aviation_hospitality" className="dropdown-item">Aviation Hospitality</Link>
                                    
                                    <Link to="/travel_tourism" className="dropdown-header"><i className="fa fa-space-shuttle"></i>Travel And Tourism</Link>
                                    <Link className="dropdown-item" to="/tourism_management">Tourism Management</Link>
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
                                    <Link className="dropdown-item" to="/ancet">ANCET</Link>
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
                                    <Link to="/cpmititive_exam" className="dropdown-header"><i className="fa fa-cog"></i>Compitive Exams</Link>
                                    <Link className="dropdown-item" to="/upsc_ias">UPSC-IAS</Link>
                                    <Link className="dropdown-item" to="/ssc_cgl">SSC-CGL</Link>
                                    <Link className="dropdown-item" to="/ctet">CTET</Link>
                                    <Link className="dropdown-item" to="/kvpy">KVPY</Link>
                                    <Link className="dropdown-item" to="/ibps-po">IBPS-PO</Link>
                                    <Link className="dropdown-item" to="/sbi-clerk">SBI Clerk</Link>
                                    <Link className="dropdown-item" to="/ibps-clerk">IBPS-Clerk</Link>
                                    <Link className="dropdown-item" to="/ies">IES</Link>
                                    <Link className="dropdown-item" to="/ntse">NTSE</Link>
                                    <Link className="dropdown-item" to="/psu-through-gate">PSU Through GATE</Link>
                                    <Link className="dropdown-item" to="/ssc-chsl">SSC-CHSL</Link>
                                    <Link className="dropdown-item" to="https://www.careerpotli.com/exam-details/uptet">UPTET</Link>
                                    <Link className="dropdown-item" to="https://www.careerpotli.com/exam-details/icar-aieea">ICAR AIEEA</Link>
                                    <Link className="dropdown-item" to="https://www.careerpotli.com/exam-details/fddi---aist">FDDI - AIST</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item14">
                                    <Link to="/medical_exams" className="dropdown-header"><i className="fa fa-cog"></i>Medical Exams</Link>
                                    <Link className="dropdown-item" to="/aiims">AIIMS</Link>
                                    <Link className="dropdown-item" to="/neet">NEET</Link>
                                    <Link className="dropdown-item" to="/jipmer">JIPMER</Link>
                                    <Link className="dropdown-item" to="/gujcet">GUJCET</Link>
                                    <Link className="dropdown-item" to="/bhu_pmt">BHU PMT</Link>
                                    <Link className="dropdown-item" to="/pmet">PMET</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item15">
                                    <Link to="/law_exams" className="dropdown-header"><i className="fa fa-cog"></i>Law Exams</Link>
                                    <Link className="dropdown-item" to="/ap_lawcet">AP LAWCET 2019</Link>
                                    <Link className="dropdown-item" to="/clat">CLAT 2019</Link>
                                    <Link className="dropdown-item" to="/ailet">AILET 2019</Link>
                                    <Link className="dropdown-item" to="/lsat">LSAT</Link>
                                    <Link className="dropdown-item" to="/mh_cet">MH CET</Link>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item16">
                                    <Link to="/other_exams" className="dropdown-header"><i className="fa fa-cog"></i>Other Exams</Link>
                                    <Link className="dropdown-item" to="/comedk_uget">COMEDK-UGET</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    College
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item21">
                                    <Link to="/list_college_engineering" className="dropdown-header">Engineering</Link>
                                    <Link className="dropdown-item" to="/list_college_engineering"><img src="/images/1.png" alt="img" /><br />4636 Colleges</Link>
                                
                                    <Link to="/list_college_management" className="dropdown-header">Management & <br/>Business</Link>
                                    <Link className="dropdown-item" to="/list_college_management"><img src="/images/2.png" alt="img" /><br />6014 Colleges</Link>
                                
                                    <Link to="/list_college_engineering" className="dropdown-header">Computer Application</Link>
                                    <Link className="dropdown-item" to="/list_college_engineering"><img src="/images/3.png" alt="img" /><br />3934 Colleges</Link>
                                
                                    <Link to="/list_college_medical" className="dropdown-header">Medical & Health Care</Link>
                                    <Link className="dropdown-item" to="/list_college_medical"><img src="/images/4.png" alt="img" /><br />1534 Colleges</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item22">
                                    <Link to="/list_college_law" className="dropdown-header">Law</Link>
                                    <Link className="dropdown-item" to="/list_college_law"><img src="/images/5.png" alt="img" /><br />1052 Colleges</Link>
                                
                                    <Link to="/list_college_commerce" className="dropdown-header">Commerce</Link>
                                    <Link className="dropdown-item" to="/list_college_commerce"><img src="/images/6.png" alt="img" /><br />3833 Colleges</Link>
                                
                                    <Link to="/list_college_science" className="dropdown-header">Science</Link>
                                    <Link className="dropdown-item" to="/list_college_science"><img src="/images/7.png" alt="img" /><br />4920 Colleges</Link>
                                
                                    <Link to="/list_college_arts" className="dropdown-header">Arts</Link>
                                    <Link className="dropdown-item" to="/list_college_arts"><img src="/images/8.png" alt="img" /><br />4222 Colleges</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item23">
                                    <Link to="/list_college_engineering" className="dropdown-header">Diploma In <br />Engineering</Link>
                                    <Link className="dropdown-item" to="/list_college_engineering"><img src="/images/9.png" alt="img" /><br />4576 Colleges</Link>
                                
                                    <Link to="/list_college_pharmacy" className="dropdown-header">Pharmacy</Link>
                                    <Link className="dropdown-item" to="/list_college_pharmacy"><img src="/images/10.png" alt="img" /><br />4576 Colleges</Link>
                                
                                    <Link to="/list_college_hotel_management" className="dropdown-header">Hotel Management</Link>
                                    <Link className="dropdown-item" to="/list_college_hotel_management"><img src="/images/11.png" alt="img" /><br />750 Colleges</Link>
                                
                                    <Link to="/list_college_fashion" className="dropdown-header">Fashion</Link>
                                    <Link className="dropdown-item" to="/list_college_fashion"><img src="/images/12.png" alt="img" /><br />276 Colleges</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item24">
                                    <Link to="/list_college_media" className="dropdown-header">Media & Mass<br /> Communication</Link>
                                    <Link className="dropdown-item" to="/list_college_media"><img src="/images/13.png" alt="img" /><br />1229 Colleges</Link>
                                
                                    <Link to="/list_college_agriculture" className="dropdown-header">Agriculture</Link>
                                    <Link className="dropdown-item" to="/list_college_agriculture"><img src="/images/14.png" alt="img" /><br />716 Colleges</Link>
                                
                                    <Link to="/list_college_education" className="dropdown-header">Education</Link>
                                    <Link className="dropdown-item" to="/list_college_education"><img src="/images/15.png" alt="img" /><br />2751 Colleges</Link>
                               
                                    <Link to="/list_college_aviation" className="dropdown-header">Aviation</Link>
                                    <Link className="dropdown-item" to="/list_college_aviation"><img src="/images/16.png" alt="img" /><br />144 Colleges</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item25">
                                    <Link to="/list_college_engineering" className="dropdown-header">Diploma And <br />Certificate Courses</Link>
                                    <Link className="dropdown-item" to="/list_college_engineering"><img src="/images/17.png" alt="img" /><br />714 Colleges</Link>
                                
                                    <Link to="/list_college_hotel_management" className="dropdown-header">Hotel Management</Link>
                                    <Link className="dropdown-item" to="/list_college_hotel_management"><img src="/images/18.png" alt="img" /><br />750 Colleges</Link>
                                
                                    <Link to="/list_college_management" className="dropdown-header">Management</Link>
                                    <Link className="dropdown-item" to="/list_college_management"><img src="/images/19.png" alt="img" /><br />6014 Colleges</Link>
                                
                                    <Link to="/list_college_architecture" className="dropdown-header">Architecture</Link>
                                    <Link className="dropdown-item" to="/list_college_architecture"><img src="/images/20.png" alt="img" /><br />516 Colleges</Link>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item26">
                                    <Link to="/list_college_dental" className="dropdown-header">Dental</Link>
                                    <Link className="dropdown-item" to="/list_college_dental"><img src="/images/21.png" alt="img" /><br />393 Colleges</Link>
                                
                                    <Link to="/list_college_paramedical" className="dropdown-header">Paramedical</Link>
                                    <Link className="dropdown-item" to="/list_college_paramedical"><img src="/images/22.png" alt="img" /><br />997 Colleges</Link>
                                
                                    <Link to="/list_college_veterinary_science" className="dropdown-header">Veterinary Science</Link>
                                    <Link className="dropdown-item" to="/list_college_veterinary_science"><img src="/images/23.png" alt="img" /><br />97 Colleges</Link>
                                
                                    <Link to="/list_college_vocational" className="dropdown-header">Vocational Course</Link>
                                    <Link className="dropdown-item" to="/list_college_vocational"><img src="/images/24.png" alt="img" /><br />714 Colleges</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://edumonk.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Community
                    </a>
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
