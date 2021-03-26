import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";

const PrivateRoutePartner = ({ component: Component, ...rest }) => {
  const [state] = useContext(UserContext);
  const { loading } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : state.isPartner == true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default PrivateRoutePartner;
