import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">g and B</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>sign in</span>
          {!currentUser?.isSeller && <span>become a seller</span>}
          <button>join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>TEST 2</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
