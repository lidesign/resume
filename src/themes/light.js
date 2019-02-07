/**
 * Color Palette Guide:
 * Bright Colors: safe on black
 * Dark Colors: safe on white
 */
const colors = {
  primary: "#8629e2",
  secondary: "#94f5ff",
  bg1: "#8629e2",
  bg2: "#FCF0F2",
  text1: "#421075",
  text2: "#FCF0F2",

  black: "#171717",
  white: "#FCF0F2",

  purple_dark: "#8629e2",
  purple_light: "#C295EE",

  blue_dark: "#0ebeff",
  blue_light: "#94f5ff",

  green_dark: "#28a228",
  green_light: "#72ff7d",
};

module.exports = {
  colors,
  primary_color: colors.primary,

  header_padding: "80px",
  header_color: colors.white,
  header_color_odd: colors.purple_dark,
  header_background: colors.purple_dark,
  header_background_odd: colors.white,

  content_padding: "40px",
  content_color: colors.white,
  content_color_odd: colors.purple_dark,
  content_background: colors.purple_dark,
  content_background_odd: colors.white,
  content_separator: "rgba(255, 255, 255, 0.1)",
  content_separator_odd: "rgba(0, 0, 0, 0.1)",

  timeline_color: colors.white,
  timeline_padding: "40px",
  timeline_background: colors.purple_dark,

  panel_padding: "40px 60px",
  panel_background: colors.purple_dark,
  panel_background_fullscreen: "rgba(255, 255, 255, 0.75)",
  panel_radius: "8px",

  // Post Component
  post_header_font_size: "24px",
  post_header_font_size_mobile: "1.25rem",
  post_body_font_size: "22px",
  post_body_font_size_mobile: "18px",

  prism_background: "transparent",
};
