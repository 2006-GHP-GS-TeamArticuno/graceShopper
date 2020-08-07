/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as AllProducts} from './AllProducts'
export {default as SingleProduct} from './SingleProduct'
export {default as CheckoutConfirmation} from './CheckoutConfirmation'
export {default as Cart} from './Cart'
export {default as Home} from './Home'
export {default as AllUsers} from './AllUsers'
export {default as SingleUser} from './SingleUser'
export {default as Button} from './Button'
export {Login, Signup} from './auth-form'
