import { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function SubTitle(props: SectionProps) {
  return (
    <h3 className={`text-2xl font-light mb-4 ${montserrat.className}  ${props.className}`}>
      {props.children}
    </h3>
  );
}
