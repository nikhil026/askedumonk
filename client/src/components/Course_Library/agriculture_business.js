import React, { Component } from "react";
import { Link } from "react-router-dom";
class ABusiness extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Bachelor of Science"
                  src={require("../.././images/agriculture-business-management.agricultural.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Agriculture Business Management</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Agriculture
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Degree Type : Pcm, 12,{" "}
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/Agriculture1" className="crssidebtn">
                  All Agriculture Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="content-wrapper coursebodypa">
          <div className="container">
            <div className="col-md-12 crstextstyle crsdetailscnt" role="main">
              <div className=" detail-content-wrapper">
                <div id="section-5" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Overview</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      Agriculture business management is a specific two-year MBA
                      course which centers around business part of agriculture
                      production and its worldwide exchange. The postgraduate
                      course means to make proficient business pioneers and
                      business people in sustenance, farming and associated
                      divisions. The course is offered in chief business
                      colleges in India and over the globe and spotlights on
                      administrative financial aspects in the rural area.
                      Understudies figure out how to settle on economical
                      business choices and limit chance while working in the
                      agrarian segment. The course educational modules is
                      intended to construct and improve a worldwide point of
                      view among understudies. The course additionally makes
                      mindfulness among understudies about the natural powers
                      that effect administrative choices.
                    </p>
                  </div>
                </div>
                <div id="section-6" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Courses &amp; Eligibility</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      Students who have passed 12th from a Recognised Board can
                      apply for this Course. They also need to pass relevant
                      entrance exams.
                    </p>
                  </div>
                </div>
                <div id="section-7" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Course Curriculum</span>
                  </h2>
                  <div class="coursecontdes">
                    <ul>
                      <li>Agricultural &amp; Food Policy</li>
                      <li>Agricultural Finance</li>
                      <li>International Agri-Business</li>
                      <li>Management and Finance of Agro-Food Projects</li>
                      <li>Managing Contract Farming</li>
                      <li>Rural Marketing</li>
                      <li>Strategic Food Marketing</li>
                      <li>Agricultural Entrepreneurship</li>
                      <li>Agricultural Futures and Option Markets</li>
                      <li>
                        Logistics-Supply Chain and Infrastructure Management for
                        Agri-business
                      </li>
                      <li>
                        Management of Technology for Sustainable Agriculture
                      </li>
                      <li>Marketing of Agricultural Inputs</li>
                      <li>Sales and Distribution Management For Agriculture</li>
                    </ul>
                  </div>
                </div>
                <div id="section-8" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Career Prospect</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      After Graduation in Agriculture Business Management, you
                      can find job opportunities in:
                    </p>

                    <ul>
                      <li>Production companies</li>
                      <li>Farming Industry</li>
                      <li>Public and Private Sector</li>
                      <li>Marketing Industry</li>
                      <li>Retail Industry</li>
                    </ul>
                  </div>
                </div>
                <div id="section-9" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Pay &amp; Remuneration</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      For Fresher in this field, expected salary may be Rs.
                      15,000 - 25,000/- per month.
                    </p>
                  </div>
                </div>
                <div id="section-10" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Famous Personalities</span>
                  </h2>
                  <div class="coursecontdes">
                    <ul>
                      <li>George Harrison Shull</li>
                      <li>Henry A. Wallace</li>
                      <li>Rachel Carson</li>
                      <li>George Washington Carver</li>
                      <li>Norman Borlaug</li>
                      <li>Fritz Haber</li>
                      <li>Robert Fraley</li>
                    </ul>
                  </div>
                </div>
                <div id="section-11" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Top Colleges in India</span>
                  </h2>
                  <div class="coursecontdes">
                    <ul>
                      <li>MIT School of Management, Pune</li>
                      <li>Indian Institute of Management Ahmedabad</li>
                      <li>Banaras Hindu University, Varanasi</li>
                      <li>Indian Institute of Management Lucknow</li>
                      <li>Symbiosis International University, Pune</li>
                      <li>Chandigarh University, Chandigarh</li>
                      <li>ITM University, Gwalior</li>
                      <li>Aligarh Muslim University, Aligarh</li>
                      <li>Jaipur National University, Jaipur</li>
                      <li>
                        Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur
                      </li>
                      <li>Amity University, Jaipur</li>
                      <li>
                        BK School of Business Management, Gujarat University,
                        Ahmedabad
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="section-recruit"
                  className="detail-conten recruiterscrs clearfix coursedessside"
                >
                  <h2 className="heading-new">
                    <span>Top Recruiters</span>
                  </h2>
                  <div className="col-md-3">
                    <Link
                      to="http://www.rallis.co.in"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/rallies-india-limited.jpg"
                        alt=""
                      />
                      <p>Rallies India Limited</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.advantaindia.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/advanta-limited.jpg"
                        alt=""
                      />
                      <p>Advanta Limited</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.nationalagro.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/national-agro-industries.jpg"
                        alt=""
                      />
                      <p>National Agro Industries</p>
                    </Link>
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
export default ABusiness;
