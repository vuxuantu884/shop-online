export interface IThemes {
  breakpoints: IBreakPoints;
  colors: IColors;
}

export interface IBreakPoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

export interface IColors {
  main: string;
}
