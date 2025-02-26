import React, { useState } from 'react';
import '../globals.css';

const VSCodeLayout = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  
  // States for collapsible folders
  const [isSrcOpen, setIsSrcOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isPublicOpen, setIsPublicOpen] = useState(false);
  const [isStylesOpen, setIsStylesOpen] = useState(false);
  const [isUtilsOpen, setIsUtilsOpen] = useState(false);

  const toggleFolder = (folder: 'src' | 'components' | 'public' | 'styles' | 'utils') => {
    if (folder === 'src') setIsSrcOpen(!isSrcOpen);
    if (folder === 'components') setIsComponentsOpen(!isComponentsOpen);
    if (folder === 'public') setIsPublicOpen(!isPublicOpen);
    if (folder === 'styles') setIsStylesOpen(!isStylesOpen);
    if (folder === 'utils') setIsUtilsOpen(!isUtilsOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300">
      {/* Top Navigation Bar */}
      <div className="h-12 bg-gray-900 border-b border-gray-700 flex items-center px-4">
        <span className="text-sm">ScriptSpeed</span>
      </div>

      {/* Main Content Area with Terminal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Skinny Bar */}
        <div className="w-12 bg-gray-900 border-r border-gray-700 h-screen" />
        {/* Left Sidebar (Explorer) */}
        {isExplorerOpen && (
          <div className="w-64 border-r border-gray-700 bg-black p-2 flex flex-col">
            <div className="text-sm font-medium mb-2">EXPLORER</div>
            <div className="text-sm opacity-80 overflow-y-auto">
              {/* Folder Structure with Collapsible Folders */}
              <div className="pl-2">
                <div className="flex items-center cursor-pointer hover:bg-gray-700 p-1" onClick={() => toggleFolder('src')}>
                  <span className={`arrow ${isSrcOpen ? 'open' : ''}`} />
                  <div>📁 src</div>
                </div>
                {isSrcOpen && (
                  <div className="pl-4">
                    <div className="cursor-pointer hover:bg-gray-700 w-full block">
                      <div className="cursor-pointer hover:bg-gray-700 p-1 w-full block" onClick={() => alert('Clicked index.js')}>📄 index.js</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked styles.css')}>📄 styles.css</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center cursor-pointer hover:bg-gray-700 p-1" onClick={() => toggleFolder('components')}>
                  <span className={`arrow ${isComponentsOpen ? 'open' : ''}`} />
                  <div>📁 components</div>
                </div>
                {isComponentsOpen && (
                  <div className="pl-4">
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked layout.js')}>📄 layout.js</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked editor.js')}>📄 editor.js</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center cursor-pointer hover:bg-gray-700 p-1" onClick={() => toggleFolder('public')}>
                  <span className={`arrow ${isPublicOpen ? 'open' : ''}`} />
                  <div>📁 public</div>
                </div>
                {isPublicOpen && (
                  <div className="pl-4">
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked favicon.ico')}>📄 favicon.ico</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center cursor-pointer hover:bg-gray-700 p-1" onClick={() => toggleFolder('styles')}>
                  <span className={`arrow ${isStylesOpen ? 'open' : ''}`} />
                  <div>📁 styles</div>
                </div>
                {isStylesOpen && (
                  <div className="pl-4">
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked globals.css')}>📄 globals.css</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center cursor-pointer hover:bg-gray-700 p-1" onClick={() => toggleFolder('utils')}>
                  <span className={`arrow ${isUtilsOpen ? 'open' : ''}`} />
                  <div>📁 utils</div>
                </div>
                {isUtilsOpen && (
                  <div className="pl-4">
                    <div className="cursor-pointer hover:bg-gray-700">
                      <div className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => alert('Clicked helpers.js')}>📄 helpers.js</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Right side container for editor and terminal */}
        <div className="flex-1 flex flex-col">
          {/* Center Editor */}
          <div className="flex-1 bg-gray-900 overflow-auto">
            <div className="p-4">
              <pre className="font-mono text-sm">
                <code>
                  {`// Your typing challenge code will go here
function example() {
  console.log("Start typing!");
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Bottom Terminal */}
          {isTerminalOpen && (
            <div className="h-48 border-t border-gray-700 bg-black p-2">
              <div className="flex items-center text-sm mb-2">
                <span className="font-medium">TERMINAL</span>
              </div>
              <div className="font-mono text-sm">
                $ Your typing results will appear here
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="absolute top-12 right-4 space-x-2">
        <button 
          onClick={() => setIsExplorerOpen(!isExplorerOpen)}
          className="px-2 py-1 text-sm bg-gray-800 rounded"
        >
          Toggle Explorer
        </button>
        <button 
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="px-2 py-1 text-sm bg-gray-800 rounded"
        >
          Toggle Terminal
        </button>
      </div>
    </div>
  );
};

export default VSCodeLayout;
