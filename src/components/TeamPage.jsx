import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { TEAM } from "../data/team.js";

function collectTeam(person) {
  return person.reports.flatMap((report) => [report, ...collectTeam(report)]);
}

const TEAM_PROFILES = [TEAM, ...collectTeam(TEAM)];
const TEAM_FILTERS = [
  { id: "all", label: "Everyone", people: TEAM_PROFILES },
  { id: "leadership", label: "Leadership", people: [TEAM, ...TEAM.reports] },
  ...TEAM.reports.map((leader) => ({
    id: leader.id,
    label: leader.role.replace(/ Director| Manager$/, ""),
    people: [leader, ...collectTeam(leader)],
  })),
];

function TeamPhoto({ person, dimmed }) {
  return (
    <View
      nativeID={`team-member-${person.id}`}
      accessibilityRole="group"
      accessibilityLabel={`${person.name}, ${person.role}. ${person.bio}`}
      dataSet={{ filterMatch: dimmed ? "false" : "true" }}
      style={{ opacity: dimmed ? 0.24 : 1 }}
    >
      <Image
        nativeID={`team-photo-${person.id}`}
        dataSet={{ photo: person.id }}
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
    </View>
  );
}

export default function TeamPage({ onBack, onContact }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const selectedFilter = TEAM_FILTERS.find((filter) => filter.id === activeFilter);
  const matchingIds = new Set(selectedFilter.people.map((person) => person.id));

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

      <View nativeID="team-filter-section">
        <Text nativeID="team-filter-eyebrow">FILTER BY DEPARTMENT</Text>
        <View nativeID="team-filter-list" accessibilityRole="toolbar" accessibilityLabel="Filter team by department">
          {TEAM_FILTERS.map((filter) => (
            <Pressable
              key={filter.id}
              nativeID={`team-filter-${filter.id}`}
              accessibilityRole="button"
              accessibilityState={{ pressed: activeFilter === filter.id }}
              aria-pressed={activeFilter === filter.id}
              onPress={() => setActiveFilter(filter.id)}
            >
              <Text nativeID={`team-filter-label-${filter.id}`}>
                {filter.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text nativeID="team-interaction-hint">
          Hover over or select a portrait to reveal each person’s role and story.
        </Text>
      </View>

      <View nativeID="team-photo-collage" dataSet={{ activeFilter }}>
        {TEAM_PROFILES.map((person) => (
          <TeamPhoto
            key={person.id}
            person={person}
            dimmed={!matchingIds.has(person.id)}
          />
        ))}
      </View>

      <View nativeID="team-how-we-work">
        <Image
          nativeID="team-how-we-work-image"
          source={{ uri: "/teamImage.jpg" }}
          accessibilityLabel="JODU-TECH team members working together at a solar project site"
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
        <View nativeID="team-how-we-work-copy">
          <Text nativeID="team-how-we-work-eyebrow">GOOD WORK, DONE TOGETHER</Text>
          <Text nativeID="team-how-we-work-title">From first plan to lasting power.</Text>
          <Text nativeID="team-how-we-work-description">
            We bring customer needs, careful system design, safe installation, and ongoing support together to deliver dependable solar energy.
          </Text>
          <View nativeID="team-how-we-work-steps">
            {[
              ["01", "Listen & plan"],
              ["02", "Design & install"],
              ["03", "Support & improve"],
            ].map(([number, title]) => (
              <View key={number} nativeID={`team-work-step-${number}`}>
                <Text nativeID={`team-work-step-number-${number}`}>{number}</Text>
                <Text nativeID={`team-work-step-title-${number}`}>{title}</Text>
              </View>
            ))}
          </View>
        </View>
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
