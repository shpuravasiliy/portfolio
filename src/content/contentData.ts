import img1 from '../assets/image/p2-2.png'
import img2 from '../assets/image/p4-4.png'
import img3 from '../assets/image/p3-3.png'

//common types
export type descriptionType = string[]
export type projectsType = {
    image: string
    title: string
    description: string
}
export type skillsType = {
    title: string
    description: string
}
export type socialMediaType = {
    title: string
    icon: string
}

//sections type
export type SectionType<T = []> = {
    title: string
    titleDescription: string
    data: T
}


//common data
export const fullName: string = 'Shpura Vasiliy'

export const description: descriptionType = [
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ',
]

export const projects: projectsType[] = [
    {
        image: img1,
        title: 'Social network',
        description: description[0],
    },
    {
        image: img2,
        title: 'Todolist',
        description: description[1],
    },
    {
        image: img3,
        title: 'Some project',
        description: description[2],
    },
]

export const skills: skillsType[] = [
    {
        title: 'React',
        description: description[0],
    },
    {
        title: 'Redux',
        description: description[1],
    },
    {
        title: 'TypeScript',
        description: description[2],
    },
    {
        title: 'Git',
        description: description[1],
    },
    {
        title: 'Material UI',
        description: description[0],
    },
    {
        title: 'Responsive UI',
        description: description[2],
    },
    {
        title: 'Storybook',
        description: description[1],
    },
    {
        title: 'Jest',
        description: description[0],
    },
]

export const socialMedia: socialMediaType[] = [
    {
        title: 'TG',
        icon: '',
    },
    {
        title: 'GitHub',
        icon: '',
    },
    {
        title: 'Email',
        icon: '',
    },
    {
        title: 'Mobile',
        icon: '',
    },
]


//sections data
export const projectsSection: SectionType<projectsType[]> = {
    title: 'Projects',
    titleDescription: 'My best work',
    data: [
        {
            image: img1,
            title: 'Social network',
            description: description[0],
        },
        {
            image: img2,
            title: 'Todolist',
            description: description[1],
        },
        {
            image: img3,
            title: 'Some project',
            description: description[2],
        },
    ]
}
export const skillsSection: SectionType<skillsType[]> = {
    title: 'Skills',
    titleDescription: '1 Year of Experience',
    data: [
        {
            title: 'React',
            description: description[0],
        },
        {
            title: 'Redux',
            description: description[1],
        },
        {
            title: 'TypeScript',
            description: description[2],
        },
        {
            title: 'Git',
            description: description[1],
        },
        {
            title: 'Material UI',
            description: description[0],
        },
        {
            title: 'Responsive UI',
            description: description[2],
        },
        {
            title: 'Storybook',
            description: description[1],
        },
        {
            title: 'Jest',
            description: description[0],
        },
    ]
}


