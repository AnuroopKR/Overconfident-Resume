import { ResumeContext } from "@/context";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ResumeForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setloading] = useState(false);
  const context = useContext(ResumeContext);
  if (!context) return null;

  const { setResume } = context;

  async function askGemini() {
    const API_KEY = "AIzaSyBLWzoCTSvY8NW8B1bFi5Ey9GQIpoDGUc0";
    setloading(true);
    try {
      const prompt = `
Generate an overconfident resume in pure JSON.

name: ${name}
role: ${role}
experience: ${experience}

JSON FORMAT ONLY:
{
  "name": "",
  "title": "",
  "summary": "",
  "skills": [],
  "experience": [
    {
      "company": "",
      "role": "",
      "description": ""
    }
  ],
  "achievements": [],
  "education": [],
  "funFact": ""
}
No markdown. No explanation.
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
        throw new Error("Gemini API error");
      }

      const text = data.candidates[0].content.parts[0].text;

      // IMPORTANT: Parse JSON safely
      const parsedResume = JSON.parse(text);

      // Save to context
      setResume(parsedResume);
      setloading(false);
      router.push("/resume");
    } catch (error) {
      console.error("Gemini Error:", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Role</Text>
        <TextInput
          style={styles.input}
          placeholder="Frontend Wizard 😎"
          value={role}
          onChangeText={setRole}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Experience</Text>
        <TextInput
          style={styles.input}
          placeholder="10+ years (emotionally)"
          value={experience}
          onChangeText={setExperience}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={askGemini}>
        {loading ? (
          <Text style={styles.buttonText}> Generating</Text>
        ) : (
          <Text style={styles.buttonText}>Generate Resume</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ResumeForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#fff",

    // shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  button: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
