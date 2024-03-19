import { ReactElement } from "react";
import './pageHeader.css';
import Menu from "./Menu";
function PageHeader()  {
    return (<>
    <div className="page_header">
        <h1>Payments Application</h1>
        <Menu></Menu>
    </div>
    </>);
}

export default PageHeader;