import React from "react";
import '../styles/BlogPage.css'; // Importing the CSS file for styling


const BlogPage = () => {
  return (
    <div className="blog-page">
    <div className="containerBox">
      <img src="/assets/images/NotePen.png.jpg" alt="Blog Header" className=" mb-4 Note-img" />
      <div className="headline-overlay">
        <h1 className="headline">Scribble Your Thoughts.</h1>
        <h1 className="headline">Let Them Fly.</h1>
      </div>
    </div>
    <div className="cards-container">
      <div className="card" style={{ width: "25%" }}>
        <img src="/assets/images/creative.png.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            ScribbleSpace is your digital notebook. Keep daily reflections, project notes, or creative stories all in one place.
          </p>
        </div> 
      </div>
      <div className="card" style={{ width: "25%" }}>
        <img src="/assets/images/noteBook.png.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Enjoy a clean, minimal writing space. Focus purely on your words without any unnecessary buttons or clutter.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "25%" }}>
        <img src="/assets/images/memories.png.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            A safe space for your stories, notes, and ideas. ScribbleSpace turns every thought into a memory you can revisit anytime.
          </p>
        </div> 
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
