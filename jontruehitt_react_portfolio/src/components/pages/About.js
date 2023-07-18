import profilePhoto from '../../assets/profile_placeholder.png'

export default function About() {
    return (
      <div className="text-center container d-flex flex-column align-items-center">
        <h1>Nice to meet you, I'm <span className='active'>Jon</span></h1>
        <div className='profilePicContainer'><img src={profilePhoto} alt="Jon Truehitt" className="img-fluid rounded-circle my-3" /></div>
        <p>
          Welcome to my page! Thanks for stopping by.
        </p>
        <p>
          I'm currently nearing completion of the UCF Full Stack coding bootcamp, where I've gained a solid foundation in responsive web design. After starting from ground zero and learning basic building blocks of the web like HTML & CSS, it's exciting to see how far I've come as I'm sitting here putting together this portfolio made with React. JavaScript has become one of my core programming languages, allowing me to create dynamic and interactive web applications. I've also learned about working with APIs to integrate external services into my projects, and I've gained experience with databases for storing and retrieving data efficiently. I'm proficient in building MERN (MongoDB, Express.js, React.js, Node.js) stack projects using Node.js. I've also gained experience with other popular frameworks and libraries, including jQuery, Bootstrap, and Handlebars.js to name only a few.
        </p>
        <p>
          In addition to my bootcamp studies, I've engaged in continuous self-study, constantly expanding my knowledge and skills. I'm passionate about staying up to date with the latest industry trends and best practices to ensure I'm delivering high-quality code.
        </p>
        <p>
          While pursuing my coding career, I've been working full-time in a different industry. However, I've come to the realization that my true passion lies in software development, and I'm committed to making it my primary focus. I strongly believe that life is too short to not enjoy the work we do.
        </p>
        <p>
          Outside of coding, my greatest joy comes from spending time with my loving family. I'm proud to be the father of an incredible and amazing baby boy, who serves as constant inspiration for me to pursue my dreams. I'm incredibly grateful for my wonderful wife, whose unwavering support and love make all of this possible.
        </p>
        <p>
          I'm excited about the opportunities ahead and look forward to further enhancing my skills and contributing to meaningful projects. Feel free to explore my portfolio and reach out to me for any collaboration or development opportunities.
        </p>
      </div>
    );
  }
  