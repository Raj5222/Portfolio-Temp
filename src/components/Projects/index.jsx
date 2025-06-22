import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Span,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { Pass } from "../../utils/Themes";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Available_project = new Set();
  projects.forEach((project) => {
    Available_project.add(project.category);
  });
  if (window.raj === Pass) {
    window.project = {
      Available_project,
      projects,
      id: [
        "web app",
        "android app",
        "artificial intelligence",
        "machine learning",
        "cloud computing",
      ],
    };
  }
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Raj5222/Portfolio-data/main/Project.json"
        ); // Ensure this URL matches your backend configuration
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectsData();
  }, []);

  if (loading) {
    // return console.log("Fetching Projects Loading")
  }

  if (error) {
    return console.log("Fetching Projects Error");
  }
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of them.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          {Available_project.has("web app") && (
            <>
              <Divider />
              {toggle === "web app" ? (
                <ToggleButton
                  active
                  value="web app"
                  onClick={() => setToggle("web app")}
                >
                  Web App's
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="web app"
                  onClick={() => setToggle("web app")}
                >
                  Web App's
                </ToggleButton>
              )}
            </>
          )}
          {Available_project.has("android app") && (
            <>
              <Divider />
              {toggle === "android app" ? (
                <ToggleButton
                  active
                  value="android app"
                  onClick={() => setToggle("android app")}
                >
                  Android App's
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="android app"
                  onClick={() => setToggle("android app")}
                >
                  Android App's
                </ToggleButton>
              )}
            </>
          )}
          {Available_project.has("artificial intelligence") && (
            <>
              <Divider />
              {toggle === "artificial intelligence" ? (
                <ToggleButton
                  active
                  value="artificial intelligence"
                  onClick={() => setToggle("artificial intelligence")}
                >
                  Artificial Intelligence
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="artificial intelligence"
                  onClick={() => setToggle("artificial intelligence")}
                >
                  Artificial Intelligence
                </ToggleButton>
              )}
            </>
          )}
          {Available_project.has("machine learning") && (
            <>
              <Divider />
              {toggle === "machine learning" ? (
                <ToggleButton
                  active
                  value="machine learning"
                  onClick={() => setToggle("machine learning")}
                >
                  Machine Learning
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="machine learning"
                  onClick={() => setToggle("machine learning")}
                >
                  Machine Learning
                </ToggleButton>
              )}
            </>
          )}
          {Available_project.has("cloud computing") && (
            <>
              <Divider />
              {toggle === "cloud computing" ? (
                <ToggleButton
                  active
                  value="cloud computing"
                  onClick={() => setToggle("cloud computing")}
                >
                  Cloud Computing
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="cloud computing"
                  onClick={() => setToggle("cloud computing")}
                >
                  Cloud Computing
                </ToggleButton>
              )}
            </>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects.filter((item) => item.category === toggle).length === 0 ? (
            toggle !== "all" ? (
              <Span>No {toggle} projects are available for showcasing.</Span>
            ) : null
          ) : (
            projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
