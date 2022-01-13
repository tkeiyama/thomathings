import { ReactElement, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title: string;
}

export function Section({ children, title }: SectionProps): ReactElement {
  return (
    <details className="mt-10">
      <summary className="text-xl cursor-pointer">{title}</summary>
      <div className="p-4 rounded-b-lg border border-t-0 border-white">
        {children}
      </div>
    </details>
  );
}
