const animalHierarchy = [
    {id: 'Zuckerberg', parent: null},
    {id: 'Schroepfer', parent: 'Zuckerberg'},
    {id: 'Schrage', parent:'Zuckerberg' },
    {id: 'Sandberg', parent:'Zuckerberg' },
    {id: 'Bosworth', parent: 'Schroepfer'},
    {id: 'Steve', parent: 'Bosworth'},
    {id: 'Kyle', parent: 'Bosworth'},
    {id: 'Andra', parent: 'Bosworth'},

    {id: 'Zhao', parent:'Schroepfer' },
    {id: 'Richie', parent:'Zhao' },
    {id: 'Sofia', parent:'Zhao' },
    {id: 'Jen', parent:'Zhao' },

    {id: 'VanDyck', parent:'Schrage' },
    {id: 'Sabrina', parent:'VanDyck' },
    {id: 'Michelle', parent:'VanDyck' },
    {id: 'Josh', parent:'VanDyck' },

    {id: 'Swain', parent:'Schrage' },
    {id: 'Blanch', parent:'Swain' },
    {id: 'Tom', parent:'Swain' },
    {id: 'Joe', parent:'Swain' },

]

// function orgChart(family) {
//
//   let obj = {};
//   let firstLevel = '';
//   let secLevel = '';
//
//   for(aPerson in family) {
//     console.log('one branch!');
//
//     family.filter(person => {
//       console.log('one level');
//       console.log(person);
//       console.log();
//       person.parent === family[aPerson].id ? obj[person.parent] = {} : '';
//       return person.parent === family[aPerson].id;
//     })//zuckerberg - firstLevel
//     .filter(person => {
//       console.log('two levels!');
//       console.log(person);
//       return person.parent === family[aPerson].id;
//     }).forEach(obj => {
//       console.log(obj);
//       console.log('done');
//
//     });
//
//   }
//
//   return obj;
// }


console.log(orgChart(animalHierarchy));
