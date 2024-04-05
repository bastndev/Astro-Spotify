# App spotify

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
1. grid, para hacer grillas

2. Button Home Search

```
<div class="bg-zinc-900 rounded-lg p-2 flex-1">
    <ul>
      <SideMenuItem href="/">
        <LibraryIcon />
        Library
      </SideMenuItem>
    </ul>
  </div>
```