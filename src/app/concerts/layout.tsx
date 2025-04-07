import Header from '@/components/layout/header/Header'
import { FC, ReactNode } from 'react'

interface ConcertsLayoutProps {
  children: ReactNode
}

const ConcertsLayout: FC<ConcertsLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-graphite text-light">
        {children}
      </main>
    </>
  )
}

export default ConcertsLayout 