const anagrams = {};

function anagram(word, whatsLeft) {
  let place = 0;

  for (let i = 0; i < word.length; i++) {
    console.log(word[i], word.substring(0, i) + word.substring(i + 1));
    doAnagram(word[i], word.substring(0, i) + word.substring(i + 1));
  }

}

function doAnagram(word, whatsLeft) {
  console.log(`Word: ${word} & whatsLeft: ${whatsLeft}` );

  if (whatsLeft.length === 0)
  {
    console.log('The word is ' + word);
    anagrams[word] = 0;
    return;
  }

  doAnagram(word + whatsLeft[0], whatsLeft.substring(1));
  doAnagram(whatsLeft[0] + word, whatsLeft.substring(1));
}

console.log(anagram('east'));
console.log(Object.keys(anagrams));
//FUCK LOL


// agony
/*
> (agony)
> START: a - (gony)

--> ag (ony)
---> ago (ny)
-----> agon (y)
-------> yagon [x]
-------> agony [x]
-----> nago (y)
---> oag (ny)
-----> noag (y)
-------> ynoag [x]
-------> noagy [x]
-----> oagn (y)
-------> yoagn [x]
-------> oagny [x]
-- ga (ony)
--- oga (ny)
--- gao (ny)

> START: g - (aony)

> START: o - (agny)

> START: n - (agoy)

> START: y - (agon)

-------------------

*/
