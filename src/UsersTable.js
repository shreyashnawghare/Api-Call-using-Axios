// Posts Table from JSON placeholder with pagination

import React from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import ProfilePic from "./undraw_profile.svg";
import Highlighter from "react-highlight-words";

const API_URL = "https://jsonplaceholder.typicode.com/users";

class UsersTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      id: "",
      userId: "",
      name: "",
      username: "",
      company: {},
      address: {},
      search: "",
      searchResult: [],
      view: false,
    };
  }

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ users: data, searchResult: data });
    } catch (err) {
      console.error(err);
    }
    console.log("successfully got data");
  };

  viewToggle = () => {
    this.setState({ view: !this.state.view });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(value);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.search !== this.state.search) {
      const results = this.state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.state.search) ||
          user.username.toLowerCase().includes(this.state.search) ||
          user.company.name.toLowerCase().includes(this.state.search)
      );

      this.setState({ searchResult: results });
      console.log(results);
    }
  };

  render() {
    return (
      <>
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
                    placeholder="Name or company.."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange}
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
              <h1
                className="h3 mb-2 text-gray-800"
                style={{ marginTop: "20px" }}
              >
                Users
              </h1>
              <p className="mb-4">
                This is a table from{" "}
                <a target="_blank" href="https://jsonplaceholder.typicode.com/">
                  JSON placeholder
                </a>
                , using GET method of Axios. Please visit the{" "}
                <a target="_blank" href="https://www.npmjs.com/package/axios">
                  official Axios documentation
                </a>
                , for more Information. Search any user or company to filter the
                users list. Search texts are highlighted using react highlighter
                from{" "}
                <a
                  target="_blank"
                  href="https://www.npmjs.com/package/react-highlight-words"
                >
                  "react-highlight-words"
                </a>
              </p>
              <div className="row">
                <Table striped bordered hover className="table ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Company</th>
                      {this.state.view ? <th>Address</th> : ""}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.searchResult.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>
                            <Highlighter
                              highlightClassName="HighlightClass"
                              searchWords={[this.state.search]}
                              autoEscape={true}
                              textToHighlight={user.name}
                            />
                          </td>
                          <td>
                            <Highlighter
                              highlightClassName="HighlightClass"
                              searchWords={[this.state.search]}
                              autoEscape={true}
                              textToHighlight={user.username}
                            />
                          </td>
                          <td>
                            <Highlighter
                              highlightClassName="HighlightClass"
                              searchWords={[this.state.search]}
                              autoEscape={true}
                              textToHighlight={user.company.name}
                            />
                            <br />
                            <p style={{ fontSize: "13px" }}>
                              {user.company.catchPhrase}
                            </p>
                          </td>
                          {this.state.view ? (
                            <td>
                              {user.address.street}, {user.address.suite},
                              <p>{user.address.city}</p>
                            </td>
                          ) : (
                            ""
                          )}
                          <td>
                            <Button size="sm" onClick={() => this.viewToggle()}>
                              View Address
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UsersTable;
