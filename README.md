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

It consists of the Main Navigation, service navigation, legal navigation, a language switcher and a CTA.

### Main Navigation

It has four levels of navigation. Every level consists of:

- the menu itself
  - [SecondLevelMenu](./src/components/SecondLevelMenu.astro), [ThirdLevelMenu](./src/components/ThirdLevelMenu.astro), [FourthLevelMenu](./src/components/FourthLevelMenu.astro)
- a breadcrumb item (only level three and four)
  - [NavBreadCrumb](./src/components/NavBreadCrumb.astro)
- backlinks
  - [NavItemBankLink](./src/components/NavItemBankLink.astro)
  - [FourthLevelBackButton](./src/components/FourthLevelBackButton.astro)
- a wrapper around the nav items for additional styling and positioning
  - [SecondLevelMenuWrapper](./src/components/SecondLevelMenuWrapper.astro)
  - [SubmenuWrapper](./src/components/SubmenuWrapper.astro)
- the nav items
  - [FirstLevelNavItem](./src/components/FirstLevelNavItem.astro)
  - [FirstLevelNavItemLink](./src/components/FirstLevelNavItemLink.astro)
  - [SecondLevelNavItem](./src/components/SecondLevelNavItem.astro)
  - [SecondLevelNavItemLink](./src/components/SecondLevelNavItemLink.astro)
  - [ThirdLevelNavItem](./src/components/ThirdLevelNavItem.astro)
  - [NavItemLink](./src/components/NavItemLink.astro) // TODO: rename to ThirdLevelNavItemLink
- a link component for the overview page
  - [OverviewLink](./src/components/OverviewLink.astro)

The functionality is enabled by toggling CSS classes with JavaScript. See the `script` section in [Navigation](./src/components/Navigation.astro) for details.
Every nav item has an `aria-controls` attribute that points to the id of the corresponding, underlying list. This is used to toggle the visibility of the list.
On desktop, clicking a firstlevel nav item will open the second and the third level at once and also trigger a lot of side effects to add active styles.

### Service Navigation

- [LanguageSubmenu](./src/components/LanguageSubmenu.astro)
- [LanugageSubmenuWrapper](./src/components/LanguageSubmenuWrapper.astro)
- [LanguageItem](./src/components/LanguageItem.astro)
- [LanguageNavItem](./src/components/LanguageNavItem.astro)

### Legal Navigation

- legal navigation is part of the [Footer](./src/components/Footer.astro), currently the data comes from [footerData.json](./src/data/footerData.json) see `legalItems`

### Meta Navigation

- also part of the [Footer](./src/components/Footer.astro), currently the data comes from [footerData.json](./src/data/footerData.json), see `metaItems`

## Content Elements

- [Header](./src/components/Header.astro)
- [Text](./src/components/Text.astro)
- [Text-Media](./src/components/TextMedia.astro)
- Media TODO
- [Feature List / Icon List](./src/components/FeatureList.astro)
- [Banner/Header](./src/components/Banner.astro)
- [Step by Step](./src/components/StepByStep.astro)
- [FORM](./src/components/Form.astro)

## Page Templates

- [StandardPage](./src/components/index.astro)
  - has a three grid layout, where the content elements are inside the two columns on the left, and the TOC is on desktop on the right
- [LandingPage](./src/components/landingPage.astro)
  - has no TOC and no right column

## General

### Colors

- Defined in the [tailwind.config.js](./tailwind.config.cjs)

### Icons

- [ArrowRightIcon](./src/components/ArrowRightIcon.astro)
- [ArrowLeftIcon](./src/components/ArrowLeftIcon.html)
- [ArrowTopIcon](./src/components/ArrowTopIcon.astro)
- [ArrowBottomIcon](./src/components/ArrowBottomIcon.astro)
- [AppointmentIcon](./src/components/AppointmentIcon.astro)
- [CheckmarkIcon](./src/components/CheckmarkIcon.astro)
- [ClosedMenuIcon](./src/components/ClosedMenuIcon.astro)
- [LinkIcon](./src/components/LinkIcon.astro)
- [NewsIcon](./src/components/NewsIcon.astro)
- [OpcenMenuIcon](./src/components/OpenMenuIcon.astro)
- [WorldIcon](./src/components/WorldIcon.astro)

### Fonts

The main font is Ubuntu. It is located in /public/fonts and is loaded in [global.css](./src/styles/global.css).

### General components

- [Header](./src/components/Header.astro) for standard pages
- [HeaderReaduced](./src/components/HeaderReduced.astro) for landing pages
- [Footer](./src/components/Footer.astro) for standard pages
- [FooterReduced](./src/components/FooterReduced.astro) for landing pages
- [Breadcrumb](./src/components/Breadcrumb.astro)
- [TOC](./src/components/TOC.astro)

- Buttons
  - [PrimaryButton](./src/components/PrimaryButton.astro)
  - [PrimaryButtonIcon](./src/components/PrimaryButtonIcon.astro)
  - [PrimaryButtonIconOnly](./src/components/PrimaryButtonIconOnly.astro)
  - [SecondaryButton](./src/components/SecondaryButton.astro)
  - [SecondaryButtonIcon](./src/components/SecondaryButtonIcon.astro)
  - [SecondaryButtonIconOnly](./src/components/SecondaryButtonIconOnly.astro)

### General styles

- every link has an animated underline, which is applied by using the `text-underline` and `.text-underline-colored` classes, defined under `utilities` in [global.css](./src/styles/global.css)
