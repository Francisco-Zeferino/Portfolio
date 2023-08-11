import SchoolProjectsCards from '../projects/schoolProjects'
import PersonalProjects from '../projects/personalProjects'

export function MyProjects(){
  return(
    <>
      <PersonalProjects />
      <SchoolProjectsCards />
    </>
  )
}

export default MyProjects;