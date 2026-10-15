import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { TEAM } from "../data/team.js";

function collectTeam(person) {
  return person.reports.flatMap((report) => [report, ...collectTeam(report)]);
}

const TEAM_PROFILES = [TEAM, ...collectTeam(TEAM)];

function TeamPhoto({ person }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable
      nativeID={`team-member-${person.id}`}
      accessibilityRole="button"
      accessibilityLabel={`${person.name}, ${person.role}. ${person.bio}`}
      accessibilityState={{ pressed: expanded }}
      onPress={() => setExpanded((current) => !current)}
    >
      <Image
        nativeID={`team-photo-${person.id}`}
        source={{ uri: person.image }}
        accessibilityLabel={`Illustrative demo portrait of ${person.name}`}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <View nativeID={`team-profile-copy-${person.id}`}>
        <Text nativeID={`team-role-${person.id}`}>
          {person.role}
        </Text>
        <Text nativeID={`team-name-${person.id}`}>
          {person.name}
        </Text>
        <Text nativeID={`team-bio-${person.id}`}>
          {person.bio}
        </Text>
      </View>
    </Pressable>
  );
}

export default function TeamPage({ onBack, onContact }) {
  return (
    <View nativeID="team-page">
      <Pressable
        accessibilityRole="link"
        onPress={onBack}
        style={tw`mb-6 self-start`}
      >
        <Text style={{ color: "#facc15", fontSize: 12, fontWeight: "700" }}>
          ← Back to JODU-TECH
        </Text>
      </Pressable>

      <View nativeID="team-intro">
        <Text nativeID="team-eyebrow">THE PEOPLE BEHIND THE POWER</Text>
        <Text nativeID="team-title">Meet the crew powering brighter days.</Text>
        <Text nativeID="team-description">
          Big ideas, careful engineering, and a lot of teamwork. Meet the people who bring dependable solar energy to life.
        </Text>
      </View>

      <View nativeID="team-command-heading">
        <View>
          <Text nativeID="team-command-eyebrow">ONE CREW, ONE MISSION</Text>
          <Text nativeID="team-command-title">The people behind the work</Text>
        </View>
        <Text nativeID="team-collage-caption">A CREW OF 20 · ONE BRIGHTER FUTURE</Text>
      </View>

      <View nativeID="team-photo-collage">
        {TEAM_PROFILES.map((person) => (
          <TeamPhoto key={person.id} person={person} />
        ))}
      </View>

      <View nativeID="team-footnote">
        <Text nativeID="team-footnote-text">
          Every great installation is a team effort—from the first design to the final switch-on.
        </Text>
      </View>

      <View nativeID="team-contact-cta">
        <Text nativeID="team-contact-title">Want to build something bright together?</Text>
        <Pressable
          accessibilityRole="link"
          onPress={onContact}
          style={tw`mt-4 self-center border border-[#facc15] px-5 py-3`}
        >
          <Text style={{ color: "#facc15", fontSize: 11, fontWeight: "800" }}>
            TALK TO OUR TEAM →
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
