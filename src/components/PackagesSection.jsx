import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import Reveal from "./Reveal.jsx";

const packages = [
  {
    number: "01",
    title: "Home solar",
    description: "A solar and battery solution planned around your household and the appliances you need to power.",
  },
  {
    number: "02",
    title: "Business solar",
    description: "A scalable energy solution designed around your premises, operating hours, and business needs.",
  },
  {
    number: "03",
    title: "Backup & storage",
    description: "Battery storage and backup planning focused on the essential loads you want to keep running.",
  },
  {
    number: "04",
    title: "Off-grid power",
    description: "An independent solar and storage setup planned for sites without dependable grid access.",
  },
];

export default function PackagesSection({ isMobile, onContact }) {
  return (
    <View nativeID="packages" style={tw`mx-auto w-full max-w-[1120px] px-4 py-12`}>
      <Reveal>
        <View nativeID="packages-heading">
          <Text nativeID="packages-eyebrow">SOLAR SOLUTIONS</Text>
          <Text nativeID="packages-title">Find the right setup for your needs.</Text>
          <Text nativeID="packages-description">
            Every property is different. Discuss your energy use and site with our team to receive a tailored quote.
          </Text>
        </View>
      </Reveal>

      <View nativeID="packages-grid" style={isMobile ? { flexDirection: "column" } : undefined}>
        {packages.map((item, index) => (
          <Reveal key={item.number} delay={index * 0.06}>
            <View nativeID={`package-card-${item.number}`}>
              <Text nativeID={`package-number-${item.number}`}>{item.number} / SOLUTION</Text>
              <Text nativeID={`package-title-${item.number}`}>{item.title}</Text>
              <Text nativeID={`package-description-${item.number}`}>{item.description}</Text>
              <Pressable
                accessibilityRole="link"
                onPress={onContact}
                style={[
                  tw`mt-5 self-start border border-[#FACC15] px-4 py-3`,
                  isMobile && {
                    alignSelf: "stretch",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={{ color: "#facc15", fontSize: 10, fontWeight: "700", textAlign: "center" }}>
                  REQUEST A TAILORED QUOTE →
                </Text>
              </Pressable>
            </View>
          </Reveal>
        ))}
      </View>
    </View>
  );
}
