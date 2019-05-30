import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Medical_collage extends Component {
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
                <h3>Top Medical Collage</h3>
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
                      <span>Ranking Medical collage</span>
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
                      <span>Ranking Wise Medical Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/aiims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> All India Institute of Medical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/pgimer_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Post Graduate Institute of Medical Education and Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/cmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Christian Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/sgpims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sanjay Gandhi Postgraduate Institute of Medical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/avv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Amrita Vishwa Vidyapeetham
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/bhu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Banaras Hindu University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/kmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kasturba Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/jipgmer_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Jawaharlal Institute of Post Graduate Medical Education & Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/ilbs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Institute of Liver and Biliary Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/kgmu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> King George`s Medical University
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
                      <Link to="/list_collage_medical/sriher_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Ramachandra Institute of Higher Education and Research
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/sjmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> St. John's Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/amu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Aligarh Muslim University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/mamc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Maulana Azad Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/jh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Jamia Hamdard
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/kamc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Kasturba Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/jssmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JSS Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/cmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Christian Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/vmmcsh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Vardhman Mahavir Medical College & Safdarjung Hospital
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/ddypv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. D. Y. Patil Vidyapeeth
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div></div>
                    : null }
                    {this.state.activePage === 3? 
                      <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/soa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Siksha `O` Anusandhan
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/srmist_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> SRM Institute of Science and Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/ucms_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> University College of Medical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/dmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dayanand Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/simts_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Saveetha Institute of Medical and Technical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/anau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Annamalai University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/msrmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />M. S. Ramaiah Medical College
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/rims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Regional Institute of Medical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/svims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Sri Venkateswara Institute of Medical Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_medical/kiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Kalinga Institute of Industrial Technology
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
          itemsCountPerPage={10}
          totalItemsCount={30}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
      </div>
        </section>
      </div>
    );
  }
}
export default Medical_collage;
