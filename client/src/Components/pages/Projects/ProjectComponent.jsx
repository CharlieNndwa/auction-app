import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ProjectSpecification = styled.p`
    font-size: 16px;
    line-height: 2.3;
    color: #000;
`

const ProjectSpecificationTitle = styled.h4`
    margin: 20px 0px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    color: #000;
`

const BorderBottom = styled.p`
    position: relative;
    padding-bottom: 5px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 55%;
        border-bottom: 1px solid lightblue;
        transition: width 0.5s ease-in-out;
    }
    
    &:hover::after {
    width: 100%;
}     
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;
    &:hover,:active {
        color: #494949;
    }
`

const Arrows = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: ${({ isLeftArrow, isRightArrow }) => (isLeftArrow && isRightArrow ? "space-between" : isLeftArrow ? "left" : "right")};
`   

const ProjectComponent = ({ project }) => {

    if (!project) {
        return <p>Loading project details...</p>;
    }

    return (
        <Box my="100px">
            <Container>
                <Grid container spacing={3} sx={{ display: "flex", justifyContent: { sm: "column", md: "row" } }}>
                    <Grid item md={8} sm={12}>
                        <Box sx={{ maxWidth: "100%" }}>
                            <Box mb="20px" sx={{ 
                                maxWidth: "100%", 
                                display: "flex", 
                                flexWrap: "wrap", // Allow items to wrap to a new line
                                justifyContent: "center", // Center images horizontally
                                gap: "20px" // Add space between images
                            }}>
                                {project.images?.map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image} 
                                        alt={`Project image ${index}`} 
                                        style={{
                                            width: 'calc(33.33% - 20px)', // Set width to fit 3 images per row
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box sx={{ border: "1px solid #ebebeb", background: "#fff", width: "100%", padding: "30px" }}>
                            <Box>
                                <Typography 
                                    sx={{ 
                                        marginBottom: "10px", 
                                        fontSize: "30px", 
                                        lineHeight: "1.2", 
                                        textTransform: "uppercase",
                                        color: '#000'
                                    }}>
                                    {project.title}
                                </Typography>
                                <Box sx={{ borderBottom: "1px solid lightblue", width: "55%" }} />
                            </Box>
                            <Box>
                                {project.secondTitle && (
                                    <BorderBottom>
                                        <ProjectSpecification>{project.secondTitle}</ProjectSpecification>
                                    </BorderBottom>
                                )}
                            </Box>
                            {project.specData.specificationTitles.map((title, index) => (
                                <Box key={index}>
                                    <BorderBottom>
                                        <ProjectSpecificationTitle>{title}</ProjectSpecificationTitle>
                                        <ProjectSpecification>{project.specData.specifications[index]}</ProjectSpecification>
                                    </BorderBottom>
                                </Box>
                            ))}
                            <Arrows isLeftArrow={project.arrowLeft} isRightArrow={project.arrowRight}>
                                {project.arrowLeft && (
                                    <StyledLink to={`${project.paths[0]}`}>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </StyledLink>
                                )}
                                {project.arrowRight && (
                                    <StyledLink to={`${project.arrowLeft && project.arrowRight ? project.paths[1] : project.paths[0]}`}>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </StyledLink>
                                )}
                            </Arrows>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ProjectComponent;