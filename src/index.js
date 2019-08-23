document.addEventListener('DOMContentLoaded', function () {
  import(
    /* webpackChunkName: "bootstrap" */
    './bootstrap'
  )
    .then(() => {
      console.log('Page Loaded.');
    });
});
