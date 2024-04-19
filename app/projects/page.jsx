import Image from "next/image";



export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Weddings ',
            description: 'Badroom with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/weddingproject.jpg',
            link: '',
        },
        {
            id: 2,
            name: 'Corporate Events',
            description: ' We’re experts at setting trends and plan our corporate and branded events that way, too. We go beyond the norm to produce events that are experiential, top-of-mind and stand out with moments that are shareworthy, fresh and designed unique to any brand or business goals.  ',
            image: '/image/corporateevents.jpg',
            link: '',
        },
        {
            id: 3,
            name: 'Social Events',
            description: 'Our passion is for life’s celebrations. From sharing meaningful moments to celebrating the milestones of friends and family, no detail is missed. ',
            image: '/image/social.jpg',
        },
    ];
    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-black ">OUR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">

                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <p className="py-4 ">{project.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}