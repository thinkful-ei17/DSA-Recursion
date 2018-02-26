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


function orgChart(chart, parent) {
  
  let node = {};
  chart.filter(obj => {
    return obj.parent === parent;

  })
  .forEach(obj => {
    node[obj.id] = orgChart(chart, obj.id);
  });

  return node;
}


console.log('STRANGERS', JSON.stringify(orgChart(animalHierarchy, null), null, 2))
