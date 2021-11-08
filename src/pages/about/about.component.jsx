import React from "react";
import './about.styles.scss';
import images from '../../assets/index.js';

// import authorImg1 from "../../assets/author-image1.jpg";
// import authorImg2 from "../../assets/author-image2.jpg";


const About = () => (
  <div className="about">
    <div className='author'>
    <div className='author-text'>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pe
          </p>
        <p className=''>de vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae cons urna quam viverra nisi, in interdum massa nibh nec erat.</p>
        <p className=''>de vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae cons urna quam viverra nisi, in interdum massa nibh nec erat.</p>

    </div>
    <div className='author-pictures'>
      <div className='picture'><img src={images.Profile1} alt='Paulina Okulska'/></div>
      <div className='picture'><img src={images.Profile2} alt='Paulina Okulska'/></div>

    </div>
    </div>
  </div>
);

export default About;
