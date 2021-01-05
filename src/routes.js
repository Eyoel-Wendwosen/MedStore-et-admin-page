/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  \
*/
import Index from "views/Index.js";
import User from "views/examples/users.view.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Categories from "views/examples/category.view.js";
import Prodcuts from "views/examples/products.view.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-planet text-blue",
    component: Prodcuts,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Companies",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-yellow",
    component: User,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-bullet-list-67 text-red",
    component: Categories,
    layout: "/admin"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
