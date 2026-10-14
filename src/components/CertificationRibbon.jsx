import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";

export default function CertificationRibbon({ isMobile }) {
  return (
    <>
                      <View
                        style={[
                          tw`flex-row items-center justify-center`,
                          styles.ribbon,
                          isMobile && { marginHorizontal: -12, paddingHorizontal: 12, gap: 8 },
                        ]}
                      >
                        <Text style={{ color: "#34d399", fontSize: 15 }}>✓</Text>
                        <Text style={styles.ribbonText}>Solutions for homes &amp; businesses</Text>
                        <Text style={{ color: YELLOW, fontSize: 12 }}>✳</Text>
                        <Text style={styles.ribbonText}>System planning &amp; installation</Text>
                        {!isMobile && (
                          <Pressable accessibilityRole="link" onPress={() => window.open(LINK, "_blank", "noopener,noreferrer")}>
                            <Text style={{ color: YELLOW, fontSize: 10, fontWeight: "700", marginLeft: 12 }}>
                              Talk to an expert →
                            </Text>
                          </Pressable>
                        )}
                      </View>
    </>
  );
}
