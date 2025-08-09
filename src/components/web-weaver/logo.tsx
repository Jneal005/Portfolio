import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M3 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="M12 19v2" />
      <path d="m19.07 19.07-1.41-1.41" />
      <path d="M21 12h-2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M12 5.5a6.5 6.5 0 0 1 6.5 6.5" />
      <path d="M17.5 12a5.5 5.5 0 0 1-5.5 5.5" />
      <path d="M12 17.5a5.5 5.5 0 0 1-5.5-5.5" />
      <path d="M6.5 12A6.5 6.5 0 0 1 12 5.5" />
    </svg>
  );
}
