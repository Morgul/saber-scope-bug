
    export default [
      {
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '93737226'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/ccase/devel/armtech/saber-test/docs/pages/index.md?saberPage=93737226")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/ccase/devel/armtech/saber-test/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]