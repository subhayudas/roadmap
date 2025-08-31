import React from 'react';
import RightContainer from '../components/containers/RightContainer';
import LeftContainer from '../components/containers/LeftContainer';
import './roadmapPages.css';

export default function BackEnd(){
  return(
    <div className='sectionWrapper'>
      <div className="sectionHeader">
        Backend developer
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

      <LeftContainer text='Learn a language' links={[
        {url:'https://www.w3schools.com/js/', text:'JavaScript'},
        {url:'https://www.w3schools.com/java/default.asp', text:'Java'},
        {url:'https://www.w3schools.com/cs/index.php', text:'C#'},
        {url:'https://www.w3schools.com/php/default.asp', text:'PHP'},
        {url:'https://www.ruby-lang.org/en/', text:'Ruby'},
        {url:'https://www.python.org/', text:'Python'},
      ]} />

      <RightContainer text='GIT' links={[
        {url:'https://www.youtube.com/watch?v=zbKdDsNNOhg&ab_channel=Udacity', text:'What is GIT?'},
        {url:'https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia', text:'Crash Course'},
        {url:'https://git-scm.com/docs', text:'GIT docs'},
        {url:'https://www.youtube.com/watch?v=w3jLJU7DT5E&ab_channel=GitHub', text:'What is Github?'},
        {url:'https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology', text:'GIT vs Github'},
      ]} />

      <LeftContainer text='Terminal Usage' links={[
        {url:'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line', text:'CLI'},
        {url:'https://www.youtube.com/watch?v=jDINUSK7rXE&ab_channel=LearnCode.academy', text:'Cheat sheet'},
      ]} />

      <RightContainer text='OS' links={[
        {url:'https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/', text:'What is OS'},
        {url:'https://www.guru99.com/os-tutorial.html', text:'OS summary'},
        {url:'https://www.youtube.com/watch?v=26QPDBe-NB8&ab_channel=CrashCourse', text:'Crash course'},
      ]} />

      <LeftContainer text='' links={[
        {url:'https://dev.to/deepu105/demystifying-memory-management-in-modern-programming-languages-ddd', text:'Memory management'},
        {url:'https://www.tutorialspoint.com/operating_system/os_io_hardware.htm', text:'I/O'},
      ]} />

      <RightContainer text='' links={[
        {url:'https://aws.amazon.com/what-is/computer-networking/', text:'Networking'},
        {url:'https://www.youtube.com/watch?v=exbKr6fnoUw&ab_channel=DaveCrabbe', text:'Threads'},
        {url:'https://www.youtube.com/watch?v=iKtvNJQoCNw&ab_channel=MikeSwift', text:'Concurrency'},
      ]} />

      <LeftContainer text='Relational databases' links={[
        {url:'https://www.postgresql.org/', text:'PostgreSQL'},
        {url:'https://www.geeksforgeeks.org/what-is-postgresql-introduction/', text:'postgreSQL?'},
        {url:'https://www.youtube.com/watch?v=qw--VYLpxG4&ab_channel=freeCodeCamp.org' , text:'Postegres course'},    
      ]} />

      <RightContainer text='' links={[
        {url:'https://www.mysql.com/' , text:'MySQL'},
        {url:'https://www.youtube.com/watch?v=9ylj9NR0Lcg&ab_channel=TraversyMedia' , text:'MySQL Tutorial'},
      ]} />

      <LeftContainer text='' links={[
        {url:'https://mariadb.org/', text:'MariaDB'},
        {url:'https://www.guru99.com/mariadb-vs-mysql.html', text:'Maria vs SQL'},
        {url:'https://www.youtube.com/watch?v=_AMj02sANpI&ab_channel=developwithAhmadMohey', text:'Maria course'},
      ]} />

      <RightContainer text='' links={[
        {url:'https://learn.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15' , text:'MS SQL'},
        {url:'https://www.youtube.com/watch?v=-EPMOaV7h_Q&ab_channel=edureka%21' , text:'MS SQL course'},
      ]} />

      <LeftContainer text='' links={[
        {url:'https://www.oracle.com/database/', text:'Oracle'},
        {url:'https://www.youtube.com/watch?v=ObbNGhcxXJA', text:'Oracle SQL'},
        {url:'https://docs.oracle.com/en/database/index.html', text:'Docs'},
      ]} />

      <RightContainer text='NoSQL Databases' links={[
        {url:'https://www.mongodb.com/' , text:'MongoDb'},
        {url:'https://www.mongodb.com/docs/' , text:'Mongo Docs'},
        {url:'https://mongoplayground.net/' , text:'MongoDB sandbox'},
      ]} />

      <LeftContainer text='' links={[
        {url:'https://firebase.google.com/', text:'Firebase'},
        {url:'https://www.youtube.com/watch?v=fgdpvwEWJ9M&ab_channel=freeCodeCamp.org', text:'Firebase course'},
      ]} />

      <RightContainer text='Scaling DB' links={[
        {url:'https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/' , text:'Indexes'},
        {url:'https://www.youtube.com/watch?v=fUrKt-AQYtE&ab_channel=intricity101' , text:'Replication'},
        {url:'https://stackoverflow.blog/2022/03/14/how-sharding-a-database-can-make-it-faster/' , text:'Sharding'},
        {url:'https://www.bmc.com/blogs/cap-theorem/' , text:'CAP Theorem'},
      ]} />

      <LeftContainer text='APIs' links={[
        {url:'https://www.codecademy.com/article/what-is-rest', text:'REST'},
        {url:'https://jsonapi.org/', text:'JSON'},
        {url:'https://www.w3schools.com/xml/xml_soap.asp', text:'SOAP'},
        {url:'https://graphql.org/', text:'GraphQL'},
      ]} />

      <RightContainer text='Caching' links={[
        {url:'https://www.youtube.com/watch?v=G1rOthIU-uo&ab_channel=Fireship', text:'Redis'},
        {url:'https://www.cloudflare.com/en-ca/learning/cdn/what-is-a-cdn/', text:'CDN'},
      ]} />

      <LeftContainer text='Testing' links={[
        {url:'https://www.guru99.com/integration-testing.html', text:'Integration'},
        {url:'https://www.guru99.com/unit-testing-guide.html', text:'Unit'},
        {url:'https://www.guru99.com/functional-testing.html', text:'Functional'},
      ]} />

      <RightContainer text='CI/CD' links={[
        {url:'https://www.youtube.com/watch?v=scEDHsr3APg&ab_channel=Fireship', text:'DevOps'},
        {url:'https://www.youtube.com/watch?v=nyKZTKQS_EQ&ab_channel=theroadmap', text:'Github Actions'},
        {url:'https://about.gitlab.com/topics/ci-cd/', text:'CI/CD'},
        {url:'https://thenewstack.io/3-ways-to-use-automation-in-ci-cd-pipelines/', text:'Pipelines'},
      ]} />

      <LeftContainer text='Design Principles' links={[
        {url:'https://github.com/kamranahmedse/design-patterns-for-humans', text:'Design patterns'},
        {url:'https://matfrs2.github.io/RS2/predavanja/literatura/Avram%20A,%20Marinescu%20F.%20-%20Domain%20Driven%20Design%20Quickly.pdf', text:'Domain Driven Design'},
        {url:'https://www.guru99.com/test-driven-development.html', text:'TDD'},
        {url:'https://martinfowler.com/eaaDev/EventSourcing.html', text:'Event Sourcing'},
      ]} />

      <RightContainer text='Architectural Patterns' links={[
        {url:'https://microservices.io/patterns/monolithic.html', text:'Monolithic'},
        {url:'https://microservices.io/patterns/microservices.html', text:'Microservices'},
        {url:'http://docs.oasis-open.org/soa-rm/soa-ra/v1.0/soa-ra.html', text:'SOA'},
        {url:'https://www.youtube.com/watch?v=W_VV2Fx32_Y&ab_channel=Fireship', text:'Serverless'},
        {url:'https://www.nginx.com/blog/what-is-a-service-mesh/', text:'Service Mesh'},
        {url:'https://12factor.net/', text:'Twelve-Factor Apps'},
      ]} />
    </div>
  )
}
