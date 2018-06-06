# Project Style Guide

## File Structure

```
| Legend |
  * Variable Naming Convention
  └ file
  └── folder
  // Notes

project
│   gatsby-node // Controls creation of pages
│   gatsby-config // Manages plugins
│
└── public
│   │
│   └── static  
│   │   └── admin
│   │   │     └ config.yml // controls CMS schema
│   │   └── img
│   │         └ allImages.jpeg
│   └
│
└── src
│   └─── cms
│   │   │ cms.js // import and connect CMS preview components to CMS.
│   │   │
│   │   └── preview-templates // CMS preview components
│   └── components
│   │     └── primitives // non-purpose built components with a goal of
│   │     │                being basic building blocks. H1, HTMLContent, etc.
│   │     │
│   │     └── *ComponentSection* // Make one folder per big block. Ie. Nav,
│   │     │   │                     ScoreCard, etc.
│   │     │   └ *BigComponent.js* // Often a class component, made up of many
│   │     │   │                      functional components.
│   │     │   └ *SmallPiece.js* // Almost always a pure component. Ie. ListItem,
│   │     │                        NavItem, ScoreWidget. Can have more than one.
│   │     └── layout
│   │     │  │
│   │     │  └ *LayoutType.js* // A functional component, consisting of a single
│   │                            styled div, with a CSS grid definition.
│   └── layouts
│   │     └ index.js // Because we don't use a export.createlayouts, this layout
│   │                   is automatically wrapped around every rendered page.
│   └── pages // holds .md files, each containing data for one page or posts
│   │     │
│   │     └── *pageName* // holds one .md file for page
│   │     │
│   │     └── scores  
│   │     │    └ *resteraunt-name.md*
│   │     └ 404.js
│   │     └ index.js // Not a .md data, template for the index page.
│   │                    all other templates live in /templates
│   └── pages
└───
```
