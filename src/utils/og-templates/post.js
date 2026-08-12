import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  const authorName = post.data.author || SITE.author || "Rudy Galan";
  const postDesc = post.data.description || "";
  const domainName = SITE.website
    ? SITE.website.replace("https://", "").replace("/", "")
    : "rudygalan.com";

  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#07080c",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.38) 0%, rgba(180, 50, 0, 0.18) 35%, rgba(7, 8, 12, 1) 75%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "50px 60px",
          position: "relative",
          boxSizing: "border-box",
        },
        children: [
          /* Inset Glass Frame Line */
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "24px",
                left: "24px",
                right: "24px",
                bottom: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
              },
            },
          },
          /* Main Content Layout Container */
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
              },
              children: [
                /* Top Branding Header */
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#f97316",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          },
                          children: SITE.title,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 16,
                            color: "#6b7280",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                          },
                          children: "BLUEPRINT / ANALYSIS",
                        },
                      },
                    ],
                  },
                },
                /* Center Title & Optional Description */
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      maxWidth: "920px",
                    },
                    children: [
                      {
                        type: "p",
                        props: {
                          style: {
                            fontSize: 56,
                            fontWeight: "bold",
                            color: "#ffffff",
                            margin: 0,
                            lineHeight: 1.15,
                            maxHeight: "220px",
                            overflow: "hidden",
                          },
                          children: post.data.title,
                        },
                      },
                      postDesc
                        ? {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 22,
                                color: "#9ca3af",
                                margin: 0,
                                lineHeight: 1.35,
                                maxHeight: "60px",
                                overflow: "hidden",
                              },
                              children: postDesc,
                            },
                          }
                        : null,
                    ].filter(Boolean),
                  },
                },
                /* Footer Metadata Bar */
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                      paddingTop: "18px",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 18,
                            color: "#e5e7eb",
                            fontWeight: "bold",
                          },
                          children: `by ${authorName}`,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 16,
                            color: "#9ca3af",
                          },
                          children: domainName,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title +
          authorName +
          SITE.title +
          "by" +
          postDesc +
          "BLUEPRINT / ANALYSIS"
      ),
    }
  );
};