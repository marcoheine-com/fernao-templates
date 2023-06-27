# Fernao Templates

## Navigation

The [Navigation](./src/components/Navigation.astro) is build to function on mobile and desktop simultaneously.

It has four levels of navigation. Every level consists of:

- the menu itself
  - [SecondLevelMenu](./src/components/SecondLevelMenu.astro), [ThirdLevelMenu](./src/components/ThirdLevelMenu.astro), [FourthLevelMenu](./src/components/FourthLevelMenu.astro)
- backlinks (on mobile)
- a wrapper around the nav items
- the nav items
  - [FirstLevelNavItem](./src/components/FirstLevelNavItem.astro), [SecondLevelNavItem](./src/components/SecondLevelNavItem.astro), [ThirdLevelNavItem](./src/components/ThirdLevelNavItem.astro), [FourthLevelNavItem](./src/components/FourthLevelNavItem.astro)
- a breadcrumb item (only three and four)

The [first](./src/components/FirstLevelNavItem.astro) and the [second](./src/components/SecondLevelNavItem.astro) Level are wrapped lists, while the third and fourth level are siblings of the second.

The functionality is enabled by toggling CSS classes with JavaScript. See the `script` section in [Navigation](./src/components/Navigation.astro) for details.

Every nav item has an `aria-controls` attribute that points to the id of the corresponding list. The JavaScript then toggles the class `hidden` on the list and the nav item.

On desktop, clicking a firstlevel nav item will open the second and the third level at once and also trigger a lot of side effects to add active styles.

TODO:
