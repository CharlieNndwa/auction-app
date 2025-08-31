import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react' // Import useState
import ImageGrid from '../Components/pages/Home/ImageGrid'
import { projectsData } from '../Components/pages/Home/ImageGrid' // Import the data
import styled from 'styled-components'

const ProjectButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    & button {
        width:100px;
        height:50px;
        border: 1px solid #888;
        background-color: white;color:#666;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #003d6d;
            color: white;
            border-color: transparent;
        }
    }
`

const ProjectPage = () => {
    // State to track the number of projects to display. Start with 6 to ensure
    // the grid is populated on all screen sizes from the start.
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(6);

    // Get the total number of projects
    const totalProjects = projectsData.length;

    // Handler for the "Load more" button
    const handleLoadMore = () => {
        // Increase the count by 6 each time the button is clicked for a balanced layout
        setVisibleProjectsCount(prevCount => prevCount + 6);
    };

    return (
        <Box mt={5} mb="150px">
            <Container>
                <Box>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        PROJECTS
                    </Typography>
                </Box>
                {/* Pass a slice of the projects data to the ImageGrid component */}
                <ImageGrid projectsToDisplay={projectsData.slice(0, visibleProjectsCount)} />
                
                {/* Show the "Load more" button only if there are more projects to display */}
                {visibleProjectsCount < totalProjects && (
                    <ProjectButton>
                        <button onClick={handleLoadMore}>Load more</button>
                    </ProjectButton>
                )}
            </Container>
        </Box>
    )
}

export default ProjectPage;