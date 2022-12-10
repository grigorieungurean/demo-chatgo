import React from "react";
import NavBar from "./nav-bar";
import { connect } from "react-redux";
import {logout } from "../../../redux/auth-reducer";

class NavBarContainer extends React.Component {

   render() {
      return (
         <NavBar {...this.props} />
      );
   }
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   email: state.auth.email
});

export default connect(mapStateToProps, {logout}, null, {pure: false}) (NavBarContainer);