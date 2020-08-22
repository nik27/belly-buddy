import React from 'react'
import { Redirect } from 'react-router-dom'

import { isLoggedIn, logout } from './utils/authentication'
import ApplicationLayout from './layouts/Application'
import AuthenticationLayout from './layouts/Authentication'

import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RecipePage from './pages/RecipePage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpPage from './pages/SignUpPage'
import TimelinePage from './pages/TimelinePage'

const routes = [
  {
    component: AuthenticationLayout,
    path: ['/login', '/logout', '/sign-up', '/reset-password'],
    routes: [
      {
        exact: true,
        path: '/login',
        render: function Login() {
          return isLoggedIn() ? <Redirect to="/" /> : <LoginPage />
        }
      },
      {
        exact: true,
        path: '/logout',
        component: function Logout() {
          logout()
          return <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/sign-up',
        render: function SignUp() {
          return isLoggedIn() ? <Redirect to="/" /> : <SignUpPage />
        }
      },
      {
        exact: true,
        path: '/reset-password',
        render: function ResetPassword() {
          return isLoggedIn() ? <Redirect to="/" /> : <ResetPasswordPage />
        }
      }
    ]
  },
  {
    component: ApplicationLayout,
    path: ['/', '/:userId', '/:userId/:recipeId'],
    routes: [
      {
        exact: true,
        path: '/:userId',
        render: function Profile() {
          return isLoggedIn() ? <ProfilePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/:userId/:recipeId',
        render: function Recipe() {
          return isLoggedIn() ? <RecipePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/',
        render: function Timeline() {
          return isLoggedIn() ? <TimelinePage /> : <Redirect to="/login" />
        }
      }
    ]
  }
]

export default routes
