import React from "react";

export interface BrandLogoProps {
  brand: string;
  size?: number;
  color?: string;
}

export const OpenAILogo: React.FC<{ size?: number; color?: string }> = ({
  size = 84,
  color = "#FFFFFF",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829V6.0505a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66z"
      fill={color}
    />
  </svg>
);

export const AnthropicLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 84,
  color = "#D97757",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8 3L8.2 19.5H11.6L13.1 15H17.8L19.3 19.5H22.7L17.1 3H13.8ZM14.1 12.1L15.4 8.2L16.8 12.1H14.1ZM4.9 3L1.1 21H4.6L7.8 8.6L11.1 21H14.6L8.4 3H4.9Z"
      fill={color}
    />
  </svg>
);

export const MicrosoftLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 84,
  color = "#00A4EF",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.4 11.4H2V2H11.4V11.4ZM22 11.4H12.6V2H22V11.4ZM11.4 22H2V12.6H11.4V22ZM22 22H12.6V12.6H22V22Z" fill={color} />
  </svg>
);

export const GoogleLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 84,
  color = "#4285F4",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

export const MetaLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 84,
  color = "#0668E1",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.94 4.88C14.77 4.88 13.06 6.13 12 7.76c-1.06-1.63-2.77-2.88-4.94-2.88C3.89 4.88 1.5 7.6 1.5 11.46c0 4.25 2.82 7.66 6.47 7.66 2.37 0 4.19-1.43 5.32-3.32l.71-1.18.71 1.18c1.13 1.89 2.95 3.32 5.32 3.32 3.65 0 6.47-3.41 6.47-7.66 0-3.86-2.39-6.58-5.56-6.58zm-9.88 11.8c-2.3 0-4.12-2.33-4.12-5.22 0-2.58 1.45-4.34 3.22-4.34 1.57 0 2.88 1.25 3.91 3.38l-3.01 6.18zm9.88 0c-2.3 0-4.12-2.33-4.12-5.22 0-2.58 1.45-4.34 3.22-4.34 1.57 0 2.88 1.25 3.91 3.38l-3.01 6.18z"
      fill={color}
    />
  </svg>
);

export const BrandLogoSVG: React.FC<BrandLogoProps> = ({ brand, size = 84, color }) => {
  const b = brand.toLowerCase();
  if (b.includes("openai") || b.includes("altman") || b.includes("sora") || b.includes("brockman") || b.includes("commercial")) {
    return <OpenAILogo size={size} color={color || "#10A37F"} />;
  }
  if (b.includes("anthropic") || b.includes("dario") || b.includes("amodei") || b.includes("safety")) {
    return <AnthropicLogo size={size} color={color || "#D97757"} />;
  }
  if (b.includes("microsoft") || b.includes("azure")) {
    return <MicrosoftLogo size={size} color={color || "#00A4EF"} />;
  }
  if (b.includes("google")) {
    return <GoogleLogo size={size} />;
  }
  if (b.includes("meta")) {
    return <MetaLogo size={size} color={color || "#0668E1"} />;
  }
  return <OpenAILogo size={size} color={color || "#FFFFFF"} />;
};
