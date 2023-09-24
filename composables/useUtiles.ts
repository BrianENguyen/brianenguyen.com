export function useUtils() {
  function sayHi() {
    console.clear();
    console.log('%cHi!', 'font-size: 100px; color: #79c2d0');
    console.log(
      '%cYou have found my easter egg!',
      'font-size: 25px; color: #79c2d0'
    );
  }
  return {
    sayHi,
  };
}
