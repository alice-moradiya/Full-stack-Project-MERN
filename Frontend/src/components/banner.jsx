import React from "react";

function banner() {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-column md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">
            Explore new knowledge every day with us.{" "}
            <span className="text-pink-500">Let&apos;s grow together!!!</span>
          </h1>
          <p>
            Discover the world of endless possibilities. Dive into books that
            inspire, challenge, and transform your understanding of the world.
            Embrace the joy of reading today!
          </p>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
}

export default banner;
