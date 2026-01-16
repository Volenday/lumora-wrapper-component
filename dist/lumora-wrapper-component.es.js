import { jsx as r, jsxs as l, Fragment as Ce } from "react/jsx-runtime";
import { useTheme as Je, useMediaQuery as $e, Box as W, CircularProgress as Qe, CssBaseline as Ye, Drawer as qe, Grid as ae } from "@mui/material";
import * as ue from "react";
import { useState as Y, useRef as Te, useMemo as Xe, useEffect as le } from "react";
import _e from "axios";
import Ie from "@mui/icons-material/AccountCircleRounded";
import ve from "@mui/icons-material/LogoutRounded";
import Ve from "@mui/icons-material/MenuRounded";
import Ze from "@mui/icons-material/NotificationsOutlined";
import er from "@mui/icons-material/SearchRounded";
import rr from "@mui/material/AppBar";
import he from "@mui/material/Avatar";
import be from "@mui/material/Badge";
import U from "@mui/material/Box";
import I from "@mui/material/Divider";
import z from "@mui/material/IconButton";
import tr from "@mui/material/InputAdornment";
import or from "@mui/material/Menu";
import ke from "@mui/material/MenuItem";
import R from "@mui/material/Stack";
import { styled as nr } from "@mui/material/styles";
import ir from "@mui/material/TextField";
import sr from "@mui/material/Toolbar";
import y from "@mui/material/Typography";
import ar from "@mui/material/useMediaQuery";
import lr from "@mui/material/Card";
import cr from "@mui/material/CardContent";
import De from "@mui/material/Button";
import dr from "@mui/icons-material/AutoAwesomeRounded";
import Ae from "@mui/material/Tooltip";
import ur from "@mui/icons-material/NotificationsRounded";
import hr from "@mui/material/Drawer";
class c extends Error {
  constructor(o, t, s = null) {
    super(o), this.name = "AuthError", this.code = t, this.originalError = s, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const d = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, m = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, T = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, fr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(T.ACCESS_TOKEN), o = localStorage.getItem(T.REFRESH_TOKEN), t = localStorage.getItem(T.USER);
      e && !localStorage.getItem(m.ACCESS_TOKEN) && localStorage.setItem(m.ACCESS_TOKEN, e), o && !localStorage.getItem(m.REFRESH_TOKEN) && localStorage.setItem(m.REFRESH_TOKEN, o), t && !localStorage.getItem(m.USER) && localStorage.setItem(m.USER, t), (e || o || t) && (localStorage.removeItem(T.ACCESS_TOKEN), localStorage.removeItem(T.REFRESH_TOKEN), localStorage.removeItem(T.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, ce = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new c("localStorage is not available", d.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new c(
      "Storage quota exceeded. Please clear browser data.",
      d.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new c(
      "Access to localStorage is denied. Please check browser settings.",
      d.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new c("Failed to access storage", d.STORAGE_ACCESS_DENIED, o));
  }
}, de = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new c("localStorage is not available", d.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new c(
      "Storage quota exceeded. Please clear browser data.",
      d.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new c(
      "Access to localStorage is denied. Please check browser settings.",
      d.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error("Unexpected error writing to localStorage:", t.name), new c("Failed to write to storage", d.STORAGE_ACCESS_DENIED, t));
  }
}, Ke = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, j = () => {
  try {
    fr();
    const e = ce(m.ACCESS_TOKEN), o = ce(m.REFRESH_TOKEN), t = ce(m.USER);
    let s = null;
    if (t)
      try {
        s = JSON.parse(t);
      } catch {
        t && t !== "null" && t !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", t.substring(0, 50)), Ke(m.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: s
    };
  } catch (e) {
    throw e instanceof c ? e : new c("Failed to retrieve authentication tokens", d.UNKNOWN_ERROR, e);
  }
}, pr = () => {
  try {
    const { accessToken: e, refreshToken: o } = j();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new c("No authentication tokens found", d.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof c ? e : new c("Authentication check failed", d.UNKNOWN_ERROR, e)
    };
  }
}, Ue = (e, o, t = null) => {
  try {
    if (!e && !o)
      throw new c("At least one token must be provided", d.TOKEN_INVALID);
    return e && de(m.ACCESS_TOKEN, e), o && de(m.REFRESH_TOKEN, o), t && de(m.USER, JSON.stringify(t)), {
      success: !0,
      error: null
    };
  } catch (s) {
    return console.error("Failed to store authentication tokens:", s), {
      success: !1,
      error: s instanceof c ? s : new c("Failed to store tokens", d.UNKNOWN_ERROR, s)
    };
  }
}, H = () => {
  try {
    return [
      m.ACCESS_TOKEN,
      m.REFRESH_TOKEN,
      m.USER,
      // Also clear legacy keys for complete cleanup
      T.ACCESS_TOKEN,
      T.REFRESH_TOKEN,
      T.USER
    ].map((s) => Ke(s)).every((s) => s) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof c ? e : new c("Failed to clear tokens", d.LOGOUT_FAILED, e)
    };
  }
}, gr = () => {
  try {
    const { user: e } = j();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof c ? e : new c("Failed to retrieve user data", d.UNKNOWN_ERROR, e)
    };
  }
}, Zr = (e) => {
  if (!(e instanceof c))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case d.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case d.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case d.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case d.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case d.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case d.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, fe = (e, o = "Unknown") => {
  const t = {
    context: o,
    message: e.message,
    code: e instanceof c ? e.code : "UNKNOWN",
    timestamp: e instanceof c ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof c && e.originalError && (t.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", t);
}, mr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = _e.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let t = !1, s = null, p = [];
  const u = (i, n) => {
    p.forEach(({ resolve: x, reject: O }) => {
      i ? O(i) : n && x(n);
    }), p = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: n } = j();
      return n && i.headers && (i.headers.Authorization = `Bearer ${n}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var N;
      const n = i.config, x = (N = i.response) == null ? void 0 : N.status, O = (n == null ? void 0 : n.url) || "", _ = O.includes("/auth/refresh");
      if (x !== 401 || n._retry || _)
        return Promise.reject(i);
      n._retry = !0;
      const { refreshToken: S } = j();
      if (!S) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return fe(h, "AxiosClient - Token Refresh"), H(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (t && s)
        return new Promise((h, g) => {
          p.push({ resolve: h, reject: g });
        }).then((h) => {
          const {
            accessToken: g,
            refreshToken: f
          } = h;
          if (n.headers && (n.headers.Authorization = `Bearer ${g}`), O.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const E = JSON.parse(
                  n.data || "{}"
                );
                E.refresh_token = f, n.data = JSON.stringify(E);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = f : n.data = JSON.stringify({
                  refresh_token: f
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: f
              });
            }
          return o(n);
        }).catch((h) => Promise.reject(h));
      t = !0, s = _e.post(
        `${e}/auth/refresh`,
        {
          refresh_token: S
        }
      );
      try {
        const h = await s, { accessToken: g, refreshToken: f } = h.data;
        if (Ue(g, f, null), u(null, {
          accessToken: g,
          refreshToken: f
        }), n.headers && (n.headers.Authorization = `Bearer ${g}`), O.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const E = JSON.parse(
                n.data || "{}"
              );
              E.refresh_token = f, n.data = JSON.stringify(E);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = f : n.data = JSON.stringify({
                refresh_token: f
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: f
            });
          }
        return o(n);
      } catch (h) {
        return fe(
          h,
          "AxiosClient - Token Refresh Failed"
        ), u(h), H(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        t = !1, s = null;
      }
    }
  ), o;
}, xr = async (e) => {
  const { accessToken: o, refreshToken: t } = j();
  if (o)
    return !0;
  if (t)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: t
      });
      if (s.data.success && s.data.accessToken)
        return Ue(s.data.accessToken, s.data.refreshToken || null, null), !0;
    } catch (s) {
      fe(s, "TokenValidator - Refresh Failed");
    }
  return H(), window.location.href = "/login", !1;
}, Er = nr(sr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Sr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: t,
  showMenuButton: s = !0,
  headerStyles: p,
  userName: u = "User Name",
  userEmail: i,
  userAvatar: n,
  onProfileClick: x,
  onAccountClick: O,
  onSettingsClick: _,
  onLogout: S,
  showNotifications: N = !1,
  notificationCount: h = 0,
  showSearchbar: g = !0,
  searchValue: f,
  onSearchChange: E,
  onSearchSubmit: F,
  showProfile: M = !0,
  userRole: q,
  accentColor: X = "#01584f",
  contentBackgroundColor: V = "#f2f9fc",
  navbarBackground: Z = "#ff0000",
  navbarAccentColor: w = "#000000",
  rightExtraContent: P = [],
  customNavbar: A,
  customNavbarProps: k
}) => {
  const B = ar((a) => a.breakpoints.up("md")), [J, $] = ue.useState(null), ee = !!J, C = (a) => {
    E == null || E(a.target.value);
  }, G = (a) => {
    a.key === "Enter" && F && f && F(f);
  }, re = (a) => a ? a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() : "User", te = (a) => {
    $(a.currentTarget);
  }, v = () => {
    $(null);
  }, b = (a) => {
    a == null || a(), v();
  };
  return /* @__PURE__ */ r(
    rr,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: Z,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...p
      },
      children: /* @__PURE__ */ l(Er, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ l(
          R,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              s && !B && /* @__PURE__ */ r(
                z,
                {
                  "aria-label": "menu",
                  onClick: t,
                  sx: {
                    color: w,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ r(Ve, {})
                }
              ),
              /* @__PURE__ */ l(
                R,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ r(
                      y,
                      {
                        variant: "h6",
                        sx: {
                          color: w,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    /* @__PURE__ */ r(
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
              A ? /* @__PURE__ */ r(A, { ...k || {} }) : g && B && /* @__PURE__ */ r(
                ir,
                {
                  placeholder: "Search for deals or documents...",
                  value: f || "",
                  onChange: C,
                  onKeyDown: G,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: V,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: X
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ r(tr, { position: "start", children: /* @__PURE__ */ r(
                      er,
                      {
                        sx: {
                          color: w
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ l(
          R,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              N && /* @__PURE__ */ r(
                be,
                {
                  color: "error",
                  variant: "dot",
                  invisible: h === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ r(
                    z,
                    {
                      size: "small",
                      sx: { color: w },
                      children: /* @__PURE__ */ r(Ze, {})
                    }
                  )
                }
              ),
              N && M && /* @__PURE__ */ r(
                I,
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
              M && /* @__PURE__ */ l(Ce, { children: [
                /* @__PURE__ */ l(
                  R,
                  {
                    direction: "row",
                    onClick: te,
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
                      n ? /* @__PURE__ */ r(
                        he,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ r(
                        Ie,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: w
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        U,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ r(
                              y,
                              {
                                variant: "body2",
                                sx: {
                                  color: w,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: u
                              }
                            ),
                            /* @__PURE__ */ r(
                              y,
                              {
                                variant: "caption",
                                sx: {
                                  color: w,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: re(q)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  or,
                  {
                    anchorEl: J,
                    open: ee,
                    onClose: v,
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
                      /* @__PURE__ */ r(
                        ke,
                        {
                          onClick: () => b(_),
                          children: "Settings"
                        }
                      ),
                      /* @__PURE__ */ r(I, {}),
                      /* @__PURE__ */ l(
                        ke,
                        {
                          onClick: () => b(S),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ r(y, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ r(ve, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              P.length !== 0 && P.map((a) => a.type === "divider" ? /* @__PURE__ */ r(
                I,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ) : a.type === "profile" ? /* @__PURE__ */ l(
                R,
                {
                  direction: "row",
                  onClick: a.onClick,
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
                    a.avatar ? /* @__PURE__ */ r(
                      he,
                      {
                        src: a.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ r(
                      Ie,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: w
                        }
                      }
                    ),
                    /* @__PURE__ */ l(
                      U,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ r(
                            y,
                            {
                              variant: "body2",
                              sx: {
                                color: w,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: a.name
                            }
                          ),
                          /* @__PURE__ */ r(
                            y,
                            {
                              variant: "caption",
                              sx: {
                                color: w,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: a.role
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
}, Fe = ({
  title: e = "",
  message: o = "",
  buttonText: t = "",
  onButtonClick: s,
  show: p = !0
}) => p ? /* @__PURE__ */ r(lr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ l(cr, { children: [
  /* @__PURE__ */ r(dr, { fontSize: "small" }),
  /* @__PURE__ */ r(y, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ r(
    y,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ r(
    De,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: s,
      children: t
    }
  )
] }) }) : null, Me = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: t,
  onLinkClick: s,
  accentColor: p = "#01584f"
}) => {
  const u = (i) => {
    s && s(i);
  };
  return /* @__PURE__ */ l(
    R,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((i, n) => /* @__PURE__ */ l(ue.Fragment, { children: [
          /* @__PURE__ */ r(Ae, { title: i.text, placement: "right", arrow: !0, children: /* @__PURE__ */ r(
            z,
            {
              component: "a",
              href: i.path,
              onClick: (x) => {
                x.preventDefault(), x.stopPropagation(), u(i.path);
              },
              sx: {
                width: 44,
                height: 44,
                color: t === i.path ? "#ffffff" : p,
                backgroundColor: t === i.path ? p : "transparent",
                borderRadius: t === i.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: t === i.path ? p : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: i.icon
            }
          ) }),
          n < e.length - 1 && /* @__PURE__ */ r(
            U,
            {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                I,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          )
        ] }, n)),
        o.length > 0 && /* @__PURE__ */ l(Ce, { children: [
          /* @__PURE__ */ r(
            U,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                I,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(U, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(R, { gap: 1, alignItems: "center", children: o.map((i, n) => /* @__PURE__ */ l(ue.Fragment, { children: [
            /* @__PURE__ */ r(
              Ae,
              {
                title: i.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ r(
                  z,
                  {
                    component: "a",
                    href: i.path,
                    onClick: (x) => {
                      x.preventDefault(), x.stopPropagation(), u(i.path);
                    },
                    sx: {
                      width: 48,
                      height: 48,
                      color: t === i.path ? "#ffffff" : "text.secondary",
                      backgroundColor: t === i.path ? "#01584F" : "transparent",
                      borderRadius: t === i.path ? "4px" : "50%",
                      "&:hover": {
                        backgroundColor: t === i.path ? "#01584F" : "action.hover",
                        borderRadius: "4px"
                      }
                    },
                    children: i.icon
                  }
                )
              }
            ),
            n < o.length - 1 && /* @__PURE__ */ r(
              U,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ r(
                  I,
                  {
                    sx: {
                      width: "60%",
                      borderColor: "divider"
                    }
                  }
                )
              }
            )
          ] }, n)) }) })
        ] })
      ]
    }
  );
}, wr = ({
  open: e,
  onClose: o,
  mainLinks: t,
  secondaryLinks: s = [],
  activePath: p,
  onLinkClick: u,
  userName: i = "User Name",
  userAvatar: n,
  onLogout: x,
  showNotifications: O = !1,
  notificationCount: _ = 0,
  alertProps: S,
  accentColor: N = "#01584f"
}) => /* @__PURE__ */ r(
  hr,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (g) => g.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ l(
      R,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ l(R, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ l(
              R,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ r(
                    he,
                    {
                      sizes: "small",
                      alt: i,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ r(y, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            O && /* @__PURE__ */ r(
              be,
              {
                color: "error",
                variant: "dot",
                invisible: _ === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ r(z, { size: "small", children: /* @__PURE__ */ r(ur, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ r(I, {}),
          /* @__PURE__ */ l(R, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ r(
              Me,
              {
                mainLinks: t,
                secondaryLinks: s,
                activePath: p,
                onLinkClick: (g) => {
                  u == null || u(g), o();
                },
                accentColor: N
              }
            ),
            /* @__PURE__ */ r(I, {})
          ] }),
          (S == null ? void 0 : S.show) && /* @__PURE__ */ r(Fe, { ...S }),
          /* @__PURE__ */ r(R, { sx: { p: 2 }, children: /* @__PURE__ */ r(
            De,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ r(ve, {}),
              onClick: x,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), et = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: t = [],
  appName: s = "Dashboard",
  pageName: p = "Home",
  showHeader: u = !0,
  showSidebar: i = !0,
  enableRefreshToken: n = !1,
  activePath: x,
  onLinkClick: O,
  userName: _,
  userEmail: S,
  userAvatar: N,
  onLogout: h,
  onProfileClick: g,
  onAccountClick: f,
  onSettingsClick: E,
  showNotifications: F = !0,
  notificationCount: M = 0,
  showSearchbar: q = !0,
  searchValue: X,
  onSearchChange: V,
  onSearchSubmit: Z,
  showProfile: w = !0,
  userRole: P,
  onVerify: A,
  alertProps: k,
  style: B,
  headerStyles: J,
  sidebarStyles: $,
  contentStyles: ee,
  accentColor: C = "#01584f",
  contentBackgroundColor: G = "#f2f9fc",
  navbarBackground: re = "#ffffff",
  navbarAccentColor: te = "#000000",
  GlobalChatSidebar: v,
  useChatSidebar: b,
  rightExtraContent: a,
  customNavbar: pe,
  customNavbarProps: Ge,
  redirectToLogin: oe,
  apiBaseUrl: ge
}) => {
  const Le = Je(), D = $e(Le.breakpoints.down("md")), [me, xe] = Y(!1), [We, ze] = Y(!0), [je, He] = Y(!1), [Rr, Q] = Y(null), ne = b == null ? void 0 : b(), Ee = (ne == null ? void 0 : ne.isOpen) ?? !1, ie = Te(A), Se = Te(!1), we = Xe(() => mr(ge), [ge]);
  le(() => {
    ie.current = A;
  }, [A]);
  const Pe = () => {
    xe(!me);
  }, Be = () => {
    xe(!1);
  }, Re = (Oe) => {
    const K = h(Oe);
    K instanceof Promise ? K.then(() => {
      Q(null);
    }).catch((Ne) => {
      console.error("Error in logout handler:", Ne), Q(null);
    }) : Q(null);
  };
  return le(() => {
    (() => {
      try {
        const { isAuthenticated: K, error: Ne } = pr();
        if (!K) {
          console.log("No session found, redirecting to login"), H(), oe();
          return;
        }
        if (!Se.current) {
          const { user: L, error: se } = gr();
          if (L && !se) {
            const ye = {
              name: L.name || "",
              email: L.email || "",
              profilePicture: L.profilePicture || "",
              role: L.role || ""
            };
            Q(ye), Se.current = !0, ie.current && ie.current(ye);
          } else
            se && console.error("Error getting user data:", se);
        }
        He(!0);
      } catch (K) {
        console.error("Error checking session:", K), H(), oe();
      } finally {
        ze(!1);
      }
    })();
  }, [oe]), le(() => {
    n && xr(we);
  }, [n, we]), We ? /* @__PURE__ */ l(
    W,
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
        /* @__PURE__ */ r(Qe, { size: 60, thickness: 4, sx: { color: C } }),
        /* @__PURE__ */ r(W, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : je ? /* @__PURE__ */ l(
    W,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...B
      },
      children: [
        /* @__PURE__ */ r(Ye, {}),
        u && /* @__PURE__ */ r(
          Sr,
          {
            appName: s,
            pageName: p,
            onMenuClick: D && i ? Pe : void 0,
            showMenuButton: D && i,
            headerStyles: J,
            userName: _,
            userEmail: S,
            userAvatar: N,
            onProfileClick: g,
            onAccountClick: f,
            onSettingsClick: E,
            onLogout: Re,
            showNotifications: F,
            notificationCount: M,
            showSearchbar: q && !pe,
            searchValue: X,
            onSearchChange: V,
            onSearchSubmit: Z,
            showProfile: w,
            userRole: P,
            accentColor: C,
            contentBackgroundColor: G,
            navbarBackground: re,
            navbarAccentColor: te,
            rightExtraContent: a,
            customNavbar: pe,
            customNavbarProps: Ge
          }
        ),
        i && !D && /* @__PURE__ */ r(
          qe,
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
                bgcolor: G,
                borderRight: "none",
                top: u ? "60px" : 0,
                // Position below header
                height: u ? "calc(100vh - 60px)" : "100vh"
              },
              ...$
            },
            children: /* @__PURE__ */ l(
              W,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ r(
                    Me,
                    {
                      mainLinks: o,
                      secondaryLinks: t,
                      activePath: x,
                      onLinkClick: O,
                      accentColor: C
                    }
                  ),
                  (k == null ? void 0 : k.show) && /* @__PURE__ */ r(Fe, { ...k })
                ]
              }
            )
          }
        ),
        i && D && /* @__PURE__ */ r(
          wr,
          {
            open: me,
            onClose: Be,
            mainLinks: o,
            secondaryLinks: t,
            activePath: x,
            onLinkClick: O,
            userName: _,
            userEmail: S,
            userAvatar: N,
            onLogout: Re,
            onProfileClick: g,
            showNotifications: F,
            notificationCount: M,
            alertProps: k,
            accentColor: C
          }
        ),
        /* @__PURE__ */ r(
          W,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: D ? "100%" : i ? "calc(100% - 80px)" : "100%",
              mt: u ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: G,
              // White background for main content
              ...ee
            },
            children: /* @__PURE__ */ l(ae, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ r(
                ae,
                {
                  size: {
                    xs: 12,
                    md: Ee && v ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Ee && v && /* @__PURE__ */ r(
                ae,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: u ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: u ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: u ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ r(v, {})
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
  d as AUTH_ERROR_CODES,
  c as AuthError,
  et as LumoraWrapper,
  H as clearAuthTokens,
  et as default,
  Zr as getAuthErrorMessage,
  j as getAuthTokens,
  gr as getCurrentUser,
  pr as isAuthenticated,
  fe as logAuthError,
  Ue as storeAuthTokens
};
