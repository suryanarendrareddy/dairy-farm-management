import React from "react";

const App = () => {
  const websiteLink = "https://suryanarendra-portfolio.vercel.app";
  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <h1 className='text-2xl font-semibold tracking-wider'>Surya Narendra Reddy</h1>
      <p className='font-medium text-lg'>Surya Narendra Reddy is a passionate full stack developer.</p>
      <a
        href={websiteLink}
        rel="noopener noreferrer"
        className="text-blue-600"
        target="_blank"
      >
        website
      </a>
    </div>
  )
}

export default App
