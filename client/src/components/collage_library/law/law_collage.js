import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Law_Collage extends Component {
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
                <h3>Top Law Collage</h3>
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
                      <span>Ranking Law collage</span>
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
                      <span>Ranking Wise Law Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/nlsiu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Law School of India University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/nlu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Law University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/nul_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Nalsar University of Law
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_engineering/iit_kharagpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />	Indian Institute of Technology Kharagpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/wbnujs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> The West Bengal National University of Juridicial Sciences
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/sls_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Symbiosis Law School
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> 	Jamia Millia Islamia
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/gnlu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Gujarat National Law University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/rgnul_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> The Rajiv Gandhi National University of Law
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/nliu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> National Law Institute University
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
                      <Link to="/list_collage_law/kiit_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Kalinga Institute of Industrial Technology
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/ili_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Law Institute
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/drmlnlu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Dr. Ram Manohar Lohiya National Law University
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_law/dbracl_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Dr. B. R. Ambedkar College of Law
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
          totalItemsCount={15}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange}
        />
      </div>
      </div>
        </section>
      </div>
    );
  }
}
export default Law_Collage;
