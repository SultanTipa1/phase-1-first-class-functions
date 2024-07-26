function Monday() {
    console.log("go for a five-mile run");
    console.log("pump iron");
}

function Tuesday() {
    console.log("go for a five-mile run");
    console.log("swim 40 laps");
}

function Wdnesday() {
    console.log("go for a five-mile run");
    console.log("go for a five-mile run");
}

function Thursday() {
    console.log("go for a five-mile run");
    console.log("pump iron");
}

function Friday() {
    console.log("go for a five-mile run");
    console.log("swim 40 laps");
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function Monday() {
    runFiveMiles();
    liftWeights();
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(function(){
    console.log("stretch! Work that core!");
});

exerciseRoutine(() => console.log("Stretch! Work that core!"));

function morningRoutine(exercise){
    let breakfast;

    if (exercise === liftweights){
        breakfast = "proteinbar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast ="granola";
    }

    exerciseRoutine(exercise);

    return function (){
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

const afterExercise = morningRoutine(liftWeights);

afterExercise;

afterExercise();

const assert = require('assert');

// Function definitions
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log('This is a named function');
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('This is an anonymous function');
  };
}

// Mocha test suite
describe('Function Tests', function() {
  
  before(function() {
    // Setup code that runs before all tests
    console.log('Running setup code before all tests');
  });

  describe('receivesAFunction', function() {
    it('receives a function and calls it', function(done) {
      receivesAFunction(done);
    });
  });

  describe('index', function() {
    describe('returnsANamedFunction', function() {
      before(function() {
        // Setup code that runs before tests in this suite
        console.log('Setup for returnsANamedFunction');
      });

      it('should return a named function', function() {
        const func = returnsANamedFunction();
        assert.strictEqual(func.name, 'namedFunction');
      });
    });

    describe('returnsAnAnonymousFunction', function() {
      before(function() {
        // Setup code that runs before tests in this suite
        console.log('Setup for returnsAnAnonymousFunction');
      });

      it('should return an anonymous function', function() {
        const func = returnsAnAnonymousFunction();
        assert.strictEqual(func.name, '');
      });
    });
  });
});


