import React, { ReactNode } from 'react';
import { ThemeProvider } from "@dotsquares/foundation.ui-elements.mui.theme.theme-provider";

export type BodyTextProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BodyText({ children }: BodyTextProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
