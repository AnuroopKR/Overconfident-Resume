import React, { createContext, useState } from "react";
import { Resume } from "./types";

/* 1. Define resume shape */
export const initialResume: Resume = {
  name: "",
  title: "",
  summary: "",
  skills: [],
  experience: [],
  achievements: [],
  education: [],
  funFact: "",
};

/* 2. Define context value type */
type ResumeContextType = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};

/* 3. Create typed context */
export const ResumeContext = createContext<ResumeContextType | null>(null);

type ResumeProviderProps = {
  children: React.ReactNode;
};

export const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [resume, setResume] = useState<Resume>(initialResume);
  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};
