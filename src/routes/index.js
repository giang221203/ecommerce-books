import AdminPage from "../pages/AdminPage/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotfoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path:'/',
        page:HomePage,
        ishowHeader:true
    },
    {
        path:'/order',
        page:OrderPage,
        ishowHeader:true
    },
    {
        path:'/products',
        page:ProductPage,
        ishowHeader:true
    },
    {
        path:'/:type',
        page:TypeProductPage,
        ishowHeader:true
    },
    {
        path:'/sign-in',
        page:SignInPage,
        ishowHeader:false
    },
    {
        path:'/sign-up',
        page:SignUpPage,
        ishowHeader:false
    },
    {
        path:'/product-details',
        page:ProductDetailPage,
        ishowHeader:true
    },
    {
        path:'/profile-user',
        page:ProfilePage,
        ishowHeader:true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        ishowHeader:false,
    },
    {
        path:'*',
        page:NotFoundPage
    },
]