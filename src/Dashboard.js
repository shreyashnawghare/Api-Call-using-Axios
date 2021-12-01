// Dashboard page

import React from "react";
import ProfilePic from "./undraw_profile.svg";
import Projects from "./Projects";
import Colors from "./Colors";
import Cards from "./Cards";
import IllustrationsAndApproach from "./IllustrationAndApproach";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Topbar Search --> */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm">Search</i>
                    </button>
                  </div>
                </div>
              </form>

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Douglas McGee
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={ProfilePic}
                    />
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>

              {/* Row 1 - 4 cards */}
              <div className="row">
                {/* 3 cards */}
                <Cards />
              </div>

              {/* Row 2 - 2 charts */}

              <div className="row">
                {/* Area Chart*/}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                    </div>
                    {/*  Card Body */}
                    <div className="card-body">
                      <div className="chart-area">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Pie Chart */}
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                    </div>
                    {/*  Card Body  */}
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <PieChart />
                      </div>
                      <div className="mt-4 text-center small">
                        <span className="mr-2">
                          <i className="fas fa-circle text-primary"></i>
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-success"></i>
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Projects and colors*/}
              <div className="row">
                <div className="col-lg-6 mb-4">
                  {/* Project Card Example*/}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div className="card-body">
                      <Projects />
                    </div>
                  </div>

                  {/* Color System */}
                  <div className="row">
                    <Colors />
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  {/* <!-- Illustrations and Approch --> */}
                  <IllustrationsAndApproach />
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </>
    );
  }
}
export default Dashboard;
