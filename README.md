# Fernao Templates

## Setup

Install the dependencies. Make sure, you're using Node LTS.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

## Navigation

The [Navigation](./src/components/Navigation.astro) is build to function on mobile and desktop simultaneously. It is currently generated based on a [dummy CMS response](./src/data/navigationData.json).

It consists of the Main Navigation, sub navigation items and a language switcher, CTA.

### Main Navigation

It has four levels of navigation. Every level consists of:

- the menu itself
  - [SecondLevelMenu](./src/components/SecondLevelMenu.astro), [ThirdLevelMenu](./src/components/ThirdLevelMenu.astro), [FourthLevelMenu](./src/components/FourthLevelMenu.astro)
- a breadcrumb item (only level three and four)
  - [BreadCrumb](./src/components/BreadCrumb.astro)
- backlinks
  - [NavItemBankLink](./src/components/NavItemBankLink.astro)
  - [FourthLevelBackButton](./src/components/FourthLevelBackButton.astro)
- a wrapper around the nav items for additional styling and positioning
  - [SecondLevelMenuWrapper](./src/components/SecondLevelMenuWrapper.astro)
  - [SubmenuWrapper](./src/components/SubmenuWrapper.astro)
- the nav items
  - [FirstLevelNavItem](./src/components/FirstLevelNavItem.astro)
  - [SecondLevelNavItem](./src/components/SecondLevelNavItem.astro)
  - [SecondLevelNavItemLink](./src/components/SecondLevelNavItemLink.astro)
  - [ThirdLevelNavItem](./src/components/ThirdLevelNavItem.astro)
  - [NavItemLink](./src/components/NavItemLink.astro) // TODO: rename to ThirdLevelNavItemLink
- a link component for the overview page
  - [OverviewLink](./src/components/OverviewLink.astro)

The functionality is enabled by toggling CSS classes with JavaScript. See the `script` section in [Navigation](./src/components/Navigation.astro) for details.
Every nav item has an `aria-controls` attribute that points to the id of the corresponding, underlying list. This is used to toggle the visibility of the list.
On desktop, clicking a firstlevel nav item will open the second and the third level at once and also trigger a lot of side effects to add active styles.

### Other Navigation

- [LanguageSubmenu](./src/components/LanguageSubmenu.astro)
- [LanugageSubmenuWrapper](./src/components/LanguageSubmenuWrapper.astro)
- [LanguageItem](./src/components/LanguageItem.astro)

- Legal TODO

## Content Elements

TODO

## Page Templates

TODO

- StandardPage
- LandingPage

## General Stuff

TODO

### Colors

Defined in the [tailwind.config.js](./tailwind.config.cjs)

### Icons

- Fonts

### General components

- Buttons
  - [PrimaryButton](./src/components/PrimaryButton.astro)
  - [PrimaryButtonIcon](./src/components/PrimaryButtonIcon.astro)
  - [PrimaryButtonIconOnly](./src/components/PrimaryButtonIconOnly.astro)
  - [SecondaryButton](./src/components/SecondaryButton.astro)
  - [SecondaryButtonIcon](./src/components/SecondaryButtonIcon.astro)
  - [SecondaryButtonIconOnly](./src/components/SecondaryButtonIconOnly.astro)

### General styles

- every link has an animated underline, which is applied by using the `text-underline` and `.text-underline-colored` classes, defined under `utilities` in [global.css](./src/styles/global.css)
