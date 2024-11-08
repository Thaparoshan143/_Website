
const ProjectCard = ({title, description, tools, url} : any) => {
    return (
        <div className="h-[15rem] w-[20rem] border-2 border-theme-b rounded-md p-2 flex flex-col justify-evenly items-center">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="bg-theme-w p-2 px-4 text-theme rounded-sm">Visit</button>
        </div>
    )
}

export { ProjectCard }