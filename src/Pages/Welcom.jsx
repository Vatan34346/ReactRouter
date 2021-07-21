import { Fragment } from "react";
import { Route } from "react-router";

const Welcom = () => {
  return (
    <Fragment>
      <h1>Welcom</h1>
      <Route path="/welcom/new-user">
        <p>Welcom new User</p>
      </Route>
    </Fragment>
  );
};

export default Welcom;
