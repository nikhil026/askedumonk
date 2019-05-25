import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Engineering_collage extends Component {
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
                <h3>Top Engineering Collage</h3>
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
                      <span>Ranking Engineering collage</span>
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
                      <span>Ranking Wise Engineering Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_madras_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Madras
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_delhi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Delhi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_bombay_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Bombay
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_kharagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Kharagpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_kanpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Kanpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_Roorkee_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Roorkee
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_guwahati_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Guwahati
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Hyderabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/anna_uni_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Anna University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_triuchi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Tiruchirappalli
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology BHU
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ict_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Chemical Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_indore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Technology Indore
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/jadavpur_uni_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jadavpur University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_dhanbad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Dhanbad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_rourkela_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Rourkela
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_bhubaneswar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Bhubaneswar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Vellore Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiest_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Engineering Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_mandi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Mandi
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
                      <Link to="/list_collage_engineering/nit_karnataka_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Karnataka
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_patna_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Patna
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/thapar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Thapar Institute of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_gandhinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Birla Institute of Technology & Science
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_warangal_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Warangal
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Jamia Millia Islamia
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_calicut_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Calicut
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_ropar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Ropar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iisst_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Space Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vnit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Visvesvaraya National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/soa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Siksha `O` Anusandhan
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Birla Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dtu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Delhi Technological University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/amity_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Amity University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/srm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SRM Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ssnce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Sivasubramaniya Nadar College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sast_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Shanmugha Arts Science Technology & Research Academy
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiit_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> IIIT  Hyderabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/amu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Aligarh Muslim University
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
                      <Link to="/list_collage_engineering/nit_kurukshetra_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Kurukshetra
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mnit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Motilal Nehru National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_rourkela_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Rourkela
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Manipal Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/psgct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PSG College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/jntu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jawaharlal Nehru Technological University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_durgapur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Durgapur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                     
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Sathyabama Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Kalinga Institute of Industrial Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_jodhpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Jodhpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_silchar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Silchar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/klce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> K L College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mnit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Malviya National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Panjab University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indraprastha Institute of Information Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/tce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Thiagarajar College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/diat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Defence Institute of Advanced Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svnit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sardar Vallabhbhai National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cev_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> College of Engineering Visakhapatnam
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
          
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_hamirpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />National Institute of Technology Hamirpur
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
                      <Link to="/list_collage_engineering/karhe_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kalasalingam Academy of Research and Higher Education
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/manit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Maulana Azad National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/rvce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> R. V. College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/msrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> M. S. Ramaiah Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiit_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />International Institute of Information Technology Bangalore
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/niit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Industrial Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_meghalaya_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Meghalaya
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Coimbatore Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>

                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bmsce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> B. M. S. College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_agartala_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Agartala
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Karunya Institute of Technology and Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ggsiu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Guru Gobind Singh Indraprastha University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_raipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Raipur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iitdm_jabalpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IIITDM JABALPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Pondicherry Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kumaraguru College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PEC University of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Siddaganga Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/jiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jaypee Institute of Information Technology
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
                      <Link to="/list_collage_engineering/iitm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Atal Bihari Vajpayee Indian Institute of Information Technology and Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiit_allahabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Information Technology Allahabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/uce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />University College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dei_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dayalbagh Educational Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/smvdu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri Mata Vaishno Devi University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vtrist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_goa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Goa
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/msec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Mepco Schlenk Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Venkateswara University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/gct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Government College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Army Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/daiict_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dhirubhai Ambani Institute of Information and Communication Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bvduce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bharati Vidyapeeth Deemed University College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cvrce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> C. V. Raman College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/hits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Hindustan Institute of Technology and Science
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ptu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Punjab Technical University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/skcet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Krishna College of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bannari Amman Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kongu Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                     
                      <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cbit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Chaitanya Bharathi Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    </div>
                    : null }
                    {this.state.activePage === 6? 
                    <div className="col-md-4 mrgn-branches">
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sona College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iem_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Engineering & Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/uce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />University College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/geu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Graphic Era University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vjti_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Veermata Jijabai Technological Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nhce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> New Horizon College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vfst_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vignan`s Foundation for Science, Technology and Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/tnvasu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Tamil Nadu Veterinary & Animal Sciences University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vnrnhiet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/snmim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SVKM`s Narsee Monjee Institute of Management Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ghrce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />G. H. Raisoni College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/srcem_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Shri Ramdeobaba College of Engineering and Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dbranit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. B. R. Ambedkar National Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bvbspit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Bharatiya Vidya Bhavan`s Sardar Patel Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ju_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jain university
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/secust_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> School of Engineering, Cochin University of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Chandigarh University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/niftem_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Food Technology, Enterprenurship & Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/tnu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />The Northcap University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sjce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Jayachamarajendra College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    </div>
                    : null }
                    {this.state.activePage === 7? 
                    <div className="col-md-4 mrgn-branches">
                      <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/juit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jaypee University of Information Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/trumnu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> The Rashtrasant Tukadoji Maharaj Nagpur University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ssec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Sri Sairam Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Saveetha Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Lovely Professional University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vssut_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Veer Surendra Sai University of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dsce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dayananda Sagar College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nmamit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> N. M. A. M. Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sjce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> St. Josephs College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_jamshedpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Jamshedpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bsarcist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> B. S. Abdur Rahman Crescent Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/hits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Hindustan Institute of Technology and Science
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cvrce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> CVR College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/sliet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sant Longowal Institute of Engineering & Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_patna_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Patna
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ycce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Yeshwantrao Chavan College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Nirma University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/msub_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Maharaja Sayajirao University of Baroda
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/srec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Ramakrishna Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iae_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Aeronautical Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div><div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/rec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Rajalakshmi Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    </div>
                    : null }
                    {this.state.activePage === 8? 
                    <div className="col-md-4 mrgn-branches">
                      <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/gbpuat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> G. B. Pant Universtiy of Agriculture and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nitte_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> NITTE Meenakshi Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Venkateswara College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ymca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> YMCA University of Science & Tech
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                  <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/upes_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> University of Petroleum and Energy Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/skct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Krishna College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bvrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> BVRIT Hyderabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nit_manipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Technology Manipur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pesu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PES University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/hit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Heritage Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/psnacet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PSNA College of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vardhaman College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/wce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Walchand College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dvkmit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. Vishwanath Karad MIT World Peace University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bract_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bansilal Ramnath Agarwal Charitable Trust`s Vishwakarama Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bnmit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> BNM Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pmkec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> R. M. K. Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bmsitm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> BMS Institute of Technology & Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kletu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> KLE Technological University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Narula Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    </div>
                    : null }
                    {this.state.activePage === 9? 
                    <div className="col-md-4 mrgn-branches">
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pesce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> P E S College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/igdtu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indira Gandhi Delhi Technical University for Women
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. Ambedkar Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mriirs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Manav Rachna International Institute of Research & Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/makaut_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Maulana Abul Kalam Azad University of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sree Vidyanikethan Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pdbvrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Padmasri Dr. B.V. Raju Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/agi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Anurag Group of Institutions
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vasavi College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vrsec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Velagapudi Ramakrishna Siddhartha Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/rait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Ramrao Adik Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nerit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> North Eastern Regional Institute of Science & Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/cmrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> C M R Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/hit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Haldia Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Venkateswara College of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/gprec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />G. Pulla Reddy Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/nie_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> The National Institute of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/grrrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Goka Raju Ranga Raju Institute of Engineering & Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/spce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sardar Patel College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    </div>
                    : null }
                    {this.state.activePage === 10? 
                    <div className="col-md-4 mrgn-branches">
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kits_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kakatiya Institute of Technology & Science
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/kjsce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> K. J. Somaiya College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svecw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri Vishnu Engineering College for Women
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dmcet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. Mahalingam College of Engineering and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/jce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> JNTUA College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/alu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Alliance University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/simt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Saveetha Institute of Medical and Technical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mksss_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Maharshi Karve Stree Shikshan Samstha`s Cummins College of Engineering for Women
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/srrec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sagi Ramakrishnam Raju Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/vtmt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/bec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Basaveshwar Engineering College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/pcce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Pimpri Chinchwad College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/tcet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Thakur College of Engineering & Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/ssrit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Sai Ram Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/svpkmd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri Vile Parle Kelavani Mandal`s Dwarkadas J. Sanghvi College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/mgreri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> M. G. R. Educational and Research Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iiitdm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Information Technology, Design & Manufacturing
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/dbrait_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. B. R. Ambedkar Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/gvpce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Gayatri Vidya Parishad College of Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/eec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Easwari Engineering College
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
          itemsCountPerPage={20}
          totalItemsCount={200}
          pageRangeDisplayed={4}
          onChange={this.handlePageChange}
        />
      </div>
      </div>
        </section>
      </div>
    );
  }
}
export default Engineering_collage;
