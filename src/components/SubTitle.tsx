import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function SubTitle(props: SectionProps) {
  return (
    <h3 className={`text-2xl font-light mb-4 ${props.className}`}>
      {props.children}
    </h3>
  );
}
