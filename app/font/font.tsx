import localFont from "next/font/local";

const blender = localFont({
  src: [
    {
      path: "BlenderPro-Heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "BlenderPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "BlenderPro-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "BlenderPro-Book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "BlenderPro-Thin.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--blender",
});

export default blender;
