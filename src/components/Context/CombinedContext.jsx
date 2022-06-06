import React from 'react'
import { ModalProvider } from './ModalContext'
import { InputProvider } from './getInput'

function CombinedContext({children}) {
  return (
       <ModalProvider>
        <InputProvider>
          {children}
        </InputProvider>
      </ModalProvider>
  )
}

export default CombinedContext