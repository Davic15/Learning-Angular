// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app')!;
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// TODO 1: give this constant an appropriate type
const FLOP_BAR: number = 50000000;

// TODO 2: give the gross parameter an appropriate type 
function isFlop(gross: number) {
  return gross < FLOP_BAR;
}

let movieReleaseYears = [1964, 1945, 2019];

// calculate the total timespan from an array of years
// TODO 3: give this function's parameter the correct type
function totalTimespan(years: number[]) {
  return years[years.length-1] - years[0]
}

// TODO 4: give this class the following construction parameters with types: title, year, and numStars and capture those parameters into properties with the same names

class Movie {
  public title: string // Remove this
  year: number;
  numStars: number;
  constructor (title: string, year: number, numStars: number) {
    this.title = title;
    this.year = year;
    this.numStars = numStars;
  }
}
class MovieOne {
    constructor (public title: string, public year: number, public numStars: number) {
    }
  }

// TODO 5: Find and fix all problems with the following  code by applying types - review the solution video for my implementation

let userId: number = 5
function checkoutMovie(movie: Movie, inventory: Inventory, checkoutLog: CheckoutLog, userId: number) {
  if(inventory.isInStock(movie.title)) {
    inventory.reduceQuantity(movie.title, 1)
    checkoutLog.add(movie.title, userId)
    return true;
  } else {
    return false;
  }
}

class Inventory {
  isInStock(title: string) {
    // implementation
    return true;
  }

  reduceQuantity(title: string, count: number) {
    // implementation
  }
}

class CheckoutLog {
  add(movieTitle: string, userId: number) {
    // implementation
  }
}
