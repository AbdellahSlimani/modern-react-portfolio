import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import sanityClient, { urlFor } from '../../sanity'

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])
  const [text, count] = useTypewriter({
    words: ['responsible', 'meaningful', 'beautiful'],
    loop: true,
    delaySpeed: 2000,
  })

  const titlep1 = 'I create '
  const titlep1Array = titlep1.split('')
  let titlep2Array = text.split('')
  const titlep3 = ' projects'
  const titlep3Array = titlep3.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {
    sanityClient.fetch(
      `
        *[_type == "projects"] {
        ...,
        }
      `
    ).then((data) => {
      setProjectsData(data)
    })
    
  }, [])
  
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titlep1Array}
              idx={12}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titlep2Array}
              idx={15}
              id="to-change"
            />
            <Cursor cursorColor="#F7AB0A" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titlep3Array}
              idx={22}
            />
          </h1>
          <hr></hr>
          <div className="projects-grid">
            {projectsData.map((project, i) => (
              <div className="project" key={project._id}>
                <a href={project.codeOutput} target="_blank" rel="noreferrer">
                  <img src={urlFor(project.image).url()} alt={project.title} />
                </a>
                <div className="projectDetails">
                  <a href={project.sourceCode} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                  <p className={project.BackgroundMainColor}>{project.description}</p>
                </div>
              </div>
            ))}
            <h2 className="projects_bottom">
              You have reach the bottom, but don't worry there is always more in
              the way...
            </h2>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
