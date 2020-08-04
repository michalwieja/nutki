import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

const About = () => {
  return (
    <>
      <SimpleImageSlider width={896} height={504} images={images} />
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
        itaque enim quo eos doloribus eligendi deserunt nemo illum, velit
        repudiandae. Ea asperiores excepturi eligendi recusandae exercitationem
        dolores fugiat laboriosam?
      </div>
    </>
  );
};
export default About;
