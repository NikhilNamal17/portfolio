import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Link } from 'rebass'
import unwidow from '../utils/unwidow'
import Paragraph from './Paragraph'
import ArrowLink from './ArrowLink'

const ProjectTitle = ({ sx, children, ...props }) => (
  <Heading sx={{ display: 'inline-block', ...sx }} {...props}>
    {children}
  </Heading>
)

ProjectTitle.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const InlineBox = ({ sx, children, ...props }) => (
  <Box sx={{ display: 'inline-block', ...sx }} {...props}>
    {children}
  </Box>
)

InlineBox.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const ProjectPreview = ({ project, level, ...props }) => (
  <Box {...props}>
    <Link
      variant="ui-link"
      href={project.website ? project.website : project.repo}
    >
      <ProjectTitle
        as={level}
        my={0}
        fontSize={[2, 3]}
        fontWeight="bold"
        lineHeight="title"
      >
        {unwidow(project.title)}
      </ProjectTitle>
    </Link>

    <Paragraph mt={3} mb={2}>
      {unwidow(project.description)}
    </Paragraph>

    {project.website && (
      <InlineBox {...(project.website && project.repo ? { mr: 4 } : {})}>
        <ArrowLink href={project.website}>Website</ArrowLink>
      </InlineBox>
    )}

    {project.repo && (
      <InlineBox>
        <ArrowLink href={project.repo}>Repository</ArrowLink>
      </InlineBox>
    )}
  </Box>
)

const projectPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  repo: PropTypes.string,
  website: PropTypes.string,
})

ProjectPreview.propTypes = {
  project: projectPropType.isRequired,
  level: PropTypes.string.isRequired,
}

export { projectPropType }
export default ProjectPreview
