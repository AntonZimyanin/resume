import "./style.css"

import "./script"

import Navbar from "./components/Navbar"
import Header from "./components/Header";
import ContactForm from "./components/form/ContactForm";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div>
   
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />

    <Navbar />

    <meta
      name="description"
      content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations."
    />

    
<meta itemprop="name" content="Syed Mohsin's Portfolio"/>
<meta itemprop="description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations."/>

<meta itemprop="image" content="assets/images/sharing-card.png"/>

<meta property="og:url" content="https://ossportfolio.netlify.app"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Syed Mohsin's Portfolio" />
<meta property="og:description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations."/>

<meta property="og:image" content="assets/images/sharing-card.png"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Syed Mohsin's Portfolio"/>
<meta name="twitter:description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations."/>

<meta name="twitter:image" content="assets/images/sharing-card.png"/>


    <link
      rel="shortcut icon"
      href="assets/images/favicons.png"
      type="image/png"
    />


    <link
      rel="preload"
      href="assets/fonts/Mona-Sans.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />  


    <title>Syed Mohsin's Portfolio</title>

    <script>
      const theme = localStorage.getItem("theme") || "dark";
      document.body.classList.add(theme);
    </script>

    <Header />

    <main>
      <section class="client">
        <div class="container">
          <h2 class="h2">Trusted by</h2>
          <div class="logos">
          
            <div class="logo-group">
              <img
                loading="lazy"
                src="assets/images/trusted-by/stripe.svg"
                alt="Ideacraft"
                class="logo hide to-top"
              />

              <img
                loading="lazy"
                src="assets/images/trusted-by/datastax.svg"
                alt="Golden grid"
                class="logo"
              />

              <img
                loading="lazy"
                src="assets/images/trusted-by/coke.svg"
                alt="Theia"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="assets/images/trusted-by/gm.svg"
                alt="General motors"
                class="logo hide to-top"
              />

              <img
                loading="lazy"
                src="assets/images/trusted-by/shares.svg"
                alt="Chippy"
                class="logo"
              />
              <img
                loading="lazy"
                src="assets/images/trusted-by/shopify.svg"
                alt="Shopify"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="assets/images/trusted-by/agency-elevation.svg"
                alt="Agency elevation"
                class="logo hide to-top"
              /><img
                loading="lazy"
                src="assets/images/trusted-by/gitlab.svg"
                alt="Ron jones"
                class="logo"
              /><img
                loading="lazy"
                src="assets/images/trusted-by/duolingo.svg"
                alt="Mighty furniture's"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="assets/images/trusted-by/coyote.svg"
                alt="Bulls eye"
                class="logo hide to-top"
              />
              <img
                loading="lazy"
                src="assets/images/trusted-by/astrato.svg"
                alt="Chippy"
                class="logo"
              />
              <img
                loading="lazy"
                src="assets/images/trusted-by/mercado.svg"
                alt="Fastlane"
                class="logo hide to-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="work">
        <div class="container">
          <h2 class="h2" id="work">Selected Work</h2>
          <div class="work-boxes">
            <div class="work-box">
              <div class="work-textbox">
             
                <h3 class="h3">portfolio template</h3>
             
                <p class="work-text">
                  A free to use, minimal and accessible portfolio template for
                  developers.
                </p>
             
                <ol class="work-technologies">
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>SCSS</li>
                  <li>MDX</li>
                </ol>

                <div class="work-links">
               
                  <a href="https://github.com/devsyedmohsin" target="_blank" rel="noopener" class="link"
                    >Explore this project</a
                  >

                <a
                    href="https://github.com/devsyedmohsin"
                    target="_blank"
                    rel="noopener"
                    title="Source code"
                  >
                    <img
                      src="assets/images/social-links/github.svg"
                      alt="GitHub"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

   
              <picture class="work-img">
                <img
                  loading="lazy"
                  src="assets/images/work/portfolio-template.webp"
                  alt="agency elevation"
                />
              </picture>
            </div>
            <div class="work-box">
              <div class="work-textbox">
             
                <h3 class="h3">agencyelevation.com</h3>
             

                <p class="work-text">Website for Agency Elevation.</p>
                <ol class="work-technologies">
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Material UI</li>
                </ol>
                <div class="work-links">
                
                  <a href="#" target="_blank" rel="noopener" class="link"
                    >Explore this project</a
                  >

                  <a
                    href="http://github.com/devsyedmohsin"
                    target="_blank"
                    rel="noopener"
                    title="Source code"
                  >
                    <img
                      src="assets/images/social-links/github.svg"
                      alt="GitHub"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
      
              <picture class="work-img">
                <img
                  loading="lazy"
                  src="assets/images/work/agency-elevation.webp"
                  alt="portfolio template"
                />
              </picture>
            </div>
            <div class="work-box">
              <div class="work-textbox">
           
                <h3 class="h3">contribute.dev</h3>
              
                <p class="work-text">
                  Website for DevX A dedicated space for developer experience
                </p>
                <ol class="work-technologies">
                  <li>Ruby</li>
                  <li>SvelteKit</li>
                  <li>Emotion</li>
                </ol>
                <div class="work-links">
               
                  <a href="#" target="_blank" rel="noopener" class="link"
                    >Explore this project</a
                  >

                   
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    title="Source code"
                  >
                    <img
                      src="assets/images/social-links/github.svg"
                      alt="GitHub"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
       
              <picture class="work-img">
                <img
                  loading="lazy"
                  src="assets/images/work/contribute-dev.webp"
                  alt="contribute dev"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>


      <section class="article">
        <div class="container">
          <h2 class="h2" id="blog">My Articles</h2>
          <div class="article-boxes">
            <article class="article-box featured-article">
              <div class="article-textbox">
                <div>
                  <h3 class="h3">
                    22 Useful CSS Tips and Tricks Every Developer Should Know
                  </h3>
                  <p class="article-text">
                    Note: All the tips, tricks shared in this article are part
                    of my GitHub repository css tips tricks A handmade
                    collection of pro css tips tricks for developers.
                  </p>
                </div>
                <div class="article-info">
                  <a href="https://dev.to/devsyedmohsin" class="link" target="_blank" rel="noopener"
                    >Continue reading</a
                  >
                  <span class="reaction-count">
                    <img src="./assets/images/heart-outline.svg" alt="heart" />
                    416
                  </span>
                </div>
              </div>
              <picture class="article-illustration">
                <img
                  src="assets/images/featured-blog.webp"
                  alt="MacBook Pro"
                  loading="lazy"
                />
              </picture>
            </article>
            <article class="article-box">
              <div class="article-textbox">
                <div>
                  <h3 class="h4">JavaScript Default Function Parameters.</h3>
                  <p class="article-text">
                    In JavaScript when we call a function which expects some
                    data to be passed in if you call that without passing
                  </p>
                </div>
                <div class="article-info">
                  <a href="https://dev.to/devsyedmohsin" class="link" target="_blank" rel="noopener"
                    >Continue reading</a
                  >
                  <span class="reaction-count">
                    <img
                      src="./assets/images/heart-outline.svg"
                      alt="heart"
                      loading="lazy"
                    />
                    47
                  </span>
                </div>
              </div>
            </article>
            <article class="article-box">
              <div class="article-textbox">
                <div>
                  <h3 class="h4">
                    Free Open-source portfolio template for developers ✨
                  </h3>
                  <p class="article-text">
                    A beautiful, minimal and accessible portfolio template for
                    Developers which is completely free and Open Source.
                  </p>
                </div>
                <div class="article-info">
                  <a href="https://dev.to/devsyedmohsin/free-open-source-portfolio-template-for-developers-4g1d" class="link" target="_blank" rel="noopener"
                    >Continue reading</a
                  >
                  <span class="reaction-count">
                    <img
                      src="./assets/images/heart-outline.svg"
                      alt="heart"
                      loading="lazy"
                    />
                    177
                  </span>
                </div>
              </div>
            </article>
            <article class="article-box">
              <div class="article-textbox">
                <div>
                  <h3 class="h4">HTML tips and tricks.</h3>
                  <div class="article-text">
                    In my very last article I shared some JavaScript tips and
                    tricks In this article I will be covering HTML tips and
                    tricks.
                  </div>
                </div>
                <div class="article-info">
                  <a href="https://dev.to/devsyedmohsin" class="link" target="_blank" rel="noopener"
                    >Continue reading</a
                  >
                  <span class="reaction-count">
                    <img
                      loading="lazy"
                      src="./assets/images/heart-outline.svg"
                      alt="heart"
                    />
                    350
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

     <section class="skills">
        <div class="container">
          <h2 class="h2" id="skills">My Toolkit</h2>
          <div class="skills-imgs">
                <img src="assets/images/skills/react.webp" alt="React" class="skills-img" loading="lazy" title="React"/>
                <img src="assets/images/skills/svelte.webp" alt="Svelte" class="skills-img" loading="lazy" title="Svelte"/>
                 <img src="assets/images/skills/typescript.webp" alt="Typescript" classe="skills-img" loading="lazy" title="Typescript"/>
                 <img src="assets/images/skills/a11y.webp" alt="Accessibility" class="skills-img" loading="lazy" title="Web Accessibility"/>
                 <img src="assets/images/skills/shell.webp" alt="Shell" class="skills-img" loading="lazy" title="Shell"/>
                 <img src="assets/images/skills/next-js.webp" alt="NextJS" class="skills-img" loading="lazy" title="NextJS"/>
                 <img src="assets/images/skills/graphql.webp" alt="Graph Ql" class="skills-img" loading="lazy" title="Graph QL"/>
                 <img src="assets/images/skills/git.webp" alt="Git" class="skills-img" loading="lazy" title="Git"/>
                 <img src="assets/images/skills/html.webp" alt="CSS" class="skills-img" loading="lazy" title="CSS"/>
                 <img src="assets/images/skills/js.webp" alt="JavaScript" class="skills-img" loading="lazy" title="JavaScript"/>
            {/* </figure> */}
          </div>
        </div>
      </section>

  

      <section>
        <h2 class="h2" id="Testimonials">Testimonials</h2>
        <div class="container">
          <ol class="testimonials">
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Working with Syed was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/rich-harris.png"
                  alt="Rich Harris"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Harris Kareem</h3>
                  <p class="testimonial-author-job">Developer @Outlets</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Syed is a fantastic UI/UX designer and developer with a keen sense for marketing, and lead generation. He's the only designer I know who also has a deep understanding for code and front-end development.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/frank-mcsherry.webp"
                  alt="Andrew Mead"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">
                   Andrew Mead
                  </h3>
                  <p class="testimonial-author-job">Chief Scientist @Logos
                  </p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
             
                Talented artist, experienced with various
                media and can make any project you are working on look good. He is
                easy to work with and is a self starter. I would work with Syed
                again.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/brian-hirsh.png"
                  alt="Brian Hirsh"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Brian Hirsh</h3>
                  <p class="testimonial-author-job">Head @Zero-in</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Syed is a true professional with amazing talent. He is a creative
                thinker, has his finger on the pulse of whats to come, and
                absolutely one of the quickest and best problem solvers I have
                ever met.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/adam.png"
                  alt="Adam Argalye"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Adam Argalye</h3>
                  <p class="testimonial-author-job">SWE @Google</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
               Syed is one of my favourite people to work with. He's my go-to colleague when trouble shooting any new technique or technology because she understands how to tackle unknown problems with gumption. 
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/val-head.png"
                  alt="Val Head"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Val Head</h3>
                  <p class="testimonial-author-job">CEO @Engines</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Syed is a talented artist. He is very experienced with various
                media and can make any project you are working on look good. He is
                easy to work with and is a self starter. I would work with Syed
                again.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="assets/images/testimonials/tim-satterwhite.webp"
                  alt="Gary Simon"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Gary Simon</h3>
                  <p class="testimonial-author-job">A11y Advocate @W3C</p>
                </figcaption>
              </figure>
            </li>
          </ol>
        </div>
      </section>

      <section class="contact">
        <div class="container">
          <h2 class="h2" id="contact">Send Message</h2>
          <div class="contact-content">
            <div class="contact-textbox">
            
              <strong href="#" class="hire-alert">
                <span class="indicator"></span>
                Available for hire
              </strong>
              <p class="contact-text">
                As a software engineer, I construct web interfaces and design
                systems with a special love for accessibility and the
                performance. I tend to code things from scratch and enjoy
                bringing ideas to life.
              </p>
              <p class="contact-text">
                I'm also an open-source developer, and in my spare time, I do
                digital art with my iPad Pro.
              </p>
             
              <img
                src="assets/images/signatures.png"
                alt="Syed Mohsin"
                class="signatures"
                loading="lazy"
              />
            </div>
            
          <ContactForm />


          </div>
        </div>
      </section>
    </main>


    <Footer />
    {/* <footer class="footer">
      <div class="container">
        <div class="footer-content">
     
          <nav>
            <ol class="footer-links">
              <li class="footer-link">
                <a title="GitHub" href="https://github.com/devsyedmohsin" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="assets/images/social-links/github.svg"
                    alt="GitHub"
                /></a>
              </li>
              <li class="footer-link">
                <a title="Codepen" href="https://github.com/devsyedmohsin" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="assets/images/social-links/codepen.svg"
                    alt="Codepen"
                /></a>
              </li>
              <li class="footer-link">
                <a title="Linkedin" href="https://www.linkedin.com/in/syed-mohisn-raza-393177262/" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="assets/images/social-links/linkedin.svg"
                    alt="Linkedin"
                /></a>
              </li>
              <li class="footer-link">
                <a title="Twitter" href="https://github.com/devsyedmohsin" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="assets/images/social-links/twitter.svg"
                    alt="Twitter"
                /></a>
              </li>
            </ol>
          </nav>
          <p class="footer-text">
            &copy; 2024 - Template designed & developed by <a target="_blank" rel="noopener" href="https://github.com/devsyedmohsin">Syed Mohsin.</a>
          </p>
          <label class="theme-switch" for="theme-switch">
            <span>Dark Theme</span>
            <input type="checkbox" id="theme-switch" role="switch"/>
          </label>
        </div>
      </div>
    </footer> */}
  </div>
    
  );
}

export default App;
