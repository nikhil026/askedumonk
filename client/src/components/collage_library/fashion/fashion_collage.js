import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
class Fashion_Collage extends Component {
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
                <h3>Top Fashion Collage</h3>
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
                      <span>Ranking Fashion collage</span>
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
                      <span>Ranking Wise Fashion Collage</span>
                    </h2>
                   
                    {this.state.activePage === 1? 
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_navimumbai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], NAVI MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nid_ahmedabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF DESIGN - [NID], AHMEDABAD
                          </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                        </Link>
                    </div>                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/mus_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MODY UNIVERSITY, SIKAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_delhi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT] HAUZ KHAS, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/iiad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF ART AND DESIGN - [IIAD], NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/pa_delhi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> PEARL ACADEMY, NEW DELHI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/pu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PARUL UNIVERSITY, VADODARA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nid_gandhinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF DESIGN - [NID], GANDHI NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/muj_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" /> MANIPAL UNIVERSITY - [MUJ], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/sid_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SYMBIOSIS INSTITUTE OF DESIGN - [SID], PUNE
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
                      <Link to="/list_collage_fashion/ju_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JECRC UNIVERSITY - [JU], JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/idc_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDUSTRIAL DESIGN CENTRE, INDIAN INSTITUTE OF TECHNOLOGY - [IDC], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/ceptu_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />CEPT UNIVERSITY, AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_hyderabad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nid_vijaywada_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF DESIGN - [NID], VIJAYAWADA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_kannur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], KANNUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_bhubaneswar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], BHUBANESWAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_chennai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], CHENNAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_srinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], SRINAGAR
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
                      <Link to="/list_collage_fashion/nift_shillong_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], SHILLONG
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/siadt_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SRISHTI INSTITUTE OF ART, DESIGN AND TECHNOLOGY, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/iift_chandigarh_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTERNATIONAL INSTITUTE OF FASHION TECHNOLOGY - [IIFT], CHANDIGARH
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/pa_jaipur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PEARL ACADEMY, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/acdb_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />ARCH COLLEGE OF DESIGN AND BUSINESS, JAIPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/sfi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />SATYAM FASHION INSTITUTE - [SFI], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/iit_kanpur_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INDIAN INSTITUTE OF TECHNOLOGY - [IIT], KANPUR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/jdift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JD INSTITUTE OF FASHION TECHNOLOGY, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/pa_mumbai_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PEARL ACADEMY, MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/mitid_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />MIT INSTITUTE OF DESIGN - [MITID], PUNE
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
                      <Link to="/list_collage_fashion/nift_gandhinagar_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], GANDHI NAGAR
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_bhopal_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], BHOPAL
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nid_bangalore_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF DESIGN - [NID], BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_raebareli_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], RAE BARELI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/inifd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTERNATIONAL INSTITUTE OF FASHION DESIGN - [INIFD], MUMBAI
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_kangra_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], KANGRA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/kice_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />HAMSTECH INSTITUTE OF CREATIVE EDUCATION, HYDERABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/nift_patna_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />NATIONAL INSTITUTE OF FASHION TECHNOLOGY - [NIFT], PATNA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/pift_ludhiana_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />PINNACLE INSTITUTE OF FASHION TECHNOLOGY - [PIFT], LUDHIANA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/inifd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />INTER NATIONAL INSTITUTE OF FASHION DESIGN - [INIFD], NEW DELHI
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
                      <Link to="/list_collage_fashion/fadi_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />FAD INTERNATIONAL, PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/dskisd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DSK INTERNATIONAL SCHOOL OF DESIGN - [DSKISD], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/dskisd_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />DSK INTERNATIONAL SCHOOL OF DESIGN - [DSKISD], PUNE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/gift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GLOBAL INSTITUTE OF FASHION TECHNOLOGY - [GIFT], KOLKATA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/dia_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />IMS DESIGN AND INNOVATION ACADEMY - [DIA], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/gift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />GANDHI INSTITUTE OF FASHION AND TEXTILE - [GIFT], AHMEDABAD
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/jdift_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />JD INSTITUTE OF FASHION TECHNOLOGY, LUCKNOW
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/asft_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />AMITY SCHOOL OF FASHION TECHNOLOGY - [ASFT], NOIDA
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/viad_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />VOGUE INSTITUTE OF ART AND DESIGN, BANGALORE
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/list_collage_fashion/wud_detail">
                        <p className="brnchname">
                          <i className="fa fa-database" />WORLD UNIVERSITY OF DESIGN - [WUD], SONEPAT
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
export default Fashion_Collage;
