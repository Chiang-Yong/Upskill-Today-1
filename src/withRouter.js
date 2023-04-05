import React from "react";
import { useParams } from "react-router-dom";

export const withRouter = (WrapperComponent) => (props) => {
  const params = useParams();

  return <WrapperComponent {...props} params={params} />;
};
