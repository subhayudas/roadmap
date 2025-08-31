import React from 'react';
import './techStacks.css';

export default function TechStacks(){
  return(
    <>
      <h1>
        What are you trying to build?
      </h1>

      <h2>Static Site</h2>
      <section className='staticSection'>
        <div className='stackContainer'>
          <div className="tech-icon">JS</div>
          <div className="tech-icon">CSS</div>
          <div className="tech-icon">HTML</div>
        </div>

        <div className="stackContainer">
          <div className="tech-icon">Jekyll</div>
          <div className="tech-icon">Hugo</div>
          <div className="tech-icon">Gatsby</div>
        </div>
      </section>

      <p>
        Static sites are usually very simple sites, that require minimal files, the content is not dynamic.
        They are ideal for small websites.
      </p>

      <h2>Dynamic site</h2>
        
      <section className='staticSection'>
        <div className='stackContainer'>
          <span>MERN</span>
          <div className="tech-icon">MongoDB</div>
          <div className="tech-icon">Express</div>
          <div className="tech-icon">React</div>
          <div className="tech-icon">Node</div>
        </div>

        <div className='stackContainer'>
          <span>MEAN</span>
          <div className="tech-icon">MongoDB</div>
          <div className="tech-icon">Express</div>
          <div className="tech-icon">Angular</div>
          <div className="tech-icon">Node</div>
        </div>

        <div className='stackContainer'>
          <span>LAMP</span>
          <div className="tech-icon">Linux</div>
          <div className="tech-icon">Apache</div>
          <div className="tech-icon">MySQL</div>
          <div className="tech-icon">PHP</div>
        </div>

        <div className='stackContainer'>
          <span>Django</span>
          <div className="tech-icon">Python</div>
          <div className="tech-icon">Django</div>
          <div className="tech-icon">Apache</div>
          <div className="tech-icon">MySQL</div>
        </div>

        <div className='stackContainer'>
          <span>Ruby on<br />Rails</span>
          <div className="tech-icon">React</div>
          <div className="tech-icon">Ruby</div>
          <div className="tech-icon">MySQL</div>
        </div>

        <div className='stackContainer'>
          <span>ASP.Net</span>
          <div className="tech-icon">C#</div>
          <div className="tech-icon">React</div>
          <div className="tech-icon">SQL</div>
          <div className="tech-icon">Azure</div>
        </div>
      </section>
      <p>
        Based on these differences, the choice between Ruby on Rails and Express will 
        depend on the specific needs of your project. If you need to build a high-performance
        web application and have experience with JavaScript, Express may be the better choice.
        On the other hand, if you want a more opinionated framework that's easier to use and has
        a larger community, Ruby on Rails may be the way to go.
      </p>

      <h2>E-Commerce</h2>
      <section className='staticSection'>
        <div className='eCommerceContainer'>
          <div className="tech-icon">WooCommerce</div>
        </div>

        <div className='eCommerceContainer'>
          <div className="tech-icon">WordPress</div>
        </div>

        <div className='eCommerceContainer'>
          <div className="tech-icon">Shopify</div>
        </div>

        <div className='eCommerceContainer'>
          <div className="tech-icon">Magento</div>
        </div>

        <div className='eCommerceContainer'>    
          <div className="tech-icon">OpenCart</div>
        </div>

        <div className='eCommerceContainer'>
          <div className="tech-icon">PrestaShop</div>    
        </div>

        <div className='eCommerceContainer'>    
          <div className="tech-icon">BigCommerce</div>
        </div>
      </section>

      <p>
        These are just a few examples of the tech solutions that can be used
        to create an e-commerce website. Each platform has its own strengths and weaknesses, so
        it's important to evaluate each one carefully before making a decision.
      </p>
    </>
  )
}
