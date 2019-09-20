import React from "react";
import axios from "axios";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class CustomLayout extends React.Component {
  state = { language: "en" };
  componentWillMount() {
    axios({
      method: "get",
      headers: {
        "Accept-Language": this.state.language,
        "Content-Type": "application/json"
      },
      url: "http://127.0.0.1:8000/posts/"
    })
      .then(res => {
        const post = res.data;
        const changed_data = { ...this.state, ...post[0] };
        this.setState(changed_data);
        // const token = res.data.key;
        // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // localStorage.setItem("token", token);
        // localStorage.setItem("expirationDate", expirationDate);

        // dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleLanguage = (event, data) => {
    this.setState({ language: data.text, name: "", description: "" });

    axios({
      method: "get",
      headers: {
        "Accept-Language": data.text,
        "Content-Type": "application/json"
      },
      url: "http://127.0.0.1:8000/posts/"
    })
      .then(res => {
        const post = res.data;
        const changed_data = { ...this.state, ...post[0] };
        this.setState(changed_data);
        // const token = res.data.key;
        // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // localStorage.setItem("token", token);
        // localStorage.setItem("expirationDate", expirationDate);

        // dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let elements = React.Children.toArray(this.props.children);
    if (elements.length === 1) {
      elements = React.cloneElement(elements[0], this.state);
    }

    console.log(elements);

    const { authenticated } = this.props;
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header>
              <Dropdown text="Language">
                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.handleLanguage} text="fa" />
                  <Dropdown.Item onClick={this.handleLanguage} text="en" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
          </Container>
        </Menu>
        {elements}
      </div>
    );
  }
}

export default CustomLayout;
