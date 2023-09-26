# Revamping My Online Presence With Nuxt

I am so happy to share that this website has been rebuilt with Nuxt3!
This website has gone through three major versions, and this version is
the best one and my absolute favorite. This blog details the different
features that made me switch from React to Nuxt.

## Auto Imports

One aspect that Nuxt greatly streamlines is importing components through
it\'s auto-import feature. With this, I don\'t specify the import route
for my components.

Take a look at my React implementation of my Portfolio page

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

Nuxt eliminates the hassle of explicitly defining the import of
components. Let\'s look how I implemented my Portfolio page. First, I
have the following components in my file structure:

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
`ui`{.verbatim} directory, so I would need to prepend \"Ui\" at each of
the components\' names; respectively, `ProjectList`{.verbatim} comes
from the `portfolio`{.verbatim} directory, so I would need to prepend
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

## File-Based Routing

## UnoCSS

## VueUse\'s useDark

## Nuxt-Content

`nuxt-content`{.verbatim} is a file-based content-management system
(CMS) that displays content in Nuxt applications. This module is my
absolute preferred way of writing blogs, and now, project pages. It
outshines my previous approach to configuring a custom CMS module

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
