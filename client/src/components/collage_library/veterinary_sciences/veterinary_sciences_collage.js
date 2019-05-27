import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Veterinary_Sciences_Collage extends Component {
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
                <h3>Top Veterinary Science Collage</h3>
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
                      <span>Ranking Veterinary collage</span>
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
                      <span>Ranking Wise Veterinary Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/ivri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN VETERINARY RESEARCH INSTITUTE - [IVRI], BAREILLY
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/ndri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL DAIRY RESEARCH INSTITUTE - [NDRI], KARNAL
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/gbpuat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVIND BALLABH PANT UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, PANTNAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/vcri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VETERINARY COLLEGE AND RESEARCH INSTITUTE - [VCRI], NAMAKKAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF VETERINARY AND ANIMAL SCIENCES - [CVAS], BIKANER
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/bau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIRSA AGRICULTURAL UNIVERSITY - [BAU], RANCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/pajuvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAJASTHAN UNIVERSITY OF VETERINARY AND ANIMAL SCIENCES - [RAJUVAS], BIKANER
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANARAS HINDU UNIVERSITY - [BHU], VARANASI
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/ouc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OPJS UNIVERSITY, CHURU
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/amu_detail">
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
                    {this.state.activePage === 2? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/buj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BUNDELKHAND UNIVERSITY, JHANSI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/jau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JUNAGADH AGRICULTURAL UNIVERSITY, JUNAGADH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/ouat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ORISSA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY - [OUAT], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/suj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SINGHANIA UNIVERSITY, JHUNJHUNU
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/eiilm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />EASTERN INSTITUTE FOR INTEGRATED LEARNING IN MANAGEMENT - [EIILM UNIVERSITY], WEST SIKKIM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/rajuvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF VETERINARY AND ANIMAL SCIENCES - [RAJUVAS], UDAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/nrcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL RESEARCH CENTRE ON MITHUN - [NRCM], DIMAPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/svbpuat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SARDAR VALLABH BHAI PATEL UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/wbuafs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />WEST BENGAL UNIVERSITY OF ANIMAL AND FISHERY SCIENCES, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/kvasu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KERALA VETERINARY AND ANIMAL SCIENCES UNIVERSITY - [KVASU] POOKODE, WAYANAD
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
                      <Link to="/list_collage_veterinary_scienve/aau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANAND AGRICULTURAL UNIVERSITY - [AAU], ANAND
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/skuast_detail">
                        <p className="brnchname">SHER-E-KASHMIR UNIVERSITY OF AGRICULTURAL SCIENCES AND TECHNOLOGY OF KASHMIR - [SKUAST], SRINAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cskhpkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHAUDHARY SARWAN KUMAR HIMACHAL PRADESH KRISHI VISHVAVIDYALAYA - [CSK HPKV], PALAMPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/tanuvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />TAMIL NADU VETERINARY AND ANIMAL SCIENCES UNIVERSITY - [TANUVAS], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/bau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIHAR AGRICULTURAL UNIVERSITY - [BAU] SABOUR, BHAGALPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/csauat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDRA SHEKHAR AZAD UNIVERSITY OF AGRICULTURE AND TECHNOLOGY -[CSAUA&T], KANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/upcv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UDAI PRATAP COLLEGE, VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/sdau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SARDARKRUSHINAGAR DANTIWADA AGRICULTURAL UNIVERSITY - [SDAU], PALANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/kvafsu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KARNATAKA VETERINARY ANIMAL AND FISHERIES SCIENCES UNIVERSITY, BIDAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/svvu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI VENKATESWARA VETERINARY UNIVERSITY - [SVVU], TIRUPATI
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
                      <Link to="/list_collage_veterinary_scienve/mafsu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARASHTRA ANIMAL AND FISHERY SCIENCES UNIVERSITY - [MAFSU], NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/bvc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BOMBAY VETERINARY COLLEGE - [BVC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTRAL AGRICULTURAL UNIVERSITY - [CAU], IMPHAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/nduat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NARENDRA DEVA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY - [NDUAT], FAIZABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/nrcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL RESEARCH CENTRE ON CAMEL, BIKANER
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/kvasu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KVASU, COLLEGE OF VETERINARY AND ANIMAL SCIENCES MANNUTHY, THRISSUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/naun_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NAVSARI AGRICULTURAL UNIVERSITY, NAVSARI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/ragacovas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAJIV GANDHI COLLEGE OF VETERINARY & ANIMAL SCIENCES - [RAGACOVAS], PONDICHERRY
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/gadvasu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU ANGAD DEV VETERINARY AND ANIMAL SCIENCES UNIVERSITY - [GADVASU], LUDHIANA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cgkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHHATTISGARH KAMDHENU VISHWAVIDYALAYA - [CGKV], RAIPUR
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
                      <Link to="/list_collage_veterinary_scienve/aau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ASSAM AGRICULTURAL UNIVERSITY - [AAU], JORHAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/nou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NALANDA OPEN UNIVERSITY - [NOU], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/nvc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NAGPUR VETERINARY COLLEGE - [NVC], NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/acvm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APOLLO COLLEGE OF VETERINARY MEDICINE, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/bvcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIHAR VETERINARY COLLEGE, PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cap_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF AGRICULTURE, PALAMPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/can_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF AGRICULTURE, NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cobs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />4COLLEGE OF BASIC SCIENCES - [COBS], PALAMPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/covas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KVASU, COLLEGE OF VETERINARY AND ANIMAL SCIENCES POOKOT - [COVAS] POOKOT, WAYANAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_veterinary_scienve/cvsg_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF VETERINARY SCIENCE, GUWAHATI
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
export default Veterinary_Sciences_Collage;
