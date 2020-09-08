add_action('wp_enqueue_scripts','ourroots_cms_load_scripts');
function ourroots_cms_load_scripts() {
    if ( is_page_template('ourroots_cms.php') ) {
        wp_enqueue_style('ourroots-cms-css-main', get_stylesheet_directory_uri() . '/ourroots_cms/main.css', array(), '0.0.1');
    	wp_enqueue_script('ourroots-cms-js-main', get_stylesheet_directory_uri() . '/ourroots_cms/main.js', array(), '0.0.1', true);
	    wp_enqueue_script('ourroots-cms-js-main-chunk', get_stylesheet_directory_uri() . '/ourroots_cms/main.chunk.js', array(), '0.0.1', true);
        wp_enqueue_script('ourroots-cms-js-other-chunk', get_stylesheet_directory_uri() . '/ourroots_cms/other.chunk.js', array(), '0.0.1', true);
    }
}
