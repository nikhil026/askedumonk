import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import {Link} from 'react-router-dom';

class Coverflows extends Component {
    render() {
        return (
    <Coverflow
    width={960}
    height={350}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div id="collagesearch"><div id="horizontal1">college <br /> search </div><div id="searcher">Find The Best College <br /> <Link id="boder" to="/college_search" >search</Link> </div></div>
    <div id="examssearch"><div id="horizontal2">Exams <br /> search </div><div id="searcher">Find The Best Top Exams <br /> <Link id="boder" to="/exams_search" >search</Link> </div></div>
    <div id="coursesearch"><div id="horizontal3">Course <br /> search </div><div id="searcher">Find The Best Courses <br /> <Link id="boder" to="/course_search" >search</Link> </div></div>
  </Coverflow>
        );
    }
}
export default Coverflows;