# Deploying the search client to a custom Wordpress page template

1. Run `npm run build` to build this project.
2. Figure out which Wordpress theme you're using and navigate to the directory for that theme under wp\_content.
3. Add the code in ourroots\_cms\_functions.php to the end of the functions.php file in that directory. If you are upgrading a previous installation, you may want to change the version numbers from 0.0.1 to something else for cache-busting.
4. Copy ourroots\_cms.php, main.css, and main.js from this directory to that directory.
5. Copy the .js files from build/static/js to that directory, renaming main....chunk.js to main.chunk.js and renaming the other ...chunk.js file to other.chunk.js.
6. In WordPress, create a new page (not a post, but a page) using ourroots\_cms as the page template. The page text can be empty.
