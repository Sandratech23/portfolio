
import './Work.css';



const school = [
  {id: 1, title: 'University of Lagos', course: 'MSc Environmental Toxicology and Pollution Management', year: '2021-2023' },
  { id: 2, title: 'Novena University', course: 'B Sc. Microbiology', year: '2014-2017' }
];
const works=[
  {id:1, title:'Best Fx Limited', jobRole: 'Junior Frontend Developer', year: '2023-till date'},
  {id:2, title:'GeorgeDev Limited', jobRole: 'Frontend Developer Intern', year: '2022-2023'}
]
const Work = () => {
  return (
    <div>
      <div className='body'>
        <div className="flex-container">
          <div className="trees">
            <section className="tree-wrapper">
              <h3 className="title">School </h3>
              <div className="tree">
                {school.map(({ id, title, course, year }) => (
                  <div className="branch" key={id}>
                    <div className='branch-body'>
                      <h1 className='branch-title'>{title}</h1>
                      <h3>{course}</h3>
                      <h4>{year}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="tree-wrapper">
              <h3 className="title">Work </h3>
              <div className="tree">
                {works.map(({ id, title, jobRole, year }) => (
                  <div className="branch" key={id}>
                    <div className='branch-body'>
                      <h1 className='branch-title'>{title}</h1>
                      <h3>{jobRole}</h3>
                      <h4>{year}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="tree-wrapper">
              <h3 className="title">Skill </h3>
              <div className="tree">
                <div className="branch">
                  <img />
                  <div className="branch-body">
                    <h1 className="branch-title"> JS, TS </h1>
                    <h3> Javascript frameworks and libraries, React, Typescript, Node, HTML, CSS, Git.... </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
