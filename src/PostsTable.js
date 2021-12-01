// Posts Table from JSON placeholder with pagination

import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Table } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class PostsTable extends React.Component {
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
      perPage: 10,
      offset: 0,
      currentPage: 0,
    };
  }

  componentDidMount = () => {
    this.getPosts();
    this.receivedData();
  };

  getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data, searchResult: data });
    } catch (err) {
      console.error(err);
    }
    this.receivedData();
  };

  viewToggle = () => {
    this.setState({ view: !this.state.view });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  receivedData() {
    const slice = this.state.searchResult.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const postData = slice.map((post) => (
      <>
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      </>
    ));
    this.setState({
      pageCount: Math.ceil(this.state.searchResult.length / this.state.perPage),

      postData,
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.search !== this.state.search) {
      const results = this.state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.state.search) ||
          post.body.toLowerCase().includes(this.state.search)
      );

      this.setState({ searchResult: results });
    }
  };

  render() {
    return (
      <>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1
                className="h3 mb-2 text-gray-800"
                style={{ marginTop: "20px" }}
              >
                Posts
              </h1>
              <p className="mb-4">
                This is a table with pagination from{" "}
                <a target="_blank" href="https://jsonplaceholder.typicode.com/">
                  JSON placeholder
                </a>
                , using GET method of Axios. Please visit the{" "}
                <a target="_blank" href="https://www.npmjs.com/package/axios">
                  official Axios documentation
                </a>
                , for more Information
              </p>

              <div className="row">
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
                  <tbody>{this.state.postData}</tbody>
                </Table>
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={10}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostsTable;
