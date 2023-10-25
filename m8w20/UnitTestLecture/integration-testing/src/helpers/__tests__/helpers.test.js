import { announceResult, robotSelection } from "../helpers";

// We need to create four tests
describe('Test announceResult function', ()=> {
    let fakeState; 
    beforeEach(()=> {
      fakeState = {
        // Tree
          compSelection: null,
          // Axe
          playerSelection: null,
          status: 'Waiting',
          cheating: false
      }
    })
    // One for winning
    test('returns Won if the player is "Axe" and the comp is "Tree"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Axe';
      fakeState.compSelection = 'Tree';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    })
    // One for losing
    test('returns Lost if the player is "Tree" and the comp is "Axe"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Tree';
      fakeState.compSelection = 'Axe';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    })
    // One for Waiting
    // One for a tied game

})

describe('Test robotSelection function', ()=> {
  // Happy path
  // Robot makes a choice
  test('Robot is able to make a selection', ()=> {
    // An array of choices
    // ['Axe','Tree','Moai']
    const arrayOfChoices = ['Axe','Tree','Moai'];
    // When this array is passed into the function
    // It should return any random element
    const result = robotSelection();
    // Result should be one of the three elements
    expect(arrayOfChoices).toContain(result);
  })
  test('given the player choice is Axe and cheating is set to True, the Robot will always make the winning choice of Moai', ()=> {
    // First bring in the player choice
    const playerSelection = "Axe";
    const cheating = true;
    // We want our Robot to select the winning choice, which will be Moai
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Moai");
  })
  test('given the player choice is Tree and cheating is set to True, the Robot will always make the winning choice of Axe', ()=> {
    // First bring in the player choice
    const playerSelection = "Tree";
    const cheating = true;
    // We want our Robot to select the winning choice, which will be Moai
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Axe");
  })
  test('given the player choice is Moai and cheating is set to True, the Robot will always make the winning choice Tree', ()=> {
    // First bring in the player choice
    const playerSelection = "Moai";
    const cheating = true;
    // We want our Robot to select the winning choice, which will be Moai
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Tree");
  })
})