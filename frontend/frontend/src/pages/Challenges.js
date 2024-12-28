import React, { useState } from "react"; // Removed useEffect here
import { Link } from "react-router-dom";
import './Challenges.css';

const Challenges = () => {
  // Retrieve the completed challenges from localStorage or set as an empty array
  const storedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || [];

  const [completedChallenges, setCompletedChallenges] = useState(storedChallenges);

  // Function to handle marking and unmarking a challenge as done
  const handleMarkAsDone = (challengeName) => {
    // Check if the challenge is already marked as done
    if (completedChallenges.includes(challengeName)) {
      // If it is, unmark it
      const updatedChallenges = completedChallenges.filter(challenge => challenge !== challengeName);
      setCompletedChallenges(updatedChallenges);
      // Store the updated list in localStorage
      localStorage.setItem("completedChallenges", JSON.stringify(updatedChallenges));
    } else {
      // If it is not, mark it as done
      const updatedChallenges = [...completedChallenges, challengeName];
      setCompletedChallenges(updatedChallenges);
      // Store the updated list in localStorage
      localStorage.setItem("completedChallenges", JSON.stringify(updatedChallenges));
    }
  };

  // List of challenges
  const challenges = [
    {
      name: "SQL Injection",
      description: "Learn how to exploit SQL injection vulnerabilities.",
      link: "/challenges/sql-injection"
    },
    {
      name: "Admin Login",
      description: "Challenge the login mechanism to gain unauthorized access.",
      link: "/login"
    },
    {
      name: "File Upload",
      description: "Test the file upload functionality for security flaws.",
      link: "/challenges/FileUpload"
    },
    {
      name: "File Upload with Size Limit",
      description: "Test the file upload with size limitations.",
      link: "/challenges/FileUploadWithSizeLimit"
    },
    {
      name: "Login testuser",
      description: "Login challenge to test the user authentication mechanism.",
      link: "/login"
    },
    {
      name: "Privacy Policy",
      description: "Review the privacy policy and identify potential issues.",
      link: "/home"
    },
    {
      name: "Confidential Document",
      description: "Explore how to handle confidential documents securely.",
      link: "/home"
    },
    {
      name: "Bonus Payload",
      description: "Test the application with an XSS payload.",
      link: "/bonus-xss"
    },
    {
      name: "Reflected XSS",
      description: "Learn how to exploit reflected XSS vulnerabilities.",
      link: "/reflected-xss-challenge"
    },
    {
      name: "Unvalidated Redirect",
      description: "Test the system for unvalidated redirects and forwards.",
      link: "/unvalidated-redirects"
    },

    {
      name: "Bully ChatBot",
      description: "Bully chatbot to get code",
      link: "/chatbot"
    },
    {
      name: "Weak Password Strength Validation",
      description: "Test the system for insufficient password strength validation, allowing weak or easily guessable passwords.",
      link: "/password-checker"
    }
    
  ];

  return (
    <div>
      <h1>Challenges</h1>

      {/* Scoreboard */}
      <div className="scoreboard">
        <p>Challenges Completed: {completedChallenges.length}/{challenges.length}</p>
      </div>

      <div className="challenge-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <h3>{challenge.name}</h3>
            <p>{challenge.description}</p>
            <Link to={challenge.link}>Start Challenge</Link>
            <button 
              className={`mark-done-btn ${completedChallenges.includes(challenge.name) ? 'completed' : ''}`}
              onClick={() => handleMarkAsDone(challenge.name)}
            >
              {completedChallenges.includes(challenge.name) ? 'Unmark as Done' : 'Mark as Done'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
