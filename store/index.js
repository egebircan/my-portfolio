import React, { createContext, useEffect, useState, useReducer } from 'react'

export const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [bannerClass, setBannerClass] = useState("banner")
  const [terminalClass, setTerminalClass] = useState("terminal")
  const [showAnimation, setShowAnimation] = useState("terminal")

  return (
    <StoreContext.Provider value={{ bannerClass, setBannerClass, terminalClass, setTerminalClass, showAnimation, setShowAnimation }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext