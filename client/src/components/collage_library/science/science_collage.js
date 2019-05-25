import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Science_Collage extends Component {
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
                <h3>Top Science Collage</h3>
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
                      <span>Ranking Science collage</span>
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
                      <span>Ranking Wise Science Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/lcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOYOLA COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/stxc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE, MUMBAI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/sggstu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHREE GURU GOBIND SINGH TRICENTENARY UNIVERSITY - [SGT], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/parulu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PARUL UNIVERSITY, VADODARA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/cub_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHRIST UNIVERSITY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> MADRAS CHRISTIAN COLLEGE - [MCC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/tocs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> THE OXFORD COLLEGE OF SCIENCE - [TOCS], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/smcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />STELLA MARIS COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/rcnd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> RAMJAS COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/fcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />FERGUSSON COLLEGE, PUNE
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
                      <Link to="/list_collage_Commerce/hrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HANS RAJ COLLEGE - [HRC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/pcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PRESIDENCY COLLEGE, CHENNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MIRANDA HOUSE COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> MOUNT CARMEL COLLEGE - [MCC], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/sxc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE - [SXC], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/svc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI VENKATESWARA COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/gcnd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GARGI COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/sjcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST JOSEPH'S COLLEGE DEVAGIRI, CALICUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/ecm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ELPHINSTONE COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/stfcw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST FRANCIS COLLEGE FOR WOMEN, HYDERABAD
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
                      <Link to="/list_collage_Commerce/hcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HINDU COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/rrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMNARAIN RUIA COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/ecw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ETHIRAJ COLLEGE FOR WOMEN, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/andc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> ACHARYA NARENDRA DEV COLLEGE - [ANDC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/oucw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OSMANIA UNIVERSITY COLLEGE FOR WOMEN - [UCW], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/sxca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST XAVIER'S COLLEGE, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/rmvc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMAKRISHNA MISSION VIVEKANANDA COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/scck_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SCOTTISH CHURCH COLLEGE, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mcmdavcw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MEHR CHAND MAHAJAN DAYANAND ANGLO VEDIC COLLEGE FOR WOMEN - [MCM DAV], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/bck_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BETHUNE COLLEGE, KOLKATA
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
                      <Link to="/list_collage_Commerce/nch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIZAM COLLEGE, HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/juk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JADAVPUR UNIVERSITY, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/gncc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU NANAK COLLEGE, CHENNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/aspc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> AVVM SRI PUSHPAM COLLEGE, THANJAVUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/npgc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL POST GRADUATE COLLEGE, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/kmdcasc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KIRTI M DOONGURSEE COLLEGE OF ARTS SCIENCE AND COMMERCE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/tnc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THE NEW COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/rjc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMNIRANJAN JHUNJHUNWALA COLLEGE - [R.J.C], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/shc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SACRED HEART COLLEGE - [SH] THEVARA, ERNAKULAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/lbspc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LAL BAHADUR SHASTRI PG COLLEGE, JAIPUR
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
                      <Link to="/list_collage_Commerce/tndc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THE NATIONAL DEGREE COLLEGE, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mscas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MOHAMED SATHAK COLLEGE OF ARTS AND SCIENCE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/nwcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NESS WADIA COLLEGE OF COMMERCE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/jhcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAI HIND COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/iit_kanpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], KANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/mac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAULANA AZAD COLLEGE - [MAC], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/anc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANUGRAH NARAYAN COLLEGE - [ANC], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/scasc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SIES COLLEGE OF ARTS SCIENCE AND COMMERCE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/bub_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BARKATULLAH UNIVERSITY - [BU], BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_Commerce/jnc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JYOTI NIVAS COLLEGE - [JNC], BANGALORE
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
export default Science_Collage;
