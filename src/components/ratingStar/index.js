// polyfill for ie
import StarRatings from './ratingStar';
  
  
  Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && 
      isFinite(value) && 
      Math.floor(value) === value;
  };
  
  export default StarRatings;