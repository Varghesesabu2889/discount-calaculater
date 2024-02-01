import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor='success'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/discountMainBanner.png'
              height='70'
              alt=''
              loading='lazy'
            />
          <h1><b style={{color:"yellow"}}>Discount</b><b style={{color:"white"}}> Calculator </b></h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header