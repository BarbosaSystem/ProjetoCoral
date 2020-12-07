
const openRoutes=['login', 'register','cadastro']

export default (to, from, next) => {

  if(openRoutes.includes(to.name))  {
      next()
  }
  else if (localStorage.getItem('token')) {
    next()
  }else {
    next('/login')
  }
}