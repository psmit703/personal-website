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
* [GitHub Pages](https://pages.github.com/)
    * GitHub Pages is a service offered by GitHub that allows people to host sites for free in a secure and relatively simple way
    * This site is hosted by GitHub pages in the [main branch of this repository](https://github.com/psmit703/personal-website/tree/main)
    * GitHub Pages' configuration settings were also used as part of the DNS configuration and securty certificate process
* [Google Search Console](https://search.google.com/search-console/about) | [Bing Webmaster Tools](https://www.bing.com/webmasters/about)
    * Google Search Console and Bing Webmaster Tools are developer tools for their respective search engines
    * They allow for indexing sites in their search engines, among other related features
    * This site is configured for both services
    * This does not in any way affect the user and no related data is loaded while using the site 
* [Navbar Menu Button JavaScript File](https://github.com/psmit703/personal-website/blob/main/assets/js/navbar-button.js)
    * This is a script that I wrote that is present on every page of the site
    * Its purpose is to rotate/unrotate the navbar menu button when it is toggled
    * It detects when the navbar menu button is clicked, and, depending on its current state, either rotates it clockwise or counter-clockwise
    * This is only visible when the site is used in its mobile format, however the script is loaded regardless
* [JavaScript](https://github.com/psmit703/personal-website/tree/main/assets/js)
    * This site uses several JavaScript files to achieve desired functionality
    * This section will only cover JavaScript files that are present on all/most pages; files that are only used by one page will be described in their respective sections
    * Dark Mode
        * This site features a toggleable dark mode
        * Dark mode is, by default, synced with the user's device settings
        * This feature uses a cookie, which is set to automatically expire after 30 days, to remember the user's preference if a preference is manually chosen
        * There is also an option at the bottom of each page to delete this cookie, thereby removing the saved preference
        * The cookie is used sitewide; similarly, deleting the cookie removes the user's dark mode preference for the entire site
    * Navbar Button
        * This is only visible in mobile format
        * When the navbar menu button is clicked/pressed, it rotates
    * Scroll Animations
        * When scrolling down, the navbar and dark mode toggle button disappear
        * When scrolling back up (not necessarily to the top of the page), they reappear
        * On desktop format, if the mouse is moved to the top of the screen, the navbar will reappear
            * Similarly, if the mouse is moved to the left side of the screen, the dark mode toggle button will reappear
            * If the user is not scrolled to the top of the page, then each will once again disappear when the mouse is moved away from these positions
        * In mobile format, if the navbar menu is expanded, then neither the navbar nor the dark mode toggle button will disappear while scrolling down
            * This only lasts while the navbar menu is expanded

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

This uses [Adobe's PDF Embed API](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/) to render both my technical and humanities résumés, which are stored in .pdf format. While the embeded documents have their own options to download each PDF, I have also included separate links for downloading the PDFs on the off chance that Adobe's service is not working.



#### Coding | [/coding.html](https://github.com/psmit703/personal-website/blob/main/coding.html)
The coding page is where the various coding projects I have worked on will available. The page can be accessed at

    https://psmit.dev/coding.html

There is no content yet.



#### Writing | [/writing.html](https://github.com/psmit703/personal-website/blob/main/writing.html)
The writing page is where all of my writing samples will be and can be accessed at

    https://psmit.dev/writing.html

There is no content yet.



#### Privacy Policy | [/privacy.html](https://github.com/psmit703/personal-website/blob/main/privacy.html)
This is my site's privacy policy. It can either be accessed at the bottom of each page or directly at

    https://psmit.dev/privacy.html

While the code I have written does not collect data or otherwise raise concerns for any potential privacy infringements, the site uses several third party tools. As such and in the interest of transparency, this page contains notices regarding privacy relating to these tools.



#### Error 404 | [/404.html](https://github.com/psmit703/personal-website/blob/main/404.html)
As the name suggests, this is my site's "Error 404" page. It is displayed whenever a user attempts to access a page on the site that does not exist. Alternatively, it can be accessed directly at

    https://www.psmit.dev/404.html

In addition to the previously discussed technologies, /404.html makes use of a (very short) [custom JavaScript file](https://github.com/psmit703/personal-website/blob/main/assets/js/404.js). The JS file is used for pulling the current URL and displaying it to the user.
