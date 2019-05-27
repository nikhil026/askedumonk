import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Education_Collage extends Component {
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
                <h3>Top Education Collage</h3>
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
                      <span>Ranking Education collage</span>
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
                      <span>Ranking Wise Education Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lsr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY SHRI RAM COLLEGE FOR WOMEN - [LSR], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/ggsipu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY - [GGSIPU], NEW DELHI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/du_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF DELHI - [DU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/mdu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHARSHI DAYANAND UNIVERSITY - [MDU], ROHTAK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/mgu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHATMA GANDHI UNIVERSITY - [MGU], KOTTAYAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/cuc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CALICUT UNIVERSITY, CALICUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOVELY PROFESSIONAL UNIVERSITY - [LPU], JALANDHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/aul_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY UNIVERSITY, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANARAS HINDU UNIVERSITY - [BHU], VARANASI
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
                      <Link to="/list_collage_education/ccs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHAUDHARY CHARAN SINGH UNIVERSITY - [CCS], MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/icfai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ICFAI UNIVERSITY, DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lic_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY IRWIN COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lic_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LADY IRWIN COLLEGE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/dypvps_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR. D.Y. PATIL VIDYA PRATISHTHAN SOCIETY'S, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/uoc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF LUCKNOW, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/knm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KAMLA NEHRU MAHAVIDYALAYA, BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/dav_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DAV COLLEGE - [DAV], KANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/iul_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTEGRAL UNIVERSITY, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/kiheat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KAMAL INSTITUTE OF HIGHER EDUCATION & ADVANCE TECHNOLOGY - [KIHEAT], NEW DELHI
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
                      <Link to="/list_collage_education/bce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHABHA COLLEGE OF EDUCATION- [BCE], BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lck_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LORETO COLLEGE, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/bttc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BOMBAY TEACHERS' TRAINING COLLEGE - [BTTC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/gcefw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT COLLEGE OF EDUCATION FOR WOMEN, COIMBATORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/swttc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST WILFREDS TEACHERA'S TRAINING COLLEGE, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/rur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RANCHI UNIVERSITY, RANCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/csjmu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CSJM KANPUR UNIVERSITY - [CSJMU], KANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/rkgec_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RKG EDUCATION COLLEGE, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/tscer_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />THAKUR SHYAMNARAYAN COLLEGE OF EDUCATION AND RESEARCH, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/bce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARAT COLLEGE OF EDUCATION, YAMUNA NAGAR
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
                      <Link to="/list_collage_education/dipe_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DHARAMJEEVI INSTITUTE OF PROFESSIONAL EDUCATION, KURUKSHETRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/dwtc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DAYANAND WOMEN'S TRAINING COLLEGE, DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/pce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PUSHPANJALI COLLEGE OF EDUCATION, PALGHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/mu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAGADH UNIVERSITY - [MU], GAYA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/bkiet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BK INSTITUTE OF EDUCATION AND TECHNOLOGY - [BKIET], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/lacmce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LALA AMI CHAND MONGA MEMORIAL COLLEGE OF EDUCATION, AMBALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/sgce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHREE GAYATRI COLLEGE OF EDUCATION, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/die_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DOON INSTITUTE OF EDUCATION, DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/cce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHRISTIAN COLLEGE OF EDUCATION, KANYAKUMARI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/gce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVERNMENT COLLEGE OF EDUCATION, CHANDIGARH
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
                      <Link to="/list_collage_education/scsgmce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SARDAR CHANAN SINGH GHUMMAN MEMORIAL COLLEGE OF EDUCATION, KURUKSHETRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/cwce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTRAL WOMEN'S COLLEGE OF EDUCATION-[CWCE], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/kstc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KEYI SAHIB TRAINING COLLEGE - [KSTC], TALIPARAMBA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/rbca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMKRISHNA BAJAJ COLLEGE OF AGRICULTURE, WARDHA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/brce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BR COLLEGE OF EDUCATION, KURUKSHETRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/rie_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />REGIONAL INSTITUTE OF EDUCATION - [RIE], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/vttc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VIDYASAGAR TEACHERS' TRAINING COLLEGE, MIDNAPORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/srtti_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHRI RAVISHANKAR TEACHER'S TRAINING INSTITUTE, BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/dsce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DHANALAKSHMI SRINIVASAN COLLEGE OF EDUCATION, PERAMBALUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_education/ddc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DAYANAND DINANATH COLLEGE - [DDC], KANPUR
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
export default Education_Collage;
