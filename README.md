<h1>Custom Gutenberg Blocks Plugin</h1>

<h2>Description</h2>
<p>The <b>Custom Gutenberg Blocks</b> plugin enhances the WordPress Gutenberg editor by providing a set of custom blocks designed for layout and design purposes. These blocks are organized under a new category called "Custom Blocks" in the block inserter, making them easy to locate and use.</p>
<p>In addition to custom blocks, the plugin extends the WordPress menu system by adding icon fields to menu items, enabling more visually appealing and customized navigation menus. It also registers REST API endpoints to retrieve dynamic page URLs and SVG assets, which can be utilized by the blocks or other parts of your website.</p>

<h2>Features</h2>
<ul>
    <li><b>Custom Gutenberg Blocks:</b>
        <ul>
            <li><b>Grid System Blocks:</b>
                <ul>
                    <li><code>grid-section</code></li>
                    <li><code>grid-container</code></li>
                    <li><code>grid-row</code></li>
                    <li><code>grid-column</code></li>
                </ul>
            </li>
            <li><b>Helper Blocks:</b>
                <ul>
                    <li><code>helper-spacer</code></li>
                    <li><code>helper-button</code></li>
                    <li><code>helper-icon</code></li>
                    <li><code>helper-background-image</code></li>
                    <li><code>helper-inline-svg</code></li>
                    <li><code>helper-icon-text</code></li>
                    <li><code>helper-icon-text-expandable</code></li>
                    <li><code>helper-card</code></li>
                    <li><code>helper-card-main</code></li>
                    <li><code>helper-card-flip</code></li>
                    <li><code>helper-card-media</code></li>
                    <li><code>helper-navigation</code></li>
                    <li><code>helper-table</code></li>
                    <li><code>helper-faq</code></li>
                    <li><code>helper-faq-item</code></li>
                    <li><code>helper-slider</code></li>
                    <li><code>helper-slider-item</code></li>
                    <li><code>helper-slider-navigation</code></li>
                    <li><code>helper-slider-avatar</code></li>
                    <li><code>helper-tabs</code></li>
                    <li><code>helper-tabs-item</code></li>
                    <li><code>helper-readmore</code></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><b>Menu Icon Fields:</b>
        <ul>
            <li>Adds fields to menu items for:</li>
            <li>Icon library selection (e.g., "Carbon" or "Custom")</li>
            <li>Icon name</li>
            <li>Width and height</li>
            <li>Custom classes and styles</li>
        </ul>
    </li>
    <li><b>REST API Endpoints:</b>
        <ul>
            <li><code>/custom/v2/dynamic_url</code>: Retrieves a dynamic page URL based on a provided <code>page_id</code>.</li>
            <li><code>/custom/v2/dynamic_svg_asset</code>: Retrieves an SVG asset with customizable parameters (<code>name</code>, <code>width</code>, <code>height</code>, <code>class</code>, <code>style</code>, <code>url</code>).</li>
        </ul>
    </li>
</ul>

<h2>Requirements</h2>
<ul>
    <li><b>WordPress</b>: 5.8 or higher</li>
    <li><b>PHP</b>: 7.0 or higher</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Upload the <code>custom-gutenberg-blocks</code> folder to the <code>/wp-content/plugins/</code> directory of your WordPress installation.</li>
    <li>Navigate to the <b>Plugins</b> menu in the WordPress admin dashboard.</li>
    <li>Locate <b>Custom Gutenberg Blocks</b> and click <b>Activate</b>.</li>
</ol>

<h2>Usage</h2>

<h3>Custom Blocks</h3>
<ol>
    <li>Open the Gutenberg editor for a post or page.</li>
    <li>In the block inserter, find the <b>"Custom Blocks"</b> category.</li>
    <li>Select and insert the desired block into your content.</li>
    <li>Customize the block using its settings in the editor.</li>
</ol>

<h3>Menu Icons</h3>
<ol>
    <li>Go to <b>Appearance > Menus</b> in the WordPress admin dashboard.</li>
    <li>Edit an existing menu or create a new one.</li>
    <li>For each menu item, expand the item to reveal the <b>"Icon"</b> fields (ensure "Icon" is enabled in <b>Screen Options</b>).</li>
    <li>Configure the following:
        <ul>
            <li><b>Icon Library</b>: Choose "None", "Carbon", or "Custom".</li>
            <li><b>Icon Name</b>: Specify the icon identifier (e.g., from the chosen library).</li>
            <li><b>Width</b> and <b>Height</b>: Set dimensions (e.g., "24px").</li>
            <li><b>Icon Class</b>: Add custom CSS classes.</li>
            <li><b>Icon Style</b>: Add inline CSS styles.</li>
        </ul>
    </li>
    <li>Save the menu to apply the changes.</li>
</ol>

<h3>REST API</h3>
<p>The plugin provides two REST API endpoints for dynamic content retrieval:</p>
<ul>
    <li><b>Dynamic URL:</b>
        <ul>
            <li><b>Endpoint</b>: <code>/wp-json/custom/v2/dynamic_url</code></li>
            <li><b>Method</b>: GET</li>
            <li><b>Parameter</b>: <code>page_id</code> (required)</li>
            <li><b>Example</b>: <code>/wp-json/custom/v2/dynamic_url?page_id=35</code></li>
            <li><b>Returns</b>: A dynamic page URL based on the provided <code>page_id</code>.</li>
        </ul>
    </li>
    <li><b>Dynamic SVG Asset:</b>
        <ul>
            <li><b>Endpoint</b>: <code>/wp-json/custom/v2/dynamic_svg_asset</code></li>
            <li><b>Method</b>: GET</li>
            <li><b>Parameters</b>:
                <ul>
                    <li><code>name</code>: Icon or asset name (required)</li>
                    <li><code>width</code>: Width of the SVG (optional)</li>
                    <li><code>height</code>: Height of the SVG (optional)</li>
                    <li><code>class</code>: CSS classes (optional)</li>
                    <li><code>style</code>: Inline styles (optional)</li>
                    <li><code>url</code>: Custom URL (optional)</li>
                </ul>
            </li>
            <li><b>Example</b>: <code>/wp-json/custom/v2/dynamic_svg_asset?name=icon-name&width=24&height=24</code></li>
            <li><b>Returns</b>: An SVG asset rendered with the specified parameters.</li>
        </ul>
    </li>
</ul>
<p>These endpoints can be accessed via HTTP requests to fetch content or assets for use in your site.</p>

<h2>Developer Notes</h2>
<ul>
    <li><b>Separate Block Assets</b>: The plugin uses the <code>should_load_separate_core_block_assets</code> filter to load core block assets separately, potentially improving performance by reducing unnecessary asset loading.</li>
    <li><b>Theme Information</b>: An inline script is enqueued in the admin area, providing the current theme’s <code>stylesheet</code> and <code>template</code> data to the blocks for styling or compatibility purposes.</li>
</ul>

<h2>License</h2>
<p>This plugin is licensed under the <a href="https://www.gnu.org/licenses/gpl-2.0.html">GPL-2.0-or-later</a> license. See the license URI for more details.</p>

<h2>Credits</h2>
<ul>
    <li><b>Author</b>: Hayk Sargsyan</li>
</ul>
