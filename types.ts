export type Resume = {
  name: string;
  title: string;
  summary: string;
  skills: string[];

  experience: Experience[];
  achievements: string[];
  education: Education[];

  funFact: string;
};

export type Experience = {
  company: string;
  role: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  details: string;
};
