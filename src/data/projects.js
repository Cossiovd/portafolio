import petSaludImg from '../images/petSalud.png';
import vetCareImg from '../images/vetCare.png';
import theFluidMentorImg from '../images/theFluidMentor.png';
import redHabImg from '../images/redHab.png';

export const projects = [
    {
        title: "RedHab",
        short_description: "Aplicación móvil para conectar usuarios y facilitar el intercambio de conocimientos",
        long_description: "Aplicación móvil orientada al intercambio de conocimientos entre usuarios, basada en sus intereses y ubicación geográfica. Permite conectar con personas con habilidades complementarias, facilitando la colaboración y el aprendizaje.",
        tags: ["Fultter", "Dart", "Material Design"],
        image: redHabImg,
        repository: "https://dcossiodev.github.io/RedHab/",
        link: "https://dcossiodev.github.io/RedHab/",
        status: "Publicado (demo)"
    },
    {
        title: "PetSalud",
        short_description: "Landing page para clínica veterinaria enfocada en la presentación de servicios y generación de confianza a través de testimonios de clientes.",
        long_description: "Landing page diseñada para una clínica veterinaria, orientada a la promoción de servicios y fortalecimiento de la confianza mediante historias de clientes.",
        tags: ["Vite", "React", "Tailwind CSS"],
        image: petSaludImg,
        repository: "https://github.com/dcossiodev/vet",
        link: "https://dcossiodev.github.io/vet/",
        status: "Publicado (demo)"
    },
    {
        title: "Ecommerce",
        short_description: "Plataforma e-commerce para productos veterinarios que permite a los usuarios gestionar su perfil, registrar mascotas y realizar compras en línea",
        long_description: "VetCare es una solución e-commerce desarrollada para el sector veterinario, que integra funcionalidades de autenticación de usuarios, gestión de perfiles, registro de mascotas y flujo de compra de productos en línea. El proyecto se enfocó en el diseño de una arquitectura funcional que permitiera organizar la información de usuarios y mascotas, así como estructurar un proceso de compra claro y eficiente. Se definieron flujos de usuario, prototipos y componentes de interfaz orientados a mejorar la experiencia de navegación",
        tags: ["React", "JavaScript", "Tailwind CSS", "Firebase", "React Router"],
        image: vetCareImg,
        repository: "https://github.com/dcossiodev/ecommerce",
        link: "https://dcossiodev.github.io/ecommerce/",
        status: "Publicado (demo)"
    },
    {
        title: "The Fluid Mentor",
        short_description: "Plataforma para descubrir la ruta profesional ",
        long_description: "The Fluid Mentor es una plataform para descubrir el camino profesional que mejor se adapta a tus talentos y aspiraciones con la guia experar de nuestros tutores. (Estamos en construcción)",
        tags: ["React", "JavaScript", "Tailwind CSS", "Firebase", "React Router"],
        image: theFluidMentorImg,
        repository: "https://github.com/dcossiodev",
        link: "",
        status: "Prototipo en validación"
    }
];
