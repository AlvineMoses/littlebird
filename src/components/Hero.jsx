
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="h-full w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="littlebird" className="w-48 object-contain" />
        <button type="button" onClick={()=> window.open('https://github.com/AlvineMoses')} className="black_btn">
          Github
        </button>
      </nav>
      
<h1 className="head_text ">
  Summarize articles with <br className="max-md:hidden"/>
  <span className="orange_gradient">
    OpenAI GPT-4
  </span>
</h1>
<h2 className="desc">
  Simplify your Reading with  <span className="orange_gradient">
   <a href="https://github.com/AlvineMoses/littlebird"> Littlebird</a> 
  </span>. <br /> A summarizer that crunches lengthy articles and gives you clear and concise summaries.
</h2>

    </header>
  )
}

export default Hero