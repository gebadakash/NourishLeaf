import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const PageHeaderBanner = () => {

  const {title, subTitle} = useGlobalContext();

  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">{title}</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <NavLink to="/">{subTitle}</NavLink>
        </li>
        <li className="breadcrumb-item active text-white">{title}</li>
      </ol>
    </div>
  );
};

export default PageHeaderBanner;
