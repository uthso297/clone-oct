export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-6 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-neutral-900 mb-2">
            Automation Experts
          </h2>
          <p className="text-neutral-500 text-sm">
            © {currentYear} Automation Experts. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <a 
            href="/privacy" 
            className="text-neutral-500 hover:text-neutral-900 text-sm font-medium transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-neutral-500 hover:text-neutral-900 text-sm font-medium transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-gray-500 text-sm font-medium transition-colors"
          >
            Twitter
          </a>
        </nav>
        
      </div>
    </footer>
  );
}