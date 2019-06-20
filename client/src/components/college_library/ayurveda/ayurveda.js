import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Ayurveda_college extends Component {
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
                <h3>Top Ayurveda college</h3>
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
                      <span>Ranking Ayurveda college</span>
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
                      <span>Ranking Wise Ayurveda college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/gaac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Govt. Akhandanand Ayurved College, Ahmedabad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/gac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Govt. Ayurved College, Vadodara
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/gsjpac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Govt. Sheth J.P. Ayurved College, Bhavnagar A.J. Savla Homoeopathy College, Mehsana
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/gac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Govt. Ayurved College, Junagadh
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/smias_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />State Model Institute Of Ayurveda Sciences,
Kolavada, Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/sgac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Shree Gulabkunvarba Ayurved College, Jamnagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/sohnam_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri O H Nazar Ayurved Mahavidyalaya., Surat
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/sac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Swaminarayan Ayurved College, Ta.-Kalol, Dist.
Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/jsam_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> J. S. Ayurved Mahavidyalaya, Nadiad
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/iiarh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Indian Institute of Ayurved Research & Hospital,
Rajkot
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
                      <Link to="/list_college_Ayurveda/gjpac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />G J Patel Ayurved College, V V Nagar , Anand
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/eca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Eva College of Ayurveda, Supedi, Dist. Rajkot
(Only For Girls)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/piar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Parul Institute of Ayurved & Research, Vadodara 
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/pia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Parul Institute of Ayurved, Limda, Waghodia,
Vadodara
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/mac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Murlidhar Ayurved College, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/ncac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Netra Chikitsa Ayurved College, Amreli 
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/nacr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Noble Ayurved College and Research Institute,
Junagadh
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/svmmia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri V. M. Mehta Institute of Ayurved, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/mrias_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Manjushree Research Institute of Ayurvedic Science
Piplaj, Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/jjhmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Jay Jalaram Homeopathic Medical College And Hospital, At &
Post: Morva (Rena), Bhurakhal Road, Ta: Shahera, Dist:
Panchmahal
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
                      <Link to="/list_college_Ayurveda/rmdac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shree R M D Ayurved College & Hospital,
Waghaldhara,
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/dac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Dhanvantari, Ayurved College, Koydam (Kajiya)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/bggac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />B G Garaiya Ayurved College, Kalipat, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/bac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Bhargava Ayurved College, Dahemi, Anand
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/gia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Global Institute of Ayurved, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/rkuac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />R K University Ayurvedic College And Hospital,
Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Ayurveda/aca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Ananya College Of Ayurved ,Kalol,Gandhinagar 
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
export default Ayurveda_college;
