import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
export type Experience = {
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "Self Employed Inc.",
    role: "Legendary Developer",
    duration: "2023 – Present",
    points: [
      "Built apps that worked perfectly on my machine",
      "Fixed critical bugs by restarting the application",
      "Improved performance by deleting node_modules",
      "Debugged issues using Google and intuition",
    ],
  },
  {
    company: "TrustMeBro Technologies",
    role: "Full Stack Developer",
    duration: "2022 – 2023",
    points: [
      "Developed features moments before the deadline",
      "Wrote clean code until the last 10 minutes",
      "Attended meetings and nodded confidently",
      "Deployed to production with hope",
    ],
  },
  {
    company: "Overthink Labs",
    role: "Software Engineer",
    duration: "2021 – 2022",
    points: [
      "Overthought simple problems professionally",
      "Refactored code that already worked",
      "Introduced bugs with confidence",
      "Fixed bugs caused by previous fixes",
    ],
  },
];

const ResumeContent = () => {
  return (
    <View>
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>ANUROOP</Text>
          <View style={styles.accentLine} />
          <Text style={styles.tagline}>THE BEST THERE EVER WAS</Text>
          <View style={styles.divider} />
          <View style={styles.contact} />
        </View>
        <View style={styles.subDivider} />

        <View style={styles.content}>
          <View style={styles.leftSide}>
            <View style={styles.sectionHeader}>
              <Text style={styles.subtitle}>Summary</Text>
              <View style={styles.sectionLine} />
            </View>

            <Text style={styles.text}>
              Here are better, funnier, more catchy name options for your
              Overconfident Resume Game. I’ve grouped them by vibe so you can
              choose easily.
            </Text>
            <View style={styles.sectionHeader}>
              <Text style={styles.subtitle}>Experiance</Text>
              <View style={styles.sectionLine} />
            </View>
            <FlatList
              data={experiences}
              keyExtractor={(_, i) => i.toString()}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={styles.expCard}>
                  <Text style={styles.company}>{item.company}</Text>
                  <Text style={styles.role}>
                    {item.role} • {item.duration}
                  </Text>

                  {/* {item.points.map((p, i) => (
                  <Text key={i} style={styles.point}>
                    • {p}
                  </Text>
                ))} */}
                </View>
              )}
            />
          </View>
          <View style={styles.rightSide}>

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.sectionLine} />
              </View>
              <Text style={styles.skill}>React ⭐⭐⭐⭐</Text>
              <Text style={styles.skill}>Node.js ⭐⭐⭐⭐</Text>
              <Text style={styles.skill}>Debugging ⭐⭐⭐⭐⭐</Text>
              <Text style={styles.skill}>Confidence ⭐⭐⭐⭐⭐</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#102A43",
    letterSpacing: 1.2,
  },
  accentLine: {
    width: 150,
    height: 1,
    backgroundColor: "#F2B705",
    borderRadius: 2,
    marginVertical: 1,
  },
  tagline: {
    fontSize: 12,
    color: "#4B5563",
    letterSpacing: 1,
  },
  divider: {
    height: 4,
    backgroundColor: "#0558f2ff",
    width: "100%",
    marginVertical: 12,
  },
  contact: {
    height: 12,
  },
  subDivider: {
    height: 1,
    backgroundColor: "#0558f2ff",
    width: "94%",
    marginTop: 12,
    marginHorizontal: "auto",
  },
  leftSide: {
    width: "60%",
    paddingHorizontal: 8,
  },
  rightSide: {
    width: "40%",
    paddingHorizontal: 8,
    borderLeftColor: "#062d48ff",
    borderLeftWidth: 0.5,
  },
  content: {
    flexDirection: "row",
    paddingVertical: 6,
  },
  subtitle: {
    backgroundColor: "#1F3A5F",
    paddingHorizontal: 10,
    paddingVertical: 4,
    color: "white",
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  sectionLine: {
    flex: 1, // ✅ THIS IS THE KEY
    height: 1,
    backgroundColor: "#0558f2ff",
    marginLeft: 8,
  },
  text: {
    padding: 4,
  },
  expCard: {
    marginBottom: 12,
  },

  company: {
    fontWeight: "700",
    color: "#0F172A",
  },

  role: {
    fontSize: 12,
    color: "#334155",
    marginBottom: 4,
  },

  point: {
    fontSize: 12,
    color: "#1E293B",
    marginLeft: 6,
  },
  skill: {
    marginVertical: 1,
    fontWeight: "800",
        fontSize:10,
        

  },
  sectionTitle: {
    backgroundColor: "#1F3A5F",
    color: "white",
    padding: 4,
    fontWeight: "600",
    borderRadius: 4,
  },
});

export default ResumeContent;