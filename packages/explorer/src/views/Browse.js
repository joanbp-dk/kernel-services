/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useServices, timeUtils, Navbar, Footer } from '@kernel/common'

import AppConfig from 'App.config'

const INITIAL_STATE = { error: '', loading: true, profiles: {}, projects: {} }

const actions = {}

Object.keys(INITIAL_STATE)
  .forEach((key) => {
    actions[key] = (state, value) => Object.assign({}, state, { [key]: value })
  })

const reducer = (state, action) => {
  try {
    console.log(action.type, action.payload, state)
    return actions[action.type](state, action.payload)
  } catch (error) {
    console.log(error)
    throw new Error('UnknownActionError', { cause: `Unhandled action: ${action.type}` })
  }
}

const { humanize } = timeUtils

const readable = (error) => {
  if (error.toLowerCase().indexOf('consent') > 0) {
    return 'You need to share your profile data in order to view recommendations.'
  }
  if (error.toLowerCase().indexOf('profile') > 0) {
    return 'You need to create your profile first in order to view recommendations.'
  }
  return 'You need to refresh your auth token by reloading this page.'
}

const Page = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const navigate = useNavigate()

  global.state = state
  const { services, currentUser } = useServices()
  const user = currentUser()

  useEffect(() => {
    if (!user || user.role > AppConfig.minRole) {
      return navigate('/')
    }
  }, [navigate, user])

  useEffect(() => {
    (async () => {
      dispatch({ type: 'error', payload: '' })
      dispatch({ type: 'loading', payload: true })
      const { queryService } = await services()
      try {
        const { profiles, projects } = await queryService.recommend()
        dispatch({ type: 'profiles', payload: profiles })
        dispatch({ type: 'projects', payload: projects })
      } catch (error) {
        dispatch({ type: 'error', payload: readable(error.message) })
      }
      dispatch({ type: 'loading', payload: false })
    })()
  }, [services, user])

  const Humans = () => {

    if (!(state && state.profiles && state.projects)) return false

    const profiles = Object.values(state.profiles)
    const projects = Object.values(state.projects)

    const sortHumans = (algorithm) => {
  
      switch (algorithm) {
        case "byProjectCount":
         const countProjects = (owner) => projects.filter(x => x.owner === owner).length
         return profiles.sort((a, b) => countProjects(b.owner) - countProjects(a.owner))
        
        case "byNewest":
        default:
          return profiles.sort((a, b) => b.created - a.created)
      }
    }
  
    return (
      <div className='block text-center'>
      <h1 className='uppercase text-center py-4'>Humans</h1>
      <ul>
        {sortHumans("byProjectCount").map((meta) => {
          const created = humanize(Date.now() - meta.created)
          const { memberId, name, pronouns, city, company, bio, email, twitter } = meta.data
          const combine = (items) => items.filter(i => i.trim() !== "").join(" - ")
          return (
            <li key={meta.id} className='text-gray-700 py-4'>
              <p><small>{created}</small></p>
              <p><small>{memberId}</small></p>
              <p><b>{name}</b> {pronouns.trim() ? `(${pronouns})` : ``} </p>
              <p>{combine([city, company])}</p>
              <p>{bio}</p>
              <p>{combine([email, twitter])}</p>
            </li>
          )
        })}
      </ul>
    </div>
    )
  }

  const Adventures = () => {

    if (!(state && state.projects)) return false

    const projects = state.projects

    return (
      <div className='block text-center'>
      <h1 className='uppercase text-center'>Adventures</h1>
      <ul>
        {Object.entries(projects).map(([_, meta]) => {
          const project = meta.data
          const updated = humanize(Date.now() - meta.created)
          return (
            <li key={meta.id} className='text-gray-700 py-4'>
              <small>{updated}</small>
              <p>
                <b>
                  <a target='_blank' rel='noreferrer' href={`https://staging.adventures.kernel.community/view/${meta.id}`}>{project.title}</a>
                </b>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
    )
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar
        title={AppConfig.appTitle}
        logoUrl={AppConfig.logoUrl}
        homeUrl={AppConfig.homeUrl}
        menuLinks={AppConfig.navbar?.links}
        backgroundColor='bg-kernel-dark' textColor='text-kernel-white'
      />
      <div className='flex md:flex-row flex-wrap py-4 justify-center flex-grow'>
        <div className='md:basis-2/3 px-8'>
          <div className='grid grid-cols-1 gap-6'>
            {state && state.error &&
              <div className='block text-center'>
                <p className='text-red-600'>{state.error}</p>
              </div>}
            {state && state.loading &&
              <div className='block text-center'>
                <p className='text-purple-900 text-center'> ... Loading recommendations ... </p>
              </div>}
            {state && !state.error && !state.loading &&
              <React.Fragment>
                <Humans />
                <Adventures />
              </React.Fragment>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
