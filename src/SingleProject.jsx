import { useParams } from "react-router-dom";

export function SingleProject()
{
    const {id} = useParams();
    const Projects = 
    [
        {id:1,name:"vfx overload",img:"../images/berkayshowreelimg.png",description:"this is a placeholder description"},
        {id:2,name:"anime montage",img:"../images/berkayshowreelimg.png",description:"this is a placeholder description"},
        {id:3,name:"Fiverr",img:"../images/berkayshowreelimg.png",description:"this is a placeholder description"}
    ];

    const project = Projects.find((project) => project.id === parseInt(id))

    return(
        <div>
            <h1>{project.name}</h1>
            <img src={project.img} alt="" />
            <p>{project.description}</p>
        </div>
    )

}