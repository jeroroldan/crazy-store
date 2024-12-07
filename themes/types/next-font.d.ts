declare module "next/font/google" {
  interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: "auto" | "block" | "swap" | "fallback" | "optional";
    variable?: string;
  }

  interface Font {
    className: string;
    style: {
      fontFamily: string;
      fontWeight?: number | string;
      fontStyle?: string;
    };
    variable: string;
  }

  export function Roboto(options: FontOptions): Font;
  // Add other Google Fonts you might use in a similar manner
}
