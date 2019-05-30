import React, { Component } from "react";
import { Link } from "react-router-dom";
class PGIMER extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/pgimr.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Post Graduate Institute of Medical Science & Research , Chandigarh</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 2 in Medical 
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
                      Post Graduate Institute of Medical, Education & Research (PGIMER), Chandigarh is an Institute of National Importance which offers undergraduate and postgraduate medical training in various fields. In addition to it, PGIMER also offers super specialist courses viz. DM/ M.Ch and research program (Ph.D.) in selected disciplines. PGI Chandigarh is also a working hospital which provides quality medical care to a large number of patients on a daily basis. Check PGIMER Courses
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>PGIMER Admissions and Course</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    PGIMER offers various courses at undergraduate, postgraduate and doctoral level. The list of courses consists of BPT, B.Sc., MD, M.Sc., M.Ch, MDS, MPH, MS etc. Read more about PGIMER courses and fee structure<br /><br />

                    Candidates can apply for courses by filling the application forms online through official website and submitting the processing fee of INR 1000 (Rs. 800 for SC/ ST candidates) through the generated Challan in any State Bank of India.<br /><br />

                    Admission to all the programs offered by PGIMER is done twice a year (except B.Sc and M.Sc Nursing) with academic sessions commencing from January/ July. <br /><br />
                    Candidates are shortlisted for admission on the basis of marks secured in the All-India entrance examination, conducted by PGIMER. The minimum marks required for the selection is 55% for general candidates including foreign applicants. Relaxation of 5% is given to the candidates belonging to Scheduled Castes / Scheduled Tribes / OBC & PWD category.<br />
                     Candidates who clear the entrance test are intimated for counseling process to complete the admission process.<br /><br />

                    *Admission to B.Sc Nursing and M.Sc Nursing program is made once a year with the academic session commencing from the month of September.
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>PGIMER Exams</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    PGIMER conducts entrance examination for admission to all its courses (B.Sc., M.Sc., MD/MS, DM/ M.Ch., PhD). Here are some quick facts about the PGIMER entrance exam:<br /><br />

                    For B.Sc Nursing: Admission to UG programs is made once a year and applications are generally invited in June/ July every year. The entrance test is conducted in Chandigarh in the month of August. <br /><br />

                    Admit card for eligible candidates appearing for the test is made available for download on the university website 15 days in advance. The test will consist of 100 objective type questions with negative marking of ¼ for each wrong answer.<br /><br />

                    For M.Sc Nursing: The entrance exam is usually held in the month of July every year at Chandigarh. Candidates can download the admit cards from the institute website by logging in with their respective login ID and password.<br/><br/>

                    The entrance test is conducted in English and consists of 100 MCQs with negative marking of ¼ for every wrong answer.<br /><br />

                    For PG and PhD courses: PGIMER entrance test for admission to various postgraduate and doctoral programs will be conducted in the month of November/ December across multiple centers in Chandigarh.<br /><br />

                    Note: PGIMER Admit Card for the semester and annual exams can be downloaded from the official website of the University.
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>AIIMS Exam Pattern & Syllabus</span>
                  </h2>
                 <div className="container">
                     <p>
                     Results for all the entrance exams conducted by PGIMER Chandigarh for different programs are declared within few days of the test. Candidates who qualify the written exam are required to appear in Interview/ Counseling process.<br /><br />

                    Candidates will be invited for interview strictly in order of merit on the basis of marks obtained by them in entrance exam. The number of candidates to be called for interview will be three times the total number of seats to be filled in each category from candidates who fulfill the cut off points.

  
                     </p>
                 </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default PGIMER;
