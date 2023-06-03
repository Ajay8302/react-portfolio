import React from "react";
import tailwind1 from "../assets/blogs/tailwind1.jpg";

function Blogs () {


    const blogs = [
        {
          id: 1,
          src: tailwind1,
          link: '#',
          repo: 'https://medium.com/@ajay.ak8302/6-easy-steps-to-start-with-tailwind-css-8f991be414f8'
        },
        // {
        //   id: 2,
        //   src: ,
        //   link: '',
        //   repo: 'https://github.com/Ajay8302'
        // },
        // {
        //   id: 3,
        //   src: ,
        //   link: '',
        //   repo: ''
        // },
        // {
        //   id: 4,
        //   src: ,
        //   link: '',
        //   repo: ''
        // },
        // {
        //   id: 5,
        //   src: ,
        //   link: '',
        //   repo: ''
        // },
        // {
        //   id: 6,
        //   src: ,
        //   link: '',
        //   repo: ''
        // },
      ];

    return(
        <div
      name="blogs"
      className="bg-gradient-to-t from-gray-700 via-gray-900 to-black w-full text-white md:h-screen blogs"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blogs
          </p>
          <p className="py-6">Check out some of my Blogs if you are interested</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {blogs.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button> */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Blogs;