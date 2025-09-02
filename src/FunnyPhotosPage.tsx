import { motion } from "framer-motion";

export default function FunnyPhotosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <div className="flex space-x-6">
          <a 
            href="./" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="./hobbies" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Hobbies
          </a>
          <a 
            href="./publications" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Publications
          </a>
          <a 
            href="./funny-photos" 
            className="text-indigo-400 font-medium"
          >
            Funny Photos
          </a>
          <a 
            href="./Sameer_K_2025_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 fixed top-0 left-0 h-full flex flex-col items-center justify-center border-r border-gray-800 p-6">
          <div className="h-40 w-40 rounded-full border-4 border-indigo-500 shadow-lg bg-gray-700 flex items-center justify-center">
            <img 
              src="./Images/IMG_4308.jpg" 
              alt="Sameer Komoravolu" 
              className="h-36 w-36 rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">Sameer Komoravolu</h1>
          <p className="text-sm text-gray-400">ML Researcher • Software Engineer</p>
          <div className="w-full h-px bg-gray-700 my-6"></div>
          <p className="text-xs text-gray-500 text-center">
            skomo2@illinois.edu<br />
            linkedin.com/in/sameer-komoravolu-80a7ba229
          </p>
        </div>

        {/* Main Content */}
        <div className="ml-[25%] w-3/4 p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl pt-8"
          >
            <div className="bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl hover:shadow-indigo-500/30 transition-all duration-300 p-8">
              {/* Credit blurb */}
              <p className="text-xs text-gray-500 text-center mb-6 italic">
                Page designed and coded by my 9-year-old cousin, Vishnu Gundi!
              </p>
              
              <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
                Funny Photos
              </h1>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <img 
                    src="./Images/funnyfish.gif" 
                    alt="Funny Fish GIF" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-yellow-400 text-lg font-semibold mt-3">
                    This is me
                  </p>
                  <div className="flex space-x-2 justify-center mt-2">
                    <a 
                      href="./Images/funnyfish.gif" 
                      download="funnyfish.gif"
                      className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Save
                    </a>
                    <button 
                      onClick={() => navigator.share({ title: 'Funny Fish GIF', url: './Images/funnyfish.gif' })}
                      className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Share
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="./Images/penguinbro.gif" 
                    alt="Penguin Bro GIF" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-cyan-400 text-lg font-semibold mt-3">
                    Hiii I see you
                  </p>
                  <div className="flex space-x-2 justify-center mt-2">
                    <a 
                      href="./Images/penguinbro.gif" 
                      download="penguinbro.gif"
                      className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Save
                    </a>
                    <button 
                      onClick={() => navigator.share({ title: 'Penguin Bro GIF', url: './Images/penguinbro.gif' })}
                      className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 hover:from-green-500 hover:via-emerald-500 hover:to-blue-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Share
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="./Images/walkingbob.gif" 
                    alt="Walking Bob GIF" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-green-400 text-lg font-semibold mt-3">
                    I'm walking!
                  </p>
                  <div className="flex space-x-2 justify-center mt-2">
                    <a 
                      href="./Images/walkingbob.gif" 
                      download="walkingbob.gif"
                      className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Save
                    </a>
                    <button 
                      onClick={() => navigator.share({ title: 'Walking Bob GIF', url: './Images/walkingbob.gif' })}
                      className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 hover:from-orange-500 hover:via-red-500 hover:to-pink-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Share
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="./Images/ipadkid.gif" 
                    alt="iPad Kid GIF" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-red-400 text-lg font-semibold mt-3">
                    iPad kid be like:
                  </p>
                  <div className="flex space-x-2 justify-center mt-2">
                    <a 
                      href="./Images/ipadkid.gif" 
                      download="ipadkid.gif"
                      className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Save
                    </a>
                    <button 
                      onClick={() => navigator.share({ title: 'iPad Kid GIF', url: './Images/ipadkid.gif' })}
                      className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 shadow-lg"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
