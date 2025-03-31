import React from 'react'
import Layout from '../components/layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className='filters'>
        <div>range filters </div>
        <div>
          <button className="btn btn-primary">Add New</button>
        </div>
      </div>

      <div className='content'></div>
    </Layout>
  )
}

export default HomePage
