import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl uppercase font-bold mb-6">About Me</h2>
      <ul className="space-y-4 max-w-full sm:max-w-[70%]">
        <li>Name: Tran Thanh Man,I am a Software Engineer</li>
        <li>Email: <a href="mailto:tranthanhman.dev@gmail.com">tranthanhman.dev@gmail.com</a></li>
        <li>Work: Frontend developer</li>
        <li>Graduate: Bachelor of Computer Science</li>
        <li>Tech: Javascript, Typescript, Nodejs, React, Redux, Nextjs, Vue, Sass, Tailwindcss, Ruby, Rails, Mongodb, Postgresql, Mysql, Gcp, Docker</li>
        <li>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,jquery,webpack,ts,html,css,sass,react,nextjs,redux,wordpress,gulp" alt="my-skill" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default About;