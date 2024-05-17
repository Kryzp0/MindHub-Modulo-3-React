import React from 'react'


const Main = ({ children, headerOpen }) => {

  return (
    <main className={"flex flex-col min-h-screen bg-[#212121]" + (!headerOpen ? "" : " blur")}>
      {children}
    </main>
  )
}

export default Main