import React from "react";
import axios from "axios";

import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePic from "./undraw_profile.svg";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class Table2 extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      id: "",
      userId: "",
      title: "",
      body: "",
      search: "",
      searchResult: [],
      view: false,
    };
  }

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data, searchResult: data });
    } catch (err) {
      console.error(err);
    }
    console.log("successfully got data");
  };

  viewToggle = () => {
    this.setState({ view: !this.state.view });
  };

  createPost = async () => {
    // API Call to server and add new post
    try {
      const { userId, title, body } = this.state;
      const { data } = await axios.post(API_URL, {
        userId,
        title,
        body,
      });
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({ posts, userId: "", title: "", body: "" });
    } catch (err) {
      console.error(err);
    }
  };

  updatePost = async () => {
    // API Call to server and update an existing post
    try {
      const { id, userId, title, body, posts } = this.state;
      const { data } = await axios.put(`${API_URL}/${id}`, {
        userId,
        title,
        body,
      });
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = data;

      this.setState({ posts, id: "", userId: "", title: "", body: "" });
    } catch (err) {
      console.log(err);
    }
  };

  deletePost = async (postId) => {
    // API Call to server and delete post
    try {
      console.log(postId);
      await axios.delete(`${API_URL}/${postId}`);

      let posts = [...this.state.posts];
      posts = posts.filter(({ id }) => id !== postId);

      this.setState({ posts });
    } catch (err) {
      console.error(err);
    }
  };

  selectPost = (post) => this.setState({ ...post });

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(prevState);
    if (prevState.search !== this.state.search) {
      const results = this.state.posts.filter((post) =>
        post.title.toLowerCase().includes(this.state.search)
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
                    placeholder="Search by title.."
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
                Axios Table
              </h1>
              <div className="row">
                {/* <h3>To add a new post enter the details: </h3> */}
                <form onSubmit={this.handleSubmit}>
                  <label> UserID : </label>
                  <input
                    type="number"
                    name="userId"
                    value={this.state.userId}
                    onChange={this.handleChange}
                  />
                  <label> Title : </label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <label> Body : </label>
                  <input
                    type="text"
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                  <input type="Submit" />
                </form>
                <Table striped bordered hover className="table ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>UserId</th>
                      <th>Title</th>
                      {this.state.view ? <th>Body</th> : ""}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.searchResult
                      //   .filter(
                      //     (f) =>
                      //       f.some(item.title == this.state.filter) ||
                      //       this.state.filter == ""
                      //   )
                      .map((post) => {
                        return (
                          <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            {this.state.view ? <td>{post.body}</td> : ""}
                            <td>
                              {/* <Button
                              size="sm"
                              onClick={() => this.selectPost(post)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => this.deletePost(post._id)}
                            >
                              Delete
                            </Button> */}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => this.viewToggle()}
                              >
                                Toggle
                              </Button>
                              {/* <Button variant="danger" size="sm">
                      <Link to={`/post/${post.id}`}>More</Link>
                    </Button> */}
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

export default Table2;

{
  this.state.searchResult.map((post) => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>
          <Highlighter
            highlightClassName="HighlightClass"
            searchWords={[this.state.search]}
            autoEscape={true}
            textToHighlight={post.title}
          />
          {post.title}
        </td>
        {this.state.view ? (
          <td>
            <Highlighter
              highlightClassName="HighlightClass"
              searchWords={[this.state.search]}
              autoEscape={true}
              textToHighlight={post.body}
            />
          </td>
        ) : (
          ""
        )}
        <td>
          {/* <Button
            size="sm"
            onClick={() => this.selectPost(post)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => this.deletePost(post._id)}
          >
            Delete
          </Button> */}
          <Button size="sm" onClick={() => this.viewToggle()}>
            Toggle
          </Button>
          {/* <Button variant="danger" size="sm">
    <Link to={`/post/${post.id}`}>More</Link>
  </Button> */}
        </td>
      </tr>
    );
  });
}
