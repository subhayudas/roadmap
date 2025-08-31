import React from "react";
import LeftContainer from "../components/containers/LeftContainer";
import RightContainer from "../components/containers/RightContainer";
import './roadmapPages.css';

export default function FrontEnd(){
  return(
    <>
      <div className="sectionWrapper">
        <div className="sectionHeader" >
          FrontEnd developer
        </div>
          
        <LeftContainer text='Internet' links={[
          {url:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', text:'How it works?'},
          {url:'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/', text:'What is HTTP'},
          {url:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name', text:'What is a DNS?'},
          {url:'https://www.youtube.com/watch?v=htbY9-yggB0&ab_channel=Pickaweb.co.uk', text:'What is hosting?'},
        ]} />

        <RightContainer text='' links={[
          {url:'https://web.dev/howbrowserswork/', text:'How browsers work'},
          {url:'https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a%20text%2D,interfaces%20and%20character%20user%20interfaces.', text:'what is a CLI'},
        ]} />

        <LeftContainer text='HTML' links={[
          {url:'https://www.w3schools.com/html/html_intro.asp', text:'Basics'},
          {url:'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started', text:'MDN Docs'},
          {url:'https://neilpatel.com/blog/seo-developers/', text:'SEO Basics'},
          {url:'https://www.youtube.com/watch?v=SnxeXZpZkI0&ab_channel=Simplilearn', text:'SEO Expert'},
          {url:'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation', text:'Forms and validations'},
          {url:'https://hackernoon.com/how-to-write-semantic-html-dkq3ulo', text:'Semantic HTML'},
        ]}/>

        <RightContainer text='CSS' links={[
          {url:'https://www.w3schools.com/css/', text:'CSS Basics'},
          {url:'https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia', text:'Crash Course'},
          {url:'https://www.youtube.com/watch?v=FqmB-Zj2-PA&ab_channel=ChrisCourses', text:'Masterclass'},
          {url:'https://css-tricks.com/all-about-floats/', text:'Floats'},
          {url:'https://flexboxfroggy.com/', text:'FlexBox'},
          {url:'https://cssgrid.io/', text:'Grids'},
          {url:'https://www.w3schools.com/css/css_rwd_intro.asp', text:'Media Queries'},
        ]} />

        <LeftContainer text='Javascript' links={[
          {url:'https://www.w3schools.com/js/', text:'Basics'},
          {url:'https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s&ab_channel=TraversyMedia', text:'Crash course'},
          {url:'https://javascript.info/dom-nodes', text:'DOM Tree'},
          {url:'https://www.geeksforgeeks.org/dom-document-object-model/', text:'DOM manipulation'},
          {url:'https://www.youtube.com/watch?v=7Tok22qxPzQ&ab_channel=theroadmap', text:'Shadow DOM'},
          {url:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', text:'Fetch API'},
          {url:'https://web.dev/introduction-to-fetch/', text:'Fetch API'},
          {url:'https://www.javascripttutorial.net/es6/', text:'ES6'},
          {url:'https://codeloop.org/learn-modern-javascript-es6-es7-es8/', text:'ES6 ES7 ES8'},
        ]}/>

        <RightContainer text='GIT' links={[
          {url:'https://www.youtube.com/watch?v=zbKdDsNNOhg&ab_channel=Udacity', text:'What is GIT?'},
          {url:'https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia', text:'Crash Course'},
          {url:'https://git-scm.com/docs', text:'GIT docs'},
          {url:'https://www.youtube.com/watch?v=w3jLJU7DT5E&ab_channel=GitHub', text:'What is Github?'},
          {url:'https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology', text:'GIT vs Github'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/', text:'What is HTTPS'},
          {url:'https://www.youtube.com/watch?v=hExRDVZHhig&ab_channel=PowerCertAnimatedVideos', text:'SSL'},
          {url:'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', text:'CORS'},
        ]}/>

        <RightContainer text='Package managers' links={[
          {url:'https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html', text:'NPM'},
          {url:'https://classic.yarnpkg.com/en/docs/getting-started', text:'YARN'},
          {url:'https://pnpm.io/', text:'PNPM'},
        ]} />

        <LeftContainer text='Pick a Framework' links={[
          {url:'https://react.dev/learn/thinking-in-react', text:'React'},
          {url:'https://www.youtube.com/watch?v=nTeuhbP7wdE&ab_channel=freeCodeCamp.org', text:'React Course'},
          {url:'https://vuejs.org/guide/introduction.html', text:'Vue'},
          {url:'https://www.youtube.com/watch?v=FXpIoQ_rT_c&ab_channel=freeCodeCamp.org', text:'Vue Courses'},
          {url:'https://angular.io/start', text:'Angluar'},
          {url:'https://svelte.dev/', text:'Svelte'},
          {url:'https://kit.svelte.dev/', text:'Svelte Kit'},
          {url:'https://www.solidjs.com/', text:'Solid'},
        ]}/>

        <RightContainer text='Testing' links={[
          {url:'https://jestjs.io/', text:'Jest'},
          {url:'https://testing-library.com/docs/react-testing-library/intro/', text:'React-Testing'},
          {url:'https://www.cypress.io/', text:'Cypress'},
        ]} />

        <LeftContainer text='Modern CSS' links={[
          {url:'https://styled-components.com/', text:'Styled Components'},
          {url:'https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87', text:'CSS Modules'},
          {url:'https://www.youtube.com/watch?v=SM5uVbfgfdo&ab_channel=codedamn', text:'Styled JSX'},
          {url:'https://tailwindcss.com/', text:'Tailwind'},
          {url:'https://mantine.dev/', text:'Mantine'},
          {url:'https://mui.com/', text:'Material UI'},
        ]}/>

        <RightContainer text='Authentication Strategies' links={[
          {url:'https://roadmap.sh/guides/basic-authentication', text:'Basic'},
          {url:'https://roadmap.sh/guides/session-authentication', text:'Session'},
          {url:'https://roadmap.sh/guides/token-authentication', text:'Token'},
          {url:'https://roadmap.sh/guides/jwt-authentication', text:'JWt'},
          {url:'https://roadmap.sh/guides/oauth', text:'OAuth'},
        ]} />
      </div>
    </>
  )
}
