import React, { useState } from 'react';

const SubmitForm = () => {
  const [body, setBody] = useState({
    username: "",
    codeLanguage: "",
    stdin: "",
    sourcecode: "",
  });

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleLanguageChange = (language) => {
    setBody({ ...body, codeLanguage: language });
    toggleDropdown();
    console.log(body.codeLanguage); // This will log the previous state due to the asynchronous nature of setState
  };

  const handleUsernameChange = (e) => {
    setBody({ ...body, username: e.target.value });
  };

  const handleStdinChange = (e) => {
    setBody({ ...body, stdin: e.target.value });
  };

  const handleSourceCodeChange = (e) => {
    setBody({ ...body, sourcecode: e.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(body);
  }

  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <h1 className='font-tuf text-3xl text-maintext mb-10'>Enter your Details</h1>
      <form className="w-[1000px] h-full flex flex-col justify-center font-amaranth text-maintext">
        <div className='flex justify-between mb-10'>
          <div className='relative'>
            <label className='text-[20px]'>Username</label>
            <input
              placeholder="Enter your name"
              value={body.username}
              onChange={handleUsernameChange}
              className="w-48 text-black h-10 rounded-md mx-2"
            />
          </div>
          <div>
            <button type="button" onClick={toggleDropdown} className="px-4 py-2 text-white bg-secondbg border-none font-semibold rounded-lg  hover:bg-mainbg hover:text-secondbg">Select Language</button>
            {isDropdownVisible && (
              <div className="absolute origin-top-right mt-1 w-48 bg-mainbg rounded-md">
                <ul className="list-none">
                  <li onClick={() => handleLanguageChange("JavaScript")} className="px-4 py-2 hover:text-secondbg cursor-pointer">JavaScript</li>
                  <li onClick={() => handleLanguageChange("Python")} className="px-4 py-2 hover:text-secondbg cursor-pointer">Python</li>
                  <li onClick={() => handleLanguageChange("Java")} className="px-4 py-2 hover:text-secondbg cursor-pointer">Java</li>
                  <li onClick={() => handleLanguageChange("C++")} className="px-4 py-2 hover:text-secondbg cursor-pointer">C++</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <label className='text-[20px] mb-3'>Std input</label>
        <input
          placeholder="Enter input"
          className='text-black h-10 rounded-md w-[450px]'
          value={body.stdin}
          onChange={handleStdinChange}
        />
        <label className='text-[20px] mt-10 mb-3'>Source Code</label>
        <textarea
          className='h-48 rounded-md text-black'
          placeholder="Enter your source code"
          value={body.sourcecode}
          onChange={handleSourceCodeChange}
        />

        <button onClick={handleSubmission} className='w-24 my-10 h-12 bg-secondbg rounded-lg hover:bg-mainbg hover:text-secondbg text-maintext text-[20px]'>Submit</button>
      </form>
    </div>
  );
}

export default SubmitForm;

