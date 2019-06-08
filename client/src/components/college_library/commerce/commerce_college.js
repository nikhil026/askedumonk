import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Commerce_college extends Component {
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
                <h3>Top Commerce college</h3>
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
                      <span>Ranking Commerce college</span>
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
                      <span>Ranking Wise Commerce college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/srcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Shri Ram College of Commerece, New Delhi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/lsrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Lady Shri Ram College For Women,New Delhi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sgt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHREE GURU GOBIND SINGH TRICENTENARY UNIVERSITY - [SGT], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/iit_kharagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />	Indian Institute of Technology Kharagpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/hindu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HINDU COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/apeejay_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> APEEJAY STYA UNIVERSITY, SCHOOL OF MANAGEMENT SCIENCES, GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/hanraj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> HANS RAJ COLLEGE - [HRC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/svc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI VENKATESWARA COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/icw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> INDRAPRASTHA COLLEGE FOR WOMEN - [IP], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/dcac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> DELHI COLLEGE OF ARTS AND COMMERCE - [DCAC], NEW DELHI
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
                      <Link to="/list_college_commerce/kiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GARGI COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/jmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JESUS AND MARY COLLEGE - [JMC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sbsc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHAHEED BHAGAT SINGH COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sggs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SRI GURU GOBIND SINGH COLLEGE OF COMMERCE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ramjas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMJAS COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/krc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KASTURI RAM COLLEGE OF HIGHER EDUCATION, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ggsiu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY - [GGSIPU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/jmiu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/jgu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />O. P. JINDAL GLOBAL UNIVERSITY - [JGU], SONEPAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/du_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF DELHI - [DU], NEW DELHI
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
                      <Link to="/list_college_commerce/mdu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARSHI DAYANAND UNIVERSITY - [MDU], ROHTAK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/mac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARAJA AGRASEN COLLEGE - [MAC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/niu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/andc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> ACHARYA NARENDRA DEV COLLEGE - [ANDC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/amity_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY UNIVERSITY, NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/su_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHARDA UNIVERSITY - [SU], GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/mriir_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES - [MRIIRS], FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ccs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHAUDHARY CHARAN SINGH UNIVERSITY - [CCS], MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ansal_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANSAL UNIVERSITY- [AU], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/iitm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF INFORMATION TECHNOLOGY AND MANAGEMENT - [IITM] JANAKPURI, NEW DELHI
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
                      <Link to="/list_college_commerce/iitmgn_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IIMT COLLEGE OF MANAGEMENT, GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/fimt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />FAIRFIELD INSTITUTE OF MANAGEMENT AND TECHNOLOGY - [FIMT], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/scmt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHIKSHAPEETH COLLEGE OF MANAGEMENT AND TECHNOLOGY - [SCMT], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ignou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> INDIRA GANDHI NATIONAL OPEN UNIVERSITY - [IGNOU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/rcit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />R.C. INSTITUTE OF TECHNOLOGY - [RCIT], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/agbs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ATM GLOBAL BUSINESS SCHOOL, FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sum_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHOBHIT UNIVERSITY, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/kmu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KR MANGALAM UNIVERSITY, GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/pcet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PRESIDENCY COLLEGE OF EDUCATION AND TECHNOLOGY, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/mim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MEWAR INSTITUTE OF MANAGEMENT, GHAZIABAD
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
                      <Link to="/list_college_commerce/imegc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF MANAGEMENT EDUCATION GROUP OF COLLEGES - [IME], GHAZIABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/apgc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARYA POST GRADUATE COLLEGE, PANIPAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sru_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SUNRISE UNIVERSITY - [SRU], ALWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/svsu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SWAMI VIVEKANAND SUBHARTI UNIVERSITY - [SVSU], MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/amv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ADITI MAHAVIDYALAYA - [AMV], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/kiheat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KAMAL INSTITUTE OF HIGHER EDUCATION & ADVANCE TECHNOLOGY - [KIHEAT], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/hlm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HLM GROUP OF INSTITUTIONS, GHAZIABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/sggstu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHREE GURU GOBIND SINGH TRICENTENARY UNIVERSITY - [SGT], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/ncu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THE NORTHCAP UNIVERSITY - [NCU], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_commerce/amity_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY UNIVERSITY, GURGAON
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
          <div className="center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
      </div>
        </section>
      </div>
    );
  }
}
export default Commerce_college;
