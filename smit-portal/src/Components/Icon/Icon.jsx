import React from "react";
import "./Icon.css";

function Icon({ name, size = 18 }) {
  const icons = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),

    progress: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l3-4 3 2 5-7" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 9h18" />
      </>
    ),

    payment: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M3 9h18M7 14h4" />
      </>
    ),

    assignment: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3.5h6M8 9h8M8 13h8M8 17h5" />
      </>
    ),

    quiz: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 114 2c-1.2.7-1.5 1.2-1.5 2" />
        <path d="M12 17h.01" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    graduation: (
      <>
        <path d="M2 9l10-5 10 5-10 5L2 9z" />
        <path d="M6 11v5c3 2 9 2 12 0v-5" />
        <path d="M22 9v6" />
      </>
    ),

    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.7-4 3.3-6 8-6s7.3 2 8 6" />
      </>
    ),

    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="M16 16l5 5" />
      </>
    ),

    plus: (
      <path d="M12 5v14M5 12h14" />
    ),

    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4L16.5 3.5z" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),

    trash: (
      <>
        <path d="M4 7h16M10 11v6M14 11v6" />
        <path d="M6 7l1 14h10l1-14M9 7V4h6v3" />
      </>
    ),

    close: (
      <path d="M6 6l12 12M18 6L6 18" />
    ),

    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M12 3h6a2 2 0 012 2v14a2 2 0 01-2 2h-6" />
      </>
    ),

    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),

    arrowLeft: (
      <>
        <path d="M15 18l-6-6 6-6" />
      </>
    ),

    chevronRight: (
      <path d="M9 6l6 6-6 6" />
    ),

    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
      </>
    ),

    message: (
      <>
        <path d="M4 5h16v11H8l-4 4V5z" />
        <path d="M8 9h8M8 12h5" />
      </>
    ),

    book: (
      <>
        <path d="M4 5a3 3 0 013-2h13v17H7a3 3 0 00-3 3V5z" />
        <path d="M7 20h13" />
      </>
    ),

    hashtag: (
      <>
        <path d="M10 3L8 21M16 3l-2 18M4 9h17M3 15h17" />
      </>
    ),

    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M9 13l-2 8 5-3 5 3-2-8" />
      </>
      
    ),
  };

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || null}
    </svg>
  );
}

export default Icon;