import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectsData from '../../data/projectsData.json'
import './index.scss'



const Projects = () => {
  const projectsTitleKeyWords = ['responsible', 'meaningful', 'beautiful']
  const [titlep2, setTitlep2] = useState('')
  let index = 0

  const change = () => { 
    setTitlep2(projectsTitleKeyWords[index])
    index = ++index % projectsTitleKeyWords.length
    setTimeout(change, 3000)
  }
  
  useEffect(() => {
    change()
  }, [])
  console.log(titlep2)
  

  const titlep1 = 'I create '
  const titlep1Array = titlep1.split('')
  let titlep2Array = titlep2.split('')
  const titlep3 = ' projects'
  const titlep3Array = titlep3.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  

  return (
    <>
      <div className='container projects-page'>
        <div className='text-zone'>
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
              id='to-change'
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titlep3Array}
              idx={22}
            />
          </h1>
          <hr></hr>
          <div className='projects-grid'>
            {projectsData.map(project =>
              <img key={project.id} id={project.id} src={project.image} alt={project.title}/>
            )}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects