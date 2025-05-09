/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} image
 * @property {string} description
 */

/**
 *
 * @param {Project} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function DishCard({project}) {
  return (
    <div>
      <img src={project.image} alt={project.title} className='rounded-3xl p-2'/>
      <div className="p-4">
        <h3 className='mb-2 text-2xl font-bold tracking-tighter'>
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}