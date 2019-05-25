import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Pharmacy_Collage extends Component {
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
                <h3>Top Pharmacy Collage</h3>
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
                      <span>Ranking Pharmacy collage</span>
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
                      <span>Ranking Wise Pharmacy Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/niper_mohali_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH - [NIPER], MOHALI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/uips_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY INSTITUTE OF PHARMACEUTICAL SCIENCES, CHANDIGARH
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bvj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/ict_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF CHEMICAL TECHNOLOGY - [ICT], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/mcops_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANIPAL COLLEGE OF PHARMACEUTICAL SCIENCES - [MCOPS], MANIPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> BOMBAY COLLEGE OF PHARMACY - [BCP], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/jsscp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> JSS COLLEGE OF PHARMACY OOTY, THE NILGIRIS
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/iit_bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [BHU IIT], VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/lmcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> LM COLLEGE OF PHARMACY - [LMCP], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/sppsptm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHOBHABEN PRATAPBHAI PATEL SCHOOL OF PHARMACY & TECHNOLOGY MANAGEMENT - [SPPSPTM], MUMBAI
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
                      <Link to="/list_collage_pharmacy/msu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARAJA SAYAJIRAO UNIVERSITY OF BARODA - [MSU], BARODA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIRLA INSTITUTE OF TECHNOLOGY - [BIT MESRA], RANCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/gcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOA COLLEGE OF PHARMACY, PANJI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/pcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />POONA COLLEGE OF PHARMACY, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/aacp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AL- AMEEN COLLEGE OF PHARMACY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/mcu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARSHI DAYANAND UNIVERSITY - [MDU], ROHTAK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/jhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA HAMDARD UNIVERSITY, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/aucps_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANDHRA UNIVERSITY, COLLEGE OF PHARMACEUTICAL SCIENCES, VISAKHAPATNAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/davi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DEVI AHILYA VISHWAVIDYALAYA, INDORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/kcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KLE COLLEGE OF PHARMACY, HUBLI
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
                      <Link to="/list_collage_pharmacy/mmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADRAS MEDICAL COLLEGE - [MMC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/siop_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SINHGAD INSTITUTE OF PHARMACY - [SIOP] NARHE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/dipsar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DELHI INSTITUTE OF PHARMACEUTICAL SCIENCES AND RESEARCH - [DIPSAR], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/aspk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMRITA SCHOOL OF PHARMACY, KOCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/psgcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PSG COLLEGE OF PHARMACY - [PSGCP], COIMBATORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/gcpb_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT COLLEGE OF PHARMACY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/juk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JADAVPUR UNIVERSITY, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/sriher_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI RAMACHANDRA INSTITUTE OF HIGHER EDUCATION AND RESEARCH, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/niper_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH - [NIPER], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/niper_kolkata_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH - [NIPER], KOLKATA
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
                      <Link to="/list_collage_pharmacy/niper_guwahati_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH - [NIPER], GUWAHATI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/aun_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY UNIVERSITY, NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/acpgpip_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AR COLLEGE OF PHARMACY AND GH PATEL INSTITUTE OF PHARMACY, VALLABH VIDYANAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bncp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHUPAL NOBLES COLLEGE OF PHARMACY, UDAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/srmuk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRM UNIVERSITY KATTANKULATHUR, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bvdu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARATI VIDYAPEETH DEEMED UNIVERSITY - [BVDU], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bkmgpc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BK MODY GOVERNMENT PHARMACY COLLEGE, SURAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/bvcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARATI VIDYAPEETH COLLEGE OF PHARMACY, KOLHAPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/cpsm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF PHARMACEUTICAL SCIENCES MOHUDA, GANJAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/rcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMAIAH COLLEGE OF PHARMACY, BANGALORE
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
                      <Link to="/list_collage_pharmacy/enapc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />EZHUTHACHAN COLLEGE OF PHARMACEUTICAL SCIENCES - [ENAPC], NEYYATTINKARA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/pkmkcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PRINCIPAL K.M.KUNDNANI COLLEGE OF PHARMACY, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/auc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANNAMALAI UNIVERSITY, CHIDAMBARAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/kiet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KIET GROUP OF INSTITUTIONS - [KIET], GHAZIABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/gip_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GITAM INSTITUTE OF PHARMACY - [GIP], VISAKHAPATNAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/hpi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HIMALAYAN PHARMACY INSTITUTE, EAST SIKKIM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/mmcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MM COLLEGE OF PHARMACY, AMBALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/msajcp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MOHAMED SATHAK A.J. COLLEGE OF PHARMACY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/nua_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIRMA UNIVERSITY - [NU], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_pharmacy/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOVELY PROFESSIONAL UNIVERSITY - [LPU], JALANDHAR
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
export default Pharmacy_Collage;
