import React from "react";
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
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class CustomLayout extends React.Component {
  state = { language: "En" };

  handleLanguage = (event, data) => {
    this.setState({ language: data.text });
  };

  render() {
    let elements = React.Children.toArray(this.props.children);
    if (elements.length === 1) {
      elements = React.cloneElement(elements[0], {
        language: this.state.language
      });
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
                  <Dropdown.Item onClick={this.handleLanguage} text="Fa" />
                  <Dropdown.Item onClick={this.handleLanguage} text="En" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>

            {authenticated ? (
              <Menu.Item header onClick={() => this.props.logout()}>
                Logout
              </Menu.Item>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                </Link>
              </React.Fragment>
            )}
          </Container>
        </Menu>
        {elements}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
