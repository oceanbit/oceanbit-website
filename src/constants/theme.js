class DynamicValue {
  constructor(light, dark) {
    this.light = light
    this.dark = dark
  }
}

const colors = {
  blue: {
    ["300"]: "#8AB0FC",
    ["600"]: "#133EEC",
  },
  pink: {
    ["300"]: "#FFA3C5",
    ["600"]: "#DA2F84",
  },
  slate: {
    ["900"]: "#121926",
  },
}

export const themeColors = {
  primary_dark: colors.blue["300"],
  error_dark: colors.pink["300"],
  highEmphasis_dark: "#D9E1F2",
  mediumEmphasis_dark: "rgba(217, 225, 242, 0.64)",
  lowEmphasis_dark: "rgba(217, 225, 242, 0.32)",
  neutralRipple_dark: "rgba(217, 225, 242, 0.24)",
  on_surface_01_dark: "rgba(217, 225, 242, 0.16)",
  on_surface_02_dark: "rgba(217, 225, 242, 0.08)",
  on_surface_03_dark: "rgba(217, 225, 242, 0.04)",
  base_dark: colors.slate["900"],
  primary_ripple_dark: "rgba(138, 176, 252, 0.3)",

  primary_light: colors.blue["600"],
  error_light: colors.pink["600"],
  highEmphasis_light: "rgba(42, 55, 81, 1)",
  mediumEmphasis_light: "rgba(42, 55, 81, 0.64)",
  lowEmphasis_light: "rgba(42, 55, 81, 0.32)",
  neutralRipple_light: "rgba(42, 55, 81, 0.24)",
  on_surface_01_light: "rgba(42, 55, 81, 0.16)",
  on_surface_02_light: "rgba(42, 55, 81, 0.08)",
  on_surface_03_light: "rgba(42, 55, 81, 0.04)",
  base_light: "white",
  primary_ripple_light: "rgba(19, 62, 236, 0.3)",
}

export const theme = {
  colors: {
    primary: new DynamicValue(
      themeColors.primary_light,
      themeColors.primary_dark
    ),
    error: new DynamicValue(themeColors.error_light, themeColors.error_dark),
    highEmphasis: new DynamicValue(
      themeColors.highEmphasis_light,
      themeColors.highEmphasis_dark
    ),
    mediumEmphasis: new DynamicValue(
      themeColors.mediumEmphasis_light,
      themeColors.mediumEmphasis_dark
    ),
    lowEmphasis: new DynamicValue(
      themeColors.lowEmphasis_light,
      themeColors.lowEmphasis_dark
    ),
    neutralRipple: new DynamicValue(
      themeColors.neutralRipple_light,
      themeColors.neutralRipple_dark
    ),
    on_surface_01: new DynamicValue(
      themeColors.on_surface_01_light,
      themeColors.on_surface_01_dark
    ),
    on_surface_02: new DynamicValue(
      themeColors.on_surface_02_light,
      themeColors.on_surface_02_dark
    ),
    on_surface_03: new DynamicValue(
      themeColors.on_surface_03_light,
      themeColors.on_surface_03_dark
    ),
    base: new DynamicValue(themeColors.base_light, themeColors.base_dark),
    primary_ripple: new DynamicValue(
      themeColors.primary_ripple_light,
      themeColors.primary_ripple_dark
    ),
  },
}

export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
