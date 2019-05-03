import React, { Component } from "react";
import { Link } from "react-router-dom";
class CreatePoll extends Component {
  render() {
    return (
      <body className="bg1 pusher pushable dimmable">
        <div className="pusher">
          <section className="coursedetauilstop">
            <div className="container1">
              <div className="row">
                <div className="col-md-2 col-xs-2">
                  <img
                    alt="Agriculture Engineering course"
                    src={require("../.././images/agriculture-engineering.agrocultural-engineering.jpg")}
                  />
                </div>
                <div className="col-md-6 col-xs-10 clgprofiledes">
                  <h3 align="center">
                    <span style={{ "font-size": "32px" }}>
                      <strong>Ask any Question and Queries</strong>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <div className="ui grid stackable container ask_body">
            <div className="eight wide column">
              <div className="ui ff1 ask_header">Create a post</div>
              <div className="ui divider" />

              <div className="segment ask_segment">
                <div className="ui two item top attached menu">
                  <Link
                    to="/ask_edumonk"
                    className="item discuss_item ff1"
                    data-tab="ask_community"
                  >
                    Ask Edumonk
                  </Link>
                  <Link
                    to="/create_poll"
                    className="item poll_item ff1 active"
                    data-tab="create_poll"
                  >
                    Create Poll
                  </Link>
                </div>
                <div
                  className="ui transition fade in tab ask_tab ask_community "
                  data-tab="ask_community"
                >
                  <div className="ui bottom attached segment">
                    <div className="ui form">
                      <div className="field q_field ff1">
                        <input
                          className="ff1"
                          type="text"
                          placeholder="Give your question / Post an interesting title"
                        />
                      </div>
                      <div className="field desc_field ff1">
                        <textarea
                          className="ff1"
                          placeholder="Enter a detailed question in order to get more useful responses from the community"
                          oninput="onTextChange(this)"
                        />
                      </div>
                      <div className="ui bottom attached labeled fluid input field tag_field">
                        <div
                          className="ui label tag_label ff1"
                          data-content="Notify users from the tagged company that there is a question for them. Use it when you want responses from specific companies"
                        >
                          Tag Companies
                        </div>
                        <label className="ui basic label at_label ff1">@</label>
                        <div className="ui selection multiple search dropdown company_select ff1">
                          <input className="ff1" type="hidden" name="" />
                          <i className="search icon" />
                          <input
                            className="search"
                            autocomplete="off"
                            tabindex="0"
                          />
                          <span className="sizer" />
                          <div className="default text">Tag a company</div>
                          <div className="menu " tabindex="-1">
                            <div
                              className="item"
                              data-value="1010-492"
                              style={{ display: "block" }}
                            >
                              Accenture
                            </div>
                            <div
                              className="item"
                              data-value="1016-498"
                              style={{ display: "block" }}
                            >
                              IBM
                            </div>
                            <div
                              className="item"
                              data-value="1000-482"
                              style={{ display: "block" }}
                            >
                              Flipkart
                            </div>
                            <div
                              className="item"
                              data-value="1008-490"
                              style={{ display: "block" }}
                            >
                              Amazon
                            </div>
                            <div
                              className="item"
                              data-value="1013-495"
                              style={{ display: "block" }}
                            >
                              Infosys
                            </div>
                            <div
                              className="item"
                              data-value="1014-496"
                              style={{ display: "block" }}
                            >
                              Wipro
                            </div>
                            <div
                              className="item"
                              data-value="1019-502"
                              style={{ display: "block" }}
                            >
                              Oracle
                            </div>
                            <div
                              className="item"
                              data-value="1001-483"
                              style={{ display: "block" }}
                            >
                              Ola
                            </div>
                            <div
                              className="item"
                              data-value="1043-532"
                              style={{ display: "block" }}
                            >
                              OYO Rooms
                            </div>
                            <div
                              className="item"
                              data-value="1049-539"
                              style={{ display: "block" }}
                            >
                              J.P.Morgan
                            </div>
                            <div
                              className="item"
                              data-value="1063-557"
                              style={{ display: "block" }}
                            >
                              Practo
                            </div>
                            <div
                              className="item"
                              data-value="1066-560"
                              style={{ display: "block" }}
                            >
                              Cognizant
                            </div>
                            <div
                              className="item"
                              data-value="1114-621"
                              style={{ display: "block" }}
                            >
                              Capgemini
                            </div>
                            <div
                              className="item"
                              data-value="1118-625"
                              style={{ display: "block" }}
                            >
                              TCS
                            </div>
                            <div
                              className="item"
                              data-value="5628-628"
                              style={{ display: "block" }}
                            >
                              HCL
                            </div>
                            <div
                              className="item"
                              data-value="5633-633"
                              style={{ display: "block" }}
                            >
                              Tech Mahindra
                            </div>
                            <div
                              className="item"
                              data-value="5752-752"
                              style={{ display: "block" }}
                            >
                              Genpact
                            </div>
                            <div
                              className="item"
                              data-value="5794-794"
                              style={{ display: "block" }}
                            >
                              Ernst &amp; Young
                            </div>
                            <div
                              className="item"
                              data-value="5842-842"
                              style={{ display: "block" }}
                            >
                              HDFC Bank
                            </div>
                            <div
                              className="item"
                              data-value="6177-1177"
                              style={{ display: "block" }}
                            >
                              ICICI Bank
                            </div>
                            <div
                              className="item"
                              data-value="6211-1211"
                              style={{ display: "block" }}
                            >
                              Axis Bank
                            </div>
                            <div
                              className="item"
                              data-value="6448-1448"
                              style={{ display: "block" }}
                            >
                              Bank Of Baroda
                            </div>
                            <div
                              className="item"
                              data-value="6449-1449"
                              style={{ display: "block" }}
                            >
                              Bank of India
                            </div>
                            <div
                              className="item"
                              data-value="6459-1459"
                              style={{ display: "block" }}
                            >
                              Canara Bank
                            </div>
                            <div
                              className="item"
                              data-value="6580-1580"
                              style={{ display: "block" }}
                            >
                              Indian Railways
                            </div>
                            <div
                              className="item"
                              data-value="6582-1582"
                              style={{ display: "block" }}
                            >
                              IndusInd
                            </div>
                            <div
                              className="item"
                              data-value="6600-1600"
                              style={{ display: "block" }}
                            >
                              Kotak Mahindra Bank
                            </div>
                            <div
                              className="item"
                              data-value="6838-1838"
                              style={{ display: "block" }}
                            >
                              State Bank Of India
                            </div>
                            <div
                              className="item"
                              data-value="7479-2479"
                              style={{ display: "block" }}
                            >
                              Bajaj Finserv Ltd.
                            </div>
                            <div
                              className="item"
                              data-value="7771-2771"
                              style={{ display: "block" }}
                            >
                              Shriram Transport Finance
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ui at_footer">
                        <div
                          className="ui selection upward dropdown topic_select ff1 "
                          tabindex="0"
                        >
                          <input
                            className="ff1"
                            type="hidden"
                            name="# Select Topic"
                          />
                          <div className="default text"># Select Topic</div>
                          <i className="dropdown icon" />
                          <div className="menu" tabindex="-1">
                            <div
                              className="item"
                              data-value="Banking"
                              style={{ display: "block" }}
                            >
                              # Banking
                            </div>
                            <div
                              className="item"
                              data-value="Business"
                              style={{ display: "block" }}
                            >
                              # Business
                            </div>
                            <div
                              className="item"
                              data-value="Career"
                              style={{ display: "block" }}
                            >
                              # Career
                            </div>
                            <div
                              className="item"
                              data-value="Career Advice"
                              style={{ display: "block" }}
                            >
                              # Career Advice
                            </div>
                            <div
                              className="item"
                              data-value="Celebration"
                              style={{ display: "block" }}
                            >
                              # Celebration
                            </div>
                            <div
                              className="item"
                              data-value="Co-Worker"
                              style={{ display: "block" }}
                            >
                              # Co-Worker
                            </div>
                            <div
                              className="item"
                              data-value="Communication"
                              style={{ display: "block" }}
                            >
                              # Communication
                            </div>
                            <div
                              className="item"
                              data-value="Consulting"
                              style={{ display: "block" }}
                            >
                              # Consulting
                            </div>
                            <div
                              className="item"
                              data-value="Design"
                              style={{ display: "block" }}
                            >
                              # Design
                            </div>
                            <div
                              className="item"
                              data-value="Finance"
                              style={{ display: "block" }}
                            >
                              # Finance
                            </div>
                            <div
                              className="item"
                              data-value="Fresher"
                              style={{ display: "block" }}
                            >
                              # Fresher
                            </div>
                            <div
                              className="item"
                              data-value="Funding"
                              style={{ display: "block" }}
                            >
                              # Funding
                            </div>
                            <div
                              className="item"
                              data-value="Harrasment"
                              style={{ display: "block" }}
                            >
                              # Harrasment
                            </div>
                            <div
                              className="item"
                              data-value="How to"
                              style={{ display: "block" }}
                            >
                              # How to
                            </div>
                            <div
                              className="item"
                              data-value="HR"
                              style={{ display: "block" }}
                            >
                              # HR
                            </div>
                            <div
                              className="item"
                              data-value="Humor"
                              style={{ display: "block" }}
                            >
                              # Humor
                            </div>
                            <div
                              className="item"
                              data-value="Ideas"
                              style={{ display: "block" }}
                            >
                              # Ideas
                            </div>
                            <div
                              className="item"
                              data-value="In between jobs"
                              style={{ display: "block" }}
                            >
                              # In between jobs
                            </div>
                            <div
                              className="item"
                              data-value="Insider"
                              style={{ display: "block" }}
                            >
                              # Insider
                            </div>
                            <div
                              className="item"
                              data-value="Interview"
                              style={{ display: "block" }}
                            >
                              # Interview
                            </div>
                            <div
                              className="item"
                              data-value="Investment"
                              style={{ display: "block" }}
                            >
                              # Investment
                            </div>
                            <div
                              className="item"
                              data-value="Job Search"
                              style={{ display: "block" }}
                            >
                              # Job Search
                            </div>
                            <div
                              className="item"
                              data-value="Jobs"
                              style={{ display: "block" }}
                            >
                              # Jobs
                            </div>
                            <div
                              className="item"
                              data-value="Layoffs"
                              style={{ display: "block" }}
                            >
                              # Layoffs
                            </div>
                            <div
                              className="item"
                              data-value="Lifehacks"
                              style={{ display: "block" }}
                            >
                              # Lifehacks
                            </div>
                            <div
                              className="item"
                              data-value="Logistics"
                              style={{ display: "block" }}
                            >
                              # Logistics
                            </div>
                            <div
                              className="item"
                              data-value="Manager"
                              style={{ display: "block" }}
                            >
                              # Manager
                            </div>
                            <div
                              className="item"
                              data-value="Manners"
                              style={{ display: "block" }}
                            >
                              # Manners
                            </div>
                            <div
                              className="item"
                              data-value="Marketing"
                              style={{ display: "block" }}
                            >
                              # Marketing
                            </div>
                            <div
                              className="item"
                              data-value="Mental Health"
                              style={{ display: "block" }}
                            >
                              # Mental Health
                            </div>
                            <div
                              className="item"
                              data-value="Money"
                              style={{ display: "block" }}
                            >
                              # Money
                            </div>
                            <div
                              className="item"
                              data-value="News"
                              style={{ display: "block" }}
                            >
                              # News
                            </div>
                            <div
                              className="item"
                              data-value="Notice Period"
                              style={{ display: "block" }}
                            >
                              # Notice Period
                            </div>
                            <div
                              className="item"
                              data-value="Operation"
                              style={{ display: "block" }}
                            >
                              # Operation
                            </div>
                            <div
                              className="item"
                              data-value="Pay gap"
                              style={{ display: "block" }}
                            >
                              # Pay gap
                            </div>

                            <div
                              className="item"
                              data-value="Sales"
                              style={{ display: "block" }}
                            >
                              # Sales
                            </div>
                            <div
                              className="item"
                              data-value="Startups"
                              style={{ display: "block" }}
                            >
                              # Startups
                            </div>
                            <div
                              className="item"
                              data-value="Supply Chain"
                              style={{ display: "block" }}
                            >
                              # Supply Chain
                            </div>
                            <div
                              className="item"
                              data-value="Tax"
                              style={{ display: "block" }}
                            >
                              # Tax
                            </div>
                            <div
                              className="item"
                              data-value="Technology"
                              style={{ display: "block" }}
                            >
                              # Technology
                            </div>
                            <div
                              className="item"
                              data-value="Upskilling"
                              style={{ display: "block" }}
                            >
                              # Upskilling
                            </div>
                            <div
                              className="item"
                              data-value="Work Culture"
                              style={{ display: "block" }}
                            >
                              # Work Culture
                            </div>
                            <div
                              className="item"
                              data-value="Work life Balance"
                              style={{ display: "block" }}
                            >
                              # Work life Balance
                            </div>
                            <div
                              className="item"
                              data-value="Working hours"
                              style={{ display: "block" }}
                            >
                              # Working hours
                            </div>
                            <div
                              className="item"
                              data-value="Working Parents"
                              style={{ display: "block" }}
                            >
                              # Working Parents
                            </div>
                            <div
                              className="item"
                              data-value="Working Women"
                              style={{ display: "block" }}
                            >
                              # Working Women
                            </div>
                            <div
                              className="item"
                              data-value="Workplace"
                              style={{ display: "block" }}
                            >
                              # Workplace
                            </div>
                            <div
                              className="item"
                              data-value="Others"
                              style={{ display: "block" }}
                            >
                              # Others
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          name="button"
                          className="ui right floated button ask_btn"
                          onclick="ask_question()"
                        >
                          ASK
                        </button>
                      </div>
                    </div>
                    <div
                      className="ui message post_message ff1"
                      style={{ display: "none" }}
                    >
                      <div className="header" />
                      <p>Please wait while we redirect you to the feed.</p>
                    </div>
                    <div
                      className="ui negative message error_message ff1"
                      style={{ display: "none" }}
                    >
                      <ul className="list" />
                    </div>
                  </div>
                </div>
                <div
                  className="ui transition fade in tab ask_tab create_poll active"
                  data-tab="create_poll"
                >
                  <div className="ui bottom attached segment">
                    <div className="ui form">
                      <div className="field q_field">
                        <input
                          className="ff1"
                          type="text"
                          placeholder="Start a poll"
                        />
                      </div>
                      <div className="field opt_fields">
                        <div className="options">
                          <div
                            className="ui input option_item"
                            style={{ display: "inline-flex" }}
                          >
                            <input
                              className="ff1"
                              type="text"
                              placeholder="Answer choice"
                            />
                            <i
                              className="icons"
                              onclick="remove_opt(this)"
                              style={{ display: "none" }}
                            >
                              <i className="big circle icon" />
                              <i className="close icon" />
                            </i>
                          </div>
                          <div
                            className="ui input option_item"
                            style={{ display: "inline-flex" }}
                          >
                            <input
                              className="ff1"
                              type="text"
                              placeholder="Answer choice"
                            />
                            <i
                              className="icons"
                              onclick="remove_opt(this)"
                              style={{ display: "none" }}
                            >
                              <i className="big circle icon" />
                              <i className="close icon" />
                            </i>
                          </div>
                        </div>
                        <button
                          type="button"
                          name="button"
                          className="ui basic button add_opt ff1"
                          onclick="add_option();"
                        >
                          <i className="add icon" />
                          Add Choice
                        </button>
                      </div>
                      <div className="ui bottom attached labeled fluid input field tag_field">
                        <div
                          className="ui label tag_label ff1"
                          data-content="Notify users from the tagged company that there is a question for them. Use it when you want responses from specific companies"
                        >
                          Tag Courses/Colleges/Exams
                        </div>
                        <label className="ui basic label at_label ff1">@</label>
                        <div className="ui selection multiple search dropdown company_select ff1">
                          <input type="hidden" name="" />
                          <i className="search icon" />
                          <input
                            className="search"
                            autocomplete="off"
                            tabindex="0"
                          />
                          <span className="sizer" />
                          <div className="default text">Tag a company</div>
                          <div className="menu" tabindex="-1">
                            <div
                              className="item"
                              data-value="1010-492"
                              style={{ display: "block" }}
                            >
                              Accenture
                            </div>
                            <div
                              className="item"
                              data-value="1016-498"
                              style={{ display: "block" }}
                            >
                              IBM
                            </div>
                            <div
                              className="item"
                              data-value="1000-482"
                              style={{ display: "block" }}
                            >
                              Flipkart
                            </div>
                            <div
                              className="item"
                              data-value="1008-490"
                              style={{ display: "block" }}
                            >
                              Amazon
                            </div>
                            <div
                              className="item"
                              data-value="1013-495"
                              style={{ display: "block" }}
                            >
                              Infosys
                            </div>
                            <div
                              className="item"
                              data-value="1014-496"
                              style={{ display: "block" }}
                            >
                              Wipro
                            </div>
                            <div
                              className="item"
                              data-value="1019-502"
                              style={{ display: "block" }}
                            >
                              Oracle
                            </div>
                            <div
                              className="item"
                              data-value="1001-483"
                              style={{ display: "block" }}
                            >
                              Ola
                            </div>
                            <div
                              className="item"
                              data-value="1043-532"
                              style={{ display: "block" }}
                            >
                              OYO Rooms
                            </div>
                            <div
                              className="item"
                              data-value="1049-539"
                              style={{ display: "block" }}
                            >
                              J.P.Morgan
                            </div>
                            <div
                              className="item"
                              data-value="1063-557"
                              style={{ display: "block" }}
                            >
                              Practo
                            </div>
                            <div
                              className="item"
                              data-value="1066-560"
                              style={{ display: "block" }}
                            >
                              Cognizant
                            </div>
                            <div
                              className="item"
                              data-value="1114-621"
                              style={{ display: "block" }}
                            >
                              Capgemini
                            </div>
                            <div
                              className="item"
                              data-value="1118-625"
                              style={{ display: "block" }}
                            >
                              TCS
                            </div>
                            <div
                              className="item"
                              data-value="5628-628"
                              style={{ display: "block" }}
                            >
                              HCL
                            </div>
                            <div
                              className="item"
                              data-value="5633-633"
                              style={{ display: "block" }}
                            >
                              Tech Mahindra
                            </div>
                            <div
                              className="item"
                              data-value="5752-752"
                              style={{ display: "block" }}
                            >
                              Genpact
                            </div>
                            <div
                              className="item"
                              data-value="5794-794"
                              style={{ display: "block" }}
                            >
                              Ernst &amp; Young
                            </div>
                            <div
                              className="item"
                              data-value="5842-842"
                              style={{ display: "block" }}
                            >
                              HDFC Bank
                            </div>
                            <div
                              className="item"
                              data-value="6177-1177"
                              style={{ display: "block" }}
                            >
                              ICICI Bank
                            </div>
                            <div
                              className="item"
                              data-value="6211-1211"
                              style={{ display: "block" }}
                            >
                              Axis Bank
                            </div>
                            <div
                              className="item"
                              data-value="6448-1448"
                              style={{ display: "block" }}
                            >
                              Bank Of Baroda
                            </div>
                            <div
                              className="item"
                              data-value="6449-1449"
                              style={{ display: "block" }}
                            >
                              Bank of India
                            </div>
                            <div
                              className="item"
                              data-value="6459-1459"
                              style={{ display: "block" }}
                            >
                              Canara Bank
                            </div>
                            <div
                              className="item"
                              data-value="6580-1580"
                              style={{ display: "block" }}
                            >
                              Indian Railways
                            </div>
                            <div
                              className="item"
                              data-value="6582-1582"
                              style={{ display: "block" }}
                            >
                              IndusInd
                            </div>
                            <div
                              className="item"
                              data-value="6600-1600"
                              style={{ display: "block" }}
                            >
                              Kotak Mahindra Bank
                            </div>
                            <div
                              className="item"
                              data-value="6838-1838"
                              style={{ display: "block" }}
                            >
                              State Bank Of India
                            </div>
                            <div
                              className="item"
                              data-value="7479-2479"
                              style={{ display: "block" }}
                            >
                              Bajaj Finserv Ltd.
                            </div>
                            <div
                              className="item"
                              data-value="7771-2771"
                              style={{ display: "block" }}
                            >
                              Shriram Transport Finance
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ui at_footer">
                        <div
                          className="ui selection upward dropdown topic_select ff1"
                          tabindex="0"
                        >
                          <input type="hidden" name="# Select Topic" />
                          <div className="default text"># Select Topic</div>
                          <i className="dropdown icon" />
                          <div className="menu" tabindex="-1">
                            <div
                              className="item"
                              data-value="Banking"
                              style={{ display: "block" }}
                            >
                              # Banking
                            </div>
                            <div
                              className="item"
                              data-value="Business"
                              style={{ display: "block" }}
                            >
                              # Business
                            </div>
                            <div
                              className="item"
                              data-value="Career"
                              style={{ display: "block" }}
                            >
                              # Career
                            </div>
                            <div
                              className="item"
                              data-value="Career Advice"
                              style={{ display: "block" }}
                            >
                              # Career Advice
                            </div>
                            <div
                              className="item"
                              data-value="Celebration"
                              style={{ display: "block" }}
                            >
                              # Celebration
                            </div>
                            <div
                              className="item"
                              data-value="Co-Worker"
                              style={{ display: "block" }}
                            >
                              # Co-Worker
                            </div>
                            <div
                              className="item"
                              data-value="Communication"
                              style={{ display: "block" }}
                            >
                              # Communication
                            </div>
                            <div
                              className="item"
                              data-value="Consulting"
                              style={{ display: "block" }}
                            >
                              # Consulting
                            </div>
                            <div
                              className="item"
                              data-value="Design"
                              style={{ display: "block" }}
                            >
                              # Design
                            </div>
                            <div
                              className="item"
                              data-value="Finance"
                              style={{ display: "block" }}
                            >
                              # Finance
                            </div>
                            <div
                              className="item"
                              data-value="Fresher"
                              style={{ display: "block" }}
                            >
                              # Fresher
                            </div>
                            <div
                              className="item"
                              data-value="Funding"
                              style={{ display: "block" }}
                            >
                              # Funding
                            </div>
                            <div
                              className="item"
                              data-value="Harrasment"
                              style={{ display: "block" }}
                            >
                              # Harrasment
                            </div>
                            <div
                              className="item"
                              data-value="How to"
                              style={{ display: "block" }}
                            >
                              # How to
                            </div>
                            <div
                              className="item"
                              data-value="HR"
                              style={{ display: "block" }}
                            >
                              # HR
                            </div>
                            <div
                              className="item"
                              data-value="Humor"
                              style={{ display: "block" }}
                            >
                              # Humor
                            </div>
                            <div
                              className="item"
                              data-value="Ideas"
                              style={{ display: "block" }}
                            >
                              # Ideas
                            </div>
                            <div
                              className="item"
                              data-value="In between jobs"
                              style={{ display: "block" }}
                            >
                              # In between jobs
                            </div>
                            <div
                              className="item"
                              data-value="Insider"
                              style={{ display: "block" }}
                            >
                              # Insider
                            </div>
                            <div
                              className="item"
                              data-value="Interview"
                              style={{ display: "block" }}
                            >
                              # Interview
                            </div>
                            <div
                              className="item"
                              data-value="Investment"
                              style={{ display: "block" }}
                            >
                              # Investment
                            </div>
                            <div
                              className="item"
                              data-value="Job Search"
                              style={{ display: "block" }}
                            >
                              # Job Search
                            </div>
                            <div
                              className="item"
                              data-value="Jobs"
                              style={{ display: "block" }}
                            >
                              # Jobs
                            </div>
                            <div
                              className="item"
                              data-value="Layoffs"
                              style={{ display: "block" }}
                            >
                              # Layoffs
                            </div>
                            <div
                              className="item"
                              data-value="Lifehacks"
                              style={{ display: "block" }}
                            >
                              # Lifehacks
                            </div>
                            <div
                              className="item"
                              data-value="Logistics"
                              style={{ display: "block" }}
                            >
                              # Logistics
                            </div>
                            <div
                              className="item"
                              data-value="Manager"
                              style={{ display: "block" }}
                            >
                              # Manager
                            </div>
                            <div
                              className="item"
                              data-value="Manners"
                              style={{ display: "block" }}
                            >
                              # Manners
                            </div>
                            <div
                              className="item"
                              data-value="Marketing"
                              style={{ display: "block" }}
                            >
                              # Marketing
                            </div>
                            <div
                              className="item"
                              data-value="Mental Health"
                              style={{ display: "block" }}
                            >
                              # Mental Health
                            </div>
                            <div
                              className="item"
                              data-value="Money"
                              style={{ display: "block" }}
                            >
                              # Money
                            </div>
                            <div
                              className="item"
                              data-value="News"
                              style={{ display: "block" }}
                            >
                              # News
                            </div>
                            <div
                              className="item"
                              data-value="Notice Period"
                              style={{ display: "block" }}
                            >
                              # Notice Period
                            </div>
                            <div
                              className="item"
                              data-value="Operation"
                              style={{ display: "block" }}
                            >
                              # Operation
                            </div>
                            <div
                              className="item"
                              data-value="Pay gap"
                              style={{ display: "block" }}
                            >
                              # Pay gap
                            </div>
                            <div
                              className="item"
                              data-value="Policy"
                              style={{ display: "block" }}
                            >
                              # Policy
                            </div>
                            <div
                              className="item"
                              data-value="Politics"
                              style={{ display: "block" }}
                            >
                              # Politics
                            </div>
                            <div
                              className="item"
                              data-value="Product"
                              style={{ display: "block" }}
                            >
                              # Product
                            </div>
                            <div
                              className="item"
                              data-value="Productivity"
                              style={{ display: "block" }}
                            >
                              # Productivity
                            </div>
                            <div
                              className="item"
                              data-value="Project Management"
                              style={{ display: "block" }}
                            >
                              # Project Management
                            </div>
                            <div
                              className="item"
                              data-value="Promotion"
                              style={{ display: "block" }}
                            >
                              # Promotion
                            </div>
                            <div
                              className="item"
                              data-value="Relationship"
                              style={{ display: "block" }}
                            >
                              # Relationship
                            </div>
                            <div
                              className="item"
                              data-value="Relationship at work"
                              style={{ display: "block" }}
                            >
                              # Relationship at work
                            </div>
                            <div
                              className="item"
                              data-value="Rumor"
                              style={{ display: "block" }}
                            >
                              # Rumor
                            </div>
                            <div
                              className="item"
                              data-value="Salary"
                              style={{ display: "block" }}
                            >
                              # Salary
                            </div>
                            <div
                              className="item"
                              data-value="Salary Negotiation"
                              style={{ display: "block" }}
                            >
                              # Salary Negotiation
                            </div>
                            <div
                              className="item"
                              data-value="Sales"
                              style={{ display: "block" }}
                            >
                              # Sales
                            </div>
                            <div
                              className="item"
                              data-value="Startups"
                              style={{ display: "block" }}
                            >
                              # Startups
                            </div>
                            <div
                              className="item"
                              data-value="Supply Chain"
                              style={{ display: "block" }}
                            >
                              # Supply Chain
                            </div>
                            <div
                              className="item"
                              data-value="Tax"
                              style={{ display: "block" }}
                            >
                              # Tax
                            </div>
                            <div
                              className="item"
                              data-value="Technology"
                              style={{ display: "block" }}
                            >
                              # Technology
                            </div>
                            <div
                              className="item"
                              data-value="Upskilling"
                              style={{ display: "block" }}
                            >
                              # Upskilling
                            </div>
                            <div
                              className="item"
                              data-value="Work Culture"
                              style={{ display: "block" }}
                            >
                              # Work Culture
                            </div>
                            <div
                              className="item"
                              data-value="Work life Balance"
                              style={{ display: "block" }}
                            >
                              # Work life Balance
                            </div>
                            <div
                              className="item"
                              data-value="Working hours"
                              style={{ display: "block" }}
                            >
                              # Working hours
                            </div>
                            <div
                              className="item"
                              data-value="Working Parents"
                              style={{ display: "block" }}
                            >
                              # Working Parents
                            </div>
                            <div
                              className="item"
                              data-value="Working Women"
                              style={{ display: "block" }}
                            >
                              # Working Women
                            </div>
                            <div
                              className="item"
                              data-value="Workplace"
                              style={{ display: "block" }}
                            >
                              # Workplace
                            </div>
                            <div
                              className="item"
                              data-value="Others"
                              style={{ display: "block" }}
                            >
                              # Others
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          name="button"
                          className="ui right floated button ask_btn"
                          onclick="create_poll()"
                        >
                          CREATE POLL
                        </button>
                      </div>
                    </div>
                    <div
                      className="ui message post_message ff1"
                      style={{ display: "none" }}
                    >
                      <div className="header" />
                      <p />
                    </div>
                    <div
                      className="ui negative message error_message ff1"
                      style={{ display: "none" }}
                    >
                      <ul className="list" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui segment tips">
                <div className="content ff1">
                  <div className="header">TIPS</div>
                  <div className="description">
                    <div className="d_item">
                      <i className="circle icon" />
                      <div className="text ff1">
                        Ask good questions that can help others who are
                        interested in your question.
                      </div>
                    </div>
                    <div className="d_item">
                      <i className="circle icon" />
                      <div className="text ff1">
                        Add a little description to your questions to give a
                        better understanding.
                      </div>
                    </div>
                    <div className="d_item">
                      <i className="circle icon" />
                      <div className="text ff1">
                        Avoid asking inappropriate questions that may result in
                        flagging.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row app_info ff1">
                <div className="tag">
                  Download the Hush App. Get access to a private community for
                  your company.
                </div>
                <div className="ui buttons appstoreBtnContainer">
                  <button
                    className="ui basic storeBtn ff1"
                    onclick="window.open('https://me20.app.link/k9E7IL8g9S');"
                  >
                    {" "}
                    <img
                      src="https://hush.company/static/imgs/playstore_icon.svg"
                      alt="Playstore icon"
                    />{" "}
                    Google Play
                  </button>
                  <button
                    className="ui basic storeBtn ff1"
                    onclick="window.open('https://me20.app.link/G3YyHtuh9S');"
                  >
                    {" "}
                    <img
                      src="https://hush.company/static/imgs/appstore_icon.svg"
                      alt="Appstore icon"
                    />{" "}
                    App Store
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ui input option_item"
            id="option_item"
            style={{ display: "none" }}
          >
            <input className="ff1" type="text" placeholder="Answer choice" />
            <i className="icons" onclick="remove_opt(this)">
              <i className="big circle icon" />
              <i className="close icon" />
            </i>
          </div>
          <div
            id="topic_item"
            className="item"
            data-value=""
            style={{ display: "none" }}
          />
          <div
            id="company_item"
            className="item"
            data-value=""
            style={{ display: "none" }}
          />
          <div
            className="ui card centered category_card link ff1"
            id="category_card"
            style={{ display: "none" }}
          >
            <div className="content">
              <div className="c_header" />
              <div className="meta">
                <span />
              </div>
            </div>
          </div>
          <div
            class="ui card company_card link"
            id="company_card"
            style={{ display: "none" }}
          >
            <div class="image">
              <img alt="" src="" />
            </div>
            <div class="content ff1">
              <div class="header" />
              <div class="meta">
                <span />
              </div>
            </div>
          </div>
          <div
            class="item company_search_card"
            id="company_search_card"
            style={{ display: "none" }}
          >
            <div class="ui tiny image">
              <img src="" alt="" />
            </div>
            <div class="middle aligned content">
              <div class="header" />
              <Link to="" class="ui label right floated">
                New!
              </Link>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default CreatePoll;
