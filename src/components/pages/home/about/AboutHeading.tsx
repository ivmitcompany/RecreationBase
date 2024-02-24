import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface AboutHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const AboutHeading: FC<AboutHeadingProps> = ({ className, ...props }) => (
  <h2
    className={cn(
      'flex items-baseline text-2xl font-light uppercase md:text-[2.875rem] md:leading-[3.9375rem]',
      className
    )}
    {...props}
  >
    <FontAccentSpan className="mr-5 text-accent md:mr-[2.1875rem]" size="md">
      &#123;
    </FontAccentSpan>{' '}
    <span className="-translate-y-1 md:translate-y-0" role="text">
      Про нас
    </span>{' '}
    <FontAccentSpan className="ml-2.5 text-accent md:ml-5" size="md">
      &#125;
    </FontAccentSpan>
  </h2>
)

export default AboutHeading
