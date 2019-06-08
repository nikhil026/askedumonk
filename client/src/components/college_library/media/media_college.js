import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Media_college extends Component {
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
                <h3>Top Mass Communication college</h3>
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
                      <span>Ranking Mass Communication college</span>
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
                      <span>Ranking Wise Mass Communication college</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/acj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ASIAN COLLEGE OF JOURNALISM - [ACJ], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/iimc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF MASS COMMUNICATION - [IIMC], NEW DELHI
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/bugn_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BENNETT UNIVERSITY, GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/xic_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />XAVIER INSTITUTE OF COMMUNICATIONS - [XIC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/dgmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DEVIPRASAD GOENKA MANAGEMENT COLLEGE OF MEDIA STUDIES - [DGMC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/iijnm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> INDIAN INSTITUTE OF JOURNALISM AND NEW MEDIA - [IIJNM], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/mcc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MADRAS CHRISTIAN COLLEGE - [MCC], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/mascom_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANORAMA SCHOOL OF COMMUNICATION - [MASCOM], KOTTAYAM
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/sxc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> ST. XAVIER'S COLLEGE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/ftii_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />FILM AND TELEVISION INSTITUTE OF INDIA - [FTII], PUNE
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
                      <Link to="/list_college_media/scw_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SOPHIA COLLEGE FOR WOMEN, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/tsj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />TIMES SCHOOL OF JOURNALISM- [TSJ], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/dcac_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DELHI COLLEGE OF ARTS AND COMMERCE - [DCAC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/aimc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />APEEJAY INSTITUTE OF MASS COMMUNICATION - [AIMC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/kccc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KISHINCHAND CHELLARAM COLLEGE - [KC COLLEGE] CHURCHGATE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/asco_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY SCHOOL OF COMMUNICATION - [ASCO], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/cur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHITKARA UNIVERSITY - [CU] RAJPURA, PATIALA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/vips_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VIVEKANANDA INSTITUTE OF PROFESSIONAL STUDIES - [VIPS], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/nims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NIMS UNIVERSITY, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/rrcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMNARAIN RUIA COLLEGE, MUMBAI
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
                      <Link to="/list_college_media/sun_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SHARDA UNIVERSITY - [SU], GREATER NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/ims_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF MANAGEMENT STUDIES - [IMS], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/cvru_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR. C.V. RAMAN UNIVERSITY - [CVRU], BILASPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/sggscc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRI GURU GOBIND SINGH COLLEGE OF COMMERCE, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/luf_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LINGAYA'S UNIVERSITY, FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/mriirs_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES - [MRIIRS], FARIDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/cuc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CHANDIGARH UNIVERSITY - [CU], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/niu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NOIDA INTERNATIONAL UNIVERSITY - [NIU], GAUTAM BUDH NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/llrcce_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LALA LAJPAT RAI COLLEGE OF COMMERCE AND ECONOMICS, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/uom_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF MYSORE - [UOM], MYSORE
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
                      <Link to="/list_college_media/sacasc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ST ANDREW'S COLLEGE OF ARTS SCIENCE AND COMMERCE, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/tmv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />TILAK MAHARASHTRA VIDYAPEETH - [TMV], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/lpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOVELY PROFESSIONAL UNIVERSITY - [LPU], JALANDHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/arcjmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AIZAZ RIZVI COLLEGE OF JOURNALISM AND MASS COMMUNICATION - [ARCJMC], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/niffa_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FILM AND FINE ARTS - [NIFFA], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/mcrc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MASS COMMUNICATION RESEARCH CENTRE - [MCRC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/dsc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DELHI SCHOOL OF COMMUNICATION - [DSC], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/jimmc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAGRAN INSTITUTE OF MANAGEMENT AND MASS COMMUNICATION - [JIMMC], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/secj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SPC EDUCATION CENTER, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/anu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ACHARYA NAGARJUNA UNIVERSITY - [ANU], GUNTUR
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
                      <Link to="/list_college_media/buc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARATHIAR UNIVERSITY - [BU], COIMBATORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/manuu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAULANA AZAD NATIONAL URDU UNIVERSITY - [MANUU], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/osm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />OXL SCHOOL OF MULTIMEDIA, JALANDHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/imcfts_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INSTITUTE OF MASS COMMUNICATION FILM AND TELEVISION STUDIES - [IMCFTS], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/nou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NALANDA OPEN UNIVERSITY - [NOU], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/hzu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HIMGIRI ZEE UNIVERSITY - [HZU], DEHRADUN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/mgkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHATMA GANDHI KASHI VIDYAPITH - [MGKV], VARANASI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/aus_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ASSAM UNIVERSITY, SILCHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/muc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MEWAR UNIVERSITY - [MU], CHITTORGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_college_media/ymcad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />YMCA INSTITUTE FOR MEDIA STUDIES AND INFORMATION TECHNOLOGY, NEW DELHI
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
export default Media_college;
