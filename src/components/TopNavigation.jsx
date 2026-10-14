import { AnimatePresence, m } from "framer-motion";
import { styles } from "../styles.js";
import { NAV_LINKS } from "../constants.js";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";

const MotionDiv = m.div;

export default function TopNavigation({
  isCompactNav,
  showCompactQuote,
  isNarrowMobile,
  menuOpen,
  setMenuOpen,
  navigate,
  activeNavId,
}) {
  return (
          <MotionDiv
              id="site-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
              style={{
                position: "fixed",
                zIndex: 20,
                top: 22,
                left: isCompactNav ? "3%" : "6%",
                width: isCompactNav ? "94%" : "88%",
              }}
            >
          <View
              style={[
                tw`flex-row items-center justify-between`,
                styles.header,
                { marginTop: 0 },
                isCompactNav && { minHeight: 66, paddingHorizontal: isNarrowMobile ? 10 : 14 },
              ]}
            >
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="JODU-TECH LTD home"
              accessibilityState={{ selected: activeNavId === "home" }}
              onPress={() => navigate("home")}
              style={tw`flex-row items-center`}
            >
              <Image
                nativeID="header-logo"
                source={{ uri: "/JoduLogo.svg" }}
                accessibilityLabel="JODU-TECH LTD"
                resizeMode="contain"
                style={[styles.brandLogo, isNarrowMobile && { width: 112 }]}
              />
            </Pressable>
    
            {isCompactNav ? (
              <View style={tw`flex-row items-center`}>
                <Pressable
                  nativeID="nav-menu-toggle"
                  accessibilityRole="button"
                  accessibilityLabel={menuOpen ? "Close navigation" : "Open navigation"}
                  accessibilityState={{ expanded: menuOpen }}
                  onPress={() => setMenuOpen((open) => !open)}
                  style={[
                    styles.menuButton,
                    isNarrowMobile && { width: 34, height: 36 },
                  ]}
                >
                  <Text style={{ color: "#eff4fa", fontSize: 20, lineHeight: 24 }}>
                    {menuOpen ? "×" : "☰"}
                  </Text>
                </Pressable>
                {showCompactQuote && (
                  <Pressable
                    nativeID="nav-quote-cta"
                    accessibilityRole="link"
                    onPress={() => navigate("contact")}
                    style={[
                      styles.headerCta,
                      {
                        minHeight: 39,
                        marginLeft: isNarrowMobile ? 6 : 9,
                        paddingHorizontal: isNarrowMobile ? 7 : 12,
                      },
                    ]}
                  >
                    <Text style={styles.headerCtaText}>Get Quote  →</Text>
                  </Pressable>
                )}
              </View>
            ) : (
              <>
                <View style={[tw`flex-row items-center`, { gap: 22 }]}>
                  {NAV_LINKS.map(([label, id]) => (
                    <Pressable
                      key={id}
                      nativeID={`nav-link-${id}`}
                      accessibilityRole="link"
                      accessibilityState={{ selected: activeNavId === id }}
                      onPress={() => navigate(id)}
                      style={activeNavId === id ? styles.activeNavLink : null}
                    >
                      <Text style={[styles.navLink, activeNavId === id && { color: "#f7f9fc" }]}>{label}</Text>
                    </Pressable>
                  ))}
                </View>
                <Pressable
                  nativeID="nav-quote-cta"
                  accessibilityRole="link"
                  onPress={() => navigate("contact")}
                  style={styles.headerCta}
                >
                  <Text style={styles.headerCtaText}>Get Quote  →</Text>
                </Pressable>
              </>
            )}
    
            <AnimatePresence>
              {isCompactNav && menuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  style={{ position: "absolute", top: 76, right: 0, left: 0, zIndex: 21 }}
                >
                  <View
                    nativeID="mobile-nav-menu"
                    style={[styles.mobileMenu, { position: "relative", top: 0, right: 0, left: 0 }]}
                  >
                    {NAV_LINKS.map(([label, id]) => (
                      <Pressable
                        key={id}
                        nativeID={`mobile-nav-link-${id}`}
                        accessibilityRole="link"
                        accessibilityState={{ selected: activeNavId === id }}
                        onPress={() => navigate(id)}
                        style={[
                          styles.mobileMenuItem,
                          activeNavId === id && styles.mobileMenuItemActive,
                        ]}
                      >
                        <Text
                          style={[
                            styles.mobileMenuText,
                            activeNavId === id && { color: "#facc15" },
                          ]}
                        >
                          {label}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </MotionDiv>
              )}
            </AnimatePresence>
          </View>
          </MotionDiv>
  );
}
