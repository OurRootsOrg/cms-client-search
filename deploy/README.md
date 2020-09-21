# Deploying the search client to a custom Wordpress page template

1. Run `npm run build` to build this project.
2. Figure out which Wordpress theme you're using and navigate to the directory for that theme under wp-content/themes in your wordpress directory.
3. Add the code in ourroots_cms_functions.php to the end of the functions.php file in the directory for your theme. 
   If you are upgrading a previous installation, you may want to change the version numbers from 0.0.1 to something else for cache-busting.
4. Copy ourroots_cms.php to the directory for your theme.
5. Create a subdirectory ourroots_cms under the directory for your theme.
6. Copy main.css and main.js from this directory to the ourroots_cms subdirectory.
5. Copy the .js files from build/static/js to the ourroots_cms subdirectory, renaming main....chunk.js to main.chunk.js 
   and renaming the other ...chunk.js file to other.chunk.js.
6. In WordPress, create a new page (not a post, but a page) using ourroots_cms as the page template. The page text can be empty.
