import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id?: string;
  sectionRef?: any;
  className?: string;
}

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      ref={props.sectionRef}
      className={`px-6 py-24 md:px-12 lg:px-24 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
