import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import MontserratR from "./fonts/Montserrat-Regular.woff";
import MontserratR2 from "./fonts/Montserrat-Regular.woff2";
import MontserratSB from "./fonts/Montserrat-SemiBold.woff";
import MontserratSB2 from "./fonts/Montserrat-SemiBold.woff2";
import MontserratB from "./fonts/Montserrat-Bold.woff";
import MontserratB2 from "./fonts/Montserrat-Bold.woff2";

const montserratR = {
  fontFamily: "Montserrat",
  src: `url(${MontserratR2}) format('woff2'),
        url(${MontserratR}) format('woff')`,
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
};

const montserratSemiBold = {
  fontFamily: "Montserrat",
  src: `url(${MontserratSB2}) format('woff2'),
        url(${MontserratSB}) format('woff')`,
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
};

const montserratBold = {
  fontFamily: "Montserrat",
  src: `url(${MontserratB2}) format('woff2'),
        url(${MontserratB}) format('woff')`,
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "bold",
};

export type ThemeProviderProps = {
  /**
   * a custom MUI theme object. If none is supplied, will use default theme objet
   */
  theme?: any;
  /**
   * a node to be rendered in the special component.
   */
  children?: React.ReactNode;
};

let defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2A2C44",
    },
    secondary: {
      main: "#63758B",
    },
    error: {
      main: "#D33525",
    },
    success: {
      main: "#80C2AC",
    },
    accentOne: {
      main: "#FE7E0F",
      contrastText: "#fff",
    },
  },
});

// Default theme for Grypp taken from XD design.
defaultTheme = createTheme(defaultTheme, {
  MuiCssBaseline: {
    styleOverrides: {
      "@font-face": [montserratR, montserratSemiBold, montserratBold],
      fallbacks: [
        {
          "@font-face": [montserratR, montserratSemiBold, montserratBold],
        },
      ],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          color: "#2A2C44",
          marginTop: 0,
          marginBottom: "30px",

          ".MuiInputLabel-root": {
            fontSize: 18,
            lineHeight: "22px",
            transform: "translate(0)",
            color: "#2A2C44",
            position: "relative",
            marginBottom: "5px",
            fontWeight: 400,
          },

          ".MuiInputBase-root": {
            padding: 0,

            ".MuiInputBase-input": {
              padding: "12.07px 14px",
              fontWeight: 400,
              fontSize: 18,

              "&[type*='file']": {
                color: "transparent",

                "&::-webkit-file-upload-button": {
                  display: "none",
                },
              },

              "&::placeholder": {
                color: "rgb(42 44 68 / 50%)",
              },

              "&:hover": {
                "&::placeholder": {
                  color: "#2A2C44",
                  opacity: 1,
                },
              },
            },

            ".MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E1E1E1 !important",
              span: {
                display: "none",
              },
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#80C2AC !important",
              borderWidth: "1px !important",
            },

            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D33525 !important",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E1E1E1 !important",
            },

            "&.Mui-disabled": {
              background: "#F5F5F5 !important",
            },
          },

          ".MuiFormHelperText-root": {
            fontSize: 12,
            fontWeight: 300,
          },

          ".MuiSelect-icon": {
            display: "none",
          },

          ".MuiSelect-nativeInput": {
            "~ .MuiInputAdornment-root": {
              position: "absolute",
              right: "0px",
              zIndex: "-1",
            },
          },

          "&.customSelectBox": {
            ".MuiSelect-select": {
              minWidth: "200px",

              "~ .MuiSelect-icon": {
                display: "block",
              },
            },
          },

          "& + .customFileUploader": {
            position: "absolute",
            top: "52px",
            transform: "translateY(-50%)",
            right: 10,
            left: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 50,

            "& input": {
              opacity: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
            },

            "& p": {
              color: "#2A2C44",
              fontSize: 18,
              opacity: 0.5,
            },
          },

          ".error-message": {
            color: "#D33525",
            fontFamily: "Montserrat",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: 400,
          height: "50px",
          padding: "0 26px",
          textTransform: "none",
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        contained: {
          boxShadow: "none",

          "&:active": {
            boxShadow: "none",
          },

          "&:hover, &:focus": {
            boxShadow: "0px 8px 14px rgb(0 0 0 / 16%)",
          },

          "&.Mui-disabled": {
            borderColor: "rgba(0, 0, 0, 0.12)",
            border: "1px solid #E1E1E1",
            background: "transparent",
          },
        },
        containedSizeSmall: {
          fontSize: "14px",
          height: "35px",
          borderRadius: "5px",
          padding: "0 20px",
        },
        containedPrimary: {
          color: "#fff",

          "&:active": {
            boxShadow: "none",
          },

          "&:hover, &:focus": {
            background: "#2A2C44",
            boxShadow: "0px 8px 14px rgb(0 0 0 / 16%)",
          },

          "&.Mui-disabled": {
            borderColor: "rgba(0, 0, 0, 0.12)",
          },
        },
        containedSuccess: {
          color: "#fff",

          "&:active": {
            boxShadow: "none",
          },

          "&:hover, &:focus": {
            background: "#80C2AC",
            boxShadow: "0px 8px 14px rgb(0 0 0 / 16%)",
          },
        },
        outlinedSizeSmall: {
          fontSize: "14px",
          padding: "0 20px",
          height: "35px",
        },
        outlinedSizeLarge: {
          fontSize: "16px",
        },
        outlinedAccentOne: {
          border: "1px solid #FE7E0F",
        },
        outlinedPrimary: {
          "&:hover": {
            background: "rgb(42 44 68 / 4%)",
          },

          "&:focus, &:active": {
            background: "rgb(42 44 68 / 12%)",
          },

          "&:active": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
          },
        },
        outlinedSuccess: {
          "&:hover": {
            background: "rgb(128 194 172 / 4%)",
          },

          "&:focus, &:active": {
            background: "rgb(128 194 172 / 12%)",
          },

          "&:active": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
          },
        },
        text: {
          border: "none",
          fontWeight: 400,
          height: "auto",
          padding: "0",

          "&:hover": {
            background: "transparent",
            textDecoration: "underline",
          },

          "&:focus, &:active": {
            background: "transparent",
            textDecoration: "none",
          },
        },
        textSizeSmall: {
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "left",
          lineHeight: 1.5,
          padding: 0,
          minWidth: 0,
        },
        textSizeLarge: {
          fontSize: "16px",
          fontWeight: 400,
          textAlign: "left",
          lineHeight: 1.5,
          padding: 0,
          minWidth: 0,
        },
        textPrimary: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
        startIcon: {
          marginRight: "5px",
        },
        endIcon: {
          marginLeft: "5px",
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: 0,
          background: "none",
          borderRadius: "5px",
          "&:active, &:hover": {
            background: "transparent",
            boxShadow: "none",
          },
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#fff",
              background: "#FE7E0F",
              borderColor: "#FE7E0F",
            },
          },
          ".MuiSvgIcon-root": {
            width: "25px",
            height: "25px",
            color: "transparent",
            border: "1px solid #E1E1E1",
            borderRadius: "3px",

            "&.MuiSvgIcon-fontSizeSmall": {
              width: "18px",
              height: "18px",
              borderRadius: "2px",
            },
            "&.MuiSvgIcon-fontSizeLarge": {
              width: "30px",
              height: "30px",
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D33525 !important",
            },
          },

          "&.Mui-disabled": {
            ".MuiSvgIcon-root": {
              background: "#F5F5F5",
            },
            "&.Mui-checked": {
              ".MuiSvgIcon-root": {
                background: "#FE7E0F",
                opacity: "0.4",
              },
            },
          },
        },

        colorPrimary: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              background: "#2A2C44",
              borderColor: "#2A2C44",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                background: "#2A2C44",
              },
            },
          },
        },
        colorSecondary: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              background: "#63758B",
              borderColor: "#63758B",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                background: "#63758B",
              },
            },
          },
        },
        colorError: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              background: "#D33525",
              borderColor: "#D33525",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                background: "#D33525",
              },
            },
          },
        },
        colorSuccess: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              background: "#80C2AC",
              borderColor: "#80C2AC",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                background: "#80C2AC",
              },
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: 0,
          background: "none",
          borderRadius: "5px",
          "&:active, &:hover": {
            background: "transparent",
            boxShadow: "none",
          },
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#FE7E0F",
              borderColor: "#FE7E0F",
            },
          },
          ".MuiSvgIcon-root": {
            width: "25px",
            height: "25px",
            color: "transparent",
            border: "1px solid #E1E1E1",
            borderRadius: "50%",

            "&.MuiSvgIcon-fontSizeSmall": {
              width: "18px",
              height: "18px",
            },
            "&.MuiSvgIcon-fontSizeLarge": {
              width: "30px",
              height: "30px",
            },
          },
          "&.Mui-disabled": {
            ".MuiSvgIcon-root": {
              background: "#F5F5F5",
            },
            "&.Mui-checked": {
              ".MuiSvgIcon-root": {
                color: "#FE7E0F",
                opacity: "0.4",
              },
            },
          },
        },
        colorPrimary: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#2A2C44",
              borderColor: "#2A2C44",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                color: "#2A2C44",
              },
            },
          },
        },
        colorSecondary: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#63758B",
              borderColor: "#63758B",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                color: "#63758B",
              },
            },
          },
        },
        colorError: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#D33525",
              borderColor: "#D33525",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                color: "#D33525",
              },
            },
          },
        },
        colorSuccess: {
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#80C2AC",
              borderColor: "#80C2AC",
            },
            "&.Mui-disabled": {
              ".MuiSvgIcon-root": {
                color: "#80C2AC",
              },
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          background: "#E1E1E1",
          opacity: 1,
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    accentOne: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    accentOne?: PaletteOptions["primary"];
  }
}

//===
// UPDATE ANY MUI COMPONENTS COLOUR PALETTES
//===
// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accentOne: true;
  }
}

// Update the checkbox color prop options
declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    accentOne: true;
  }
}

// Update the Radio color prop options
declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    accentOne: true;
  }
}

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
