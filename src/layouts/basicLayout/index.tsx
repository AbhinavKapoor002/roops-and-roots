import React, { PropsWithChildren } from 'react'
import Header from './header/header'

const BasicLayout = ({children}: PropsWithChildren) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default BasicLayout