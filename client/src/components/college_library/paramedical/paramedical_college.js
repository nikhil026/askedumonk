import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Paramedical_college extends Component {
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
                <h3>Top Paramedical college</h3>
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
                      <span>Ranking Paramedical college</span>
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
                      <span>Ranking Wise Paramedical college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/maids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ALL INDIA INSTITUTE OF MEDICAL SCIENCES - [AIIMS], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mcods_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHRISTIAN MEDICAL COLLEGE - [CMC], VELLORE
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sdmcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARMED FORCES MEDICAL COLLEGE - [AFMC], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/gdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KASTURBA MEDICAL COLLEGE - [KMC], MANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/kgmu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAULANA AZAD MEDICAL COLLEGE - [MAMC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/absmids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAWAHARLAL INSTITUTE OF POST GRADUATE MEDICAL EDUCATION AND RESEARCH - [JIPMER], PONDICHERRY
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/pgims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/gdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY HARDINGE MEDICAL COLLEGE - [LHMC], NEW DELHI
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/dradch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADRAS MEDICAL COLLEGE - [MMC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/srmdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GRANT MEDICAL COLLEGE - [GMC], MUMBAI
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
                      <Link to="/list_college_paramedical/jkkndch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JSS ACADEMY OF HIGHER EDUCATION & RESEARCH - [JSS UNIVERSITY], MYSORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/awadgdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY - [GGSIPU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/kdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KING GEORGE'S MEDICAL UNIVERSITY - [KGMU], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/ciidsrcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI RAMACHANDRA INSTITUTE OF HIGHER EDUCATION AND RESEARCH, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/kids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SETH GS MEDICAL COLLEGE - [GSMC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/udmri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE - [GMC], AMRITSAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mgsdcrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KLE UNIVERSITY, BELGAUM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sgrdidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF MEDICAL SCIENCES - [IMS], VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/kdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF MUMBAI, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARATI VIDYAPEETH DEEMED UNIVERSITY - [BVDU], PUNE
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
                      <Link to="/list_college_paramedical/idch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHATMA GANDHI INSTITUTE OF MEDICAL SCIENCES - [MGIMS], WARDHA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/pids_detail">
                        <p className="brnchname">ANNAMALAI UNIVERSITY, CHIDAMBARAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sids_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOKMANYA TILAK MUNICIPAL MEDICAL COLLEGE-[LTMMC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/tngdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/acds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHRISTIAN MEDICAL COLLEGE - [CMC], LUDHIANA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/amcdsrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/psmcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OSMANIA MEDICAL COLLEGE - [OMC], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/ndch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BYRAMJEE JEEJEEBHOY GOVERNMENT MEDICAL COLLEGE - [BJMC], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/adch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF POST GRADUATE MEDICAL EDUCATION AND RESEARCH - [IPGMER], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sycmm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SYMBIOSIS INTERNATIONAL UNIVERSITY - [SIU], PUNE
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
                      <Link to="/list_college_paramedical/zadc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANGALORE MEDICAL COLLEGE AND RESEARCH INSTITUTE - [BMCRI], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/asdk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />B. J. MEDICAL COLLEGE - [BJMC], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/gidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANARAS HINDU UNIVERSITY - [BHU], VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/gidsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE - [GMC], NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mcdrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIMS UNIVERSITY, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mbdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADHAV UNIVERSITY - [MU], SIROHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/pcds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />STANLEY MEDICAL COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/nicds_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AYUSH AND HEALTH SCIENCE UNIVERSITY - [AHSU], RAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/sdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SMS MEDICAL COLLEGE - [SMSMC], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mmcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE, SURAT
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
                      <Link to="/list_college_paramedical/dcdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE, THIRUVANANTHAPURAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/cpgidsh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE, KOZHIKODE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/hdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHARDA UNIVERSITY - [SU], GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/djcdsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAJASTHAN UNIVERSITY OF HEALTH SCIENCES - [RUHS], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/ddcrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OPJS UNIVERSITY, CHURU
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/pdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE, KOTTAYAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/bdch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT MEDICAL COLLEGE / RAJINDRA HOSPITAL-[GMCP], PATIALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/mrdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THRISSUR GOVT. MEDICAL COLLEGE, THRISSUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/hsrsmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LLRM MEDICAL COLLEGE, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_paramedical/bidsh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ALIGARH MUSLIM UNIVERSITY - [AMU], ALIGARH
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
export default Paramedical_college;
