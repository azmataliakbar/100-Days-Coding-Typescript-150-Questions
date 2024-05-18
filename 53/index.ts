/*
! Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
 */

interface DeveloperSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

// A list showing a programmer's skills in detail
let developerSkills: DeveloperSkills = {
  languages: ["JavaScript", " TypeScript", " Python"],
  frameworks: ["React", " Angular", " Vue"],
  tools: ["Git", " Webpack", " Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`\nLanguage: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);

// Showing all skills from each category
console.log(`\nLanguage: ${languages}, Framework: ${frameworks}, Tool: ${tools}`);