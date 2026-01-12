import { useState, useEffect } from 'react';

// Tech stack data
const techStack = [
  {
    name: 'Python',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'JavaScript',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'TypeScript',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'React.js',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Redux',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="Redux"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'React Native',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React Native"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'HTMX',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTMX"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Node.js',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'FastAPI',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        alt="FastAPI"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'MySQL',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'PostgreSQL',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'GitHub',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Postman',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        alt="Postman"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Vercel',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        alt="Vercel"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Notion',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg"
        alt="Notion"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'MongoDB',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
  {
    name: 'Git',
    logo: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    ),
  },
];

// Education data
const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    period: '2021 - 2025',
    description: 'Focused on software engineering and web development',
    grade: 'GPA: 3.8/4.0',
  },
];

// Projects data
const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with cart, checkout, and payment integration',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/rahuwul/ecommerce',
    status: 'Completed',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task manager with real-time updates and team features',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    link: 'https://github.com/rahuwul/task-manager',
    status: 'In Progress',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather app with forecasts and location-based data',
    tech: ['JavaScript', 'API', 'CSS', 'HTML'],
    link: 'https://github.com/rahuwul/weather-app',
    status: 'Completed',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleViewProjects = () => {
    setActiveTab('Resume');
  };

  const handleDownloadCV = () => {
    // Replace with your actual PDF file path
    const pdfUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Rahul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResumeDoc = () => {
    // Replace with your actual Google Docs URL
    window.open(
      'https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit',
      '_blank'
    );
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-black' : 'bg-white'
      } h-screen w-screen p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 overflow-hidden transition-all duration-300`}
    >
      {/* Main Container */}
      <div
        className={`w-full mx-auto h-full
          lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl
          ${darkMode ? 'bg-[#141414]' : 'bg-gray-100'}
          rounded-xl sm:rounded-2xl md:rounded-3xl
          ${
            darkMode
              ? 'outline outline-2 outline-neutral-800'
              : 'outline outline-2 outline-gray-300'
          }
          shadow-2xl relative overflow-hidden transition-all duration-300 flex flex-col`}
      >
        {/* Navbar */}
        <nav
          className={`${
            darkMode
              ? 'bg-[#0a0a0a] border-neutral-800 text-white'
              : 'bg-gray-200 border-gray-300 text-black'
          } border-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 m-2 sm:m-3 md:m-4 lg:m-4 xl:m-5 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } flex-shrink-0 z-20`}
        >
          <div className="flex items-center justify-between">
            {/* Left Side - Logo and Navigation */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ${
                    darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  } rounded-lg md:rounded-xl flex items-center justify-center text-base sm:text-lg md:text-xl font-bold border-2 ${
                    darkMode ? 'border-white' : 'border-black'
                  } transition-all duration-300`}
                >
                  尺
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-1 sm:space-x-2">
                {['About', 'Resume'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base font-medium ${
                      activeTab === item
                        ? darkMode
                          ? 'text-white bg-transparent border-2 border-white'
                          : 'text-black bg-transparent border-2 border-black'
                        : darkMode
                        ? 'text-gray-400 hover:text-white border-2 border-transparent'
                        : 'text-gray-600 hover:text-black border-2 border-transparent'
                    } hover:scale-105 transform`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Theme Toggle and Resume */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Resume Button */}
              <button
                onClick={handleViewResumeDoc}
                className={`p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800'
                    : 'bg-gray-100 hover:bg-gray-300 text-black border border-gray-300'
                } hover:scale-110 transform shadow-md`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-yellow-400 border border-neutral-800'
                    : 'bg-gray-100 hover:bg-gray-300 text-gray-700 border border-gray-300'
                } hover:scale-110 transform shadow-md`}
              >
                {darkMode ? (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Area - With overflow for scrolling */}
        <div
          className={`flex-1 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-5 pb-2 sm:pb-3 md:pb-4 lg:pb-4 xl:pb-5 relative z-10 min-h-0 ${
            activeTab === 'About'
              ? 'overflow-y-auto lg:overflow-hidden'
              : 'overflow-y-auto'
          } no-scrollbar`}
        >
          <div
            className={`transition-all duration-1000 delay-200 ${
              activeTab === 'Resume' ? '' : 'h-full'
            } ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {activeTab === 'About' && (
              <div className="lg:h-full lg:overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 lg:h-full">
                  {/* Left Section - Portrait Image Card - 2 columns */}
                  <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 lg:h-full lg:min-h-0">
                    {/* Portrait Card */}
                    <div
                      className={`${
                        darkMode
                          ? 'bg-[#0a0a0a] border-neutral-800'
                          : 'bg-gray-200 border-gray-300'
                      } border-2 rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-gray-500 hover:shadow-xl transition-all duration-500 group shadow-lg aspect-[4/4] sm:aspect-[4/4] md:aspect-[5/5] lg:aspect-auto lg:flex-1 lg:min-h-0`}
                    >
                      {/* Portrait Image Container */}
                      <div className="relative h-full">
                        {/* Background Image - Different for dark and light mode */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full transition-opacity duration-500"
                          style={{
                            backgroundImage: darkMode
                              ? 'url(./src/assets/image.png)'
                              : 'url(./src/assets/image2.png)',
                          }}
                        ></div>

                        {/* Dark overlay for better text readability */}
                        {/* <div
                          className={`absolute inset-0 ${
                            darkMode
                              ? 'bg-gradient-to-t from-black via-black/40 to-transparent'
                              : 'bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent'
                          }`}
                        ></div> */}

                        {/* Text Content at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-3 xl:p-4 2xl:p-6 text-white">
                          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-1.5 xl:space-y-2 2xl:space-y-3 animate-fade-in">
                            <div className="w-10 sm:w-12 md:w-14 lg:w-10 xl:w-12 2xl:w-16 h-1 bg-white rounded-full"></div>
                            <p className="text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm text-gray-200 leading-relaxed drop-shadow-md line-clamp-2">
                              Passionate developer creating amazing digital
                              experiences with modern technologies.
                            </p>

                            <div className="flex flex-col xs:flex-col sm:flex-col md:flex-row gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 md:pt-3 lg:pt-1.5 xl:pt-2 2xl:pt-3">
                              <button
                                onClick={handleViewProjects}
                                className="w-full md:w-auto px-3 sm:px-4 md:px-5 lg:px-3 xl:px-4 2xl:px-5 py-1.5 sm:py-2 md:py-2 lg:py-1.5 xl:py-2 2xl:py-2 bg-white text-black rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm 2xl:text-sm hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-300 text-center"
                              >
                                View Projects
                              </button>
                              <button
                                onClick={handleDownloadCV}
                                className="w-full md:w-auto px-3 sm:px-4 md:px-5 lg:px-3 xl:px-4 2xl:px-5 py-1.5 sm:py-2 md:py-2 lg:py-1.5 xl:py-2 2xl:py-2 border-2 border-white text-white rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm 2xl:text-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-center"
                              >
                                Download CV
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div
                      className={`${
                        darkMode
                          ? 'bg-[#0a0a0a] border-neutral-800'
                          : 'bg-gray-200 border-gray-300'
                      } border-2 rounded-2xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3 md:p-4 lg:p-2.5 xl:p-3 2xl:p-4 shadow-lg overflow-hidden transition-all duration-300 flex-shrink-0`}
                    >
                      <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-seamless whitespace-nowrap w-max">
                          {/* First set */}
                          {techStack.map((tech, index) => (
                            <div
                              key={`${tech.name}-${index}`}
                              className={`inline-flex items-center px-2 sm:px-2.5 md:px-3 lg:px-2 xl:px-2.5 2xl:px-3 py-1.5 sm:py-2 md:py-2.5 lg:py-1.5 xl:py-2 2xl:py-2.5 ${
                                darkMode
                                  ? 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800'
                                  : 'bg-gray-100 text-black border-gray-200 hover:bg-gray-200'
                              } rounded-lg md:rounded-xl lg:rounded-lg xl:rounded-xl text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mx-1 sm:mx-1.5 lg:mx-1 xl:mx-1.5 border transition-colors duration-300 flex-shrink-0 space-x-1 sm:space-x-1.5`}
                            >
                              <div>{tech.logo}</div>
                              <span>{tech.name}</span>
                            </div>
                          ))}

                          {/* Duplicate for seamless loop */}
                          {techStack.map((tech, index) => (
                            <div
                              key={`dupe-${tech.name}-${index}`}
                              className={`inline-flex items-center px-2 sm:px-2.5 md:px-3 lg:px-2 xl:px-2.5 2xl:px-3 py-1.5 sm:py-2 md:py-2.5 lg:py-1.5 xl:py-2 2xl:py-2.5 ${
                                darkMode
                                  ? 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800'
                                  : 'bg-gray-100 text-black border-gray-200 hover:bg-gray-200'
                              } rounded-lg md:rounded-xl lg:rounded-lg xl:rounded-xl text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mx-1 sm:mx-1.5 lg:mx-1 xl:mx-1.5 border transition-colors duration-300 flex-shrink-0 space-x-1 sm:space-x-1.5`}
                            >
                              <div>{tech.logo}</div>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Expanded to 3 columns */}
                  <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 lg:h-full lg:min-h-0">
                    {/* Introduction Card */}
                    <div className="animate-fade-in-delay-3 flex flex-col flex-shrink-0">
                      <h3
                        className={`text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold mb-2 sm:mb-2.5 md:mb-3 lg:mb-2 xl:mb-2.5 2xl:mb-3 ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        Introduction
                      </h3>
                      <div
                        className={`${
                          darkMode
                            ? 'bg-[#0a0a0a] border-neutral-800'
                            : 'bg-gray-200 border-gray-300'
                        } border-2 rounded-2xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 hover:border-gray-500 hover:shadow-lg transition-all duration-500 group shadow-sm`}
                      >
                        <div className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 lg:space-x-2.5 xl:space-x-3 2xl:space-x-4">
                          <div className="flex-1">
                            <h4
                              className={`font-semibold text-xs sm:text-sm md:text-base lg:text-sm xl:text-m 2xl:text-lg ${
                                darkMode ? 'text-white' : 'text-black'
                              } mb-1 sm:mb-1.5 md:mb-2 lg:mb-1 xl:mb-1.5 2xl:mb-2`}
                            >
                              Hi, I am Rahul
                            </h4>
                            <p
                              className={`${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              } text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-[17px] 3xl:text-base leading-relaxed`}
                            >
                              I'm Rahuwul, a passionate student and developer
                              always eager to learn and create amazing things. I
                              love working with modern technologies and building
                              solutions that make a difference. always eager to
                              learn and create amazing things. I love
                              workinglearn and create amazing things. I love
                              workinlearn and create amazing things. I love
                              workinglearn and create
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Get in Touch Card */}
                    <div className="animate-fade-in-delay-4 flex flex-col lg:flex-1 lg:min-h-0">
                      <h3
                        className={`text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold mb-2 sm:mb-2.5 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-3 ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        Get in Touch
                      </h3>
                      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 lg:flex-1 lg:min-h-0">
                        {/* Email */}
                        <a
                          href="mailto:rahuwul@example.com"
                          className="group relative h-full"
                        >
                          <div
                            className={`${
                              darkMode
                                ? 'bg-[#0a0a0a] border-neutral-800 hover:bg-neutral-900'
                                : 'bg-gray-200 border-gray-300 hover:bg-gray-50'
                            } border-2 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-2 xl:p-3 2xl:p-4 flex flex-col items-center justify-between h-full hover:border-gray-500 hover:shadow-lg transition-all duration-500 cursor-pointer`}
                          >
                            <div className="flex flex-col items-center flex-1 justify-center">
                              <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 ${
                                  darkMode ? 'text-white' : 'text-black'
                                } group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-1.5 md:mb-2 lg:mb-1 xl:mb-1.5 2xl:mb-2`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                              <span
                                className={`text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium ${
                                  darkMode ? 'text-gray-400' : 'text-gray-600'
                                } group-hover:${
                                  darkMode ? 'text-white' : 'text-black'
                                } transition-colors`}
                              >
                                Email
                              </span>
                            </div>
                            <div
                              className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[8px] xl:text-[9px] 2xl:text-[12px] ${
                                darkMode ? 'text-gray-600' : 'text-gray-400'
                              } text-center mt-1 sm:mt-1.5 md:mt-2 lg:mt-1 xl:mt-1.5 2xl:mt-2 pt-1 sm:pt-1.5 md:pt-2 lg:pt-1 xl:pt-1.5 2xl:pt-2 border-t ${
                                darkMode
                                  ? 'border-neutral-800'
                                  : 'border-gray-300'
                              } w-full truncate`}
                            >
                              rahuwul@example.com
                            </div>
                          </div>
                          <div
                            className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${
                              darkMode ? 'bg-white' : 'bg-black'
                            } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
                          ></div>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="https://linkedin.com/in/rahuwul"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative h-full"
                        >
                          <div
                            className={`${
                              darkMode
                                ? 'bg-[#0a0a0a] border-neutral-800 hover:bg-neutral-900'
                                : 'bg-gray-200 border-gray-300 hover:bg-gray-50'
                            } border-2 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-2 xl:p-3 2xl:p-4 flex flex-col items-center justify-between h-full hover:border-gray-500 hover:shadow-lg transition-all duration-500 cursor-pointer`}
                          >
                            <div className="flex flex-col items-center flex-1 justify-center">
                              <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 ${
                                  darkMode ? 'text-white' : 'text-black'
                                } group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-1.5 md:mb-2 lg:mb-1 xl:mb-1.5 2xl:mb-2`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span
                                className={`text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium ${
                                  darkMode ? 'text-gray-400' : 'text-gray-600'
                                } group-hover:${
                                  darkMode ? 'text-white' : 'text-black'
                                } transition-colors`}
                              >
                                LinkedIn
                              </span>
                            </div>
                            <div
                              className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[8px] xl:text-[9px] 2xl:text-[12px] ${
                                darkMode ? 'text-gray-600' : 'text-gray-400'
                              } text-center mt-1 sm:mt-1.5 md:mt-2 lg:mt-1 xl:mt-1.5 2xl:mt-2 pt-1 sm:pt-1.5 md:pt-2 lg:pt-1 xl:pt-1.5 2xl:pt-2 border-t ${
                                darkMode
                                  ? 'border-neutral-800'
                                  : 'border-gray-300'
                              } w-full truncate`}
                            >
                              in/rahuwul
                            </div>
                          </div>
                          <div
                            className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${
                              darkMode ? 'bg-white' : 'bg-black'
                            } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
                          ></div>
                        </a>

                        {/* GitHub */}
                        <a
                          href="https://github.com/rahuwul"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative h-full"
                        >
                          <div
                            className={`${
                              darkMode
                                ? 'bg-[#0a0a0a] border-neutral-800 hover:bg-neutral-900'
                                : 'bg-gray-200 border-gray-300 hover:bg-gray-50'
                            } border-2 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-2 xl:p-3 2xl:p-4 flex flex-col items-center justify-between h-full hover:border-gray-500 hover:shadow-lg transition-all duration-500 cursor-pointer`}
                          >
                            <div className="flex flex-col items-center flex-1 justify-center">
                              <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 ${
                                  darkMode ? 'text-white' : 'text-black'
                                } group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-1.5 md:mb-2 lg:mb-1 xl:mb-1.5 2xl:mb-2`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span
                                className={`text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium ${
                                  darkMode ? 'text-gray-400' : 'text-gray-600'
                                } group-hover:${
                                  darkMode ? 'text-white' : 'text-black'
                                } transition-colors`}
                              >
                                GitHub
                              </span>
                            </div>
                            <div
                              className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[8px] xl:text-[9px] 2xl:text-[12px] ${
                                darkMode ? 'text-gray-600' : 'text-gray-400'
                              } text-center mt-1 sm:mt-1.5 md:mt-2 lg:mt-1 xl:mt-1.5 2xl:mt-2 pt-1 sm:pt-1.5 md:pt-2 lg:pt-1 xl:pt-1.5 2xl:pt-2 border-t ${
                                darkMode
                                  ? 'border-neutral-800'
                                  : 'border-gray-300'
                              } w-full truncate`}
                            >
                              rahuwul
                            </div>
                          </div>
                          <div
                            className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${
                              darkMode ? 'bg-white' : 'bg-black'
                            } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
                          ></div>
                        </a>
                      </div>
                    </div>

                    {/* Stats Card */}
                    <div
                      className={`${
                        darkMode
                          ? 'bg-[#0a0a0a] border-neutral-800'
                          : 'bg-gray-200 border-gray-300'
                      } border-2 rounded-2xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3 md:p-4 lg:p-2.5 xl:p-3 2xl:p-3.5 hover:border-gray-500 hover:shadow-lg transition-all duration-500 animate-fade-in-delay-5 shadow-sm flex-shrink-0 mb-3 sm:mb-3 md:mb-3 lg:mb-0`}
                    >
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-4 text-center">
                        <div>
                          <div
                            className={`text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold ${
                              darkMode ? 'text-white' : 'text-black'
                            }`}
                          >
                            5+
                          </div>
                          <div
                            className={`text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm ${
                              darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}
                          >
                            Projects
                          </div>
                        </div>
                        <div>
                          <div
                            className={`text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold ${
                              darkMode ? 'text-white' : 'text-black'
                            }`}
                          >
                            1+
                          </div>
                          <div
                            className={`text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm ${
                              darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}
                          >
                            Years
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Resume' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 lg:h-full">
                  {/* Left Column */}
                  <div className="flex flex-col space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-3 xl:space-y-4 2xl:space-y-5 lg:h-full lg:min-h-0">
                    {/* Education Section */}
                    <div className="animate-fade-in flex-shrink-0">
                      <h3
                        className={`text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-bold mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-2 xl:mb-2.5 2xl:mb-3 ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        Education
                      </h3>
                      <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-2.5 xl:space-y-3 2xl:space-y-4">
                        {education.map((edu, index) => (
                          <div
                            key={index}
                            className={`${
                              darkMode
                                ? 'bg-[#0a0a0a] border-neutral-800'
                                : 'bg-gray-200 border-gray-300'
                            } border-2 rounded-xl sm:rounded-xl md:rounded-2xl p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 hover:border-gray-500 hover:shadow-xl transition-all duration-500 group`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1.5 sm:mb-2">
                              <div className="flex-1">
                                <h4
                                  className={`text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-semibold ${
                                    darkMode ? 'text-white' : 'text-black'
                                  } mb-0.5 sm:mb-1`}
                                >
                                  {edu.degree}
                                </h4>
                                <p
                                  className={`text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                  }`}
                                >
                                  {edu.institution}
                                </p>
                              </div>
                              <span
                                className={`text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm ${
                                  darkMode ? 'text-gray-500' : 'text-gray-500'
                                } mt-0.5 sm:mt-0`}
                              >
                                {edu.period}
                              </span>
                            </div>
                            <p
                              className={`text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base ${
                                darkMode ? 'text-gray-500' : 'text-gray-600'
                              } mb-1.5 sm:mb-2`}
                            >
                              {edu.description}
                            </p>
                            <span
                              className={`text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium ${
                                darkMode ? 'text-gray-400' : 'text-gray-700'
                              }`}
                            >
                              {edu.grade}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="animate-fade-in-delay-1 lg:flex-1 lg:min-h-0 flex flex-col">
                      <h3
                        className={`text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-bold mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-2 xl:mb-2.5 2xl:mb-3 flex-shrink-0 ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        Technical Skills
                      </h3>
                      <div
                        className={`${
                          darkMode
                            ? 'bg-[#0a0a0a] border-neutral-800'
                            : 'bg-gray-200 border-gray-300'
                        } border-2 rounded-xl sm:rounded-xl md:rounded-2xl p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 hover:border-gray-500 hover:shadow-xl transition-all duration-500 lg:flex-1 lg:min-h-0 lg:overflow-y-auto no-scrollbar`}
                      >
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {techStack.map((tech, index) => (
                            <div
                              key={index}
                              className={`inline-flex items-center px-2 sm:px-2.5 md:px-3 lg:px-2 xl:px-2.5 2xl:px-3 py-1.5 sm:py-2 lg:py-1.5 xl:py-2 ${
                                darkMode
                                  ? 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800'
                                  : 'bg-gray-100 text-black border-gray-200 hover:bg-gray-200'
                              } rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium border transition-all duration-300 space-x-1 sm:space-x-1.5 hover:scale-105`}
                            >
                              <span>{tech.logo}</span>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Projects */}
                  <div className="animate-fade-in-delay-2 flex flex-col lg:h-full lg:min-h-0">
                    <h3
                      className={`text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-bold mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-2 xl:mb-2.5 2xl:mb-3 flex-shrink-0 ${
                        darkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      Projects
                    </h3>
                    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-2.5 xl:space-y-3 2xl:space-y-4 lg:flex-1 lg:overflow-y-auto no-scrollbar">
                      {projects.map((project, index) => (
                        <div
                          key={index}
                          className={`${
                            darkMode
                              ? 'bg-[#0a0a0a] border-neutral-800'
                              : 'bg-gray-200 border-gray-300'
                          } border-2 rounded-xl sm:rounded-xl md:rounded-2xl p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 hover:border-gray-500 hover:shadow-xl transition-all duration-500 group flex-shrink-0`}
                        >
                          <div className="flex items-start justify-between mb-1.5 sm:mb-1">
                            <h4
                              className={`text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-semibold ${
                                darkMode ? 'text-white' : 'text-black'
                              }`}
                            >
                              {project.title}
                            </h4>
                            <span
                              className={`text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm px-1 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0 ml-1.5 sm:ml-2 border ${
                                project.status === 'Completed'
                                  ? darkMode
                                    ? 'bg-transparent text-white border-white'
                                    : 'bg-transparent text-black border-black'
                                  : darkMode
                                  ? 'bg-transparent text-gray-400 border-gray-400'
                                  : 'bg-transparent text-gray-600 border-gray-600'
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <p
                            className={`text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            } mb-2 sm:mb-2.5 md:mb-3 lg:mb-2 xl:mb-2.5 2xl:mb-3`}
                          >
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-2.5 md:mb-3 lg:mb-2 xl:mb-2.5 2xl:mb-3">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                                  darkMode
                                    ? 'bg-neutral-900 text-gray-300'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium ${
                              darkMode
                                ? 'text-white hover:text-gray-300'
                                : 'text-black hover:text-gray-600'
                            } transition-colors duration-300 group-hover:scale-105`}
                          >
                            View Project
                            <svg
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 ml-0.5 sm:ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-seamless {
          animation: scroll-seamless 30s linear infinite;
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }

        /* Hide scrollbar but keep scroll functionality */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default App