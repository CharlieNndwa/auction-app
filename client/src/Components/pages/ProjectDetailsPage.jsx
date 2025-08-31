import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectComponent from './Projects/ProjectComponent'
import projectData from './Projects/ProjectData'; // <-- CHANGE IS HERE

const ProjectDetailsPage = () => {
    // Get the dynamic part of the URL, e.g., 'earth-moving-equipment'
    const { projectName } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find the project in the data array based on the URL parameter
        const foundProject = projectData.data.find(
            (item) => item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === projectName
        );
        setProject(foundProject);
    }, [projectName]);

    if (!project) {
        return <p>Project not found.</p>;
    }

    return <ProjectComponent project={project} />;
};

export default ProjectDetailsPage;