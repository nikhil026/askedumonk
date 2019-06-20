import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Homeopathy_college extends Component {
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
                <h3>Top Homeopathy college</h3>
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
                      <span>Ranking Homeopathy college</span>
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
                      <span>Ranking Wise Homeopathy college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ghmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Government Homeopathic Medical College and Hospital, Dethli,Sidhpur
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/vhdhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Dr. V.H. Dave Homoeopathy College, Anand
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ajshc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />A.J. Savla Homoeopathy College, Mehsana
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ajcri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Anand Homoeopathy College and Research Institute, Anand 
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ghc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Gujarat Homoeopathy College, Savli, Dist. Vadodara.
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ahc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Ahmedabad Homoeopathy College, Ghuma, Dist. Ahmedabad 
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/bhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Baroda Homoeopathy College, Near Sonarkui, Sindhrot Road,
Sevasi, Vadodara
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/rhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Rajkot Homoeopathy College, Behind Jainath Petrol Pump,
Gondal Road, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/cnkhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> C.N. Kothari Homeopathy College, Nr. Vanchetna Kakarapar
Bypass, Tadkuva, Vyara
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/sshc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Shree Shamlaji Homeopathymedical College, Hospital &
Research Institute, Nr. Moon Light Cinema, Godhra
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
                      <Link to="/list_college_Homeopathy/svhmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Swami Vivekanand Homeopathic Medical College & Hospital,
Sidasar Road, Near Sports Complex, Bhavnagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/smmhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shree Mahalaxmiji Mahila Homeopathy Medical College,
Besides Gujarat Tractors, Near Vishwamitri Bridge, Vadodara
(Only For Girls)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/jnhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Jawaharlal Nehru Homoeopatheic Medical College, Limda, Ta -
Waghodia
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/phmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Pioneer Homeopathic Medical College & Hospital, Ajwa-Nimeta
Road, At & Post:- Sayajipura,Vadodara
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/mkshmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Smt. Malini Kishore Sanghvi Homeopathic Medical College,
Karjan, Miyagam, Dist- Baroda
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/bgghmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shri B.G. Garaiya Homoeopathic Medical College, Kalipat, B/H
Ashapura Hotel, Bhavnagar Highway, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/vnvhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Smt. Vasantaben N. Vyas Homoeopathy Medical College, Amreli
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/hnshch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shree H. N. Shukla Homoeopathic College & Hospital, Near Lal
Pari Lake, B/H Marketing Yard, Amargadh (Bhichari), Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ssahmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />S. S. Agrawal Homeopathic Medical College, Navasari
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/jjhmch_detail">
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
                      <Link to="/list_college_Homeopathy/lrshc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />L R Shah Homeopathy College, Kalawad Road, Anandpar, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/lhirc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Laxmiben Homeopathy Institute And Research Centre, Bhandu,
Ta. Visnagar, Dist. Mehsana
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/mhmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Merchant Homeopathic Medical College And Hospital, Mehsana
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/sshc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shree Swaminarayan Homeopathic College, Kalol
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ach_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Ananya College of Homoeopath, Kirc Campus, AhmedbadMehsana Highway, Kalol
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/khmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Kamdar Homoeopathic Medical College & Research Centre,
Opp. Delhi Public School, Kalawad, Road, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/avhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Arya Veer Homoeopathy Medical College, Gunda, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/cdphmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />C D Pachigar Homoeopatheic Medical College, Surat
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/ahmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Aarihant Homoeopathic Medical College & Research Institute,
Opp. Iffco Adalaj-Kalol Highway, Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/pihr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Parul Institute of Homeopathy & Research, Vadodara
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
                      <Link to="/list_college_Homeopathy/ghmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Gandhinagar Homoeopathic Medical College, At Mubarakpur,
Gandhinagar
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/nhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Noble Homoeopathic Medical College And Research Institute,
Bhesan Road, Near Bamangam, Junagadh
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/lhmch_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Limbdi Homeopathic Medical College and Hospital, Limbdi
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/badhc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Shree B.A. Dangar Homeopathy College, Jamnagar Road, Rajkot
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/vhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Vidhyadeep Homoeopathic Medical College and Research
Center At & Post Anita, Dist. Surat
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_Homeopathy/bhmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />Bhargava Homeopathy Medical College, At & Post-Dahemi, TaBorsad, Dist-Anand
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
export default Homeopathy_college;
