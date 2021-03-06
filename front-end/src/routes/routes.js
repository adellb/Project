import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import Ticket from 'src/pages/Ticket.vue'
import Department from 'src/pages/Department.vue'
import Login from 'src/pages/Login.vue'
import Register from 'src/pages/Register.vue'  
import Users from 'src/pages/Users.vue'
import Favorites from 'src/pages/Favorites.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'department',
        name: 'Department',
        component: Department
      },
	  {
        path: 'ticket',
        name: 'Ticket',
        component: Ticket
	  },
	  {
		path: 'login',
		name: 'Login',
		component: Login,
	  },
	  {
		path: 'register',
		name: 'Register',
		component: Register,
	  },
	  {
		path: 'users',
		name: 'Users',
		component: Users,
	  },
	  {
		path: 'favorites',
		name: 'Favorites',
		component: Favorites,
	  },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
