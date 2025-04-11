/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {{md: string, lg: string, xl: string}} image
 * @property {string} description
 */

/**
 *
 * @param {Project} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function DishCard({project}) {
  //Todo: Debo configurar el elemento SRCSET para que cargue las imagenes de forma responsive
  return (
    <div>
      {/*<img src={project.image} alt={project.title} className='rounded-3xl p-2'/>*/}
      <img
        src={"https://dummyimage.com/100x100"}
        // srcSet={`${project.image.md} 768w, ${project.image.lg} 1024w, ${project.image.xl} 1280w`}
        srcSet={`https://dummyimage.com/800x800 768w, https://dummyimage.com/1024x1024 1024w, https://dummyimage.com/1400x1400 1280w`}
        // sizes="(max-width: 768px) 800px, (max-width: 1024px) 1024px, 1400px"
        alt={project.title}
        className='rounded-3xl p-2'
      />
      <div className="p-4">
        <h3 className='mb-2 text-2xl font-bold tracking-tighter'>
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}