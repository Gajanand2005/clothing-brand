import React from 'react'
import Sidebar from '../../components/Sidebar.jsx'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
const ProductListing = () => {
  return (
    <section className='py-8'>
      <div className='container flex gap-3'>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
        <div className='sidebarWrapper w-[20%] h-full bg-amber-50 p-3'>
          <Sidebar />
        </div>
      </section>
  )
}
export default ProductListing
