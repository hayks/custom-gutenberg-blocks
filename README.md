# Layout Blocks

WordPress blocks for page layout and UI: a nested grid, plus cards, sliders, FAQs, tabs, icons, and related components.

The blocks appear in the editor under the **Layout Blocks** category. Frontend styling is expected to come from the active theme, so the plugin can sit on top of an existing design system instead of shipping a visual theme of its own.

## What it includes

**Layout grid**

- Section — full-width page wrapper
- Container — centered content width
- Row / Column — responsive grid (Bootstrap-compatible column classes)

**UI blocks**

- Card (content, media, flip)
- Accordion / FAQ, with optional structured data
- Slider (items, navigation, avatar)
- Tabs
- Button, icon, text-with-icon
- Background image, inline SVG, spacer, table
- Navigation (classic menus, with optional item icons)
- Read more / less

**Editor extras**

- Icon fields on menu items (Carbon library or custom SVG)
- REST endpoints for the block editor: menus, icons, translated permalinks, and SVG assets

## Requirements

- WordPress 6.8+
- PHP 8.1+

## Development

```bash
npm install
composer install
npm run build
```

`build/` is generated and not committed. Clone, install, then build before activating the plugin.

Local WordPress via `@wordpress/env`:

```bash
npx wp-env start
```

Other scripts: `npm start` (watch), `npm run lint:js`, `npm run lint:css`, `composer phpcs`, `composer phpstan`.

Blocks are registered from `build/` with `wp_register_block_types_from_metadata_collection()`. After changing block source, run `npm run build` again.

## REST API

Authenticated editor routes under `/wp-json/lattice/v1/` (`edit_posts` required):

| Route | Purpose |
| --- | --- |
| `/menus` | List classic nav menus |
| `/icons` | List Carbon or custom SVG icons |
| `/dynamic_url?page_id=` | Translated permalink for a page |
| `/dynamic_svg_asset` | Render an SVG with sanitized size/class/style |

## License

GPL-2.0-or-later. Author: [Hayk Sargsyan](https://github.com/hayks).
