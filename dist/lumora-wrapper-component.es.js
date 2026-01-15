import { jsx as e, jsxs as s, Fragment as we } from "react/jsx-runtime";
import { useTheme as Oe, useMediaQuery as _e, Box as _, CircularProgress as Be, CssBaseline as ze, Drawer as Le, Grid as ee } from "@mui/material";
import * as re from "react";
import { useState as K, useRef as ue, useEffect as N } from "react";
import te from "axios";
import xe from "@mui/icons-material/AccountCircleRounded";
import Se from "@mui/icons-material/LogoutRounded";
import je from "@mui/icons-material/MenuRounded";
import We from "@mui/icons-material/NotificationsOutlined";
import Ve from "@mui/icons-material/SearchRounded";
import Ke from "@mui/material/AppBar";
import oe from "@mui/material/Avatar";
import ve from "@mui/material/Badge";
import D from "@mui/material/Box";
import g from "@mui/material/Divider";
import B from "@mui/material/IconButton";
import Ne from "@mui/material/InputAdornment";
import Pe from "@mui/material/Menu";
import ge from "@mui/material/MenuItem";
import f from "@mui/material/Stack";
import { styled as $e } from "@mui/material/styles";
import Fe from "@mui/material/TextField";
import Ge from "@mui/material/Toolbar";
import u from "@mui/material/Typography";
import He from "@mui/material/useMediaQuery";
import Xe from "@mui/material/Card";
import Qe from "@mui/material/CardContent";
import ke from "@mui/material/Button";
import Ye from "@mui/icons-material/AutoAwesomeRounded";
import Ie from "@mui/material/Tooltip";
import qe from "@mui/icons-material/NotificationsRounded";
import Je from "@mui/material/Drawer";
let ne = !1;
const Ze = () => {
  ne = !0;
}, er = () => {
  ne = !1;
}, rr = te.create(), P = te.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
P.interceptors.request.use(
  (t) => {
    const i = localStorage.getItem("lumoraAccessToken");
    return i && (t.headers.Authorization = `Bearer ${i}`), t;
  },
  (t) => Promise.reject(t)
);
P.interceptors.response.use(
  (t) => t,
  async (t) => {
    var o;
    const i = t.config;
    if (((o = t.response) == null ? void 0 : o.status) === 401 && ne && i && !i._retry) {
      i._retry = !0;
      try {
        const c = localStorage.getItem("lumoraRefreshToken");
        if (!c)
          throw new Error("No refresh token available");
        const l = await rr.post(
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
          ), i.headers.Authorization = `Bearer ${l.data.accessToken}`, P(i);
        throw new Error("Invalid refresh response");
      } catch (c) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), localStorage.removeItem("lumoraUser"), window.location.href = "/login", Promise.reject(c);
      }
    }
    return Promise.reject(t);
  }
);
const Wr = async () => {
  const t = localStorage.getItem("lumoraRefreshToken");
  if (!t)
    throw new Error("No refresh token available for logout");
  await P.post("/auth/logout", {
    refresh_token: t
  });
}, or = async () => {
  const t = localStorage.getItem("lumoraAccessToken"), i = localStorage.getItem("lumoraRefreshToken");
  if (t)
    return !0;
  if (i)
    try {
      const o = await te.post(
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
  return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), localStorage.removeItem("lumoraUser"), window.location.href = "/login", !1;
}, tr = $e(Ge)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), nr = ({
  appName: t = "Dashboard",
  pageName: i = "Home",
  onMenuClick: o,
  showMenuButton: c = !0,
  headerStyles: l,
  userName: a = "User Name",
  userEmail: r,
  userAvatar: d,
  onProfileClick: m,
  onAccountClick: E,
  onSettingsClick: S,
  onLogout: p,
  showNotifications: I = !1,
  notificationCount: z = 0,
  showSearchbar: x = !0,
  searchValue: M,
  onSearchChange: A,
  onSearchSubmit: C,
  showProfile: U = !0,
  userRole: $,
  accentColor: F = "#01584f",
  contentBackgroundColor: G = "#f2f9fc",
  navbarBackground: H = "#ff0000",
  navbarAccentColor: h = "#000000",
  rightExtraContent: L = [],
  customNavbar: v,
  customNavbarProps: w
}) => {
  const j = He((n) => n.breakpoints.up("md")), [W, V] = re.useState(null), X = !!W, k = (n) => {
    A == null || A(n.target.value);
  }, O = (n) => {
    n.key === "Enter" && C && M && C(M);
  }, Q = (n) => n ? n.charAt(0).toUpperCase() + n.slice(1).toLowerCase() : "User", Y = (n) => {
    V(n.currentTarget);
  }, R = () => {
    V(null);
  }, T = (n) => {
    n == null || n(), R();
  };
  return /* @__PURE__ */ e(
    Ke,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: H,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...l
      },
      children: /* @__PURE__ */ s(tr, { variant: "dense", sx: { height: "100%" }, children: [
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
              c && !j && /* @__PURE__ */ e(
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
                  children: /* @__PURE__ */ e(je, {})
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
              v ? /* @__PURE__ */ e(v, { ...w || {} }) : x && j && /* @__PURE__ */ e(
                Fe,
                {
                  placeholder: "Search for deals or documents...",
                  value: M || "",
                  onChange: k,
                  onKeyDown: O,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: G,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: F
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ e(Ne, { position: "start", children: /* @__PURE__ */ e(
                      Ve,
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
                ve,
                {
                  color: "error",
                  variant: "dot",
                  invisible: z === 0,
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
                      children: /* @__PURE__ */ e(We, {})
                    }
                  )
                }
              ),
              I && U && /* @__PURE__ */ e(
                g,
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
              U && /* @__PURE__ */ s(we, { children: [
                /* @__PURE__ */ s(
                  f,
                  {
                    direction: "row",
                    onClick: Y,
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
                        oe,
                        {
                          src: d,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ e(
                        xe,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: h
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        D,
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
                                children: Q($)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  Pe,
                  {
                    anchorEl: W,
                    open: X,
                    onClose: R,
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
                        ge,
                        {
                          onClick: () => T(S),
                          children: "Settings"
                        }
                      ),
                      /* @__PURE__ */ e(g, {}),
                      /* @__PURE__ */ s(
                        ge,
                        {
                          onClick: () => T(p),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ e(u, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ e(Se, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              L.length !== 0 && L.map((n) => n.type === "divider" ? /* @__PURE__ */ e(
                g,
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
                      oe,
                      {
                        src: n.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ e(
                      xe,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: h
                        }
                      }
                    ),
                    /* @__PURE__ */ s(
                      D,
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
}, Re = ({
  title: t = "",
  message: i = "",
  buttonText: o = "",
  onButtonClick: c,
  show: l = !0
}) => l ? /* @__PURE__ */ e(Xe, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ s(Qe, { children: [
  /* @__PURE__ */ e(Ye, { fontSize: "small" }),
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
    ke,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: c,
      children: o
    }
  )
] }) }) : null, Te = ({
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
        t.map((r, d) => /* @__PURE__ */ s(re.Fragment, { children: [
          /* @__PURE__ */ e(Ie, { title: r.text, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
            B,
            {
              component: "a",
              href: r.path,
              onClick: (m) => {
                m.preventDefault(), m.stopPropagation(), a(r.path);
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
            D,
            {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ e(
                g,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          )
        ] }, d)),
        i.length > 0 && /* @__PURE__ */ s(we, { children: [
          /* @__PURE__ */ e(
            D,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ e(
                g,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ e(D, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(f, { gap: 1, alignItems: "center", children: i.map((r, d) => /* @__PURE__ */ s(re.Fragment, { children: [
            /* @__PURE__ */ e(
              Ie,
              {
                title: r.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ e(
                  B,
                  {
                    component: "a",
                    href: r.path,
                    onClick: (m) => {
                      m.preventDefault(), m.stopPropagation(), a(r.path);
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
              D,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ e(
                  g,
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
}, ir = ({
  open: t,
  onClose: i,
  mainLinks: o,
  secondaryLinks: c = [],
  activePath: l,
  onLinkClick: a,
  userName: r = "User Name",
  userAvatar: d,
  onLogout: m,
  showNotifications: E = !1,
  notificationCount: S = 0,
  alertProps: p,
  accentColor: I = "#01584f"
}) => /* @__PURE__ */ e(
  Je,
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
                    oe,
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
            E && /* @__PURE__ */ e(
              ve,
              {
                color: "error",
                variant: "dot",
                invisible: S === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ e(B, { size: "small", children: /* @__PURE__ */ e(qe, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ e(g, {}),
          /* @__PURE__ */ s(f, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ e(
              Te,
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
            /* @__PURE__ */ e(g, {})
          ] }),
          (p == null ? void 0 : p.show) && /* @__PURE__ */ e(Re, { ...p }),
          /* @__PURE__ */ e(f, { sx: { p: 2 }, children: /* @__PURE__ */ e(
            ke,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ e(Se, {}),
              onClick: m,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Vr = ({
  children: t,
  sidebarLinks: i = [],
  secondarySidebarLinks: o = [],
  appName: c = "Dashboard",
  pageName: l = "Home",
  showHeader: a = !0,
  showSidebar: r = !0,
  enableRefreshToken: d = !1,
  activePath: m,
  onLinkClick: E,
  userName: S,
  userEmail: p,
  userAvatar: I,
  onLogout: z,
  onProfileClick: x,
  onAccountClick: M,
  onSettingsClick: A,
  showNotifications: C = !0,
  notificationCount: U = 0,
  showSearchbar: $ = !0,
  searchValue: F,
  onSearchChange: G,
  onSearchSubmit: H,
  showProfile: h = !0,
  userRole: L,
  onVerify: v,
  alertProps: w,
  style: j,
  headerStyles: W,
  sidebarStyles: V,
  contentStyles: X,
  accentColor: k = "#01584f",
  contentBackgroundColor: O = "#f2f9fc",
  navbarBackground: Q = "#ffffff",
  navbarAccentColor: Y = "#000000",
  GlobalChatSidebar: R,
  useChatSidebar: T,
  rightExtraContent: n,
  customNavbar: ie,
  customNavbarProps: ye
}) => {
  const be = Oe(), y = _e(be.breakpoints.down("md")), [se, le] = K(!1), [De, Ee] = K(!0), [Me, Ae] = K(!1), [sr, ae] = K(null), q = T == null ? void 0 : T(), ce = (q == null ? void 0 : q.isOpen) ?? !1, J = ue(v), de = ue(!1);
  N(() => {
    J.current = v;
  }, [v]);
  const Ce = () => {
    le(!se);
  }, Ue = () => {
    le(!1);
  }, he = (fe) => {
    localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), localStorage.removeItem("lumoraUser"), ae(null), z(fe);
  };
  return N(() => {
    (() => {
      try {
        const Z = localStorage.getItem("lumoraRefreshToken"), lr = localStorage.getItem("lumoraAccessToken"), me = localStorage.getItem("lumoraUser");
        if (!Z) {
          console.log("No session found, redirecting to login"), localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), localStorage.removeItem("lumoraUser"), window.location.href = "/login";
          return;
        }
        if (me && !de.current)
          try {
            const b = JSON.parse(me), pe = {
              name: b.name || "",
              email: b.email || "",
              profilePicture: b.profilePicture || "",
              role: b.role || ""
            };
            ae(pe), de.current = !0, J.current && J.current(pe);
          } catch (b) {
            console.error(
              "Error parsing user data from localStorage:",
              b
            ), localStorage.removeItem("lumoraUser");
          }
        Ae(!0);
      } catch (Z) {
        console.error("Error checking session:", Z), localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), localStorage.removeItem("lumoraUser"), window.location.href = "/login";
      } finally {
        Ee(!1);
      }
    })();
  }, []), N(() => (d && Ze(), () => {
    er();
  }), [d]), N(() => {
    d && or();
  }, [d]), De ? /* @__PURE__ */ s(
    _,
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
          Be,
          {
            size: 60,
            thickness: 4,
            sx: { color: k }
          }
        ),
        /* @__PURE__ */ e(_, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : Me ? /* @__PURE__ */ s(
    _,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...j
      },
      children: [
        /* @__PURE__ */ e(ze, {}),
        a && /* @__PURE__ */ e(
          nr,
          {
            appName: c,
            pageName: l,
            onMenuClick: y && r ? Ce : void 0,
            showMenuButton: y && r,
            headerStyles: W,
            userName: S,
            userEmail: p,
            userAvatar: I,
            onProfileClick: x,
            onAccountClick: M,
            onSettingsClick: A,
            onLogout: he,
            showNotifications: C,
            notificationCount: U,
            showSearchbar: $ && !ie,
            searchValue: F,
            onSearchChange: G,
            onSearchSubmit: H,
            showProfile: h,
            userRole: L,
            accentColor: k,
            contentBackgroundColor: O,
            navbarBackground: Q,
            navbarAccentColor: Y,
            rightExtraContent: n,
            customNavbar: ie,
            customNavbarProps: ye
          }
        ),
        r && !y && /* @__PURE__ */ e(
          Le,
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
                bgcolor: O,
                borderRight: "none",
                top: a ? "60px" : 0,
                // Position below header
                height: a ? "calc(100vh - 60px)" : "100vh"
              },
              ...V
            },
            children: /* @__PURE__ */ s(
              _,
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
                    Te,
                    {
                      mainLinks: i,
                      secondaryLinks: o,
                      activePath: m,
                      onLinkClick: E,
                      accentColor: k
                    }
                  ),
                  (w == null ? void 0 : w.show) && /* @__PURE__ */ e(Re, { ...w })
                ]
              }
            )
          }
        ),
        r && y && /* @__PURE__ */ e(
          ir,
          {
            open: se,
            onClose: Ue,
            mainLinks: i,
            secondaryLinks: o,
            activePath: m,
            onLinkClick: E,
            userName: S,
            userEmail: p,
            userAvatar: I,
            onLogout: he,
            onProfileClick: x,
            showNotifications: C,
            notificationCount: U,
            alertProps: w,
            accentColor: k
          }
        ),
        /* @__PURE__ */ e(
          _,
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
              backgroundColor: O,
              // White background for main content
              ...X
            },
            children: /* @__PURE__ */ s(ee, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ e(
                ee,
                {
                  size: {
                    xs: 12,
                    md: ce && R ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: t
                }
              ),
              ce && R && /* @__PURE__ */ e(
                ee,
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
                  children: /* @__PURE__ */ e(R, {})
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
  Vr as LumoraWrapper,
  Vr as default,
  Wr as logoutUser
};
