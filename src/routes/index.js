// All components mapping with path for internal routes

import { lazy } from 'react'

const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Cart = lazy(() => import('../pages/protected/Cart'))
const ProductsConfirmation = lazy(() => import('../pages/protected/ProductConfirmation'))
const ProductsPayment = lazy(() => import('../pages/protected/ProductsPayment'))
const Term = lazy(() => import('../pages/protected/Term'))
const FAQ = lazy(() => import('../pages/protected/FAQ'))
const Team = lazy(() => import('../pages/protected/Team'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))


const routes = [
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/product-confirmation',
    component: ProductsConfirmation,
  },
  {
    path: '/product-payment',
    component: ProductsPayment,
  },
  {
    path: '/term',
    component: Term,
  },
  {
    path: '/faq',
    component: FAQ,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
]

export default routes
