export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dayana Cossio Vargas</h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer & UX/UI Designer passionate about creating exceptional web experiences with a focus on user-centered design and modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#proyectos" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li><p className="text-gray-400">📧 [EMAIL_ADDRESS]</p></li>
              <li><p className="text-gray-400">📍 Medellín, Colombia</p></li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dayana Cossio Vargas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
