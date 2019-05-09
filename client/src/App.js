import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/not-found/NotFound";

//import SearchBar from "./components/layout/Search-bar";
//import TopCourse from "./components/layout/Top-Course";
//import PopularExam from "./components/layout/Popular-Exam";
//import Team from "./components/layout/team";
import Aboutus from "./components/about/about-us";
import ManagementBusiness from "./components/Course_Library/Management_Business";
import ManagementAndBusiness from "./components/Course_Library/ManagementandBusiness";
import BusinessAdministration from "./components/Course_Library/Business_Administration";
import Engineering from "./components/Course_Library/Engineering";
import Agriculture from "./components/Course_Library/agriculture";
import Chemical from "./components/Course_Library/chemical";
import Information from "./components/Course_Library/information";
import Electronics from "./components/Course_Library/electronics";
import Biochemical from "./components/Course_Library/biochemical";
import Electrical from "./components/Course_Library/electrical";
import Metallurgical from "./components/Course_Library/metallurgical";
import Mechanical from "./components/Course_Library/mechanical";
import Computer from "./components/Course_Library/computer";
import Civil from "./components/Course_Library/civil";
import Mining from "./components/Course_Library/mining";
import Aeronautical from "./components/Course_Library/aeronautical";
import Astronautical from "./components/Course_Library/astronautical";
import Aircraft from "./components/Course_Library/aircraft";
import ElectricalInstrumental from "./components/Course_Library/electrical_instrumental";
import BOComputer from "./components/Course_Library/bachelor_computer";
import ComputerApp from "./components/Course_Library/computer_app";
import Medical from "./components/Course_Library/medical";
import BOAyurveda from "./components/Course_Library/bachelor_ayurveda";
import BOHomeopathy from "./components/Course_Library/bachelor_homeopathy";
import BOMedicine from "./components/Course_Library/bachelor_medicine";
import Architecture from "./components/Course_Library/architecture";
import BArchitecture from "./components/Course_Library/bachelor_architecture";
import BOUnani from "./components/Course_Library/bachelor_unani";
import BOPhysiotherapy from "./components/Course_Library/bachelor_physiotherapy";
import BODental from "./components/Course_Library/bachelor_dental";
import Law from "./components/Course_Library/law";
import BOArt from "./components/Course_Library/bachelor_art";
import BOLaw from "./components/Course_Library/bachelor_law";
import BOCommLaw from "./components/Course_Library/bachelor_comLaw";
import BOBusiness from "./components/Course_Library/bachelor_businessadd";
import ArtHuminities from "./components/Course_Library/art_huminites";
import BOArts from "./components/Course_Library/bachelor_arts";
import DFineart from "./components/Course_Library/diploma_fineArts";
import BOFineart from "./components/Course_Library/bachelor_fineart";
import Commerce from "./components/Course_Library/commerce";
import BOCommerce from "./components/Course_Library/bachelor_commerce";
import ChartedAccountant from "./components/Course_Library/chartedAccountent";
import Science from "./components/Course_Library/science";
import BOScience from "./components/Course_Library/bachelor_science";

import Diploma from "./components/Course_Library/diploma";
import DAutomobile from "./components/Course_Library/diploma_automobile";
import DCivil from "./components/Course_Library/diploma_civil";
import DComputer from "./components/Course_Library/diploma_computer";
import DElectrical from "./components/Course_Library/diploma_electrical";
import DElectronics from "./components/Course_Library/diploma_electronics";
import DMechanical from "./components/Course_Library/diploma_mechanical";

import FashionD from "./components/Course_Library/fashion_design";
import BODesign from "./components/Course_Library/bachelor_design";
import FashionDesign from "./components/Course_Library/fashion_designcourse";
import HotalManagement from "./components/Course_Library/hotal_management";
import BOHmanagement from "./components/Course_Library/bachelor_hmanagement";
import MediaMass from "./components/Course_Library/media_mass";
import BOJournalism from "./components/Course_Library/Bachelor_journalism";

import Agriculture11 from "./components/Course_Library/Agriculture1";
import BOHoriculture from "./components/Course_Library/bachelor_horiculture";
import BOScienceAgriculture from "./components/Course_Library/bachelor_scienceAgriculture";
import BOScienceHoriculture from "./components/Course_Library/bachelor_scienceHoriculture";
import AgricultureBusiness from "./components/Course_Library/agriculture_business";

import DiplomaCert from "./components/Course_Library/diploma_certificate";
import AirfareTicketing from "./components/Course_Library/Airfare_ticketing";
import AvaitionHospitality from "./components/Course_Library/aviation_hospitality";
import Teaching from "./components/Course_Library/teaching";
import BED from "./components/Course_Library/bed";
import Travel from "./components/Course_Library/travel_tourism";
import Tourism from "./components/Course_Library/tourism_management";

import Avaition from "./components/Course_Library/aviation";
import BBAAirport from "./components/Course_Library/bba_airport";
import BscAvaition from "./components/Course_Library/bsc_avaition";
import Pharmacy from "./components/Course_Library/pharmecy";
import BOPharmacy from "./components/Course_Library/bachelor_pharmercy";

import Engineering11 from "./components/Exam_Library/Engineering1";
import JEEMain from "./components/Exam_Library/jee-main";
import JEEAdvance from "./components/Exam_Library/jee-advance";
import JCECE from "./components/Exam_Library/jcece";
import OJEE from "./components/Exam_Library/ojee";
import UPSEE from "./components/Exam_Library/upsee";
import VITEE from "./components/Exam_Library/vitee";
import WBJEE from "./components/Exam_Library/wbjee";
import BITSAT from "./components/Exam_Library/bitsat";
import BCECE from "./components/Exam_Library/bcece";
import GATE from "./components/Exam_Library/gate";
import AEEE from "./components/Exam_Library/aeee";
import CEED from "./components/Exam_Library/ceed";
import IIITPGEE from "./components/Exam_Library/iiith-pgee";
import NATA from "./components/Exam_Library/nata";
import SRMJEEE from "./components/Exam_Library/srmjeee";
import MOUET from "./components/Exam_Library/muoet";
import IIFT from "./components/Exam_Library/iift";
import Management1 from "./components/Exam_Library/Management11";
import ATMA from "./components/Exam_Library/atma";
import CAT from "./components/Exam_Library/cat";
import CMAT from "./components/Exam_Library/cmat";

import IBSAT from "./components/Exam_Library/ibsat";
import MAT from "./components/Exam_Library/mat";
import MUOET from "./components/Exam_Library/muoet";
import NMAT from "./components/Exam_Library/nmat";
import XAT from "./components/Exam_Library/xat";
import SNAP from "./components/Exam_Library/snap";

import Compititive from "./components/Exam_Library/compititive_exam";
import UPSCIAS from "./components/Exam_Library/upsc_ias";
import KVPY from "./components/Exam_Library/kvpy";
import IBPSPO from "./components/Exam_Library/ibps-po";
import SBICLERK from "./components/Exam_Library/sbi-clerk";
import CTET from "./components/Exam_Library/ctet";

import AskEdumonk from "./components/layout/ask_edumonk";
import CreatePoll from "./components/layout/create_poll";
//import Graduation from "./components/layout/graduation";
import TANCET from "./components/Exam_Library/tancet";
import MAHCET from "./components/Exam_Library/mahcet";

import "./css/colors.css";
import "./css/owl.carousel.css";
import "./css/slick-theme.css";
//import "./css/responsive.css";
import "./css/style.css";
//import "./css/animate.css";
import "./css/app.css";
import "./css/ask.css";
//import "./css/semantic.css";
import "./css/common.css";
import MEDICAL_EXAMS from "./components/Exam_Library/medical_exams";
import AIIMS from "./components/Exam_Library/aiims";
import NEET from "./components/Exam_Library/neet";
import BHUPMT from "./components/Exam_Library/bhu_pmt";
import JIMPER from "./components/Exam_Library/jimper";
import GUJCET from "./components/Exam_Library/gujcet";
import PMET from "./components/Exam_Library/pmet";
import Law_exams from "./components/Exam_Library/law_exams";
import APLAW from "./components/Exam_Library/ap_lawcet";
import CLAT from "./components/Exam_Library/clat";
import AILET from "./components/Exam_Library/ailet";
import ISAT from "./components/Exam_Library/lsat";
import MHTCET from "./components/Exam_Library/mht_cet";
import OtherExams from "./components/Exam_Library/other_exams";
import COMEDK from "./components/Exam_Library/comedk_uget";
import "./css/bootstrap4.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />

            <div className="container">
              <br />
              <br />
              <br />
              <br />
              <Route exact path="/Landing" component={Landing} />
              <Route exact path="/register" component={Register} />
              <br />
              <Route exact path="/login" component={Login} />
              <br />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Route exact path="/tancet" component={TANCET} />
              <Route exact path="/mahcet" component={MAHCET} />
              <Route exact path="/Engineering1" component={Engineering11} />
              <Route exact path="/jee-main" component={JEEMain} />
              <Route exact path="/jee-advance" component={JEEAdvance} />
              <Route exact path="/ojee" component={OJEE} />
              <Route exact path="/jcece" component={JCECE} />
              <Route exact path="/webjee" component={WBJEE} />
              <Route exact path="/vitee" component={VITEE} />
              <Route exact path="/gate" component={GATE} />
              <Route exact path="/upsee" component={UPSEE} />
              <Route exact path="/bcece" component={BCECE} />
              <Route exact path="/bitsat" component={BITSAT} />
              <Route exact path="/aeee" component={AEEE} />
              <Route exact path="/ceed" component={CEED} />
              <Route exact path="/iiith-pgee" component={IIITPGEE} />
              <Route exact path="/mouet" component={MOUET} />
              <Route exact path="/nata" component={NATA} />
              <Route exact path="/srmjeee" component={SRMJEEE} />
              <Route exact path="/Management11" component={Management1} />
              <Route exact path="/atma" component={ATMA} />
              <Route exact path="/cat" component={CAT} />
              <Route exact path="/cmat" component={CMAT} />
              <Route exact path="/ibsat" component={IBSAT} />
              <Route exact path="/mat" component={MAT} />
              <Route exact path="/iift" component={IIFT} />
              <Route exact path="/muoet" component={MUOET} />
              <Route exact path="/nmat" component={NMAT} />
              <Route exact path="/xat" component={XAT} />
              <Route exact path="/snap" component={SNAP} />
              <Route exact path="/compititive_exam" component={Compititive} />
              <Route exact path="/upsc_ias" component={UPSCIAS} />
              <Route exact path="/kvpy" component={KVPY} />
              <Route exact path="/ibps-po" component={IBPSPO} />
              <Route exact path="/sbi-clerk" component={SBICLERK} />
              <Route exact path="/ctet" component={CTET} />
              <Route exact path="/medical_exams" component={MEDICAL_EXAMS} />
              <Route exact path="/aiims" component={AIIMS} />
              <Route exact path="/neet" component={NEET} />
              <Route exact path="/bhu_pmt" component={BHUPMT} />
              <Route exact path="/jimper" component={JIMPER} />
              <Route exact path="/pmet" component={PMET} />
              <Route exact path="/gujcet" component={GUJCET} />
              <Route exact path="/law_exams" component={Law_exams} />
              <Route exact path="/ap_lawcet" component={APLAW} />
              <Route exact path="/clat" component={CLAT} />
              <Route exact path="/ailet" component={AILET} />
              <Route exact path="/isat" component={ISAT} />
              <Route exact path="/mht_cet" component={MHTCET} />
              <Route exact path="/OtherExams" component={OtherExams} />
              <Route exact path="/comedk_uget" component={COMEDK} />
              <Route exact path="/about-us" component={Aboutus} />
              <Route
                exact
                path="/Management_Business"
                component={ManagementBusiness}
              />
              <Route
                exact
                path="/Business_Administration"
                component={BusinessAdministration}
              />
              <Route exact path="/Engineering" component={Engineering} />
              <Route
                exact
                path="/ManagementandBusiness"
                component={ManagementAndBusiness}
              />
              <Route exact path="/agriculture" component={Agriculture} />
              <Route exact path="/chemical" component={Chemical} />
              <Route exact path="/information" component={Information} />
              <Route exact path="/electronics" component={Electronics} />
              <Route exact path="/ask_edumonk" component={AskEdumonk} />
              <Route exact path="/create_poll" component={CreatePoll} />
              <Route exact path="/biochemical" component={Biochemical} />
              <Route exact path="/metallurgical" component={Metallurgical} />
              <Route exact path="/electrical" component={Electrical} />
              <Route exact path="/mechanical" component={Mechanical} />
              <Route exact path="/civil" component={Civil} />
              <Route exact path="/computer" component={Computer} />
              <Route exact path="/mining" component={Mining} />
              <Route exact path="/astronautical" component={Astronautical} />
              <Route exact path="/aeronautical" component={Aeronautical} />
              <Route
                exact
                path="/electrical_instrumental"
                component={ElectricalInstrumental}
              />
              <Route exact path="/aircraft" component={Aircraft} />
              <Route exact path="/architecture" component={Architecture} />
              <Route
                exact
                path="/bachelor_architecture"
                component={BArchitecture}
              />
              <Route exact path="/computer_app" component={ComputerApp} />
              <Route exact path="/bachelor_computer" component={BOComputer} />
              <Route exact path="/medical" component={Medical} />
              <Route exact path="/bachelor_medicine" component={BOMedicine} />
              <Route
                exact
                path="/bachelor_homeopathy"
                component={BOHomeopathy}
              />
              <Route exact path="/bachelor_ayurveda" component={BOAyurveda} />
              <Route exact path="/bachelor_unani" component={BOUnani} />
              <Route exact path="/bachelor_art" component={BOArt} />
              <Route exact path="/law" component={Law} />
              <Route exact path="/bachelor_law" component={BOLaw} />
              <Route exact path="/bachelor_comLaw" component={BOCommLaw} />
              <Route
                exact
                path="/bachelor_businessadd"
                component={BOBusiness}
              />
              <Route exact path="/bachelor_dental" component={BODental} />
              <Route
                exact
                path="/bachelor_physiotherapy"
                component={BOPhysiotherapy}
              />
              <Route exact path="/bachelor_commerce" component={BOCommerce} />{" "}
              <Route exact path="/bachelor_science" component={BOScience} />
              <Route exact path="/science" component={Science} />
              <Route exact path="/commerce" component={Commerce} />
              <Route exact path="/art_huminities" component={ArtHuminities} />
              <Route exact path="/bachelor_arts" component={BOArts} />
              <Route exact path="/bachelor_fineart" component={BOFineart} />
              <Route exact path="/diploma" component={Diploma} />
              <Route exact path="/diploma_computer" component={DComputer} />
              <Route exact path="/diploma_automobile" component={DAutomobile} />
              <Route exact path="/diploma_civil" component={DCivil} />
              <Route exact path="/diploma_mechanical" component={DMechanical} />
              <Route exact path="/diploma_electrical" component={DElectrical} />
              <Route
                exact
                path="/diploma_electronics"
                component={DElectronics}
              />
              <Route exact path="/fashion_design" component={FashionD} />
              <Route
                exact
                path="/fashion_designcourse"
                component={FashionDesign}
              />
              <Route exact path="/bachelor_design" component={BODesign} />
              <Route
                exact
                path="/bachelor_hmanagement"
                component={BOHmanagement}
              />
              <Route
                exact
                path="/hotal_management"
                component={HotalManagement}
              />
              <Route exact path="/media_mass" component={MediaMass} />
              <Route
                exact
                path="/bachelor_journalism"
                component={BOJournalism}
              />
              <Route exact path="/Agriculture1" component={Agriculture11} />
              <Route
                exact
                path="/diploma_certificate"
                component={DiplomaCert}
              />
              <Route
                exact
                path="/aviation_hospitality"
                component={AvaitionHospitality}
              />
              <Route
                exact
                path="/Airfare_ticketing"
                component={AirfareTicketing}
              />
              <Route exact path="/teaching" component={Teaching} />
              <Route exact path="/bed" component={BED} />
              <Route exact path="/travel_tourism" component={Travel} />
              <Route exact path="/tourism_management" component={Tourism} />
              <Route exact path="/aviation" component={Avaition} />
              <Route exact path="/bba_airport" component={BBAAirport} />
              <Route exact path="/bsc_avaition" component={BscAvaition} />
              <Route exact path="/pharmecy" component={Pharmacy} />
              <Route exact path="/bachelor_pharmecy" component={BOPharmacy} />
              <Route
                exact
                path="/bachelor_horiculture"
                component={BOHoriculture}
              />
              <Route
                exact
                path="/bachelor_scienceAgriculture"
                component={BOScienceAgriculture}
              />
              <Route
                exact
                path="/bachelor_scienceHoriculture"
                component={BOScienceHoriculture}
              />
              <Route
                exact
                path="/agriculture_business"
                component={AgricultureBusiness}
              />
              <Route
                exact
                path="/chartedAccountent"
                component={ChartedAccountant}
              />
              <Route exact path="/diploma_fineArts" component={DFineart} />
              <br />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
