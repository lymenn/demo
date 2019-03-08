const getters = {
  sidebar: state => state.app.sidebar,
  roles: state => state.user.roles,
  addRoutes: state => state.permission.addRoutes
}

export default getters
