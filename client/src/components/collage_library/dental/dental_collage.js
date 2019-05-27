import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Dental_Collage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this)
  } 
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  render() {
    // const {activePage} = this.state;
    // console.log(activePage)
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src={require("../../../images/engineering.engineering1.jpg")}
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Top Dental Collage</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Approved by MHRD
                </h6>
              </div>
              <div className="col-md-3 col-xs-12 mt-15 blockbtn" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12" role="main">
                <div className="coursedessside detail-content-wrapper">
                  <div id="section-0" className="detail-content">
                    <h2 className="heading-new">
                      <span>Ranking Dental collage</span>
                    </h2>
                    <div className="coursecontdes">
                      <p />
                      <p>
                        <strong />
                      </p>
                      <p dir="ltr">
                        <strong>
                        The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by Honourable Minister of Human Resource Development on 29th September 2015.
This framework outlines a methodology to rank institutions across the country. The methodology draws from the overall recommendations broad understanding arrived at by a Core Committee set up by MHRD, to identify the broad parameters for ranking various universities and institutions. The parameters broadly cover “Teaching, Learning and Resources,” “Research and Professional Practices,” “Graduation Outcomes,” “Outreach and Inclusivity,” and “Perception”.
India Rankings – 2016 based on this framework were released on 4th April 2016.
For India Rankings – 2017, the main ranking parameters remain the same. However, there are a few significant changes in a few sub-parameters. Also, this year every large institution will be given a common overall rank as well as a discipline specific rank as applicable. Details are in the Ranking Document available at 

                        </strong>
                      </p>
                      <p />
                      <p>
                        <br />
                      </p>
                      <p />
                    </div>
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Ranking Wise Dental Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/maids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAULANA AZAD INSTITUTE OF DENTAL SCIENCES - [MAIDS], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mcods_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANIPAL COLLEGE OF DENTAL SCIENCES - [MCODS], MANGALORE
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sdmcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SDM COLLEGE OF DENTAL SCIENCES AND HOSPITAL SATTUR, DHARWAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/gdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT DENTAL COLLEGE & HOSPITAL, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/kgmu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KING GEORGE'S MEDICAL UNIVERSITY - [KGMU], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/absmids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />A B SHETTY MEMORIAL INSTITUTE OF DENTAL SCIENCES - [ABSMIDS], MANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/pgims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PT BHAGWAT DAYAL SHARMA POST GRADUATE INSTITUTE OF MEDICAL SCIENCES - [PGIMS], ROHTAK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/gdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT DENTAL COLLEGE & HOSPITAL, AURANGABAD
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/dradch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR. R. AHMED DENTAL COLLEGE AND HOSPITAL, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/srmdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRM DENTAL COLLEGE, CHENNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   </div>
                    : null }
                    {this.state.activePage === 2? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/jkkndch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JKK NATRAJAH DENTAL COLLEGE & HOSPITAL, GANDARVAKOTTAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/awadgdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AWADH DENTAL COLLEGE AND HOSPITAL, JAMSHEDPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/kdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KANNUR DENTAL COLLEGE - [KDC] ANJARAKANDY, KANNUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/ciidsrcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTURY INTERNATIONAL INSTITUTE OF DENTAL SCIENCE AND RESEARCH CENTER POINACHI, KASARAGOD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/kids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KALINGA INSTITUTE OF DENTAL SCIENCES - [KIDS], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/udmri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UTTARANCHAL DENTAL AND MEDICAL RESEARCH INSTITUTE - [UDMRI], DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mgsdcrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARAJ GANGA SINGH DENTAL COLLEGE & RESEARCH CENTRE, GANGANAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sgrdidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI GURU RAM DAS INSTITUTE OF DENTAL SCIENCES AND RESEARCH, AMRITSAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/kdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KALKA DENTAL COLLEGE, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SUBHARTI DENTAL COLLEGE - [SDC], MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   </div>
                    : null }
                    {this.state.activePage === 3? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/idch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ITS DENTAL COLLEGE AND HOSPITAL, GHAZIABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/pids_detail">
                        <p className="brnchname">PURVANCHAL INSTITUTE OF DENTAL SCIENCES - [PIDS], GORAKHPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SIBAR INSTITUTE OF DENTAL SCIENCES, GUNTUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/tngdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />TAMILNADU GOVERNMENT DENTAL COLLEGE AND HOSPITAL - [TNGDCH], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/acds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARMY COLLEGE OF DENTAL SCIENCES - [ACDS], SECUNDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/amcdsrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AECS MARUTI COLLEGE OF DENTAL SCIENCES AND RESEARCH CENTRE, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/psmcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />P.S.M. COLLEGE OF DENTAL SCIENCE AND RESEARCH, THRISSUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/ndch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAMATA DENTAL COLLEGE, HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/adch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ADITYA DENTAL COLLEGE AND HOSPITAL, BEED
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sycmm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHRI YASHWANTRAO CHAVAN MEMORIAL MEDICAL & RURAL DEVELOPMENT FOUNDATION'S DENTAL COLLEGE, AHMED NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   </div>
                    : null }
                    {this.state.activePage === 4? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/zadc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR. ZIAUDDIN AHMAD DENTAL COLLEGE, ALIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/asdk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMRITA SCHOOL OF DENTISTRY, KOCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/gidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURUNANAK INSTITUTE OF DENTAL SCIENCE AND RESEARCH, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/gidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GENESIS INSTITUTE OF DENTAL SCIENCES AND RESEARCH, FIROZPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mcdrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAITRI COLLEGE OF DENTISTRY AND RESEARCH CENTRE - [MCDRC], DURG
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mbdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAR BASELIOS DENTAL COLLEGE - [MBDC], KOTHAMANGALAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/pcds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PUSHPAGIRI COLLEGE OF DENTAL SCIENCES - [PCDS], THIRUVALLA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/nicds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />N.I. COLLEGE OF DENTAL SCIENCE - [NICDS], THIRUVANANTHAPURAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/sdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SEEMA DENTAL COLLEGE AND HOSPITAL - [SDCH], HARIDWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mmcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARISHI MARKANDESHWAR COLLEGE OF DENTAL SCIENCES AND RESEARCH, AMBALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   </div>
                    : null }
                    {this.state.activePage === 5? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/dcdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DAV CENTENARY DENTAL COLLEGE, YAMUNA NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/cpgidsh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CAREER POST GRADUATE INSTITUTE OF DENTAL SCIENCES AND HOSPITAL - [CPGIDSH], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/hdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HITKARINI DENTAL COLLEGE AND HOSPITAL, JABALPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/djcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DJ COLLEGE OF DENTAL SCIENCES AND RESEARCH, GHAZIABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/ddcrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DASWANI DENTAL COLLEGE AND RESEARCH CENTER, KOTA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/pdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PATNA DENTAL COLLEGE AND HOSPITAL, PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/bdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BAPUJI DENTAL COLLEGE AND HOSPITAL - [BDCH], DAVANAGERE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/mrdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANAV RACHNA DENTAL COLLEGE - [MRDC], FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/hsrsmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR HEDGEWAR SMRUTI RUGNA SEWA MANDAL'S COLLEGE, HINGOLI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_dental/bidsh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BUDDHA INSTITUTE OF DENTAL SCIENCES AND HOSPITAL - [BIDSH], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   </div>
                    : null }
                </div>
              </div>
              </div>
              </div>
            </div>
          <div className="center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
        </section>
      </div>
    );
  }
}
export default Dental_Collage;
