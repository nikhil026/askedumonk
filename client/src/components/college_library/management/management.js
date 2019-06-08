import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Management_college extends Component {
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
                <h3>Top Management college</h3>
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
                      <span>Ranking Management college</span>
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
                      <span>Ranking Wise Management college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Bangalore
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_delhi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Delhi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_ahmedabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Ahmedabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_calcutta_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Calcutta
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_lucknow_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Lucknow
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_indore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Indore
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_kharagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Kharagpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/xavier_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Xavier Labour Relations Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_kozhikode_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Kozhikode
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_bombay_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Bombay
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_roorkee_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Roorkee
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/mdi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Management Development Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_udaipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Udaipur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_tiruchi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Tiruchirappalli
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_madras_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Technology Madras
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/spjim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> S. P. Jain Institute of Management & Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/nit_trichy_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	National Institute of Technology Tiruchirappalli
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/glim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Great Lakes Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_raipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Raipur
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
                      <Link to="/list_college_management/sibm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Symbiosis Institute of Business Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/svkmnmim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SVKM`s Narsee Monjee Institute of Management Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_kanpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Technology Kanpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_rohtak_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Rohtak
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_shillong_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Management Shillong
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_kashipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Kashipur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/icfai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ICFAI Foundation for Higher Education
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imid_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> International Management Institute New Delhi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iim_ranchi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Management Ranchi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/niie_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Institute of Industrial Engineering
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/kiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kalinga Institute of Industrial Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Foreign Trade
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/iit_dhanbad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Technology (Indian School of Mines) Dhanbad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/tapmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> T. A. Pai Management Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jamia Millia Islamia
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/foms_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Faculty of Management Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/liba_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Loyola Institute of Business Administration
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/psgct_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PSG College of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/fsm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Fore School of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Banaras Hindu University
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
                      <Link to="/list_college_management/nu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Nirma University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Institute of Management Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/alu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Alliance University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/anna_uni_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Anna University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/xu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Xavier University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imik_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> International Management Institute Kolkata
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_engineering/vit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Vellore Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                     
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/ifmr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Institute for Financial Management and Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/pu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Panjab University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/amityu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Amity University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iit_jodhpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Goa Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/irm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Rural Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Lovely Professional University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/bim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bharathidasan Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/kjsim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> K. J. Somaiya Institute of Management Studies & Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imed_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Management and Entrepreneurship Development
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/upes_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> University of Petroleum and Energy Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/bimt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Birla Institute of Management Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/klefu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Koneru Lakshmaiah Education Foundation University (K L College of Engineering)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/amu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Aligarh Muslim University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
          
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iifm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Indian Institute of Forest Management
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
                      <Link to="/list_college_management/bit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Birla Institute of Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/ggsiu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Guru Gobind Singh Indraprastha University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/jim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jaipuria Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/cu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Chandigarh University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/subms_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shoolini University of Biotechnology and Management Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> International Management Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Management Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/jim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jaipuria Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>

                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/jims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jagan Institute of Management Studies
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/imt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Management Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/jim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jaipuria Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/iihmru_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> IIHMR University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/srm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRM Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/lbsim_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Lal Bahadur Shastri Institute of Management
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_management/chitu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Chitkara University
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
          totalItemsCount={75}
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
export default Management_college;
