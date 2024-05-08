import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function DropDown({ title }) {
  return (
    <Stack spacing={30} sx={{ width: 200 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={title == "skills" ? skills : certificates}
        getOptionLabel={(option) => option.title}
        // defaultValue={title == "skills" ? [skills[0]] : [certificates[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="standard"
            // label="Multiple values"
            placeholder={title}
          />
        )}
      />
    </Stack>
  );
}

const certificates = [
  { title: "Learn a new programming language" },
  { title: "Master data structures and algorithms" },
  { title: "Complete LeetCode problem-solving challenges" },
  { title: "Complete HackerRank coding challenges" },
  { title: "Complete Codecademy programming courses" },
  { title: "Complete Coursera programming specialization" },
  { title: "Complete edX computer science courses" },
  { title: "Complete Udacity nanodegree program" },
  { title: "Complete freeCodeCamp certifications" },
  { title: "Complete Google IT Support Professional Certificate" },
  { title: "Complete IBM Data Science Professional Certificate" },
  { title: "Complete Microsoft Professional Program in Data Science" },
  { title: "Complete AWS Certified Solutions Architect - Associate" },
  { title: "Complete Cisco Certified Network Associate (CCNA)" },
  { title: "Complete CompTIA Security+ certification" },
  { title: "Complete Certified Ethical Hacker (CEH) certification" },
  {
    title:
      "Complete Certified Information Systems Security Professional (CISSP) certification",
  },
  {
    title:
      "Complete Certified Cloud Security Professional (CCSP) certification",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) certification",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) certification",
  },
  { title: "Complete Certified ScrumMaster (CSM) certification" },
  { title: "Complete Project Management Professional (PMP) certification" },
  { title: "Complete AWS Certified Developer - Associate certification" },
  { title: "Complete Google Cloud Professional Cloud Architect certification" },
  {
    title:
      "Complete Microsoft Certified: Azure Solutions Architect Expert certification",
  },
  { title: "Complete Red Hat Certified Engineer (RHCE) certification" },
  { title: "Complete Docker Certified Associate (DCA) certification" },
  { title: "Complete Kubernetes Certified Administrator (CKA) certification" },
  {
    title:
      "Complete Certified Information Privacy Professional (CIPP) certification",
  },
  {
    title:
      "Complete Certified Information Privacy Manager (CIPM) certification",
  },
  {
    title:
      "Complete Certified Information Privacy Technologist (CIPT) certification",
  },
  { title: "Complete Salesforce Certified Administrator certification" },
  { title: "Complete Salesforce Certified Developer certification" },
  { title: "Complete Salesforce Certified Architect certification" },
  { title: "Complete Oracle Certified Professional (OCP) certification" },
  { title: "Complete MongoDB Certified Developer certification" },
  { title: "Complete CompTIA A+ certification" },
  {
    title: "Complete Google IT Automation with Python Professional Certificate",
  },
  { title: "Complete IBM Applied AI Professional Certificate" },
  {
    title:
      "Complete Microsoft Certified: Azure AI Engineer Associate certification",
  },
  {
    title: "Complete AWS Certified Machine Learning - Specialty certification",
  },
  { title: "Complete TensorFlow Developer Certificate" },
  { title: "Complete PyTorch Scholarship Challenge Nanodegree Program" },
  { title: "Complete NVIDIA Deep Learning Institute (DLI) courses" },
  { title: "Complete Unity Certified Associate certification" },
  { title: "Complete Unreal Engine certification" },
  { title: "Complete Blender Certified Trainer certification" },
  { title: "Complete Autodesk Certified Professional certification" },
  { title: "Complete UI/UX Design Specialization on Coursera" },
  { title: "Complete Interaction Design Foundation courses" },
  { title: "Complete Human-Computer Interaction (HCI) certification" },
  { title: "Complete Certified Usability Analyst (CUA) certification" },
  { title: "Complete Certified User Experience Analyst (CXA) certification" },
  {
    title:
      "Complete AWS Certified DevOps Engineer - Professional certification",
  },
  { title: "Complete Google Professional Cloud DevOps Engineer certification" },
  {
    title:
      "Complete Microsoft Certified: Azure DevOps Engineer Expert certification",
  },
  { title: "Complete Jenkins Engineer (CJE) certification" },
  { title: "Complete Puppet Certified Professional (PCP) certification" },
  { title: "Complete Chef Certified Developer (CCD) certification" },
  { title: "Complete Ansible Certified Engineer (ACE) certification" },
  { title: "Complete Terraform Associate certification" },
  {
    title:
      "Complete AWS Certified Solutions Architect - Professional certification",
  },
  { title: "Complete Google Professional Cloud Architect certification" },
  {
    title:
      "Complete Microsoft Certified: Azure Solutions Architect Expert certification",
  },
  {
    title:
      "Complete Certified Kubernetes Security Specialist (CKS) certification",
  },
  {
    title:
      "Complete Certified Kubernetes Application Developer (CKAD) certification",
  },
  { title: "Complete Certified Kubernetes Administrator (CKA) certification" },
  { title: "Complete Certified OpenStack Administrator (COA) certification" },
  { title: "Complete CompTIA Linux+ certification" },
  {
    title:
      "Complete Microsoft Certified: Azure Administrator Associate certification",
  },
  {
    title:
      "Complete AWS Certified SysOps Administrator - Associate certification",
  },
  {
    title: "Complete Google Professional Cloud Network Engineer certification",
  },
  {
    title: "Complete Cisco Certified Internetwork Expert (CCIE) certification",
  },
  {
    title:
      "Complete Certified Information Technology Professional (CITP) certification",
  },
  {
    title:
      "Complete Certified Information Systems Security Professional (CISSP) concentration certifications",
  },
  {
    title:
      "Complete Certified Cloud Security Professional (CCSP) concentration certifications",
  },
  {
    title:
      "Complete Certified Ethical Hacker (CEH) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) concentration certifications",
  },
  {
    title:
      "Complete Certified in Risk and Information Systems Control (CRISC) certification",
  },
  {
    title:
      "Complete Certified Information Systems Security Professional (CISSP) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) concentration certifications",
  },
  {
    title:
      "Complete Certified in Risk and Information Systems Control (CRISC) certification",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) concentration certifications",
  },
  {
    title:
      "Complete Certified in Risk and Information Systems Control (CRISC) certification",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },

  {
    title:
      "Complete Certified in Risk and Information Systems Control (CRISC) certification",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Security Manager (CISM) concentration certifications",
  },
  {
    title:
      "Complete Certified Information Systems Auditor (CISA) concentration certifications",
  },
];

const skills = [
  { title: "Clean code" },
  { title: "Debugging" },
  { title: "Object-oriented programming (OOP)" },
  { title: "Problem-solving" },
  { title: "Data structures" },
  { title: "Algorithms" },
  { title: "Version control (e.g., Git)" },
  { title: "Software design patterns" },
  { title: "Unit testing" },
  { title: "Agile development methodologies" },
  { title: "Continuous integration/continuous deployment (CI/CD)" },
  { title: "Refactoring" },
  { title: "Code review" },
  { title: "Pair programming" },
  { title: "Documentation" },
  { title: "Technical writing" },
  { title: "Time management" },
  { title: "Critical thinking" },
  { title: "Attention to detail" },
  { title: "Adaptability" },
  { title: "Collaboration" },
  { title: "Communication" },
  { title: "Leadership" },
  { title: "Empathy" },
  { title: "Resilience" },
  { title: "Creativity" },
  { title: "Problem-solving" },
  { title: "Analytical thinking" },
  { title: "Decision-making" },
  { title: "Conflict resolution" },
  { title: "Negotiation" },
  { title: "Presentation skills" },
  { title: "Time management" },
  { title: "Project management" },
  { title: "Risk management" },
  { title: "Customer service" },
  { title: "Sales skills" },
  { title: "Networking" },
  { title: "Marketing" },
  { title: "Financial literacy" },
  { title: "Data analysis" },
  { title: "Statistics" },
  { title: "Machine learning" },
  { title: "Deep learning" },
  { title: "Natural language processing (NLP)" },
  { title: "Computer vision" },
  { title: "Reinforcement learning" },
  { title: "Big data technologies" },
  { title: "Cloud computing" },
  { title: "DevOps" },
  { title: "Containerization" },
  { title: "Microservices architecture" },
  { title: "Serverless computing" },
  { title: "Blockchain technology" },
  { title: "Cryptocurrency" },
  { title: "Cybersecurity" },
  { title: "Ethical hacking" },
  { title: "Digital forensics" },
  { title: "Risk assessment" },
  { title: "Security auditing" },
  { title: "Vulnerability management" },
  { title: "Network security" },
  { title: "Web application security" },
  { title: "Secure coding practices" },
  { title: "Identity and access management (IAM)" },
  { title: "Security architecture design" },
  { title: "Incident response" },
  { title: "Disaster recovery" },
  { title: "Business continuity planning" },
  { title: "Compliance management" },
  { title: "Penetration testing" },
  { title: "Social engineering" },
  { title: "Malware analysis" },
  { title: "Risk mitigation strategies" },
  { title: "Threat modeling" },
  { title: "Endpoint security" },
  { title: "Data encryption" },
  { title: "Intrusion detection and prevention systems (IDPS)" },
  { title: "Secure software development lifecycle (SDLC)" },
  { title: "Privacy compliance (e.g., GDPR, CCPA)" },
  { title: "Cloud security" },
  { title: "Wireless security" },
  { title: "Mobile security" },
  { title: "Security awareness training" },
  { title: "IoT security" },
  { title: "Physical security" },
  { title: "Forensic analysis" },
  { title: "Ethical decision-making" },
  { title: "Crisis management" },
  { title: "Emotional intelligence" },
  { title: "Empathy" },
  { title: "Stress management" },
  { title: "Conflict resolution" },
  { title: "Cultural competence" },
  { title: "Cross-cultural communication" },
];
