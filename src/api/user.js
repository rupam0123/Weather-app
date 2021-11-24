import _user from './user.json'

const TIMEOUT = 100

export default {
    getUser: (cb,timeout) => setTimeout(()=> cb(_user),timeout|| TIMEOUT),
    
}
