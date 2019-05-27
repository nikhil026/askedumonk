import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Agriculture_Collage extends Component {
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
                <h3>Top Agriculture Collage</h3>
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
                      <span>Ranking Agriculture collage</span>
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
                      <span>Ranking Wise Agriculture Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/iari_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN AGRICULTURAL RESEARCH INSTITUTE - [IARI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/tnau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />TAMIL NADU AGRICULTURAL UNIVERSITY - [TNAU]-, COIMBATORE
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/angrau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ACHARYA NG RANGA AGRICULTURAL UNIVERSITY - [ANGRAU], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ciae_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTRAL INSTITUTE OF AGRICULTURAL ENGINEERING- [CIAE], BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/pau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PUNJAB AGRICULTURAL UNIVERSITY - [PAU], LUDHIANA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/adacri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANBIL DHARMALINGAM AGRICULTURAL COLLEGE AND RESEARCH INSTITUTE - [ADAC&RI], THIRUCHIRAPALLI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/iasri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN AGRICULTURAL STATISTICS RESEARCH INSTITUTE - [IASRI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ivri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN VETERINARY RESEARCH INSTITUTE - [IVRI], BAREILLY
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ndri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> NATIONAL DAIRY RESEARCH INSTITUTE - [NDRI], KARNAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/gbpuat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GOVIND BALLABH PANT UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, PANTNAGAR
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
                      <Link to="/list_collage_agriculture/vcri_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VETERINARY COLLEGE AND RESEARCH INSTITUTE - [VCRI], NAMAKKAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/uoc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF CALCUTTA, KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/bvj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BANASTHALI VIDYAPITH, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/cvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF VETERINARY AND ANIMAL SCIENCES - [CVAS], BIKANER
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/cusat_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY - [CUSAT], KOCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/mpkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHATMA PHULE KRISHI VIDYAPEETH - [MPKV], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/cife_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTRAL INSTITUTE OF FISHERIES EDUCATION - [CIFE], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/uom_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UNIVERSITY OF MUMBAI, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/bau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BIRSA AGRICULTURAL UNIVERSITY - [BAU], RANCHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/drpcau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR. RAJENDRA PRASAD CENTRAL AGRICULTURAL UNIVERSITY, SAMASTIPUR
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
                      <Link to="/list_collage_agriculture/jauj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JUNAGADH AGRICULTURAL UNIVERSITY, JUNAGADH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/jmi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAMIA MILLIA ISLAMIA UNIVERSITY-[JMI], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ddpcabm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR DY PATIL COLLEGE OF AGRICULTURE BUSINESS MANAGEMENT, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/shuats_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SAM HIGGINBOTTOM UNIVERSITY OF AGRICULTURE TECHNOLOGY AND SCIENCES - [SHUATS], ALLAHABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/mjrp_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MAHATMA JYOTI RAO PHOOLE UNIVERSITY - [MJRP], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/nbfgr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL BUREAU OF FISH GENETIC RESOURCES - [NBFGR], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/jnkvv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JAWAHARLAL NEHRU KRISHI VISHWA VIDYALAYA - [JNKVV], JABALPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/kca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KHALSA COLLEGE, AMRITSAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/igkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIRA GANDHI KRISHI VISHWAVIDYALAYA - [IGKV], RAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/pajuvas_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />COLLEGE OF VETERINARY AND ANIMAL SCIENCES - [RAJUVAS], UDAIPUR
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
                      <Link to="/list_collage_agriculture/nrcm_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL RESEARCH CENTRE ON MITHUN - [NRCM], DIMAPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ycmou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />YASHWANTRAO CHAVAN MAHARASHTRA OPEN UNIVERSITY- [YCMOU], NASHIK
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/via_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VANAVARAYAR INSTITUTE OF AGRICULTURE, COIMBATORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/anca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANAND NIKETAN COLLEGE OF AGRICULTURE, CHANDRAPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/cish_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CENTRAL INSTITUTE FOR SUBTROPICAL HORTICULTURE - [CISH], LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/bcaae_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BHARTIYA COLLEGE OF AGRICULTURE AND AGRICULTURAL ENGINEERING, DURG
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/dbskkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR BALASAHEB SAWANT KONKAN KRISHI VIDYAPEETH - [DBSKKV], RATNAGIRI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/mu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MEWAR UNIVERSITY - [MU], CHITTORGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ubkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />UTTAR BANGA KRISHI VISHWAVIDYALAYA - [UBKV], COOCH BEHAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/kkwca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KK WAGH COLLEGE OF AGRICULTURE, NASHIK
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
                      <Link to="/list_collage_agriculture/lmk_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />LOKNETE MOHANRAO KADAM COLLEGE OF AGRICULTURE - [LMK], SANGLI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/bsdbracaet_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />BABA SAHEB DR BHIM RAO AMBEDKAR COLLEGE OF AGRICULTURAL ENGINEERING AND TECHNOLOGY, AGRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/svbpu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SARDAR VALLABH BHAI PATEL UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, MEERUT
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/rbca_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />RAMKRISHNA BAJAJ COLLEGE OF AGRICULTURE, WARDHA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/yspuhf_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DR YS PARMAR UNIVERSITY OF HORTICULTURE AND FORESTRY - [YSPUHF], SOLAN
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/kvasu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />KERALA VETERINARY AND ANIMAL SCIENCES UNIVERSITY - [KVASU] POOKODE, WAYANAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/iihr_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF HORTICULTURAL RESEARCH - [IIHR], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/vnmkv_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VASANTRAO NAIK MARATHWADA KRISHI VIDYAPEETH - [VNMKV], PARBHANI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/ignou_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIRA GANDHI NATIONAL OPEN UNIVERSITY - [IGNOU], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_agriculture/aau_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ANAND AGRICULTURAL UNIVERSITY - [AAU], ANAND
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
export default Agriculture_Collage;
