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
        <img src="/img/js.png" alt="js" />
        <img src="/img/css.png" alt="css" />
        <img src="/img/html.png" alt="html" />
    </div>

    <div className="stackContainer">
        <img src="/img/jekyllrb.png" alt="jekyllrb" />
        <img src="/img/hugo.jpg" alt="hugo" />
        <img src="/img/gatsby.png" alt="gatsby" />
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
            <img src="/img/mongodb.png" alt="mongodb" />
            <img src="/img/Expressjs.png" alt="express" />
            <img src="/img/react.png" alt="react" />
            <img src="/img/node.png" alt="node" />
        </div>

        <div className='stackContainer'>
            <span>MEAN</span>
            <img src="/img/mongodb.png" alt="mongodb" />
            <img src="/img/Expressjs.png" alt="express" />
            <img src="/img/angular.png" alt="angular" />
            <img src="/img/node.png" alt="node" />
        </div>

        <div className='stackContainer'>
            <span>LAMP</span>
            <img src="/img/linux.jpg" alt="linux" />
            <img src="/img/apache.png" alt="apache" />
            <img src="/img/mysql.png" alt="mysql" />
            <img src="/img/php.png" alt="php" />
        </div>

        <div className='stackContainer'>
            <span>Django</span>
            <img src="/img/python.png" alt="python" />
            <img src="/img/django.png" alt="django" />
            <img src="/img/apache.png" alt="apache" />
            <img src="/img/mysql.png" alt="mysql" />
        </div>

        <div className='stackContainer'>
            <span>Ruby on<br />Rails</span>
            <img src="/img/react.png" alt="react" />
            <img src="/img/ruby.png" alt="ruby" />
            <img src="/img/mysql.png" alt="mysql" />
        </div>

        <div className='stackContainer'>
            <span>ASP.Net</span>
            <img src="/img/csharp.png" alt="C#" />
            <img src="/img/react.png" alt="react" />
            <img src="/img/sql.png" alt="sql" />
            <img src="/img/azure.png" alt="azure" />
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
        <img src="/img/woocommerce.png" alt="woocommerce" />
    </div>

    <div className='eCommerceContainer'>
        <img src="/img/wp.png" alt="wordpress" />
    </div>

    <div className='eCommerceContainer'>
        <img src="/img/shopify.png" alt="shopify" />
    </div>

    <div className='eCommerceContainer'>
        <img src="/img/magento.png" alt="magento" />
    </div>

    <div className='eCommerceContainer'>    
        <img src="/img/openCart.png" alt="opencart" />
    </div>

    <div className='eCommerceContainer'>
        <img src="/img/prestaShop.png" alt="prestaShop" />    
    </div>

    <div className='eCommerceContainer'>    
        <img src="/img/bigCommerce.png" alt="bigCommerce" />
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
