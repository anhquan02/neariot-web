import { memo } from "react";
import ProjectCard from "../Card/ProjectCard";

const listProject = [
    {
        id:"1",
        owner:"anhquan02",
        name:"Neariot",
        img:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380",
        type:"0",
        descriptions:"billingual-english-vietnamese-picture-book-thet-retells-the",
        pledgers:2903,
        backers:2,
        avg_rate:3,
    },
    {
        id:"2",
        owner:"anhquan02",
        name:"Neariot",
        img:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380",
        type:"0",
        descriptions:"billingual-english-vietnamese-picture-book-thet-retells-the",
        pledgers:2903,
        backers:2,
        avg_rate:3,
    },
    {
        id:"3",
        owner:"anhquan02",
        name:"Neariot",
        img:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380",
        type:"0",
        descriptions:"billingual-english-vietnamese-picture-book-thet-retells-the",
        pledgers:2903,
        backers:2,
        avg_rate:3,
    },
    {
        id:"4",
        owner:"anhquan02",
        name:"Neariot",
        img:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380",
        type:"0",
        descriptions:"billingual-english-vietnamese-picture-book-thet-retells-the",
        pledgers:2903,
        backers:2,
        avg_rate:3,
    },
]

const RecomendContainer = memo(()=>{

    return (
        <>
        <div className="container my-12 bg-transparent px-20">
             <div className="grid gap-4 grid-rows-4">
                {listProject.map((item,index)=>{
                    return (
                        <ProjectCard key={index} {...item}/>
                    )
                })}                
             </div>
        </div>
        </>
    )
})

RecomendContainer.displayName = "RecomendContainer";

export default RecomendContainer