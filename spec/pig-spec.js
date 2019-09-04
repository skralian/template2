import { add } from './../src/pig.js'
import { sentence } from './../src/pig.js'
import { cuteArray } from './../src/pig.js'
// import {
//
// } from './../src/pig.js'

describe ('add', function() {
  it ('expect pass/should correctly determine if the sum is 9', function (){
    var a = 4;
    var b = 5;
    expect(add(a,b)).toEqual(9);
  })
  it ('expect pass/should correctly determine if the sum is not equal to 8', function (){
    var a = 4;
    var b = 5;

    expect(add(a,b)).not.toEqual(8);
    })
  });
describe ('sentence', function() {
    it ('expect pass/should be true that the sentence this is a sentence includes is', function (){
      var c = "this is a sentence";

      expect(sentence(c)).toEqual(true);
      })
});

describe ('cuteArray', function() {
    it ('expect pass/should have 5 at the front of the new Array', function (){
      var d = [0,5,6,9];

      expect(cuteArray(d)).toEqual(5);
      })
});
