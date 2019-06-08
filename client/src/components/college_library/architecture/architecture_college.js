import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Architecture_college extends Component {
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
                <h3>Top Architecture college</h3>
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
                      <span>Ranking Architecture college</span>
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
                      <span>Ranking Wise Architecture college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/spa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SCHOOL OF PLANNING AND ARCHITECTURE - [SPA], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/iit_kharagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], KHARAGPUR
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/iit_roorkee_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], ROORKEE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/sjjca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SIR JJ COLLEGE OF ARCHITECTURE - [SJJCA], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nit_trichy_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF TECHNOLOGY - [NIT], THIRUCHIRAPALLI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/juk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JADAVPUR UNIVERSITY, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/bit_mesra_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIRLA INSTITUTE OF TECHNOLOGY - [BIT MESRA], RANCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/ceptu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CEPT UNIVERSITY, AHMEDABAD
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/cca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDIGARH COLLEGE OF ARCHITECTURE - [CCA], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/ssaa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SUSHANT SCHOOL OF ART AND ARCHITECTURE, ANSAL UNIVERSITY - [SSAA], GURGAON
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
                      <Link to="/list_college_architecture/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nit_calicut_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF TECHNOLOGY - [NITC], CALICUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/rcam_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RIZVI COLLEGE OF ARCHITECTURE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/mum_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANIPAL UNIVERSITY - [MU], MANIPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/rvce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />R V COLLEGE OF ENGINEERING - [RVCE], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/auc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANNA UNIVERSITY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/manit_bhopal_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY - [MANIT], BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/mnit_jaipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MALAVIYA NATIONAL INSTITUTE OF TECHNOLOGY - [MNIT], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/vnit_nagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VISVESVARAYA NATIONAL INSTITUTE OF TECHNOLOGY - [VNIT], NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/vka_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VASTU KALA ACADEMY, NEW DELHI
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
                      <Link to="/list_college_architecture/niu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nmims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NARSEE MONJEE INSTITUTE OF MANAGEMENT STUDIES - [NMIMS DEEMED TO BE UNIVERSITY], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/uvce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY VISVESVARAYA COLLEGE OF ENGINEERING - [UVCE], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nimsu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIMS UNIVERSITY, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/rit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMAIAH INSTITUTE OF TECHNOLOGY - [RIT], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/su_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHARDA UNIVERSITY - [SU], GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOVELY PROFESSIONAL UNIVERSITY - [LPU], JALANDHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/abit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AJAY BINAY INSTITUTE OF TECHNOLOGY - [ABIT], CUTTACK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/dypca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR DY PATIL COLLEGE OF ARCHITECTURE AKURDI, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/mriirs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES - [MRIIRS], FARIDABAD
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
                      <Link to="/list_college_architecture/nit_hamirpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF TECHNOLOGY - [NIT], HAMIRPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/gsa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GITAM SCHOOL OF ARCHITECTURE - [GSA], VISAKHAPATNAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nitp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF TECHNOLOGY - [NITP], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/kits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KAVIKULGURU INSTITUTE OF TECHNOLOGY AND SCIENCE - [KITS], NAGPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/coet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF ENGINEERING, TRIVANDRUM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/bjgi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BISHOP JEROME INSTITUTE - [BJGI], KOLLAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nit_raipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF TECHNOLOGY - [NIT], RAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/aug_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANSAL UNIVERSITY- [AU], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/arcist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />B.S. ABDUR RAHMAN CRESCENT INSTITUTE OF SCIENCE & TECHNOLOGY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/juj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAGANNATH UNIVERSITY, JAIPUR
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
                      <Link to="/list_college_architecture/cuc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDIGARH UNIVERSITY - [CU], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/srmec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRM ENGINEERING COLLEGE, KANCHIPURAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/sist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/luf_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LINGAYA'S UNIVERSITY, FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/auce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANDHRA UNIVERSITY, COLLEGE OF ENGINEERING - [AUCE], VISAKHAPATNAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/rsdca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAJARAM SHINDE DEGREE COLLEGE OF ARCHITECTURE, RATNAGIRI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/bssa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BALWANT SHETH SCHOOL OF ARCHITECTURE - [BSSA], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/bddca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BAPURAOJI DESHMUKH DEGREE COLLEGE OF ARCHITECTURE, WARDHA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/nua_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIRMA UNIVERSITY - [NU], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_architecture/bldea_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />B.L.D.E.A'S V.P. DR.P.G.HALAKATTI COLLEGE OF ENGINEERING & TECHNOLOGY , BIJAPUR
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
export default Architecture_college;
