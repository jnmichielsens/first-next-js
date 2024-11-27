import { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function MainTitle(props: SectionProps) {
  return (
    <h2 className={`section-title text-center ${montserrat.className} ${props.className}`}>
      {props.children}
    </h2>
  );
}
