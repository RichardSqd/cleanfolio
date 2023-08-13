const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://RichardSqd.github.io/cleanfolio',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Richard Sun',
  role: 'Software Engineer', 
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '',
  social: {
    linkedin: '',
    github: 'https://github.com/RichardSqd',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Multi-threaded DX12 Renderer',
    description:
      'A multithreaded renderer based on DirectX 12, this project explores various rendering techniques and incorporates experimental features. It supports glTF 2.0, Physically Based Rendering(PBR), Imaged based lighting(IBL), HDRI mapping, MSAA and a lot more techniques. It also allows real time rendering modifications and inspection of core statistics through ImGui windows.',
    stack: ['DirectX 12', 'C++', 'HLSL', "GPU"],
    sourceCode: 'https://github.com/RichardSqd/VisualEngine',
    livePreview: '',
  },
  {
    name: 'Offline PathTracing Renderer',
    description:
      'An offline renderer based on the path tracing algorithm. It uses Bounding Box Hierarchy (BVH) for primitive intersaction dection and adaptive sampling for high efficiency. Multiple specialized materials such as glass, mirror, and microfacet are also implemented as a part of the renderer.',
    stack: ['C++', 'Ray-tracing', "Optimization", "Materials"],
    sourceCode: 'https://github.com/RichardSqd/Pathtracer',
    livePreview: '',
  },
  {
    name: 'Containerized Web Development',
    description:
      'Built and deployed a containerized web app using Azure Pipeline, Docker, Docker-compose, and Nginx. This app consists of both backend and front end part. The backend part is developed using .NET Core, Entity Framework, MySQL, and MongoDB. An CI/CD pipeline was developed and configured on Azure DevOps.',
    stack: ['.NET Core', 'Entity Framework', 'MySQL', "MongoDB", "Nginx", "Azure", "CI/CD"],
    sourceCode: 'https://github.com',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "C++",
  "C#",
  "Python",
  "Unix",
  "DirectX 12",
  "PIX",
  "RenderDoc",  
  "VTK",
  "UE5",
  "Autodesk Maya",
  'Git',
  "Docker",
  "MySQL",
  "CAD/CAM",
  "Autodesk Fusion360"

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sqdrichard@mail.com',
}

export { header, about, projects, skills, contact }
