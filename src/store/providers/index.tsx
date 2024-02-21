import { FC, ReactNode } from 'react'

import HeaderProvider from './header-provider'

type ProvidersProps = { children: ReactNode }

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <HeaderProvider>{children}</HeaderProvider>
}

export default Providers
