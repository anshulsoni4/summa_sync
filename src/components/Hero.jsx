import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
        <p className="summa">
          Summa Sync
        </p>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/anshulsoni4/project_ai_summarizer-main", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize your articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Summa Sync</span>
      </h1>
      <h2 className='desc'>
        Just paste the blog/article link from the web, and let 
        A.I. summarize it for you, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      
    </header>
    
  );
};

export default Hero;
