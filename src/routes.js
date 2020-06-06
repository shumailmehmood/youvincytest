/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";
import UserPage from "views/UserPage.jsx";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "",

    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/message",
    name: "Messages",
    icon: "",

    component: Icons,
    layout: "/admin"
  },
  {
    path: "/fundings",
    name: "Fundings",
    icon: "",

    component: Maps,
    layout: "/admin"
  },
  {
    path: "/findwriters",
    name: "Find Writer",
    icon: "",

    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/faqs",
    name: "FAQS",
    icon: "",

    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/help",
    name: "Help",
    icon: "",
    component: TableList,
    layout: "/admin"
  },
];
export default dashRoutes;
