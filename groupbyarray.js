

function groupByCity(people) {
    return people.reduce((grouped, person) => {
      const { city, ...rest } = person;
      grouped[city] = (grouped[city] || []).concat(rest);
      return grouped;
    }, {});
  }
  
  const people = [
    { name: 'Sheldon', age: 25, city: 'Rasuwa' },
    { name: 'Leonard', age: 30, city: 'ktm' },
    { name: 'Raj', age: 32, city: 'ktm' },
    { name: 'Howard', age: 28, city: 'Rasuwa' },
    { name: 'Penny', age: 26, city: 'nuwakot' },
    { name: 'Amy', age: 28, city: 'nuwakot' }
  ];
  
  const groupedByCity = groupByCity(people);
  console.log(groupedByCity);
  