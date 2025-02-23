const isHidden = (elem) => 
    window.getComputedStyle(elem).display === 'none' || 
    window.getComputedStyle(elem).visibility === 'hidden';
