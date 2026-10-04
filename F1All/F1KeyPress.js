(() => {

  if (window.__keyPressListenerAttached) {
    console.error('F1KeyPress: singlton attempted to run more than once');
    return;
  } else {
    window.__keyPressListenerAttached = true;
  }
  
  window.addEventListener('keydown', (e) => {
    if ( e.ctrlKey || e.metaKey ) {
      let key = e.key.toLowerCase(); 
      if ( key === 'a' ) {
        console.log('Control + A pressed - Articles');
      } else if ( key === 'c' ) {
        console.log('Control + C pressed - aCcount');
      } else if ( key === 'f' ) {
        console.log('Control + F pressed - Finance');
      } else if ( key === 'd') {
        console.log('Control + D pressed - Domains');
      } else if ( key === 's') {
        console.log('Control + S pressed - Station');
      }
      e.preventDefault()
    }
  });

})();