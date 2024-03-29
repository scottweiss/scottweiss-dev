import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SiteHeader from "./SiteHeader";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteHeader />
        {children}
      </div>
    );
  }
}
