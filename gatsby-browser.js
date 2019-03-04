import 'event-source-polyfill'

// disableCorePrefetching

// Plugins can take over prefetching logic. If they do, they should call this to disable the now duplicate core prefetching logic.



// onClientEntry

// Called when the Gatsby browser runtime first starts.



// onInitialClientRender

// Called when the initial (but not subsequent) render of Gatsby App is done on the client.



// onPostPrefetchPathname

// Called when prefetching for a pathname is successful. Allows for plugins with custom prefetching logic.



// onPreRouteUpdate

// Called when changing location is started.



// onPrefetchPathname

// Called when prefetching for a pathname is triggered. Allows for plugins with custom prefetching logic.



// onRouteUpdate

// Called when the user changes routes



// onRouteUpdateDelayed

// Called when changing location is longer than 1 second.




// onServiceWorkerActive

// Inform plugins when a service worker has become active.



// onServiceWorkerInstalled

// Inform plugins when a service worker has been installed



//ServiceWorkerRedundant

// Inform plugins when a service worker is redundant.



// onServiceWorkerUpdateFound

// Inform plugins of when a service worker has an update available.



// onServiceWorkerUpdateReady

// Inform plugins when a service worker has been updated in the background and the page is ready to reload to apply changes.



// registerServiceWorker

// Allow a plugin to register a Service Worker. Should be a function that returns true.




// replaceComponentRenderer

// Allow a plugin to replace the page component renderer. This api runner can be used to implement page transitions. See https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions for an example of this.



// replaceHydrateFunction

// Allow a plugin to replace the ReactDOM.render function call by a custom renderer. This method takes no param and should return a function with same signature as ReactDOM.render() Note it’s very important to call the callback after rendering, otherwise Gatsby will not be able to call onInitialClientRender



// shouldUpdateScroll

// Allow a plugin to decide if the scroll position should update or not on a route change.




//wrapPageElement

// Allow a plugin to wrap the page element.

// This is useful for setting wrapper component around pages that won’t get unmounted on page change. For setting Provider components use wrapRootElement.



//wrapRootElement

// Allow a plugin to wrap the root element.

// This is useful to setup any Providers component that will wrap your application. For setting persistent UI elements around pages use wrapPageElement.