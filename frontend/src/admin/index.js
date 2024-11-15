import React from 'react'
import ProductPost from './Productpost'
import Sidebar from '../component/dashboard/sidebar'
import ProductTable from './Productget'

const AdminProduct = () => {
  return (
    <div>
      <Sidebar />
      <ProductPost />
     <ProductTable />
    </div>
  )
}

export default AdminProduct
