import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Arts_Collage extends Component {
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
                <h3>Top Arts Collage</h3>
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
                      <span>Ranking Arts collage</span>
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
                      <span>Ranking Wise Arts Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/lsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY SHRI RAM COLLEGE FOR WOMEN - [LSR], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/lyc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOYOLA COLLEGE, CHENNAI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sxcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/cub_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHRIST UNIVERSITY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MIRANDA HOUSE COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/pcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PRESIDENCY COLLEGE, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> MADRAS CHRISTIAN COLLEGE - [MCC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/hc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HINDU COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/hrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> HANS RAJ COLLEGE - [HRC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/fcp_detail">
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
                      <Link to="/list_collage_arts/kjscac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />K J SOMAIYA COLLEGE OF ARTS & COMMERCE - [KJSAC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/rcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMJAS COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/jmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JESUS AND MARY COLLEGE - [JMC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/puk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PRESIDENCY UNIVERSITY, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/jhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAI HIND COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/gcnd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GARGI COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/svc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI VENKATESWARA COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/dcac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DELHI COLLEGE OF ARTS AND COMMERCE - [DCAC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sxca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST XAVIER'S COLLEGE, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sxc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. XAVIER'S COLLEGE - [SXC], KOLKATA
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
                      <Link to="/list_collage_arts/rrcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMNARAIN RUIA COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/srcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHRI RAM COLLEGE OF COMMERCE - [SRCC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/kcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KISHINCHAND CHELLARAM COLLEGE - [KC COLLEGE] CHURCHGATE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sacasc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> ST ANDREW'S COLLEGE OF ARTS SCIENCE AND COMMERCE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mcasc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MODERN COLLEGE OF ARTS SCIENCE AND COMMERCE - [MCASC] SHIVAJINAGAR, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARAJA AGRASEN COLLEGE - [MAC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/scwm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SOPHIA COLLEGE FOR WOMEN, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/smcg_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST. MIRA'S COLLEGE FOR GIRLS, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/lbc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY BRABOURNE COLLEGE - [LBC], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/iit_kanpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], KANPUR
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
                      <Link to="/list_collage_arts/iit_bhubaneswar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/kmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KAMLA NEHRU COLLEGE FOR WOMEN - [KMC], KAPURTHALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/bvj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/skac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHRI HK ARTS COLLEGE, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/juk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JADAVPUR UNIVERSITY, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/ketsvg_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KELKAR EDUCATION TRUST'S V.G. VAZE COLLEGE OF ARTS SCIENCE AND COMMERCE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/vdc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VIVEKANANDA DEGREE COLLEGE, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mesagc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />M.E.S. ABASAHEB GARWARE COLLEGE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/bck_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BETHUNE COLLEGE, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/kjc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KRISTU JAYANTI COLLEGE - [KJC], BANGALORE
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
                      <Link to="/list_collage_arts/scac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SYMBIOSIS COLLEGE OF ARTS AND COMMERCE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sjcd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST JOSEPH'S COLLEGE DEVAGIRI, CALICUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/sxcj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST XAVIERS COLLEGE, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/csac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CU SHAH ARTS COLLEGE, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/mlacw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARANI LAKSHMI AMMANNI COLLEGE FOR WOMEN - [MLACW], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/uaccg_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UMIYA ARTS AND COMMERCE COLLEGE FOR GIRLS, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/wcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />WILSON COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/jnc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JYOTI NIVAS COLLEGE - [JNC], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/kgd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KASTURBA GANDHI DEGREE AND PG COLLEGE FOR WOMEN, SECUNDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_arts/ipcw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDRAPRASTHA COLLEGE FOR WOMEN - [IP], NEW DELHI
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
export default Arts_Collage;
