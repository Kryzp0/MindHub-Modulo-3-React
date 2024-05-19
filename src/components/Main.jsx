import React from 'react'


const Main = ({ children, headerOpen }) => {

  return (
    <main className={"flex flex-col min-h-screen bg-[#111827]" + (!headerOpen ? "" : " blur-sm")}>
      {children}
    </main>
  )
}

export default Main