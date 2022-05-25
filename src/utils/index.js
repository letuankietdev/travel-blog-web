export const getOS = () => {
  if (navigator.userAgent.match(/Linux/i)) {
    return 'Windows';
  } else if (navigator.userAgent.match(/Windows/i)) {
    return 'Windows';
  } else if (navigator.userAgent.match(/Mac/i)) {
    return 'Mac';
  }
}