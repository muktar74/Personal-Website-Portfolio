import React from 'react';

type IconProps = {
  className?: string;
};

export const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 119 105" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="59.5" cy="52.5" r="14.5" fill="currentColor" />
    <ellipse cx="59.5" cy="52.5" rx="58" ry="21" transform="rotate(60 59.5 52.5)" stroke="currentColor" strokeWidth="3" />
    <ellipse cx="59.5" cy="52.5" rx="58" ry="21" transform="rotate(120 59.5 52.5)" stroke="currentColor" strokeWidth="3" />
    <ellipse cx="59.5" cy="52.5" rx="58" ry="21" stroke="currentColor" strokeWidth="3" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#007ACC" d="M0 0h128v128H0z"/>
    <path fill="#FFF" d="M26.22 34.13h75.56v59.74H26.22z"/>
    <path fill="#007ACC" d="M101.78 34.13H26.22v59.74h75.56V34.13zM92.01 64.88c0 5.43-1.58 9.92-4.74 13.46-3.16 3.54-7.4 5.31-12.72 5.31-5.61 0-10.16-1.92-13.65-5.76-3.49-3.84-5.23-8.81-5.23-14.9v-2.3c0-5.83 1.77-10.55 5.31-14.16 3.54-3.61 8.2-5.41 13.97-5.41 5.39 0 9.68 1.74 12.86 5.23 3.18 3.49 4.77 8.01 4.77 13.56v5.03zm-14.67 11.23c1.77-2.19 2.66-4.99 2.66-8.41V64.8c0-3.61-.92-6.52-2.77-8.73-1.85-2.21-4.34-3.32-7.48-3.32-3.13 0-5.63 1.11-7.51 3.32-1.88 2.21-2.82 5.12-2.82 8.73v2.9c0 3.39.91 6.18 2.74 8.35 1.83 2.17 4.28 3.25 7.37 3.25 3.01 0 5.39-1.12 7.14-3.35z"/>
    <path fill="#FFF" d="M60.52 40.23H41.05v41.33h7.82V63.92h10.22c4.1 0 7.34-.82 9.72-2.45 2.38-1.63 3.57-4.15 3.57-7.56 0-3.66-1.29-6.3-3.87-7.92-2.58-1.62-5.94-2.43-10.07-2.43zM48.87 57.1v-10.1h8.54c2.86 0 4.97.48 6.33 1.44 1.36.96 2.04 2.5 2.04 4.6 0 2.22-.72 3.8-2.16 4.74-1.44.94-3.57 1.41-6.4 1.41l-8.35-.09z"/>
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
    <path d="M109.43 103.02l-14.36-8.54c-.66-.39-1.39.08-1.21.84l3.15 13.43c.18.75.99.99 1.57.51l11.43-9.52c.58-.48.43-1.42-.58-1.72zM57.44 48.23c-1.75-1.1-4.51-1.17-6.03.22-2.54 2.34-.8 6.47 2.1 6.47 2.1 0 3.93-1.57 3.93-3.63 0-1.17-.8-2.22-1.6-2.54-1.54-.6-2.92-.1-3.6.7-.46.54-.42 1.35.08 1.76.5.42 1.25.32 1.63-.16.29-.36.27-.85-.05-1.11-.49-.4-.95-.4-1.33-.06-.52.48-.42 1.23.11 1.59.53.36 1.25.31 1.75-.12.8-.68 1.1-1.73.74-2.61zm-13.62 9.04c-.38-2.68-2.6-5.3-5.2-4.9-3.23.5-3.56 4.47-1.13 6.03 2.19 1.41 4.56.24 5.37-1.4.3-.61.35-1.28.27-1.92-.05-.4-.28-.73-.55-.95-.51-.43-1.2-.42-1.63.13-.29.37-.28.87.05 1.13.33.27.76.26 1.05-.04.45-.46.4-1.16-.1-1.56-.51-.4-1.22-.39-1.63.13-.68.85-.6 2.17.16 2.76.76.59 1.9.55 2.65-.18.75-.73.88-1.8.44-2.68zm30.41-3.66c-2.31-.83-5.3.85-5.59 3.23-.3 2.5 1.95 4.3 4.23 3.51 2.27-.78 3.5-3.3 2.7-5.22-.8-1.93-3.27-2.6-4.06-1.57-.42.54-.31 1.3.25 1.65.55.35 1.28.06 1.57-.52.29-.58.03-1.3-.55-1.59-.58-.28-1.25.02-1.55.57-.47.88-.13 2.05.85 2.61.98.56 2.31.25 2.9-1 .6-1.25.02-2.8-1.35-3.32zM91.07 92.05H36.93V35.95h54.14v56.1z"/>
  </svg>
);


export const NodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="m208.57 149.33-31.29 18-31.42 18.29-31.29-18.15-31.56-18.29V92.49l31.43-18.15 31.42-18.29 31.43 18.15L208.57 92.5v56.83z" fill="#8CC84B"/>
    <path d="M128 20.31 47.43 67.34v94.05L128 208.41l80.57-47.02V67.34L128 20.31zm-12.15 169.58v-43.12l-29-16.79v-30l29-16.92V39.92l59.86 34.6v34.1l-29.29 17.06v42.98l-30.57 17.65z" fill="#448E45"/>
    <path d="M115.85 146.77V39.92l-29.14 16.92v63.14l29.14 16.79zm30.29-80.14v30l-29 16.79v43.12l29 16.92V91.23l29.14-16.92-29.14-16.79z" fill="#68A555"/>
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="currentColor" d="M116.897 262.24c-25.803 0-51.133 7.823-72.333 22.11l-22.45-31.283c29.35-19.837 66.313-31.332 106.39-31.332 99.42 0 179.947 80.527 179.947 179.947s-80.527 179.947-179.947 179.947c-25.803 0-51.133-7.823-72.333-22.11l-22.45 31.283c29.35 19.837 66.313 31.332 106.39 31.332 99.42 0 179.947-80.527 179.947-179.947S216.317 262.24 116.897 262.24zM395.103 30.24c-25.803 0-51.133 7.823-72.333 22.11l-22.45-31.283c29.35-19.837 66.313-31.332 106.39-31.332 99.42 0 179.947 80.527 179.947 179.947s-80.527 179.947-179.947 179.947c-25.803 0-51.133-7.823-72.333-22.11l-22.45 31.283c29.35 19.837 66.313 31.332 106.39 31.332 99.42 0 179.947-80.527 179.947-179.947S494.523 30.24 395.103 30.24z"/>
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 36C18.6274 36 24 30.6274 24 24V12H12C5.37258 12 0 17.3726 0 24C0 30.6274 5.37258 36 12 36Z" fill="#0ACF83"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H24V12H0V12Z" fill="#A259FF"/>
    <path d="M0 24C0 17.3726 5.37258 12 12 12C18.6274 12 24 17.3726 24 24H0Z" fill="#F24E1E"/>
    <path d="M12 12C18.6274 12 24 6.62742 24 0H12C5.37258 0 0 5.37258 0 12C0 12.0001 0 12 0 12H12Z" fill="#FF7262"/>
    <path d="M12 24C18.6274 24 24 18.6274 24 12H12C5.37258 12 0 17.3726 0 24H12Z" fill="#1ABCFE"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M22.5 9.19141V14.8086L18.4141 12L22.5 9.19141Z" fill="#F05033"/>
      <path d="M17.4375 12L12.75 16.6875V13.875L15.375 12L12.75 10.125V7.3125L17.4375 12Z" fill="#F05033"/>
      <path d="M11.7656 7.3125V16.6875L1.5 12L11.7656 7.3125Z" fill="#F05033"/>
      <path d="M11.7656 13.875V16.6875L7.07812 12L11.7656 7.3125V10.125L9.14062 12L11.7656 13.875Z" fill="#DE4C36"/>
    </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 92 73" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M91.8,32.7C89.3,20.5,79,12.3,66,10.7c-2-1.2-4.1-2.1-6.2-2.8c-0.2-1.3-0.5-2.6-0.8-3.9C52.4,1,41.2-2,30.3,1.6 c-1.5,0.5-2.9,1.1-4.3,1.9C13,8.7-0.3,21.7,0,37.3c0,0.5,0,1,0,1.5c-0.1,2.1,0.5,4.2,1.8,5.9c3.9,5.5,11,7.2,17.2,5.2 c1.1,1.5,2.4,2.9,4,4.1c4.8,3.5,10.9,4.3,16.5,2.2c1.4,1.8,3,3.4,4.9,4.7c6.2,4.4,14,4.4,20.2,0c5.7-4,8.5-10.3,7.9-16.9 C87.3,42.4,89.5,37.6,91.8,32.7z M14.3,31.7h8.6v8.6h-8.6V31.7z M25.8,31.7h8.6v8.6h-8.6V31.7z M37.2,31.7h8.6v8.6h-8.6V31.7z M25.8,20.3h8.6v8.6h-8.6V20.3z M37.2,20.3h8.6v8.6h-8.6V20.3z M48.6,20.3h8.6v8.6h-8.6V20.3z"/>
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0l-4.5 16.5" />
    </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75v6a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75v-6m-16.5-6.75v6.75m16.5-6.75v6.75m-16.5 0h16.5m-16.5 0a3.75 3.75 0 013.75-3.75h9a3.75 3.75 0 013.75 3.75m-16.5 0v6.75m16.5-6.75v6.75m0 0a3.75 3.75 0 01-3.75 3.75h-9a3.75 3.75 0 01-3.75-3.75m0 0a3.75 3.75 0 003.75-3.75h9a3.75 3.75 0 003.75 3.75" />
    </svg>
);

export const ConsultingIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153Zm-1.8 20.22h2.84l-12.12-17.164H5.43l11.67 17.164Z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h3.375m-3.375 0l4.5 4.5m-4.5-4.5L21 3" />
    </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);


export const ChatBubbleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.05 1.05 0 01-1.664-1.223l1.223-1.664a1.05 1.05 0 00-1.223-1.664L8.57 18.571a1.05 1.05 0 01-1.664-1.223l1.223-1.664a1.05 1.05 0 00-1.223-1.664l-3.72-3.72a1.05 1.05 0 01-1.223-1.664l1.664-1.223a1.05 1.05 0 001.664-1.223L2.25 5.252a1.05 1.05 0 011.223-1.664l3.72 3.72a1.05 1.05 0 001.664-1.223L6.43 4.286a1.05 1.05 0 011.664-1.223l3.72 3.72a1.05 1.05 0 001.223-1.664L12.03 2.25a1.05 1.05 0 011.664 1.223l-1.223 1.664a1.05 1.05 0 001.223 1.664l3.72 3.72a1.05 1.05 0 011.223 1.664L18.57 11.43a1.05 1.05 0 001.664 1.223l1.664-1.223a1.05 1.05 0 011.223 1.664l-3.72 3.72a1.05 1.05 0 00-1.223 1.664l1.223 1.664a1.05 1.05 0 01-1.664 1.223l-3.72-3.72a1.05 1.05 0 00-1.664 1.223l1.223 1.664a1.05 1.05 0 01-1.223 1.664l-3.72-3.72" />
    </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-4.43a1.012 1.012 0 011.433 0l4.43 4.43a1.012 1.012 0 010 .639l-4.43 4.43a1.012 1.012 0 01-1.433 0l-4.43-4.43z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
