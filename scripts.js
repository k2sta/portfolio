// scripts.js (deferred)
'use strict';

/* -------------------------
  Data: 12 sample projects
   Each project: id, title, desc, tags (array), image (url), long (case study html)
---------------------------*/
const projects = [
    {
        id: 'p1',
        client: 'HELGE KOOL',
        /* logo: 'logos/Helge-Kool-Logo.png',*/
        title: 'Making Mental Health Resources More Engaging for the Youth Through UX and Gamification',
        desc: ' ',
        tags: ['UI Design', 'UX Research', 'Motion'],
        image: 'covers/helge1.webp',
        hoverColor: '#7E66D5',
        long: `
            <img src="helge/mockup.png" alt="Helge Kool" style="width:100%;border-radius:12px;" />
     <h2 id="helge-overview">Overview</h2>
      <p>Helge Kool MTÜ developed a mobile application designed for school students and psychologists to help monitor students’ mental well-being and provide support when needed.
<br><br>
To enhance the app’s functionality, the organization aimed to improve the "Discover" page, making it more interactive and engaging while offering valuable mental health resources.
<br><br>
I contributed to the app’s development by designing new features, refining the user interface with a dark mode, creating animations, prototyping and conducting user tests..</p>
<a class="link-btn" target="_blank" href=https://www.figma.com/proto/Ei9MjG9cw8ndM4vkbnj8iR/Helge---K%C3%A4rt-Lauriin-Vaiknemets?node-id=286-5135&t=gX9e554pboOvzUUQ-1&scaling=scale-down&content-scaling=fixed&page-id=286%3A1215>View Figma Prototype →</a>
<br><br>
<h2 id="helge-sketches">First Sketches</h2>
<p>The "Discover" page of the Helge Kool app had previously only featured written articles on mental health. However, the team felt that in its current form, it wasn't engaging enough for the target audience, primarily 10-13 year old school students. I proposed incorporating interactive and playful activities that would both support mental well-being and better capture the interest of young users through engaging visuals and games.
<br><br>
At the start of the project, I researched interactive games and activities designed to promote mental health. I explored mental health apps, printable worksheets, and psychology exercises for inspiration. From this research, I developed 4 concepts, creating rough sketches to visualize how each could be integrated into the app. After reviewing the options, we selected two ideas to develop further.</p>
<div class="col-2-gallery" style="width: 85%; margin: 0 auto;">
<img src="helge/sketch1.png" alt="" />
<img src="helge/sketch2.png" alt="" />
<img src="helge/sketch3.png" alt="" />
<img src="helge/sketch4.png" alt="" />
</div>
<h2 id="helge-bingo">Wellbeing Bingo Design</h2>
<p>When designing the user interface, I followed the existing design system, style guide, and components of the app. However, I also needed to create additional components and do some copywriting.
<br><br>
The bingo game features a card with emoji images placed in a random order, each representing a task related to improving mental wellbeing. These tasks encourage young school students to be active, creative, social, and grateful, among other positive habits.
<br><br>
Users can tap a square to open a task, then choose to mark it as completed, swap it for a random new task, or simply close the window.
<br><br>
With various winning patterns, players can use strategic thinking and the ability to swap squares to reach victory faster.</p>
<img src="helge/bingo1.png" alt="" />
<h2 id="helge-animations">Bingo Guide Animations</h2>
<br>
<div class="col-2-gallery" style="width: 100%; margin: 0 auto;">
<video 
  style="
  width= 50%;
  max-width: 300px;
    border-radius: 14px; 
    margin: 0 auto;
    overflow: hidden; 
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
  " 
  autoplay 
  muted 
  loop 
  playsinline
>
  <source src="helge/animations.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The Bingo game is introduced with an onboarding-style guide that explains the rules in a clear and engaging way. The guide features animated illustrations, created using Figma components and prototyping.</p>
</div>
<br><br>

<h2 id="helge-breathing">Breathing Exercises</h2>
<p>I chose three breathing techniques: in-and-out breathing, 4-7-8 breathing, and square breathing. I created 3 animations using Adobe After Effects and integrated them into the Figma prototype.
<br><br>
I kept the main square motif across all versions, but experimented with different animation effects such as spinning, expanding, color changes, and static states to indicate user actions. This approach allowed me to conduct A/B/C testing to determine which animations felt most intuitive to users and how they interpreted each action.</p>
<video 
  width="100%" 
  style="overflow: hidden;
  border-radius: 14px; " 
  autoplay 
  muted 
  loop 
  playsinline
>
  <source src="helge/A.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<br>

<h2 id="helge-testing">User Testing</h2>
<img src="helge/mockup.png" alt="Helge Kool" style="width:100%;border-radius:12px;" />
<p>After creating the prototypes, I wanted to test them with users to find potential problems and opportunities for further development. There were limited resources for conducting user testing, so I was able to test the bingo game and breathing techniques with 6 users, 2 of whom were children.
<br><br>
Each user explored the prototype on their mobile for 10-15 minutes and shared their thoughts. Although the testing was small-scale, it provided useful feedback.</p>

<p><b>Bingo Testing Results</b></p>
<p>The full game mechanics wasn’t supported in the Figma prototype, so testing was somewhat limited. While users couldn’t play the game from start to finish, they were able to explore its core features, such as opening, viewing and completing tasks, switching cards, and viewing the end screen.
<br><br>
Initial testing showed that users enjoyed the game’s visuals and animations and found it fun to play. However, testing with children highlighted key areas for improvement. I discovered that the task content could be better suited for young users, as they prefer quick, familiar activities. Additionally, the copy should be adjusted to better match children’s vocabulary for improved clarity.</p>
<img src="helge/bingo-r.png" alt=""/>

<p><b>Breathing Exercises Testing Results</b></p>
<p>All test users were able to see and compare the UI and animation of three different breathing techniques. Feedback revealed that the rotating squares were the most difficult to associate with an activity. Most users associated the expanding and contracting square with inhaling and exhaling, and the static square with holding their breath.
<br><br>
In addition, users would have liked to see a general timer or the ability to set the number of repetitions. They also suggested that personalized feedback or more gamification would have been more engaging.</p>
<img src="helge/breathing-r.png" alt=""/>

<h2 id="helge-darkmode">Light vs Dark Mode</h2>
<p>I further developed the app's style guide by including darker tones. I designed the dark mode views for 30 screens while following the WCAG requirements for color contrast.</p>
<video 
  width="100%" 
  style="overflow: hidden;
  border-radius: 14px; " 
  autoplay 
  muted 
  loop 
  playsinline
>
  <source src="helge/lightdark.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<br>

<h2 id="helge-reflection">Reflection</h2>
<p>The 2-month internship under the supervision of Marko Rillo, the director of Helge Kool MTÜ, went well and I gained hands-on experience in designing for mobile apps.
<br><br>
During the project, I really enjoyed designing playful and interactive solutions. For me, it was an interesting challenge to come up with ideas that would appeal to younger users and at the same time address mental health issues. I also gained experience in creating UI designs based on a design system, interpreting and further developing this system by creating dark mode views.
<br><br>
When testing prototypes, it was a valuable experience for me to see how differently people can interpret animations. I learned that it is a good idea to test prototypes with different people as early on in the design process as possible. The tests also revealed how designing for adults and children requires different approaches and perspectives.</p>

<div class="feedback">
<h2 id="helge-feedbck">Feedback</h2>
<p>
“Kärt actively participated in the activities of Helge Kool and showed initiative. She selected clear priorities for the internship period and focused on their implementation. When necessary, she adjusted her focus according to the feedback received and achieved the results that were agreed upon.
<br><br>
The designs she created were recognizably related to the existing visual language and added additional creative nuances to it. She demonstrated understanding the structure of the user interface and ability to work within the standards of mobile and web application requirements, creating technically feasible solutions.
<br><br>
She built prototypes that she tested with users and also prepared a user experience analysis based on them, which was useful in creating the final app screen views and general functionality.
<br><br>
We are very satisfied with Kärt's contribution. We liked her creativity and initiative to test and think things through on her own. We wish her well in her next initiatives and, if possible, we will continue to collaborate with her.”
</p>
<br>
– Marko Rillo, director of Helge Kool
</div>

`
    },
    {
        id: 'p2',
        client: 'ARVAMUSFESTIVAL',
        /*logo: 'logos/AF-logo.png',*/
        title: 'Festival Campaign – Animated Ads & Printed Materials',
        desc: ' ',
        tags: ['Visual Communication', 'Motion', 'Ads'],
        image: 'covers/arvamus.webp',
        hoverColor: '#eec97d',
        overlayGradient: true,
        long: `<img src="arvamus/Olumpia-AF.png" alt="Arvamusfestival ad displayed in Talllinn city." />
        <h2 id="arvamus-overview">Overview</h2>
        <p>Arvamusfestival (The Opinion Festival) is an annual Estonian event, where open discussions on relevant societal issues are encouraged. It brings together citizens, policymakers, and organizations to shape the culture of dialogue and democracy in Estonia.

In 2025, I joined the marketing and communications team at Arvamusfestival, focusing on multimedia and design. My role included creating animated ads for digital platforms and outdoor LED screens, as well as designing printed materials. All visuals followed the festival’s playful branding, which featured hand-drawn illustrations and the signature chicken and egg motif.</p>
<h2 id="arvamus-anime">Animated Clip</h2>
<p>I collaborated with illustrators Triin Kalmus and Jaanika Tork to create a 30 second animated clip. I handled the animation, sound design, and editing. I also made use of AI tools to generate additional assets, helping the team complete the project faster.</p>
<video width="100%" controls>
  <source src="arvamus/Täispikk-klipp.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<h2 id="arvamus-short-ads">Animated Short Ads</h2>
<p>I also produced animated ads in various sizes for social media and LED screens, for example on the facade of Solaris Centre and in Tallinn Airport.</p>
<video width="100%" controls>
  <source src="arvamus/1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<video width="100%" controls>
  <source src="arvamus/2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<img src="arvamus/Solaris-AF.png" alt="Arvamusfestival ad displayed on the facade of Solaris in Tallinn citycentre." />
<h2 id="arvamus-brochure">Brochure Design</h2>
<p>I designed the official festival brochure, which included the event schedule and venue map.</p>
<img src="arvamus/kava-mockup-1.png" alt="Arvamusfestival brochure design" />
<img src="arvamus/kava-mockup-2.png" alt="Arvamusfestival brochure design" />
<img src="arvamus/kava-foto.jpg" alt="Arvamusfestival brochure held in hands by a festival visitor." />
<p>After all the hard work, it was time to enjoy the festival!</p>
<div class="col-2-gallery">
<img src="arvamus/kohal.jpg" alt="" />
<img src="arvamus/kava-kohal.jpg" alt="" />
</div>
<p>I am still active with Arvamusfestival, and my next project involves updating their website to reflect the new branding and improving overall usability. Stay tuned!</p>

        `
    },
    {
        id: 'p3',
        client: 'VÕRU GÜMNAASIUM',
        /* logo: 'logos/võru-logo.svg', */
        title: 'Transforming a School’s Website with Research-Driven UX/UI Design',
        desc: ' ',
        tags: ['UI Design', 'UX Research', 'Website'],
        image: 'covers/võru1.png',
        hoverColor: '#120d8d',
        long: ` <img src="voru/mockup1.jpeg" alt="Website mockup." />
        <h2 id="võru-overview">Overview</h2>
        <p>Võru Gymnasium is a high school in south of Estonia that values their ethnic roots, strong effort in learning and the desire to keep progressing. For their 10th anniversary, the shcool wanted to freshen up their branding and update their website with a new and fresh look.
<br><br>
I worked on the project as UX/UI designer in the design agency Topeltklikk. I carried out an audit of the old website, conducted user experience survey among the school students, and designed the prototype for the new website. I collaborated with the school principal, project manager and web developer.</p>
<a class="link-btn" target="_blank" href=https://www.voru.edu.ee/>Visit the website →</a>
<br><br>
<h2 id="võru-audit">Audit and UX Survey</h2>
<p>I began the project with a brief website audit, identifying the main UI design issues through an initial analysis. This provided a clearer understanding of the site's structure and challenges, helping us set goals and brainstorm solutions with the project manager and school representatives.
<br><br>
Based on the audit, I suggested conducting a user survey to gather insights from the site’s primary users – students, teachers, and parents, in order to uncover potential UX-related problems.</p>
<br>
<img src="voru/analüüs.png" alt="Snippets from the analysis." />
<br>
The survey used a structured questionnaire to explore key aspects:
<ul>
<li>How users interact with the site and their primary activities</li>
<li>What information they search for and how easily they can find it</li>
<li>Any specific functionality issues or missing content they have noticed</li>
</ul>
As a result, the audit and survey uncovered several key issues:
<ul>
<li>Content problems – outdated information and translation errors in multilingual versions</li>
<li>Structural challenges – difficulty navigating the site and locating essential information</li>
<li>Visual inconsistencies – poor color contrast and a design that didn’t align with the school’s updated brand guidelines</li>
<li>Functional issues – errors affecting the gallery, school page, and lesson plan display</li></ul>
<br>
<h2 id="võru-design-old">Old Design</h2>
<p>The existing website had an outdated design, which didn't follow the school's updated CVI. </p>
<img src="voru/voru-vana.png" alt="The old design of the website." />
<h2 id="võru-design">New Design</h2>
<p>While designing the UI, I adhered to the school’s CVI guidelines, which outlined strict rules for colors, typography, and graphical elements. Within these brand limitations, I found creative ways to deliver a fresh, user-friendly design that aligned with the school’s identity.</p>
<p>Throughout the process, I focused on incorporating key insights from the UX research to make sure, that the new design wouldn’t only have an improved visual, but also enhance the the overall user experience. For example, to help address navigation issues, I added a secondary menu with links that I knew users would be looking for the most.</p>
<img src="voru/VG_avaleht.png" alt="Website visual design" />
<img src="voru/mockup1.jpeg" alt="Website visual design" />
<img src="voru/mockup2.jpeg" alt="Website visual design" />
<img src="voru/mockup3.jpeg" alt="Website visual design" />
<h2 id="võru-style">Style guide</h2>
<p>I used the existing CVI to guide the website’s design, pulling fonts, colors, and key visual elements. Since the CVI didn’t include detailed web-specific guidelines (such as button styles, hover effects, typography scales, or layouts), I expanded on it and created a style guide that translated the brand identity into a clear, developer-friendly format.</p>
<img src="voru/style-guide.png" alt="UI style guide for the website, which includes typography styles, various button styles, colours and icons." />
<h2 id="võru-reflection">Reflection</h2>
<p>This project was a significant milestone early in my UX/UI career, where I stepped into the role of lead designer shortly after completing a two-month internship. I was responsible for both UX research and UI design on a large, multi-page website with a tight two-month timeframe.
<br><br>
To make sure the design truly met user needs, I suggested conducting a short user survey. The client was initially unsure because of time constraints and concerns about getting useful responses, but I felt strongly that even a small amount of user input would help. I raised the issue again with the project manager, and after further discussions, we received approval to run a smaller survey that could be done quickly while keeping the new site a surprise for the wider school staff.
<br><br>
The survey results gave us great insight into what students wanted from the site, their frustrations, and which features mattered most to them. I’m proud to have initiated this research, which helped shape many of the design choices. 
<br><br>
For the UI design, I worked within the school's CVI guidelines, adapting it for the web, finding creative solutions within the brand limitations, and integrating the UX findings. Direct communication with the client wasn’t always possible, which made interpreting feedback difficult, but it sharpened my problem-solving and adaptability as a designer.
<br><br>
The site launched successfully on September 1, 2024, and continues to serve the school community to this day.</p>
<br>
<div class="feedback">
<h2 id="võru-feedbck">Feedback</h2>
<p>"Kärt was always there, ready to help and work independently even in situations where input was scarce and it was necessary to independently understand the needs of the users and the concerns of the website. 
<br><br>
She helped create solutions that had not been used in the company before and brought out many good ideas that could be done in the future. She showed interest and commitment along every step and not only proposed solutions but also carried them out.
<br><br>
She was able to point out patterns and solutions that neither the client nor another team member could come up with. Explained them very skillfully and clearly and presented them professionally! 
<br><br>
The developer of the team was amazed at how well it is possible to take a single page into pieces and dissect it, and how much easier and more efficient it is to start work with such designs. Kärt managed it very well.”
<br><br>
– Kristofer Järvelaht, CEO of Topeltklikk
</div>


`
    },
    {
        id: 'p4',
        client: 'VARIOUS CLIENTS',
        title: 'Social Media & Ad Design',
        desc: ' ',
        tags: ['Visual Communication'],
        image: 'covers/sotsm.webp',
        hoverColor: '#aed6ff',
        overlayGradient: true,
        long: `<img src="sotsm/a.png" alt="" />
        <h2 id="sotsm">Social Media & Ad Design</h2>
        <p>I have designed social media posts, ads, and print materials for various different organizations from different fields. Here you can see an overview of some of that work.</p>
        <h2 id="andre">Andre Farm</h2>
        <p>Andre Farm is a family-run dairy farm located in Southern Estonia, known for its high-quality artisanal cheese production. In addition to cheese production, they also do farm tours, cheese tastings and workshops, as well as run an online shop.
<br><br>I followed Andre Farm's visual branding and playful personality to create social media posts and ads for Facebook.</p>
<img src="sotsm/andre-farm.png" alt="" />

 <h2 id="süamega">Festival "Süamega tettü süük"</h2>
 <p>The festival "Süämega tettü süük" is a community event held in Urvaste, Estonia, that brings together people for a celebration of food and sustainability. This festival focuses on sharing knowledge through workshops and lectures on topics like climate change, sustainable agriculture, waste-free kitchens, and more.
<br><br>I helped create social media posts for the festival based on a style guide, ensuring that all the necessary info was visually well presented and all materials would match in style.</p>
<img src="sotsm/süämega.png" alt="" />

        <h2 id="arvamus">Arvamusfestival</h2>
        <p>Arvamusfestival (The Opinion Festival) is an annual Estonian event, where open discussions on relevant societal issues is encouraged. It brings together citizens, policymakers, and organizations to shape the culture of dialogue and democracy in Estonia.
<br><br>
I joined the marketing and communications team at Arvamusfestival, focusing on multimedia and design. My role included creating animated ads for digital platforms and outdoor LED screens, as well as designing printed materials. All visuals followed the festival’s playful branding, which featured hand-drawn illustrations and the signature chicken and egg motif.</p>
<img src="sotsm/arvamus.png" alt="" />

<h2 id="pilve">Pilve Kodud</h2>
<p>Pilve Kodud is a new residential development project located in Kiili, Estonia. These homes are designed to be family-friendly, with spacious terraces and balconies, offering a quiet and green living environment.
<br><br>
I designed social media posts for Facebook and Instagram, following the visual identity and target audience while coming up with new content ideas to use for advertising. I also created PDF tables to give a clear overview of the different interior finish options.</p>
<img src="sotsm/pilve.png" alt="" />

<h2 id="huub">Pärnu Huub</h2>
<p>Pärnu Huub is a youth innovation center in Pärnu, serving as a community hub for people aged 15 to 26. It offers a space for personal development, creativity, and community engagement. The center organizes a variety of events and courses, including concerts, film screenings, board game nights, and discussion evenings. Pärnu Huub also supports youth-led initiatives and provides facilities for hosting events.
<br><br>I designed templates for Pärnu Huub’s social media posts, ensuring a cohesive and visually engaging style, while staying true to the core branding elements, such as colors and graphic elements.</p>
<img src="sotsm/huub.png" alt="" />



        
        `
    },
    {
        id: 'p5',
        client: 'VILJANDI CITY',
        title: 'Website to Aid in Restoring Viljandi’s Historic Stairway',
        desc: ' ',
        tags: ['UI Design', 'Website'],
        image: 'covers/viljandi1.webp',
        hoverColor: '#eec97d',
        long: `<img src="viljandi/mockup.png" alt="Website mockup." />
        <h2 id="viljandi-overview">Overview</h2>
        <p>Trepimägi is a historic stairway in Viljandi, built over a century ago to connect the Old Town with Lake Viljandi. As an important piece of the town’s cultural heritage and a beloved landmark frequented by locals, it deserves careful preservation. The website <a target="_blank" href="https://trepimagi.ee/">www.trepimagi.ee</a> was created to support the stairway’s reconstruction by gathering donations for its restoration.
<br><br>
I contributed to the website project by designing the layout and visual interface based on Viljandi City’s CVI, focusing on simplicity and usability. My goal was to help visitors navigate the site easily and find the donation option that best suited them among the three tiers.</p>
<h2 id="viljandi-flow">User Flow</h2>
<p>I made a simple flow chart to visualize the 3 possible options the user has for making a donation.<p>
<img src="viljandi/flow.png" alt="User flow showing 3 paths for making a donation." />
<h2 id="viljandi-design">Visual Design</h2>
<p>I used Viljandi City's CVI elements to design a simple landing page with a straightforward user journey. </p>
<img src="viljandi/trepimagi.png" alt="" />
<p>The popup which opens for making a small donation includes contact info and payment options side by side.</p>
<img src="viljandi/popup1.png" alt="" />
<p>The popup for buying a step is split into three stages: choosing a step, filling in contact details, and completing payment. This approach allows users to focus on one task at a time, creating a simpler and smoother user experience.</p>
<img src="viljandi/popup2.png" alt="" />
<h2 id="viljandi-reflection">Reflection</h2>
<p>My designs for the Trepimägi landing page focused on simplicity and usability, making it easy for visitors to navigate and select donation options. The site went live in March 2025 and has reached over 70% of the project’s €200,000 donation goal.</p>

        `
    },
    {
        id: 'p6',
        client: 'TARTU CITY',
        /*logo: 'logos/tartu-logo.png',*/
        title: 'Designing Tote Bags that Reflect the Identity of Tartu City',
        desc: ' ',
        tags: ['Visual Communication', 'Physical Product'],
        image: 'covers/tartu.webp',
        hoverColor: '#ffcdf4',
        overlayGradient: true,
        long: `
        <img src="tartu/mockup-lai.png" alt="Pink tote bag mockup photo." />
        <h2 id="tartu-overview">Overview</h2>
        <p>These tote bags were created for the Tartu Souvenir Competition, where my design was selected as one of the winners. The tote bags were produced in collaboration with a local print shop and are now sold at the Tartu Tourist Information Centre.</p>
        <img src="tartu/extra.png" alt="Pink tote bag with Tartu City map printed on it."/>
        <h2 id="tartu-ideation">Ideation</h2>
        <p>After moving from Tallinn to Tartu, I quickly noticed how much the city favors walking and cycling. A 25-minute walk is considered normal here, whereas in Tallinn people would likely take a bus. Exploring Tartu’s calm side streets and green parks made me appreciate this pedestrian-friendly character.</p>
        <img src="tartu/inspo.png" alt="Tartu City map with yellow lines overlayed on lit up pedestrian and cycling paths."
        <p>When I found the city’s lighted cycle path map, I was struck by how the routes radiate out in all directions, forming a kind of skeleton of the city. I decided to use this as the basis for a design that shows Tartu from a fresh perspective.​​​​​​​</p>
        <h2 id="tartu-design">The Design</h2>
        <img src="tartu/tartu-disain.png" alt="Minimalistic design of the Tartu City map."
        <p>Using the map of lighted cycle paths as inspiration, I created a minimalist composition aligned with Tartu’s visual identity guidelines. I simplified the map by removing dead ends and making the lines more fluid, resulting in a cleaner, more legible design. Green and yellow dots mark the city’s green areas, while the Emajõgi River is highlighted as a key landmark for orientation.</p>
         <div class="col-2-gallery">
         <img src="tartu/r1.png" alt="Pink tote bag with the design printed on top shown in daylight conditions."/>
         <img src="tartu/r2.png" alt="Pink tote bag with the design printed on top shown in night conditions with reflective effect."/>
         <img src="tartu/m1.png" alt="Black tote bag with the design printed on top shown in daylight conditions."/>
         <img src="tartu/m2.png" alt="Black tote bag with the design printed on top shown in night conditions with reflective effect."/>
         <img src="tartu/k1.png" alt="Yellow tote bag with the design printed on top shown in daylight conditions."/>
         <img src="tartu/k2.png" alt="Yellow tote bag with the design printed on top shown in night conditions with reflective effect."/>
         </div>
         <h2 id="tartu-finished">Finished Product</h2>
         <p>The design was printed sustainably on 100% cotton tote bags using silk screen printing. The cycle paths were produced with a reflective finish — referencing the illuminated paths themselves while also serving a functional purpose by increasing safety for pedestrians at night.</p>
         <div class="col-2-gallery">
         <img src="tartu/finish1.jpg" alt=""/>
         <img src="tartu/finish2.jpg" alt=""/>
         <img src="tartu/finish3.jpg" alt=""/>
         <img src="tartu/finish4.jpg" alt=""/>
         </div>
         <p>The result is a tote bag design that reflects the branding of Tartu City and highlights Tartu as a pedestrian- and cyclist-friendly city. In addition to the design, I managed the production process: contacting and comparing different print studios, selecting the tote bags, and coordinating the printing with Kind Studio to bring the project into production. The bags are now available for purchase at the Tartu Tourist Information Centre.</p>
         <p>About the competition: <a target="_blank" href="https://tartu.ee/et/uudised/tartu-meenekonkursi-parimad-selgunud">https://tartu.ee/et/uudised/tartu-meenekonkursi-parimad-selgunud</a></p>

        `
    },
    {
        id: 'p7',
        client: 'PERSONAL PROJECT',
        title: 'Moodiest App – Exploration of AI in Mood Tracking',
        desc: ' ',
        tags: ['UI Design', 'Mobile App', 'Digital Product'],
        image: 'covers/moodiest1.webp',
        hoverColor: '#eec97d',
        long: `
        <img src="mood/mood1.png" alt="" />
        <h2 id="mood-overview">Overview</h2>
        <p>Moodiest is a mobile app that helps users monitor and manage their emotional wellbeing by logging their daily moods, activities, and thoughts. The app tracks mood trends over time, provides analytics and insights based on user data, as well as helpful tips and feedback through an integrated AI chatbot.
<br><br>
Moodiest is a project that grew out of a 10-hour design sprint. After receiving initial feedback on a simple Figma prototype based on 6 screens, I decided to develop my idea further while collaborating with a developer.
</p>
<a class="link-btn" target="_blank" href=https://www.figma.com/proto/c40vSRsAoTwMx8v21Bkd08/Moodiest?node-id=192-6499&t=c66RhyauKVchLtzl-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A1063&starting-point-node-id=196%3A6873>View Figma Prototype →</a>
<h2 id="mood-problem">Product Focus & Goals</h2>
<p>Before starting the project, I had a few ideas for what a mood-tracking app should offer: a simple, quick-to-use interface and a data overview that provides real value to the user. As the project progressed, these goals became clearer and more defined.</p>
<img src="mood/problem.png" alt="" style="width: 100%;" />

<h2 id="mood-sprint">Beginning: Design Sprint</h2>
<p>
An initial 10-hour design sprint resulted in a minimalist interface with a clear user journey and a cohesive style for a simple mood tracking app. The process included researching similar apps, building wireframes and a simple prototype.
<br><br>
Valuable feedback by the designers Eva-Liisa Edela, Alina Trussova, Kristi Koppel and Agu-Art Annuki highlighted several areas for improvement:
<br>
<ul>
<li>Limited use of established mobile design standards, such as the burger menu</li>
<li>Ambiguity in the mood scale for some users</li>
<li>No option to add personal notes about the day</li>
<li>Lack of info on the insights page, such as dates and a yearly view</li>
</ul>
<br>
I addressed these issues by refining the design, incorporating mobile UI standards, improving clarity in the mood scale, adding note-taking functionality, and enhancing the insights page with more detailed data, among a few other updates. I also started collaborating on the project with a developer, who started building up the app in code.
</p>
<img src="mood/wire.png" alt="" />
<h2 id="mood-design">Updated Design</h2>
<p>
In the updated version, I fleshed out the concept more and worked on these updates:
<ul>
<li>Using a horizontal menu instead of a burger menu</li>
<li>Adding descriptive labels to the mood scale</li>
<li>Adding a note-taking functionality</li>
<li>Adding a streak counter with animations</li>
<li>Improvement and refinement of the statistics screens</li>
<li>Integrating ​​an AI chatbot</li>
</ul>
</p>

<img src="mood/journey.png" alt="" />
<br>
<p>The users can use the insights page to check their weekly, monthly and yearly mood stats and see the general trends. The app is also able to show which activities are correlating more with a positive mood, and which ones with a negative one. When clicking on a specific day, the user is able to see their logged mood, activities, and thoughts.</p>
<br>
<div class="col-3-gallery">
<img src="mood/i1.png" alt="" />
<img src="mood/i2.png" alt="" />
<img src="mood/i3.png" alt="" />
</div>
<br>
<h2 id="moody">Moody & the Mood Scale</h2>
<div class="col-2-gallery">
<img src="mood/moody-hi.png" alt="" style="width:80%; height:auto; display:block; margin:24px auto;" />
<p>The scale is accompanied by a cute and silly looking blob creature called Moody, which changes colors and will be either frowning or smiling based on the chosen emotion. This blob also acts as the mascot for the app and the chatbot AI.</p>
</div>
<br>

<p>The mood scale contains 5 points: awful, bad, okay, happy, and great. The negative emotions are represented by colder colors, while the positive emotions are warmer. There is also a text label next to the scale for added clarity. </p>

<video 
  width="100%" 
  style="border-radius: 14px; overflow: hidden;" 
  autoplay 
  muted 
  loop 
  playsinline
>
  <source src="mood/mood-select.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


<h2 id="moody-color">Colour Contrast Testing</h2>
<p>I tested the color contrast through different types of color blindness filters. The chosen colors are easily distinguishable with any type of color blindness.</p>
<img src="mood/1-normal.png" alt="" />
<img src="mood/2-prota.png" alt="" />
<img src="mood/3-mono.png" alt="" />
<img src="mood/4-trita.png" alt="" />
<img src="mood/5-deu.png" alt="" />
<img src="mood/6-trita.png" alt="" />

<h2 id="AI">AI "Moody"</h2>
<div class="col-2-gallery">
<img src="mood/pilt.png" alt="" style="width: 80%;" />
<p>Moody is an AI chatbot feature integrated into the app. Users can engage with the chatbot to receive personalized recommendations, coping strategies, and motivational messages based on their mood patterns and activities.
<br><br>
Moody also gives the user short daily feedback based on their daily mood and activities. That means the user receives unique and personalised content every time they successfully log their mood. That may help to keep the users engaged and the user experience feeling fresh each time.
<br><br>
The prototype, which is built in React Native framework, includes AI Moody powered by ChatGPT. It is designed to analyze user input and offer mental health advice and motivational messages in a friendly, supportive tone.</p>
</div>
<br>
<h2 id="moody-reflection">Reflection</h2>
<p>What began as a 10-hour design sprint to hone my UI design skills quickly evolved into a full-fledged product design hobby project. I partnered with a developer, and together we’ve been building the app using React Native. This collaborative process has been invaluable for me as a designer, offering insight into the challenges that arise during development and how design choices must account for technical constraints.
<br><br>
Working closely with the developer, I’ve learned to consider practical aspects such as how layouts adjust when the on-screen keyboard is introduced and the importance of designing often-overlooked screens like sign-up and settings. We also explored integrating ChatGPT to create "AI Moody," an AI assistant with a specific personality designed to help users manage their mental health.
Development and testing are ongoing, and this process continues to reveal new considerations for the user journey and data input mechanics. Because the product involves both mental health and AI, it’s also essential to establish strong safeguards to ensure user safety and data protection.
<br>
</p>
<div class="col-2-gallery">
<p>I’m excited to keep refining and expanding this project, with plans to conduct user testing on a broader scale to gather more comprehensive feedback.
</p>
<img src="mood/Leaf.gif" alt="" style="width: 35%; display: block; margin: 0 auto;" />
</div>



        
        `
    },
    {
        id: 'p8',
        client: 'SUTLEMA-AESPA KINDERGARTEN',
        title: 'Logo Design System for Sutlema-Aespa Kindergarten',
        desc: ' ',
        tags: ['Visual Communcation', 'Branding', 'Logo Design'],
        image: 'covers/lasteaed.webp',
        hoverColor: '#eec97d',
        overlayGradient: true,
        long: `
        <img src="sutlema/5.png" alt="" />
        <h2 id="sutlema-overview">Overview</h2>
        <p>Sutlema-Aespa Kindergarten operates across two buildings in the villages of Sutlema and Aespa, surrounded by beautiful natural landscapes. The kindergarten places strong emphasis on creating a calm, safe environment where children can learn through diverse activities, with a particular focus on environmental themes. Children often go on nature hikes and use natural materials in their arts and crafts.
<br>
The kindergarten needed a new logo to represent its two houses: Linnupesa (“Bird Nest House”) and Metsaveere (“Edge of the Forest House”), which are located a few kilometers apart.
<br>
With this in mind, I created a flexible logo system that makes each house distinct but visibly connected, while representing the kindergarten’s identity and its values.</p>
<h2 id="logo">Logo Design</h2>
<p>The main logo combines two symbols that represent the two houses of Sutlema-Aespa Kindergarten: a cheerful golden-yellow bird symbolizes the Linnupesa (“Bird Nest”) house, reflecting playfulness, freedom, joy, and growth. A green forest grove represents the Metsaveere (“Edge of the Forest”) house, highlighting nature-centeredness, peace, and a safe environment for growth.</p>
<img src="sutlema/1.png" alt="Logo designs – main logo, short logo and icon." />
<p>The logo is versatile — its elements can also be used separately, giving each house its own visual marker. This makes it quick and easy to distinguish which house the communicated info relates to, while still keeping it clear that both belong to the same kindergarten. In addition, the main logo is available in three sizes to cover different usage needs and printing options.</p>
<img src="sutlema/2.png" alt="The logos in black and white." />
<p>The logo design works well on both light and dark background as well as in and black-and-white print.</p>
<h2 id="sutlema-use-case">Examples of Use Cases</h2>
<img src="sutlema/3.png" alt="Examples of the logo used in social media." />
<p>I also considered other visual elements and a wider branding beyond just the logo, and made sure the logo works in different use cases.</p>
<img src="sutlema/4.png" alt="Mockups of t-shirt, lanyard and cup with the logo." />
<img src="sutlema/6.png" alt="Examples of signage." />

        `
    },

    {
        id: 'p11',
        client: 'JooksOnLahe',
        title: 'Improving the User Experience of a Sports App Website',
        desc: ' ',
        tags: ['UX Research',],
        image: 'covers/jooks-cover.png',
        hoverColor: '#4aa27d',
        long: `
        <img src="jooks/jooksm.png" alt="" style="width:100%"/>
         <h2 id="jooks-overview">Overview</h2>
        <p>Jooks on lahe is a mobile app that encourages people to build a habit of regular movement such as walking, running, hiking etc. The core challenge is #igapäev5km (every day 5 km), where participants aim to move at least 5 km per day and track it in the app. Participants earn points and are eligible for prizes if they complete the challenge. The app is also strongly linked to a community aspect – supporting, motivating, and sharing with other users.
<br><br>
Jooks on lahe had successfully launched their app, but needed a website redesign to better promote the app and inform the users. I worked on the project as the UX designer, analyzing the existing site and compiling recommendations for improving the site.
</p>
<h2 id="jooks-ux">UX Recommendations</h2>
<p>Before analyzing the site, I defined a clear and simple path a user may take from first impressions to deciding to download the app.</p>
<img src="jooks/user-journey.png" alt="" style="width:100%"/>
<p>The goal was to create a better user experience that highlights the app’s value and encourages people to take action. I compiled the following recommendations based on general UX principles and best practices.</p>
<div class="col-2-gallery" style="align-items: start; justify-items: start;">
<img src="jooks/jooks1.png" alt="" style="width:100%"/>
<img src="jooks/jooks2.png" alt="" style="width:100%"/>
</div>

<h2 id="jooks-design">Final UI Design</h2>
<p>After I completed my analysis and UX recommendations, a UI designer created the visual design that was later developed into the final website. The new design reflects my key suggestions:</p>
<ul>
<li>adding the logo and a clear call to action,</li>
<li>shifting the focus toward the app,</li>
<li>replacing CEO photos with photos that showcase the community and their activities,</li>
<li>highlighting participant stories as social proof,</li>
<li>ensuring the overall appearance of the site aligns with the app’s branding.</li>
</ul>
<img src="jooks/site.png" alt="" style="width:100%"/>

`
    },

    /* PROJECT FILES MISSING
    {
        id: 'p9',
        client: 'KOTIKIELI',
        title: 'Branding and Web Design for a Language Teacher',
        desc: ' ',
        tags: ['Visual Communication', 'UI Design', 'Website'],
        image: 'covers/eestikeel1.png',
        hoverColor: '#aed6ff',
        long: `<h2>Pulse</h2><p>Data viz and interaction patterns.</p>`
    }, */


    {
        id: 'p10',
        client: 'VOCO',
        title: 'From Concept to Physical Product: Wooden Phone Stand for VOCO',
        desc: ' ',
        tags: ['Visual Communication', 'Physical Product'],
        image: 'covers/voco.png',
        hoverColor: '#aed6ff',
        overlayGradient: true,
        long: `<img src="voco/1.png" alt="" />
        <h2 id="voco-overview">Overview</h2>
        <p>Tartu Vocational College (VOCO) was looking for a unique, branded souvenir that they could gift to international guests, sponsors, and as awards for students at competitions. The aim was to design something that felt distinctly VOCO while also being practical.<br><br>
As part of a team project, we developed a custom wooden phone and tablet stand that reflects the school's tech-oriented identity and can also be used effectively in everyday life.
<br><br>
The project covered the full design process: ideation, research, technical drawings, 3D modelling, prototyping, brochure design, and final production. My main responsibilities included product design, technical drawings, and 3D models, as well as supporting the prototyping and manufacturing stages.</p>
          <h2 id="voco-research">Research Phase</h2>
<p>The project began with the research phase. We gathered inspiration by finding examples of different phone stand designs and discussing which aspects of the designs were successful and which could be improved. We did market research to identify the target demographic, understand the core benefits of the product, and figure out ways to differentiate from existing products. We also considered the technical feasibility, mapped out potential production partners and calculated the costs.</p>
<img src="voco/research.png" alt="" />
<h2 id="voco-design">Product Design</h2>
<p>After deciding on a general style and sketching out different concepts, the team agreed on a design. I then prepared technical drawings to define the dimensions, construction and exact design of the phone stand.</p>
<img src="voco/technical.png" alt="" />
<p>I was also responsible for building 3D models that helped visualize the product, test proportions, and refine the design before moving onto physical prototyping.</p>
<img src="voco/3D.png" alt="" />
<h2 id="voco-print">Brochure Design</h2>
<p>In order to present the concept and its functionality, we designed a brochure which follows VOCO’s visual identity guidelines. I contributed the 3D models as visual elements to help explain how the stand is assembled.</p>
<img src="voco/juhend1.png" alt="" />
<img src="voco/juhend2.png" alt="" />
<h2 id="voco-proto">Prototypes & Finished Product</h2>
<p>We developed several prototypes to test size, assembly, stability, durability, and different finishes.</p>
<div class="col-2-gallery">
<img src="voco/valmis1.jpeg" alt="" />
<img src="voco/valmis2.jpg" alt="" />
</div>
<p>The final stand was produced by a local woodworking company using birch plywood. Today VOCO uses the phone stands both as gifts for international visitors and as practical tools in the classroom, from video calls to UI design work in prototyping and development classes.</p>


        `
    },

    /* PROJECT FILES MISSING
    {
        id: 'p11',
        client: 'FRILLICE',
        title: 'What Stops Users from Becoming Paying Subscribers? UX Research for a Nutrition App',
        desc: ' ',
        tags: ['UX Research', 'Mobile App'],
        image: 'covers/frillice1.png',
        hoverColor: '#7E66D5',
        long: `<h2>PixelPlay</h2><p>Interaction experiments.</p>`
    }, */



    {
        id: 'p12',
        client: 'CATRAIN KOMBUCHA',
        title: 'Product Photos for Catrain Kombucha',
        desc: ' ',
        tags: ['Visual Communication', 'Photography'],
        image: 'covers/kombucha.png',
        hoverColor: '#ffcdf4',
        overlayGradient: true,
        long: `
        <h2 id="catrain-overview">Overview</h2>
        <p>Catrain Kombucha is a small Finnish company that produces handcrafted kombucha from natural ingredients. As they prepared to update their website, they needed new photos to showcase their eight flavours. I photographed the products and made a collage for each one, bringing out each drink's unique flavour and making each drink visually distinct.</p>
        <h2 id="catrain-photos">Photos</h2>
        <div class="col-2-gallery">
        <img src="catrain/1.png" alt="" />
        <img src="catrain/2.png" alt="" />
        <img src="catrain/3.png" alt="" />
        <img src="catrain/4.png" alt="" />
        <img src="catrain/5.png" alt="" />
        <img src="catrain/6.png" alt="" />
        <img src="catrain/7.png" alt="" />
        <img src="catrain/8.png" alt="" />
        </div>

        
        `
    }
];

/* -------------------------
  UI: filters + grid rendering
---------------------------*/
const allFilters = ['UI Design', 'UX Research', 'Visual Communication', 'Motion'];
// const state = {
//     selected: new Set()
// };
function getSelectedFilters() {
    const storageString = sessionStorage.getItem('selectedFilters')
    const parsedStorage = storageString ? JSON.parse(storageString) : []

    return new Set(parsedStorage)
}

function initFilters() {
    const container = document.getElementById('filters');
    if (container.childElementCount > 0) return;
    // Add "clear" button at start (optional)
    allFilters.forEach(f => {
        const b = document.createElement('button');
        b.className = 'filter-btn';
        b.textContent = f;
        b.dataset.filter = f;
        b.addEventListener('click', () => {
            toggleFilter(f, b);
        });
        if (getSelectedFilters().has(f)) {
            b.classList.add('selected')
        }
        container.appendChild(b);
    });
}

function toggleFilter(filter, btn) {
    const selectedFilters = getSelectedFilters()
    if (selectedFilters.has(filter)) {
        selectedFilters.delete(filter);
        btn.classList.remove('selected');
    } else {
        selectedFilters.add(filter);
        btn.classList.add('selected');
    }
    sessionStorage.setItem('selectedFilters', JSON.stringify(Array.from(selectedFilters)))
    renderGrid();
}

function matchesFilters(project) {
    const selectedFilters = getSelectedFilters()
    if (selectedFilters.size === 0) return true;
    // OR behavior: if project has any of the selected tags
    for (const t of project.tags) {
        if (selectedFilters.has(t)) return true;
    }
    return false;
}

function renderGrid() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    const visible = projects.filter(matchesFilters);

    if (visible.length === 0) {
        const el = document.createElement('div');
        el.className = 'center';
        el.style.padding = '36px';
        el.innerHTML = '<p>No projects match the filters.</p>';
        grid.appendChild(el);
        return;
    }

    visible.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';

        // assign a hover color for this card
        card.style.setProperty('--hover-color', p.hoverColor);
        if (p.overlayGradient) card.classList.add('overlay-gradient');

        // Create link destination
        const projectUrl = `project.html?id=${encodeURIComponent(p.id)}`;

        // Make entire card clickable
        card.addEventListener('click', () => {
            window.location.href = projectUrl;
        });

        card.addEventListener('mouseenter', () => {
            const button = card.getElementsByClassName('filter-btn')[0]
            button.classList.add('filter-btn-hover')
        })

        card.addEventListener('mouseleave', () => {
            const button = card.getElementsByClassName('filter-btn')[0]
            button.classList.remove('filter-btn-hover')
        })

        // Thumbnail image (top section)
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.backgroundImage = `url(${p.image})`;
        thumb.setAttribute('aria-hidden', 'true');

        // Content wrapper
        const content = document.createElement('div');
        content.className = 'card-content';

        // Add logo above title
        if (p.logo) {
            const logo = document.createElement('img');
            logo.src = p.logo;
            logo.alt = `${p.title} logo`;
            logo.className = 'project-logo';
            content.appendChild(logo);
        }

        // ADD CLIENT NAME (NEW)
        if (p.client) {
            const client = document.createElement('div');
            client.className = 'client';
            client.textContent = p.client;
            content.appendChild(client);
        }

        const title = document.createElement('h3');
        title.textContent = p.title;

        const desc = document.createElement('p');
        desc.textContent = p.desc;

        const tagsWrap = document.createElement('div');
        tagsWrap.className = 'tag-list';
        p.tags.forEach(t => {
            const tspan = document.createElement('span');
            tspan.className = 'tag';
            tspan.textContent = t;
            tagsWrap.appendChild(tspan);
        });

        const actions = document.createElement('div');
        actions.className = 'card-actions';
        const viewBtn = document.createElement('button');
        viewBtn.className = 'filter-btn';
        viewBtn.href = `project.html?id=${encodeURIComponent(p.id)}`;
        viewBtn.textContent = 'View project →';
        actions.appendChild(viewBtn);

        // viewBtn.addEventListener('click', e => e.stopPropagation());
        viewBtn.addEventListener('click', () => {
            window.location.href = `project.html?id=${encodeURIComponent(p.id)}`;
        })


        // Add everything to content
        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(tagsWrap);
        content.appendChild(actions);

        // Build final card
        card.appendChild(thumb);
        card.appendChild(content);
        grid.appendChild(card);
    });
}

// --- Project Page Dynamic Rendering ---
if (window.location.pathname.endsWith('project.html')) {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = project.title;

        // LEFT SIDE
        const left = document.getElementById('projectLeft');
        left.innerHTML = `
        ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-cover"/>` : ''}
        <h2 class="client">${project.client || ''}</h2>
        <h1 class="title">${project.title}</h1>
        ${project.desc ? `<p class="desc">${project.desc}</p>` : ''}
        <div class="tag-list">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      `;
        left.style.setProperty('--hover-color', project.hoverColor);

        // RIGHT SIDE
        const right = document.getElementById('projectRight');
        right.innerHTML = project.long;
    } else {
        // only show this message when actually on project.html
        const right = document.getElementById('projectRight');
        if (right) right.innerHTML = '<p>Project not found.</p>';
    }

    // Scrollable links on the left
    const right = document.getElementById('projectRight');
    const left = document.getElementById('projectLeft');

    const headings = right.querySelectorAll('h2');
    if (headings.length > 0) {
        const nav = document.createElement('div');
        nav.className = 'section-links';

        headings.forEach(h => {
            if (!h.id) {
                const id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
                h.id = id; // assign an ID if not already set
            }

            const link = document.createElement('a');
            link.href = `#${h.id}`;
            link.textContent = h.textContent;
            link.className = 'nav-item'
            nav.appendChild(link);
        });

        left.appendChild(nav);
    }

    /*
    const button = document.getElementById('voru-button');
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = 'https://www.voru.edu.ee'
        })
    } */

    // Initialize all carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function updateCarousel() {
            slides.forEach((img, i) => {
                img.classList.toggle('active', i === currentIndex);
            });

            const offset = -currentIndex * (slides[0].offsetWidth + 24); // 24 = gap
            track.style.transform = `translateX(calc(${offset}px + 10%))`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Initialize on load
        updateCarousel();
    });



}


/* -------------------------
  Banner gradient interactivity
---------------------------*/
function initBanner() {
    const header = document.querySelector('.banner');
    const gradientEl = (header && header.querySelector('.banner-gradient')) || document.querySelector('.banner-gradient');

    if (!header || !gradientEl) {
        console.warn('initBanner: missing .banner or .banner-gradient element.');
        return;
    }

    console.log('initBanner: started');

    // State
    let mouseX = 50, mouseY = 50;
    let targetX = 50, targetY = 50;
    let swirlOffset = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    // Tweakable params
    const followSpeed = 0.35;      // how fast mouse follows target (higher = less lag)
    const ambientRate = 0.00004;   // smaller = slower ambient drift
    const swirlPerMs = 0.0025;     // how fast swirl offset increases per ms
    const swirlAmplitude = 18;     // how wide the swirl orbit is
    const mix = 1.4;               // how strongly mouse influences gradients

    function animate(now) {
        const delta = now - lastTime;
        lastTime = now;

        // accumulate elapsed time scaled by ambientRate
        elapsed += delta * ambientRate;

        // ambient drift (slow)
        const drift1x = 30 + Math.sin(elapsed * 0.6) * 8;
        const drift1y = 50 + Math.cos(elapsed * 0.8) * 5;
        const drift2x = 70 + Math.cos(elapsed * 0.7) * 8;
        const drift2y = 55 + Math.sin(elapsed * 0.9) * 5;

        // swirl advances smoothly with frame time
        swirlOffset += delta * swirlPerMs;

        // smooth-follow the target
        mouseX += (targetX - mouseX) * followSpeed;
        mouseY += (targetY - mouseY) * followSpeed;

        // combine drift, mouse influence and swirl
        const x1 = drift1x + (mouseX - 50) * mix + Math.sin(swirlOffset) * swirlAmplitude;
        const y1 = drift1y + (mouseY - 50) * mix + Math.cos(swirlOffset * 1.3) * swirlAmplitude;
        const x2 = drift2x + (mouseX - 50) * mix + Math.cos(swirlOffset * 1.1) * swirlAmplitude;
        const y2 = drift2y + (mouseY - 50) * mix + Math.sin(swirlOffset * 1.4) * swirlAmplitude;

        // write vars directly to the gradient element
        gradientEl.style.setProperty('--x1', `${x1}%`);
        gradientEl.style.setProperty('--y1', `${y1}%`);
        gradientEl.style.setProperty('--x2', `${x2}%`);
        gradientEl.style.setProperty('--y2', `${y2}%`);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // pointermove is more universal (handles touch-pointers gracefully)
    header.addEventListener('pointermove', (e) => {
        const rect = header.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 100;
        targetY = ((e.clientY - rect.top) / rect.height) * 100;
    });

    header.addEventListener('mouseleave', () => {
        targetX = 50;
        targetY = 50;
    });
}


function setActive() {
    const navLinks = document.querySelectorAll('.section-links .nav-item');
    let userScrolling = true; // Whether observer updates are allowed
    let scrollTimeout;

    // Map of section ID → corresponding nav link
    const sectionMap = {};
    navLinks.forEach(link => {
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section) sectionMap[id] = link;

        // When clicking a link, temporarily disable observer updates
        link.addEventListener('click', e => {
            userScrolling = false;

            // Remove active state from all, activate the clicked one immediately
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Re-enable updates after scroll settles
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => (userScrolling = true), 800);
        });
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const link = sectionMap[id];
                if (entry.isIntersecting) {
                    // Remove "active" from all, then activate current
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        },
        {
            root: null,          // viewport
            threshold: 0.8       // section must be at least 80% visible
        }
    );

    // Observe each section
    Object.keys(sectionMap).forEach(id => observer.observe(document.getElementById(id)));

}

// ensure it runs after DOM is ready
document.addEventListener('DOMContentLoaded', initBanner);
document.addEventListener('DOMContentLoaded', setActive);




/* -------------------------
  Init on load
---------------------------*/
window.addEventListener("pageshow", (event) => {
    if (event.persisted === false && performance.getEntriesByType("navigation")[0].type === "reload") {
        sessionStorage.clear()
    }
    initFilters();
    renderGrid();
});

document.addEventListener('DOMContentLoaded', () => {
    renderProjectPage();
    initBanner();
});
