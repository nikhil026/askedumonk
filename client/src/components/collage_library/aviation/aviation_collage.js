import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Aviation_Collage extends Component {
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
                <h3>Top Aviation Collage</h3>
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
                      <span>Ranking Aviation collage</span>
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
                      <span>Ranking Wise Aviation Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/uom_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF MUMBAI, MUMBA
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/ishm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTERNATIONAL SCHOOL OF HOSPITALITY MANAGEMENT - [ISHM], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/bvj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/hfgc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HINDUSTAN FIRST GRADE COLLEGE, MYSORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/niu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/ofaa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ORIENT FLIGHTS AVIATION ACADEMY - [OFAA], MYSORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/nims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIMS UNIVERSITY, JAIPUR
                        </p>
                        <p>  
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/kjc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KRISTU JAYANTI COLLEGE - [KJC], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/juj_detail">
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
                    {this.state.activePage === 2? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/sgvu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SURESH GYAN VIHAR UNIVERSITY - [SGVU], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/suj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SINGHANIA UNIVERSITY, JHUNJHUNU
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/iikmbs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IIKM BUSINESS SCHOOL, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/ycmou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />YASHWANTRAO CHAVAN MAHARASHTRA OPEN UNIVERSITY- [YCMOU], NASHIK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/hits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HINDUSTAN INSTITUTE OF TECHNOLOGY AND SCIENCE - [HITS], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/iua_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDUS UNIVERSITY, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/upes_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF PETROLEUM AND ENERGY STUDIES - [UPES], DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aha_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APTECH AVIATION AND HOSPITALITY ACADEMY - [AHA], BARODA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/vuc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VELS UNIVERSITY, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/gbs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GALGOTIAS UNIVERSITY SCHOOL OF BUSINESS - [GBS], GREATER NOIDA
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
                      <Link to="/list_collage_aviation/giced_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GARWARE INSTITUTE OF CAREER EDUCATION AND DEVELOPMENT - [GICED], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/rimtu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RIMT UNIVERSITY, GOBINDGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/sslspcas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SIR SITARAM AND LADY SHANTABAI PATKAR COLLEGE OF ARTS AND SCIENCE - [SSLSPCAS], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/pmce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PM COLLEGE OF ENGINEERING - [PMCE], SONEPAT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/abbs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ACHARYA BANGALORE B-SCHOOL - [ABBS], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/vuu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VIKRAM UNIVERSITY - [VU], UJJAIN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/iisu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THE IIS UNIVERSITY - [IISU], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/wiia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />WESTERN INDIA INSTITUTE OF AERONAUTICS - [WIIA], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/gimc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GALAXY INSTITUTE OF MANAGEMENT, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/izee_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IZEE BUSINESS SCHOOL - [IZEE], BANGALORE
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
                      <Link to="/list_collage_aviation/alc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANDHRA LOYOLA COLLEGE - [ALC], VIJAYAWADA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/iimt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IMPERIAL INSTITUTE OF MANAGEMENT AND TECHNOLOGY - [IIMT], NAINITAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/lmim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LIVEWIRES THE MEDIA INSTITUTE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/ica_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTERNATIONAL CAREER ACADEMY - [ICA], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/acapl_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ACADEMY OF CARVER AVIATION PVT LTD, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AHMEDABAD AVIATION AND AERONAUTICS LIMITED - [AAA], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aand_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AIRBORNE ACADEMY, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AKBAR ACADEMY, TRIVANDRUM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ALPINE INSTITUTE OF AERONAUTICS - [AIA], DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaam_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMBITIONS AVIATION ACADEMY, MUMBAI
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
                      <Link to="/list_collage_aviation/apaa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANDHRA PRADESH AVIATION ACADEMY, HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaata_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANGELBLUES AVIATION AND TOURISM ACADEMY, KOCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aiahta_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANNAI INDIRA AIR HOSTESS TRAINING ACADEMY, KANYAKUMARI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaaa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APPLIQ AIRWAYS ACADEMY, AGRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaha_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APTECH AVIATION AND HOSPITALITY ACADEMY - [AAHA], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aiqm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ASIAN INSTITUTE OF QUALITY MANAGEMENT, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/afsc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AVEL FLIGHT SCHOOL, CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/aaspl_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AVIATIONBABA AERO SERVICES PRIVATE LIMITED, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/bvgfc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH GLIDING AND FLYING CLUB - [BVGFC], TONK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_aviation/bia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARAT INSTITUTE OF AERONAUTICS - [BIA], PATNA
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
export default Aviation_Collage;
