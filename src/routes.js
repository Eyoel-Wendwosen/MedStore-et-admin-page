import Index from 'views/Index.js'
import User from 'views/examples/users.view.js'
import Maps from 'views/examples/Maps.js'
import Register from 'views/examples/Register.js'
import Login from 'views/examples/Login.js'
import Categories from 'views/examples/category.view.js'
import Prodcuts from 'views/examples/products.view.js'
import SubCategory from 'views/examples/subCategory.view'
import Request from 'views/examples/request.view'
import Message from 'views/examples/message.view'
import ProcessedRequest from 'views/examples/processedRequest.view'
import PrecessedMessage from 'views/examples/processedMessage.view'

var routes = [
	{
		path: '/index',
		name: 'Dashboard',
		icon: 'ni ni-tv-2 text-primary',
		component: Index,
		layout: '/admin',
	},
	{
		path: '/request',
		name: 'Request',
		icon: 'ni ni-bullet-list-67 text-red',
		component: Request,
		layout: '/admin',
	},
	{
		path: '/processedRequest',
		name: 'ProcessedRequest',
		icon: 'ni ni-bullet-list-67 text-red',
		component: ProcessedRequest,
		layout: '/admin',
	},
	{
		path: '/message',
		name: 'Message',
		icon: 'ni ni-bullet-list-67 text-red',
		component: Message,
		layout: '/admin',
	},
	{
		path: '/processedMessage',
		name: 'ProcessedMessage',
		icon: 'ni ni-bullet-list-67 text-red',
		component: PrecessedMessage,
		layout: '/admin',
	},
	{
		path: '/products',
		name: 'Products',
		icon: 'ni ni-planet text-blue',
		component: Prodcuts,
		layout: '/admin',
	},
	// {
	//   path: "/register",
	//   name: "Register",
	//   icon: "ni ni-pin-3 text-orange",
	//   component: Register,
	//   layout: "/admin"
	// },
	// {
	//   path: "/login",
	//   name: "Login",
	//   icon: "ni ni-pin-3 text-orange",
	//   component: Login,
	//   layout: "/admin"
	// },
	{
		path: '/users',
		name: 'Users',
		icon: 'ni ni-single-02 text-yellow',
		component: User,
		layout: '/admin',
	},
	{
		path: '/categories',
		name: 'Categories',
		icon: 'ni ni-bullet-list-67 text-red',
		component: Categories,
		layout: '/admin',
	},
	{
		path: '/subCategory',
		name: 'subCategory',
		icon: 'ni ni-bullet-list-67 text-red',
		component: SubCategory,
		layout: '/admin',
	},
]
export default routes
