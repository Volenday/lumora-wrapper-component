import { jsx as e, jsxs as s, Fragment as ce } from "react/jsx-runtime";
import { useTheme as ye, useMediaQuery as Re, Box as O, CircularProgress as Te, CssBaseline as be, Drawer as Ee, Grid as Q } from "@mui/material";
import * as J from "react";
import { useState as Y, useEffect as q } from "react";
import ee from "axios";
import se from "@mui/icons-material/AccountCircleRounded";
import de from "@mui/icons-material/LogoutRounded";
import De from "@mui/icons-material/MenuRounded";
import Me from "@mui/icons-material/NotificationsOutlined";
import Ce from "@mui/icons-material/SearchRounded";
import Ae from "@mui/material/AppBar";
import Z from "@mui/material/Avatar";
import he from "@mui/material/Badge";
import R from "@mui/material/Box";
import w from "@mui/material/Divider";
import B from "@mui/material/IconButton";
import _e from "@mui/material/InputAdornment";
import Oe from "@mui/material/Menu";
import le from "@mui/material/MenuItem";
import f from "@mui/material/Stack";
import { styled as Be } from "@mui/material/styles";
import ze from "@mui/material/TextField";
import Ue from "@mui/material/Toolbar";
import u from "@mui/material/Typography";
import je from "@mui/material/useMediaQuery";
import We from "@mui/material/Card";
import Le from "@mui/material/CardContent";
import fe from "@mui/material/Button";
import Ve from "@mui/icons-material/AutoAwesomeRounded";
import ae from "@mui/material/Tooltip";
import Ke from "@mui/icons-material/NotificationsRounded";
import Ne from "@mui/material/Drawer";
let re = !1;
const $e = () => {
  re = !0;
}, Fe = () => {
  re = !1;
}, Pe = ee.create(), V = ee.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
V.interceptors.request.use(
  (t) => {
    const i = localStorage.getItem("lumoraAccessToken");
    return i && (t.headers.Authorization = `Bearer ${i}`), t;
  },
  (t) => Promise.reject(t)
);
V.interceptors.response.use(
  (t) => t,
  async (t) => {
    var o;
    const i = t.config;
    if (((o = t.response) == null ? void 0 : o.status) === 401 && re && i && !i._retry) {
      i._retry = !0;
      try {
        const c = localStorage.getItem("lumoraRefreshToken");
        if (!c)
          throw new Error("No refresh token available");
        const l = await Pe.post(
          `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
          { refresh_token: c },
          {
            headers: {
              "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
              "Content-Type": "application/json"
            }
          }
        );
        if (l.data.success && l.data.accessToken)
          return localStorage.setItem(
            "lumoraAccessToken",
            l.data.accessToken
          ), l.data.refreshToken && localStorage.setItem(
            "lumoraRefreshToken",
            l.data.refreshToken
          ), i.headers.Authorization = `Bearer ${l.data.accessToken}`, V(i);
        throw new Error("Invalid refresh response");
      } catch (c) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(c);
      }
    }
    return Promise.reject(t);
  }
);
const Dr = async () => {
  const t = localStorage.getItem("lumoraRefreshToken");
  if (!t)
    throw new Error("No refresh token available for logout");
  await V.post("/auth/logout", {
    refresh_token: t
  });
}, Ge = async () => {
  const t = localStorage.getItem("lumoraAccessToken"), i = localStorage.getItem("lumoraRefreshToken");
  if (t)
    return !0;
  if (i)
    try {
      const o = await ee.post(
        `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
        { refresh_token: i },
        {
          headers: {
            "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
            "Content-Type": "application/json"
          }
        }
      );
      if (o.data.success && o.data.accessToken)
        return localStorage.setItem(
          "lumoraAccessToken",
          o.data.accessToken
        ), o.data.refreshToken && localStorage.setItem(
          "lumoraRefreshToken",
          o.data.refreshToken
        ), !0;
    } catch (o) {
      console.error("Token refresh failed:", o);
    }
  return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", !1;
}, He = Be(Ue)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Xe = ({
  appName: t = "Dashboard",
  pageName: i = "Home",
  onMenuClick: o,
  showMenuButton: c = !0,
  headerStyles: l,
  userName: a = "User Name",
  userEmail: r,
  userAvatar: d,
  onProfileClick: p,
  onAccountClick: T,
  onSettingsClick: k,
  onLogout: m,
  showNotifications: I = !1,
  notificationCount: b = 0,
  showSearchbar: x = !0,
  searchValue: E,
  onSearchChange: D,
  onSearchSubmit: M,
  showProfile: C = !0,
  userRole: K,
  accentColor: N = "#01584f",
  contentBackgroundColor: $ = "#f2f9fc",
  navbarBackground: F = "#ff0000",
  navbarAccentColor: h = "#000000",
  rightExtraContent: z = [],
  customNavbar: g,
  customNavbarProps: P
}) => {
  const U = je((n) => n.breakpoints.up("md")), [j, W] = J.useState(null), v = !!j, A = (n) => {
    D == null || D(n.target.value);
  }, G = (n) => {
    n.key === "Enter" && M && E && M(E);
  }, H = (n) => n ? n.charAt(0).toUpperCase() + n.slice(1).toLowerCase() : "User", _ = (n) => {
    W(n.currentTarget);
  }, S = () => {
    W(null);
  }, L = (n) => {
    n == null || n(), S();
  };
  return /* @__PURE__ */ e(
    Ae,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: F,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...l
      },
      children: /* @__PURE__ */ s(He, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ s(
          f,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              c && !U && /* @__PURE__ */ e(
                B,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: h,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ e(De, {})
                }
              ),
              /* @__PURE__ */ s(
                f,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ e(
                      u,
                      {
                        variant: "h6",
                        sx: {
                          color: h,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: t
                      }
                    ),
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: "/lumora-logo.svg",
                        alt: "NEXA Logo",
                        width: 24,
                        height: 24,
                        style: { flexShrink: 0 }
                      }
                    )
                  ]
                }
              ),
              g ? /* @__PURE__ */ e(g, { ...P || {} }) : x && U && /* @__PURE__ */ e(
                ze,
                {
                  placeholder: "Search for deals or documents...",
                  value: E || "",
                  onChange: A,
                  onKeyDown: G,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: $,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: N
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ e(_e, { position: "start", children: /* @__PURE__ */ e(
                      Ce,
                      {
                        sx: {
                          color: h
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(
          f,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              I && /* @__PURE__ */ e(
                he,
                {
                  color: "error",
                  variant: "dot",
                  invisible: b === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ e(
                    B,
                    {
                      size: "small",
                      sx: { color: h },
                      children: /* @__PURE__ */ e(Me, {})
                    }
                  )
                }
              ),
              I && C && /* @__PURE__ */ e(
                w,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ),
              C && /* @__PURE__ */ s(ce, { children: [
                /* @__PURE__ */ s(
                  f,
                  {
                    direction: "row",
                    onClick: _,
                    sx: {
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      "&:hover": {
                        backgroundColor: "action.hover"
                      }
                    },
                    children: [
                      d ? /* @__PURE__ */ e(
                        Z,
                        {
                          src: d,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ e(
                        se,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: h
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        R,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ e(
                              u,
                              {
                                variant: "body2",
                                sx: {
                                  color: h,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: a
                              }
                            ),
                            /* @__PURE__ */ e(
                              u,
                              {
                                variant: "caption",
                                sx: {
                                  color: h,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: H(K)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  Oe,
                  {
                    anchorEl: j,
                    open: v,
                    onClose: S,
                    transformOrigin: {
                      horizontal: "right",
                      vertical: "top"
                    },
                    anchorOrigin: {
                      horizontal: "right",
                      vertical: "bottom"
                    },
                    sx: {
                      "& .MuiList-root": {
                        padding: "4px"
                      },
                      "& .MuiPaper-root": {
                        padding: 0
                      },
                      "& .MuiDivider-root": {
                        margin: "4px -4px"
                      }
                    },
                    children: [
                      /* @__PURE__ */ e(
                        le,
                        {
                          onClick: () => L(k),
                          children: "Settings"
                        }
                      ),
                      /* @__PURE__ */ e(w, {}),
                      /* @__PURE__ */ s(
                        le,
                        {
                          onClick: () => L(m),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ e(u, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ e(de, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              z.length !== 0 && z.map((n) => n.type === "divider" ? /* @__PURE__ */ e(
                w,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ) : n.type === "profile" ? /* @__PURE__ */ s(
                f,
                {
                  direction: "row",
                  onClick: n.onClick,
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    borderRadius: "8px",
                    padding: "4px 8px",
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: [
                    n.avatar ? /* @__PURE__ */ e(
                      Z,
                      {
                        src: n.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ e(
                      se,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: h
                        }
                      }
                    ),
                    /* @__PURE__ */ s(
                      R,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ e(
                            u,
                            {
                              variant: "body2",
                              sx: {
                                color: h,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: n.name
                            }
                          ),
                          /* @__PURE__ */ e(
                            u,
                            {
                              variant: "caption",
                              sx: {
                                color: h,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: n.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, pe = ({
  title: t = "",
  message: i = "",
  buttonText: o = "",
  onButtonClick: c,
  show: l = !0
}) => l ? /* @__PURE__ */ e(We, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ s(Le, { children: [
  /* @__PURE__ */ e(Ve, { fontSize: "small" }),
  /* @__PURE__ */ e(u, { gutterBottom: !0, sx: { fontWeight: 600 }, children: t }),
  /* @__PURE__ */ e(
    u,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: i
    }
  ),
  /* @__PURE__ */ e(
    fe,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: c,
      children: o
    }
  )
] }) }) : null, me = ({
  mainLinks: t,
  secondaryLinks: i = [],
  activePath: o,
  onLinkClick: c,
  accentColor: l = "#01584f"
}) => {
  const a = (r) => {
    c && c(r);
  };
  return /* @__PURE__ */ s(
    f,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        t.map((r, d) => /* @__PURE__ */ s(J.Fragment, { children: [
          /* @__PURE__ */ e(ae, { title: r.text, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
            B,
            {
              component: "a",
              href: r.path,
              onClick: (p) => {
                p.preventDefault(), p.stopPropagation(), a(r.path);
              },
              sx: {
                width: 44,
                height: 44,
                color: o === r.path ? "#ffffff" : l,
                backgroundColor: o === r.path ? l : "transparent",
                borderRadius: o === r.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: o === r.path ? l : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: r.icon
            }
          ) }),
          d < t.length - 1 && /* @__PURE__ */ e(
            R,
            {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ e(
                w,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          )
        ] }, d)),
        i.length > 0 && /* @__PURE__ */ s(ce, { children: [
          /* @__PURE__ */ e(
            R,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ e(
                w,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ e(R, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(f, { gap: 1, alignItems: "center", children: i.map((r, d) => /* @__PURE__ */ s(J.Fragment, { children: [
            /* @__PURE__ */ e(
              ae,
              {
                title: r.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ e(
                  B,
                  {
                    component: "a",
                    href: r.path,
                    onClick: (p) => {
                      p.preventDefault(), p.stopPropagation(), a(r.path);
                    },
                    sx: {
                      width: 48,
                      height: 48,
                      color: o === r.path ? "#ffffff" : "text.secondary",
                      backgroundColor: o === r.path ? "#01584F" : "transparent",
                      borderRadius: o === r.path ? "4px" : "50%",
                      "&:hover": {
                        backgroundColor: o === r.path ? "#01584F" : "action.hover",
                        borderRadius: "4px"
                      }
                    },
                    children: r.icon
                  }
                )
              }
            ),
            d < i.length - 1 && /* @__PURE__ */ e(
              R,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ e(
                  w,
                  {
                    sx: {
                      width: "60%",
                      borderColor: "divider"
                    }
                  }
                )
              }
            )
          ] }, d)) }) })
        ] })
      ]
    }
  );
}, Qe = ({
  open: t,
  onClose: i,
  mainLinks: o,
  secondaryLinks: c = [],
  activePath: l,
  onLinkClick: a,
  userName: r = "User Name",
  userAvatar: d,
  onLogout: p,
  showNotifications: T = !1,
  notificationCount: k = 0,
  alertProps: m,
  accentColor: I = "#01584f"
}) => /* @__PURE__ */ e(
  Ne,
  {
    anchor: "right",
    open: t,
    onClose: i,
    sx: {
      zIndex: (x) => x.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ s(
      f,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ s(f, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ s(
              f,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ e(
                    Z,
                    {
                      sizes: "small",
                      alt: r,
                      src: d,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ e(u, { component: "p", variant: "h6", children: r })
                ]
              }
            ),
            T && /* @__PURE__ */ e(
              he,
              {
                color: "error",
                variant: "dot",
                invisible: k === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ e(B, { size: "small", children: /* @__PURE__ */ e(Ke, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ e(w, {}),
          /* @__PURE__ */ s(f, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ e(
              me,
              {
                mainLinks: o,
                secondaryLinks: c,
                activePath: l,
                onLinkClick: (x) => {
                  a == null || a(x), i();
                },
                accentColor: I
              }
            ),
            /* @__PURE__ */ e(w, {})
          ] }),
          (m == null ? void 0 : m.show) && /* @__PURE__ */ e(pe, { ...m }),
          /* @__PURE__ */ e(f, { sx: { p: 2 }, children: /* @__PURE__ */ e(
            fe,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ e(de, {}),
              onClick: p,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Mr = ({
  children: t,
  sidebarLinks: i = [],
  secondarySidebarLinks: o = [],
  appName: c = "Dashboard",
  pageName: l = "Home",
  showHeader: a = !0,
  showSidebar: r = !0,
  enableRefreshToken: d = !1,
  activePath: p,
  onLinkClick: T,
  userName: k,
  userEmail: m,
  userAvatar: I,
  onLogout: b,
  onProfileClick: x,
  onAccountClick: E,
  onSettingsClick: D,
  showNotifications: M = !0,
  notificationCount: C = 0,
  showSearchbar: K = !0,
  searchValue: N,
  onSearchChange: $,
  onSearchSubmit: F,
  showProfile: h = !0,
  userRole: z,
  alertProps: g,
  style: P,
  headerStyles: U,
  sidebarStyles: j,
  contentStyles: W,
  accentColor: v = "#01584f",
  contentBackgroundColor: A = "#f2f9fc",
  navbarBackground: G = "#ffffff",
  navbarAccentColor: H = "#000000",
  GlobalChatSidebar: _,
  useChatSidebar: S,
  rightExtraContent: L,
  customNavbar: n,
  customNavbarProps: ue
}) => {
  const xe = ye(), y = Re(xe.breakpoints.down("md")), [oe, te] = Y(!1), [ge, we] = Y(!0), [Ie, ke] = Y(!1), X = S == null ? void 0 : S(), ne = (X == null ? void 0 : X.isOpen) ?? !1, ve = () => {
    te(!oe);
  }, Se = () => {
    te(!1);
  };
  return q(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        ke(!0);
      } catch (ie) {
        console.error("Error checking session:", ie), window.location.href = "/login";
      } finally {
        we(!1);
      }
    })();
  }, []), q(() => (d && $e(), () => {
    Fe();
  }), [d]), q(() => {
    d && Ge();
  }, [d]), ge ? /* @__PURE__ */ s(
    O,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ e(
          Te,
          {
            size: 60,
            thickness: 4,
            sx: { color: v }
          }
        ),
        /* @__PURE__ */ e(O, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : Ie ? /* @__PURE__ */ s(
    O,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...P
      },
      children: [
        /* @__PURE__ */ e(be, {}),
        a && /* @__PURE__ */ e(
          Xe,
          {
            appName: c,
            pageName: l,
            onMenuClick: y && r ? ve : void 0,
            showMenuButton: y && r,
            headerStyles: U,
            userName: k,
            userEmail: m,
            userAvatar: I,
            onProfileClick: x,
            onAccountClick: E,
            onSettingsClick: D,
            onLogout: b,
            showNotifications: M,
            notificationCount: C,
            showSearchbar: K && !n,
            searchValue: N,
            onSearchChange: $,
            onSearchSubmit: F,
            showProfile: h,
            userRole: z,
            accentColor: v,
            contentBackgroundColor: A,
            navbarBackground: G,
            navbarAccentColor: H,
            rightExtraContent: L,
            customNavbar: n,
            customNavbarProps: ue
          }
        ),
        r && !y && /* @__PURE__ */ e(
          Ee,
          {
            variant: "permanent",
            sx: {
              width: 80,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: 80,
                boxSizing: "border-box",
                bgcolor: A,
                borderRight: "none",
                top: a ? "60px" : 0,
                // Position below header
                height: a ? "calc(100vh - 60px)" : "100vh"
              },
              ...j
            },
            children: /* @__PURE__ */ s(
              O,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ e(
                    me,
                    {
                      mainLinks: i,
                      secondaryLinks: o,
                      activePath: p,
                      onLinkClick: T,
                      accentColor: v
                    }
                  ),
                  (g == null ? void 0 : g.show) && /* @__PURE__ */ e(pe, { ...g })
                ]
              }
            )
          }
        ),
        r && y && /* @__PURE__ */ e(
          Qe,
          {
            open: oe,
            onClose: Se,
            mainLinks: i,
            secondaryLinks: o,
            activePath: p,
            onLinkClick: T,
            userName: k,
            userEmail: m,
            userAvatar: I,
            onLogout: b,
            onProfileClick: x,
            showNotifications: M,
            notificationCount: C,
            alertProps: g,
            accentColor: v
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: y ? "100%" : r ? "calc(100% - 80px)" : "100%",
              mt: a ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: A,
              // White background for main content
              ...W
            },
            children: /* @__PURE__ */ s(Q, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ e(
                Q,
                {
                  size: {
                    xs: 12,
                    md: ne && _ ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: t
                }
              ),
              ne && _ && /* @__PURE__ */ e(
                Q,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: a ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: a ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: a ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ e(_, {})
                }
              )
            ] })
          }
        )
      ]
    }
  ) : null;
};
export {
  Mr as LumoraWrapper,
  Mr as default,
  Dr as logoutUser
};
