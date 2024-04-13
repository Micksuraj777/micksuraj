import React from 'react';
import "./../index.css"
import C from "./../assets/icons/c.svg";
import Appwrite from "./../assets/icons/appwrite.svg";
import Bootstrap from "./../assets/icons/bootstrap.svg";
import Canva from "./../assets/icons/canva.svg";
import Clerk from "./../assets/icons/clerk.svg";
import Cloudinary from "./../assets/icons/cloudinary.svg";
import Css from "./../assets/icons/css3.svg";
import Daisy from "./../assets/icons/daisyui.svg";
import Discord from "./../assets/icons/discord.svg";
import Django from "./../assets/icons/django.svg";
import Express from "./../assets/icons/express.svg";
import Figma from "./../assets/icons/figma.svg";
import Firebase from "./../assets/icons/firebase.svg";
import Github from "./../assets/icons/github.svg";
import Googlegemini from "./../assets/icons/googlegemini.svg";
import Html from "./../assets/icons/html5.svg";
import Javascript from "./../assets/icons/javascript.svg";
import Mongodb from "./../assets/icons/mongodb.svg";
import Mongoose from "./../assets/icons/mongoose.svg";
import Nextdot from "./../assets/icons/nextdotjs.svg";
import Nodedot from "./../assets/icons/nodedotjs.svg";
import Perplexity from "./../assets/icons/perplexity.svg";
import Python from "./../assets/icons/python.svg";
import react from "./../assets/icons/react.svg"; 
import Sass from "./../assets/icons/sass.svg";
import Shadcnui from "./../assets/icons/shadcnui.svg";
import Tailwind from "./../assets/icons/tailwindcss.svg";
import Three from "./../assets/icons/threedotjs.svg";
import Typescript from "./../assets/icons/typescript.svg";
import Vercel from "./../assets/icons/vercel.svg";
import Vite from "./../assets/icons/vite.svg";
import Netlify from "./../assets/icons/netlify.svg";
import Marquee from 'react-fast-marquee';

const Scroll = () => {
  const data = [
    { name: 'React.js', imageUrl: react },
    { name: 'Tailwind', imageUrl: Tailwind },
    { name: 'GitHub', imageUrl: Github },
    { name: 'html', imageUrl: Html },
    { name: 'CSS', imageUrl: Css },
    { name: 'Javascript', imageUrl: Javascript },
    { name: 'Typescript', imageUrl: Typescript },
    { name: 'Python', imageUrl: Python },
    { name: 'Vite', imageUrl: Vite },
    { name: 'Vercel', imageUrl: Vercel },
    { name: 'Netlify', imageUrl: Netlify },
    { name: 'Express', imageUrl: Express },
    { name: 'Django', imageUrl: Django },
    { name: 'MongoDB', imageUrl: Mongodb },
    { name: 'Mongoose', imageUrl: Mongoose },
    { name: 'Next.js', imageUrl: Nextdot },
    { name: 'Node.js', imageUrl: Nodedot },
    { name: 'Bootstrap', imageUrl: Bootstrap },
    { name: 'DaisyUI', imageUrl: Daisy },
    { name: 'Sass', imageUrl: Sass },
    { name: 'ShadcnUI', imageUrl: Shadcnui },
    { name: 'Cloudinary', imageUrl: Cloudinary },
    { name: 'Clerk', imageUrl: Clerk },
    { name: 'Canva', imageUrl: Canva },
    { name: 'Figma', imageUrl: Figma },
    { name: 'Appwrite', imageUrl: Appwrite },
    { name: 'Discord', imageUrl: Discord },
    { name: 'C', imageUrl: C },
    { name: 'Perplexity', imageUrl: Perplexity },
    { name: 'Gemini', imageUrl: Googlegemini },
    { name: 'Firebase', imageUrl: Firebase },
    { name: 'Three.js', imageUrl: Three },

  ];
  return (
    <div className="bg-black">
      <div className="text-red-600 overflow-hidden whitespace-nowrap text-center text-2xl py-10">
        <Marquee pauseOnHover speed={100} >
        <ul className='flex items-center'>
        {data.map((item, index) => (
          <li key={index} className='flex'>
            <img src={item.imageUrl} alt={`Item ${index + 1}`} className='filtered-image w-[30px] mx-10'/>
            <h2 className='font-anta text-gradient'>{item.name}</h2>
          </li>
        ))}
      </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default Scroll;