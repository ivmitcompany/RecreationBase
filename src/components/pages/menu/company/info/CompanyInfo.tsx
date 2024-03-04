import CompanyInfoHeading from '@/components/pages/menu/company/info/CompanyInfoHeading'
import CompanySocials from '@/components/pages/menu/company/socials/CompanySocials'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import CompanyRules from '../rules/CompanyRules'

interface CompanyInfoProps extends HTMLAttributes<HTMLDivElement> {}

const CompanyInfo: FC<CompanyInfoProps> = ({ className, ...props }) => {
  return (
    <div className={cn('space-y-10', className)} {...props}>
      <div className="space-y-5">
        <CompanyInfoHeading>Інформація про заклад</CompanyInfoHeading>
        <CompanySocials className="pl-[1.125rem]" />
      </div>
      <div className="space-y-5">
        <CompanyInfoHeading>Правила закладу</CompanyInfoHeading>
        <CompanyRules className="pl-[1.125rem]" />
      </div>
    </div>
  )
}

export default CompanyInfo
