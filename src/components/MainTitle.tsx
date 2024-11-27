import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function MainTitle(props: SectionProps) {
  return (
    <h2 className={`section-title text-center ${props.className}`}>
      {props.children}
    </h2>
  );
}
