import './layout.css'
import React from 'react'

 export const Layout = ({children}) => {
    return (
        <div className='layout'> {children} </div>
    )
}
export default Layout