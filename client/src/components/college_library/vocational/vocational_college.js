import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Vocational_college extends Component {
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
                <h3>Top Vocational college</h3>
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
                      <span>Ranking Vocational college</span>
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
                      <span>Ranking Wise Vocational college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_mumbai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_pusa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, CATERING AND NUTRITION - [IHM], PUSA, NEW DELHI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/sxcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADRAS CHRISTIAN COLLEGE - [MCC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_kolkata_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION - [IHM], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_chennai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT AND CATERING TECHNOLOGY - [IHMCT] KOVALAM, TRIVANDRUM
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/fcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />FERGUSSON COLLEGE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/nmims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NARSEE MONJEE INSTITUTE OF MANAGEMENT STUDIES - [NMIMS DEEMED TO BE UNIVERSITY], MUMBAI
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
                      <Link to="/list_college_vocational/ggsipu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY - [GGSIPU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/du_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF DELHI - [DU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_gandinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], GANDHI NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION- [IHMH ], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/hrcce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HR COLLEGE OF COMMERCE AND ECONOMICS, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MOUNT CARMEL COLLEGE - [MCC], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/sxc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE - [SXC], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/simsree_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SYDENHAM INSTITUTE OF MANAGEMENT STUDIES, RESEARCH & ENTREPRENEURSHIP EDUCATION - [SIMSREE], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/jmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JESUS AND MARY COLLEGE - [JMC], NEW DELHI
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
                      <Link to="/list_college_vocational/dav_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DEVI AHILYA VISHWAVIDYALAYA, INDORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_northgoa_detail">
                        <p className="brnchname">INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION -[IHM], NORTH GOA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/giadt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRISHTI INSTITUTE OF ART, DESIGN AND TECHNOLOGY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_jodhpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />STATE INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], JODHPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_panipat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], PANIPAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/acdb_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARCH COLLEGE OF DESIGN AND BUSINESS, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/sfcw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST FRANCIS COLLEGE FOR WOMEN, HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/um_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF MUMBAI, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/bvdu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARATI VIDYAPEETH DEEMED UNIVERSITY - [BVDU], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/auc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANNAMALAI UNIVERSITY, CHIDAMBARAM
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
                      <Link to="/list_college_vocational/ihm_udaipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT AND CATERING - [IHMC], UDAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/usict_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY SCHOOL OF INFORMATION, COMMUNICATION AND TECHNOLOGY - [USICT], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/niu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/jdift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JD INSTITUTE OF FASHION TECHNOLOGY, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/bmcri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANGALORE MEDICAL COLLEGE AND RESEARCH INSTITUTE - [BMCRI], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_guwahati_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], GUWAHATI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/sppu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SAVITRIBAI PHULE PUNE UNIVERSITY - [SPPU], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANARAS HINDU UNIVERSITY - [BHU], VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/mu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADHAV UNIVERSITY - [MU], SIROHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihm_lucknow_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, CATERING & NUTRITION - [IHM], LUCKNOW
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
                      <Link to="/list_college_vocational/amu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ALIGARH MUSLIM UNIVERSITY - [AMU], ALIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/juj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAGANNATH UNIVERSITY, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/jnc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JYOTI NIVAS COLLEGE - [JNC], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ushmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY SCHOOL OF HOTEL MANAGEMENT & CATERING TECHNOLOGY, RAYAT BAHRA UNIVERSITY - [USHMCT], MOHALI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/rapcce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RA PODAR COLLEGE OF COMMERCE AND ECONOMICS, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/muhs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARASHTRA UNIVERSITY OF HEALTH SCIENCES - [MUHS], NASHIK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/ihmctan_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION, SHILLONG
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/npgc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL POST GRADUATE COLLEGE, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_vocational/hice_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HAMSTECH INSTITUTE OF CREATIVE EDUCATION, HYDERABAD
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
export default Vocational_college;
