## [psmit.dev](https://www.psmit.dev)
#### A personal portfolio website for all things Pete Smith
#### [Repo Link](https://github.com/psmit703/personal-website)

Welcome to my portfolio! The following is a brief description of software/services used in the site, along with a general description of each page. All URLs listed can either be accessed with or without the "www" subdomain. URLs without the "www" subdomain will automatically redirect to

    https://www.psmit.dev

The relative directories (e.g., "/index.html" in "Home | /index.html" in the section headers of this file) link to their respective files in the [main branch](https://github.com/psmit703/personal-website/tree/main) of the [Github repo](https://github.com/psmit703/personal-website). For questions, comments, or concerns, feel free to either [create an issue in this repo](https://github.com/psmit703/personal-website/issues) or email me directly at [psmit703@outlook.com](mailto:psmit703@outlook.com).



#### Sitewide | [Main Repo Branch (Live Site Files)](https://github.com/psmit703/personal-website/tree/main)
This is a general overview of technologies (except HTML and CSS) found in or otherwise utilized by many or all of this site's pages.
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
    * Bootstrap is a free, open-source CSS framework that eases the frontend development process and allows for a high degree of responsiveness when viewing sites on different devices (e.g., computers, phones, etc.)
    * This site heavily utilizes Bootstrap for its stylization and responsiveness
    * One of Bootstrap's main criticisms, that creating unique webpages with it is difficult, was addressed through a [custom CSS file](https://github.com/psmit703/personal-website/blob/main/assets/css/styles.css) on my part along with significant use of custom [JavaScript files](https://github.com/psmit703/personal-website/tree/main/assets/js)
    * This site specifically uses Bootstrap 4.3.1
* [Plausible Analytics](https://plausible.io/)
    * Plausible Analytics is a privacy-friendly alternative to Google Analytics and is GDPR, CCPA, and PECR compliant
    * Plausible is used in this site to track various metrics including view counts and city-level location data
    * No personally-identifiable data is collected, stored, or otherwise used by Plausible
* [Clicky Website Analytics](https://clicky.com/)
    * Clicky Website Analytics is a privacy-friendly alternative to Google Analytics and is GDPR compliant
    * Clicky is used in this site to track the number of unique visitors and page views
    * No personally-identifiable data is collected, stored, or otherwise used by Clicky
* [GitHub Pages](https://pages.github.com/)
    * GitHub Pages is a service offered by GitHub that allows people to host sites for free in a secure and relatively simple way
    * This site is hosted by GitHub pages in the [main branch of this repository](https://github.com/psmit703/personal-website/tree/main)
    * GitHub Pages' configuration settings were also used as part of the DNS configuration and securty certificate process
* [Google Search Console](https://search.google.com/search-console/about) | [Bing Webmaster Tools](https://www.bing.com/webmasters/about)
    * Google Search Console and Bing Webmaster Tools are developer tools for their respective search engines
    * They allow for indexing sites in their search engines, among other related features
    * This site is configured for both services, although the site will not appear in either search engine per the configuration settings I have selected
    * This does not in any way affect the user and no related data is loaded while using the site 
* [JavaScript](https://github.com/psmit703/personal-website/tree/main/assets/js)
    * This site uses several JavaScript files to achieve desired functionality
    * This section will only cover JavaScript files that are present on all/most pages; files that are only used by one page will be described in their respective sections
    * [Dark Mode](https://github.com/psmit703/personal-website/blob/main/assets/js/dark-mode.js)
        * This site features a toggleable dark mode
        * Dark mode is, by default, synced with the user's device settings
        * This feature uses a cookie, which is set to automatically expire after 30 days, to remember the user's preference if a preference is manually chosen
        * There is also an option at the bottom of each page to delete this cookie, thereby removing the saved preference
            * This is handled by a [separate, related file](https://github.com/psmit703/personal-website/blob/main/assets/js/delete-cookies.js)
        * The cookie is used sitewide; as such, deleting the cookie removes the user's dark mode preference for the entire site
    * [Navbar Button](https://github.com/psmit703/personal-website/blob/main/assets/js/navbar-button.js)
        * This is only visible in mobile format
        * When the navbar menu button is clicked/pressed, it rotates
        * Additionally, this file handles minimizing the navbar menu if the user clicks/presses outside of the navbar menu while in mobile format
    * [Scroll Animations](https://github.com/psmit703/personal-website/blob/main/assets/js/navbar-scroll.js)
        * When scrolling down, the navbar and dark mode toggle button disappear
        * When scrolling back up (not necessarily to the top of the page), they reappear
        * On desktop format, if the mouse is moved to the top of the screen, the navbar will reappear
            * Similarly, if the mouse is moved to the left side of the screen, the dark mode toggle button will reappear
            * If the user is not scrolled to the top of the page, then each will once again disappear when the mouse is moved away from these positions
        * In mobile format, if the navbar menu is expanded, then neither the navbar nor the dark mode toggle button will disappear while scrolling down
            * This only lasts while the navbar menu is expanded
    * [Left-Aligned Navbar Menu Text](https://github.com/psmit703/personal-website/blob/main/assets/js/navbar-text-left-mobile.js)
        * This is only visible in mobile format
        * Ordinally, the navbar menu options are center-aligned in their respective HTML elements
            * This is to make the bold effect on the active page expand to both the left and the right, rather than just the right
        * When viewed in mobile format, JavaScript is used to left-align the navbar options
            * Otherwise, they will be centered relative to the screen

#### Home | [/index.html](https://github.com/psmit703/personal-website/blob/main/index.html)
This is my site's home page; it can be accessed at either

    https://www.psmit.dev

or

    https://www.psmit.dev/index.html

and contains my general background and some useful information regarding my programming skills. It also has links to my professional profiles (GitHub and LinkedIn), along with my email address.

This page makes use of a [custom JavaScript file](https://github.com/psmit703/personal-website/blob/main/assets/js/random-image.js) for displaying a random image. For aesthetic purposes, an image will only display at (in my opinion) appropriate aspect ratios, i.e., when the window's width divided by its height becomes too small for my liking, no images will be displayed. I believe this allows for a cleaner look on smaller devices such as phones and tablets, where the main focus of using a browser (in my opinion) is to get information. While that is also a large focus of using browsers on larger screens such as with a laptop or desktop, their larger screens allow for more to be displayed, which is often shown through "decorations" such as images. Lastly, as GitHub Pages does not support get requests, the image names and their respective alt texts had to be hardcoded into the JS file.



#### Résumé | [/resume.html](https://github.com/psmit703/personal-website/blob/main/resume.html)
This page displays both my technical and humanities résumés and can be accessed at

    https://psmit.dev/resume.html

Both résumés are displayed in plain text, with links above each to download PDF versions.



#### Coding | [/coding.html](https://github.com/psmit703/personal-website/blob/main/coding.html)
The coding page is where the various coding projects I have worked are available. The page can be accessed at

    https://psmit.dev/coding.html

Descriptions of each project, along with information such as time periods and languages used, are provided here. Please note that, per academic integrity guidelines, I am not permitted to share code for school projects publicly; as such, the links for school projects each provide my email address so that the code can be shared privately with employers, recruiters, etc. Additionally, some projects may otherwise not have any available code, which is marked for each occurence. Some projects are fully private and may not be listed at all. Fully public projects contain links to view the code in their respective GitHub repositories. While there are the previously mentioned limitations, this page serves as a general coding portfolio that allows a viewer to see what I believe are good representations of my abilities as a programmer.



#### Writing | [/writing.html](https://github.com/psmit703/personal-website/blob/main/writing.html)
The writing page is where all of my writing samples will be and can be accessed at

    https://psmit.dev/writing.html

There is no content yet.



#### Changelog | [/changelog.html](https://github.com/psmit703/personal-website/blob/main/changelog.html)
This page displays the 10 most recent changes to the site and can be accessed at

    https://psmit.dev/changelog.html

This uses a [custom JavaScript file](https://github.com/psmit703/personal-website/blob/main/assets/js/changelog.js) to interact with GitHub's REST API. The custom JavaScript file in turn uses [Octokit.js](https://github.com/octokit/octokit.js), which is maintained by GitHub. This allows the most recent commits to be retrieved, which are then displayed on the page. The page also contains a link to view all changes to the site.



#### Sitemap | [/sitemap.html](https://github.com/psmit703/personal-website/blob/main/sitemap.html)
This page contains a text-based sitemap of the site and can be accessed at 

    https://www.psmit.dev/sitemap.html

It contains a text-based, three column diagram split by "Main Site", "Footer Links", and "Utility Pages". "Main Site" is a guide of the navbar at the top of each page. "Footer Links" is a guide of the footer at the bottom of each page. "Utility Pages" is a guide to pages that otherwise do not have any direct links to them and are just used as utilities for user experience and continued site development.



#### Privacy Policy | [/privacy.html](https://github.com/psmit703/personal-website/blob/main/privacy.html)
This is my site's privacy policy. It can either be accessed at the bottom of each page or directly at

    https://psmit.dev/privacy.html

While the code I have written does not collect data or otherwise raise concerns for any potential privacy infringements, the site uses several third party tools. As such and in the interest of transparency, this page contains notices regarding privacy relating to these tools.



#### Error 404 | [/404.html](https://github.com/psmit703/personal-website/blob/main/404.html)
As the name suggests, this is my site's "Error 404" page. It is displayed whenever a user attempts to access a page on the site that does not exist. Alternatively, it can be accessed directly at

    https://www.psmit.dev/404.html

In addition to the previously discussed technologies, /404.html makes use of a (very short) [custom JavaScript file](https://github.com/psmit703/personal-website/blob/main/assets/js/404.js). The JS file is used for pulling the current URL and displaying it to the user.



#### Template | [/template.html](https://github.com/psmit703/personal-website/blob/main/template.html)
This page is a skeleton page that is designed to be used as a template for any future pages. It can be accessed at

    https://www.psmit.dev/template.html

It contains comments at the top indicating what may need to be changed (every page has these comments) and is designed to be an easy, reliable way to quickly create new pages. As with any other page, it will be updated as necessary to reflect the most recent additions to the site.