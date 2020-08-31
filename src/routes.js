import React from 'react'
import { Redirect } from 'react-router-dom'

import { isLoggedIn, logout } from './utils/authentication'
import ApplicationLayout from './layouts/Application'
import AuthenticationLayout from './layouts/Authentication'

import AddNewRecipePage from './pages/AddNewRecipePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RecipePage from './pages/RecipePage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpPage from './pages/SignUpPage'
import TimelinePage from './pages/TimelinePage'
import BookmarkedPage from './pages/BookmarkedPage'
import ExplorePage from './pages/ExplorePage'
import NotificationPage from './pages/NotificationPage'

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
    path: [
      '/',
      '/:userHandle',
      '/:userHandle/:recipeId',
      '/:userHandle/:recipeId/:showComments',
      '/saved',
      '/liked',
      '/notifications'
    ],
    routes: [
      {
        exact: true,
        path: '/',
        render: function Timeline() {
          return isLoggedIn() ? <TimelinePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/saved',
        render: function Bookmarked() {
          return isLoggedIn() ? <BookmarkedPage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/explore',
        render: function Explore() {
          return isLoggedIn() ? <ExplorePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/add-new',
        render: function AddNewRecipe() {
          return isLoggedIn() ? <AddNewRecipePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/notifications',
        render: function Notification() {
          return isLoggedIn() ? <NotificationPage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: '/:userHandle',
        render: function Profile() {
          return isLoggedIn() ? <ProfilePage /> : <Redirect to="/login" />
        }
      },
      {
        exact: true,
        path: [
          '/:userHandle/:recipeId',
          '/:userHandle/:recipeId/:showComments'
        ],
        render: function Recipe() {
          return isLoggedIn() ? <RecipePage /> : <Redirect to="/login" />
        }
      }
    ]
  }
]

export default routes
