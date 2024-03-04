import CompanyInfoHeading from '@/components/pages/menu/company/info/CompanyInfoHeading'
import MenuInfoSocials from '@/components/pages/menu/company/socials/MenuInfoSocials'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface CompanyInfoProps extends HTMLAttributes<HTMLDivElement> {}
const CompanyInfo: FC<CompanyInfoProps> = ({ className, ...props }) => {
  return (
    <div className={cn('space-y-10', className)} {...props}>
      <div className="space-y-5">
        <CompanyInfoHeading>Інформація про заклад</CompanyInfoHeading>
        <MenuInfoSocials className="pl-[1.125rem]" />
      </div>
    </div>
  )
}

export default CompanyInfo
