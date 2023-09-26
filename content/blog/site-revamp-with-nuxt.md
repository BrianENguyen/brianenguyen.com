# Revamping My Online Presence With Nuxt

I am so happy to share that this website has been rebuilt with Nuxt3!
This website has gone through three major versions, and this version is
the best one and my absolute favorite. This blog details the different
features that made me switch from React to Nuxt.

## Preface

Vue was my first frontend framework I ever used back in 2020, and I
loved it because of its simplified code structure. I was on the fence of
redeveloping my website in Vue, but when I saw all of Nuxt\'s amazing
features, I knew this was the right decision.

## Imports

### Auto Imports

One aspect that Nuxt greatly simplifies is importing components through
its auto-import feature. With this, I don\'t specify the import route
for my components.

Take a look at my React implementation of my Portfolio page:

``` javascript
import PageContainer from '../../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../../components/animations/AnimatedPage';
import { PortfolioJumboData } from '../../../helper/JumbotronData';
import ProjectsList from '../../../components/projects/main/ProjectsList';
import OtherProjectsList from '../../../components/projects/other/OtherProjectsList';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
```

As you can obviously see, this is an absolute pain to deal with.

Nuxt eliminates the hassle of defining components\' import statements.
Let\'s look how I implemented my Portfolio page. First, I have the
following components in my file structure:

``` shell
> | components /
> --| portfolio /
> ----| ProjectList.vue
> --| ui /
> ----| SectionHeader.vue
> ----| Jumbotron.vue
```

Instead of using import statements, I only need to specify the directory
name that the component comes from in the component name. Components
`Jumbotron`{.verbatim} and `SectionHeader`{.verbatim} come from the
`ui/`{.verbatim} directory, so I would need to prepend \"Ui\" at each of
the components\' names; respectively, `ProjectList`{.verbatim} comes
from the `portfolio/`{.verbatim} directory, so I would need to prepend
`Portfolio`{.verbatim}

``` html
<UiJumbotron
  jumbotronTitle="Portfolio"
/>
<UiSectionHeader
  title="My work"
  description="A collection of various websites that I have designed and developed"
/>
<PortfolioProjectList />
```

### Import starting from home directory

If I do need to explicitly define my import statements, then the process
is trivialized with Nuxt compared to other frontend frameworks. As you
saw in my React code above, if I needed to import something that is
above the current file\'s directory, then I would need to repeatedly
outside of directories using the double dots.

With Nuxt, I can import starting from the home directory.

``` javascript
// Nuxt
import Jumbotron from '~/components/ui/Jumbotron'

// React
import Jumbotron from '../../../components/ui/Jumbotron';
```

## File-Based Routing

Another aspect that Nuxt streamlines is file-based routing. Routes are
automatically generated based on routes created in the
`pages/`{.verbatim} directory, which eliminates the need to configure
routes manually

``` shell
> | pages
> --| index.vue
> --| portfolio.vue
> --| about.vue
> --| resume.vue

... etc
```

This then generates the following router file:

``` json
{
  "routes": [
    {
      "path": "/",
      "component": "pages/index.vue"
    },
    {
      "path": "/portfolio",
      "component": "pages/portfolio.vue"
    },
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/resume",
      "component": "pages/resume.vue"
    },
  ]
}
```

## VueUse\'s useDark()

VueUse\'s `useDark()`{.verbatim} composable allows for easy
implementation of light and dark mode

``` javascript
// dark.ts
import { useDark, useToggle, usePreferredDark } from '@vueuse/core';
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();
```

I then used these composables in my `Navbar`{.verbatim} component to
toggle light and dark mode

``` html
<div
  class="i-solar-sun-outline dark:i-solar-moon-line-duotone ..."
  @click="toggleDark()"
/>
```

To also customize the appearance of light and dark mode, useDark uses
the `.dark`{.verbatim} class on the `<html />`{.verbatim} tag, so you
can you CSS to customize the appearances of each theme

``` css
html {
  color: #202020;
}

html a {
  color: #0495b1;
  transition: 0.3s color;
}
html a:hover {
  color: #015768;
}
html.dark {
  color-scheme: dark;
  background-color: #1d1d1d;
  color: #cdd9e5;
}

html.dark a {
  color: #79c2d0;
  transition: 0.3s color;
}
html.dark a:hover {
  color: #efefef;
}
```

## Nuxt-Content

`nuxt-content`{.verbatim} is a file-based content-management system
(CMS) that displays content in Nuxt applications. This module is my
absolute preferred way of writing blogs, and now, project pages. It
outshines my previous approach to configuring a custom CMS module

Just like how routing works in regular Nuxt, `nuxt-content`{.verbatim}
generates routes based on Markdown files in the `content/`{.verbatim}
directory

``` shell
> | content
> --| blog/
> ----| transition-to-nuxt.md
> ----| maternity-photos.md
> --| portfolio/
> ----| my-site-v3.md
> ----| all-elite-network.md

... etc
```

``` json
{
  "routes": [
    {
      "path": "/blog/transition-to-nuxt",
      "component": "content/blog/transition-to-nuxt.md"
    },
    {
      "path": "/blog/maternity-photos",
      "component": "content/blog/maternity-photos.md"
    },
    {
      "path": "/portfolio/my-site-v3",
      "component": "content/portfolio/my-site-v3.md"
    },
    {
      "path": "/blog/all-elite-network",
      "component": "content/portfolio/all-elite-network.md"
    },
  ]
}

```

### Shiki

Shiki is a beautiful syntax highlighter that comes with
`nuxt-content`{.verbatim}. It\'s an amazing module to use whenever I
have code snippets in my blogs. Below is an example of it in action. Try
changing light / dark mode to see the syntax highlight theme change as
well!

``` csharp
// a code snippet from my senior project
 public string AuthenticateUser(string email, string password)
 {
     if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
     {
         throw new ArgumentException("Email or password cannot be null / empty");
     }

     var dataAccess = new DataAccess();
     bool found = dataAccess.GetEmailAndPassword(email, password);

     if (found)
     {
         string hashedPassword = GetHashedPassword(password);
         string claim = dataAccess.DSGetClaim(email);
         string token = GenerateToken(email, hashedPassword, claim);
         return token;
     }
     else
     {
         throw new ArgumentException("No results returned");
     }
 }
```

It\'s really easy to setup as well. In the config below, I would only
need to import the `nuxt-content`{.verbatim} module, and specify the
themes for my code snippets.

``` javascript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'one-dark-pro',
      },
    },
  },
});
```

## Built-in Page Transitions

Nuxt also comes with built-in page transitions that are easy to
implement. To do so, you would have to define transition in the Nuxt
config file

``` javascript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
});
```

Nuxt provides CSS classes to help you define your page transition
animations:

-   \[name\]-enter-active
-   \[name\]-leave-active
-   \[name\]-enter-from
-   \[name\]-leave-to

The CSS classes below are taking from Nuxt\'s documentation, which is
what I use on this site and it works perfectly for my design.

``` css
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
```

## Conclusion

Nuxt has made web development more efficient and enjoyable. As I
continue to explore and utilize Nuxt\'s capabilities, I eagerly
anticipate the enhancements I will bring to this website in the future.
Thank you for joining me on this journey!
