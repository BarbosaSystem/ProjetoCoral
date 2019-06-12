import store from '@/store.js'

export default (to, from, next) => {
    if(store.getters.user){
        return next()
    } else {
        next ('/login')
    }
}