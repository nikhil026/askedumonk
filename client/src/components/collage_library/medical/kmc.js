import React, { Component } from "react";
import { Link } from "react-router-dom";
class KMC extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/kmc.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Kasturba Medical College, Mangalore</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 7 in Medical 
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/medical" className="crssidebtn">
                  Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="content-wrapper coursebodypa">
          <div className="container">
            <div className="col-md-12 crstextstyle crsdetailscnt" role="main">
              <div className=" detail-content-wrapper">
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Overview</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      ‘Kasturba Medical College’ is a top medical institution and has a high reputation among all the medical colleges in India. This institute was established 64 years ago and is a constituent part of Manipal Academy of higher education. 
                      This college is utilizing the clinical facilities of the Government Wenlock Hospital and Government Lady Goschen Hospital. It was the first self-financing college in India and a world-class research centre. The institution is located in the Mangalore, Karnataka and nearest to bus stand which is the easy and cheapest way to reach the campus.<br /><br />

                        ‘KMC Mangalore’ is recognized by the Medical Council of India and it is recognized globally for quality education. Manipal Academy of Higher Education was ranked 1st among Research Publications by private universities in India. ‘Kasturba Medical college’ was ranked 2nd among top private medical colleges in India by The Week 2014 and was ranked 5th by India Today 2014. 
                        By the NIRF and MHRD of India, this institution was ranked 16th among top medical colleges in India. All the courses at college are approved by MCI and granted by the Manipal University in respect of students being trained at Kasturba Medical College, Mangalore. Moreover, the institute is recognized as one among 20 International 
                        Medical Schools by the Educational Commission for Foreign Graduates (ECFMG) for electronic credentials verification program.
                        From 45 countries students have graduated from KMC and the degrees have been recognized worldwide.<br /><br />
                        KMC Mangalore is mainly known for their unique courses and this institution offers 7 UG, PG programs with various specializations and fellowship program as well. KMC Mangalore UG courses are MBBS and UG electives like adult reconstructions, colon and rectal curgery, general urology, etc with duration in between 4 weeks or 12 weeks which totally depends on electives. 
                        Likewise, KMC Mangalore PG programs are Master of surgery with specializations of General Surgery, Obstetrics & Gynaecology, etc .It offer PG Medical Diploma in MS as well. Moreover, Doctor of Medicine (MD) program with various specializations like Anaesthesiology, Anatomy, Biochemistry, etc and PG Medical Diploma in MD are also provided by the institute.
                        In addition, the Certificate course also offered by the college.<br /><br />
                        For Kasturba Medical College, Mangalore admission in MBBS program, the candidates should have passed 10+2 or equivalent with PCB & E from a recognized Board, with minimum 50 % marks individually in PCB & E.
                        Likewise, KMC Mangalore PG admission is based on the marks secured in MBBS degree recognized by MCI and selection is done on valid rank obtained in NEET. For foreign students selection done on valid score in NEET.
                        Moreover, for admission in KMC Mangalore MSc course, the candidate should have BSc degree with minimum 50% marks with at least one subject of BAMS or MBBS or BHMS or BPT or B.Pharm or any other professional graduates from a recognized University and selection done on rank obtained in MET.
                        And for certificate course eligibility is senior resident-fellow and selection takes place on the entrance test basis.
                        Besides this, KMC Mangalore campus area is spread over 31 acres and surrounded with lush green trees which create a healthy and positive environment. Institution facilitates teaching hospital named as KMC Hospital, Mangalore with bed strength of 500. The institution has well-equipped
                        Clinical Microbiology, Pathology laboratories, etc recognized by the SRL. KMC Mangalore hostel facilities for both boys and girls and has nine hostels with all plentiful facilities.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default KMC;
