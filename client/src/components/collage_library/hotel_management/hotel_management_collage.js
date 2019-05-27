import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Hotel_Management_Collage extends Component {
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
                <h3>Top Hotel Management Collage</h3>
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
                      <span>Ranking Management collage</span>
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
                      <span>Ranking Wise Managment Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihmcn_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, CATERING AND NUTRITION - [IHM], PUSA, NEW DELHI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/puv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PARUL UNIVERSITY, VADODARA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ish_gurgaon_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN SCHOOL OF HOSPITALITY - [ISH], GURGAON
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_kolkata_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION - [IHM], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/iihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> INTERNATIONAL INSTITUTE OF HOTEL MANAGEMENT - [IIHM], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_chennai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_chandigarh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> DR.AMBEDKAR INSTITUTE OF HOTEL MANAGEMENT CATERING AND NUTRITION - [IHM], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT AND CATERING TECHNOLOGY - [IHMCT] KOVALAM, TRIVANDRUM
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
                      <Link to="/list_collage_hotel_management/ocld_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OBEROI CENTRE OF LEARNING AND DEVELOPMENT - [OCLD], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/aihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARMY INSTITUTE OF HOTEL MANAGEMENT & CATERING TECHNOLOGY - [AIHMCT], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_gandhinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], GANDHI NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION- [IHMH ], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ichm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RIZVI COLLEGE OF HOTEL MANAGEMENT, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_ngoa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION -[IHM], NORTH GOA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_jodpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />STATE INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], JODHPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_panipat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], PANIPAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/aihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMRAPALI INSTITUTE OF HOTEL MANAGEMENT, HALDWANI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/aih_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APEEJAY INSTITUTE OF HOSPITALITY - [AIH], NAVI MUMBAI
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
                      <Link to="/list_collage_hotel_management/ihmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT AND CATERING - [IHMC], UDAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/siop_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SINHGAD INSTITUTE OF PHARMACY - [SIOP] NARHE, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_guwahati_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], GUWAHATI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_lucknow_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, CATERING & NUTRITION - [IHM], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/csh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHITKARA SCHOOL OF HOSPITALITY -[CSH], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ushmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY SCHOOL OF HOTEL MANAGEMENT & CATERING TECHNOLOGY, RAYAT BAHRA UNIVERSITY - [USHMCT], MOHALI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION, SHILLONG
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/sschm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHRI SHAKTI COLLEGE OF HOTEL MANAGEMENT - [SSCHM], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/cihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CT INSTITUTE OF HOTEL MANAGEMENT, JALANDHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/dbihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DESH BHAGAT INSTITUTE OF HOTEL MANAGEMENT & CATERING TECHNOLOGY - [DBIHMCT], GOBINDGARH
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
                      <Link to="/list_collage_hotel_management/gnihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU NANAK INSTITUTE OF HOTEL MANAGEMENT - [GNIHM], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/vuc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VELS UNIVERSITY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MUNNAR CATERING COLLEGE - [MCC], TRIVANDRUM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_kurukshetra_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION - [IHM],, KURUKSHETRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/kchm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KC HOTEL MANAGEMENT COLLEGE - [KCCHM], NAWANSHAHR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_bhubaneswar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION - [IHM], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/cchmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDIGARH COLLEGE OF HOTEL MANAGEMENT AND CATERING TECHNOLOGY - [CCHMCT], MOHALI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_degradun_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY & APPLIED NUTRITION - [IHM], DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/oshml_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ORIENTAL SCHOOL OF HOTEL MANAGEMENT LAKKIDI, WAYANAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_gwalior_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], GWALIOR
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
                      <Link to="/list_collage_hotel_management/cihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDIGARH INSTITUTE OF HOTEL MANAGEMENT AND CATERING TECHNOLOGY - [CIHMCT], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/pihmct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PONDICHERRY INSTITUTE OF HOTEL MANAGEMENT & CATERING TECHNOLOGY - [PIHMCT], PONDICHERRY
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_gurdaspur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT - [IHM], GURDASPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_meerut_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION - [IHM], MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/sihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />STATE INSTITUTE OF HOSPITALITY MANAGEMENT - [SIHM], KOZHIKODE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_bathinda_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT CATERING TECHNOLOGY AND APPLIED NUTRITION, BATHINDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_faridabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/nithm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR YSR NATIONAL INSTITUTE OF TOURISM AND HOSPITALITY MANAGEMENT - [NITHM], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/dihm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DELHI INSTITUTE OF HOTEL MANAGEMENT AND CATERING TECHNOLOGY, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_hotel_management/ihm_gangtok_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF HOTEL MANAGEMENT, GANGTOK
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
export default Hotel_Management_Collage;
