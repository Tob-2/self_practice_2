const students = [
  { id: 1, name: 'Alice', score: 85, class: 'A' },
  { id: 2, name: 'Bob', score: 92, class: 'B' },
  { id: 3, name: 'Charlie', score: 78, class: 'A' },
  { id: 4, name: 'David', score: 95, class: 'A' },
  { id: 5, name: 'Eve', score: 88, class: 'B' },
  { id: 6, name: 'Frank', score: 65, class: 'A' },
  { id: 7, name: 'Grace', score: 81, class: 'A' }
];

function stuhighscore(arr) {
  return studentList
 .filter(student => student.class === 'A' && student.score >= 80).map(student => student.name.toUpperCase());
}


const high = stuhighscore(students);
console.log(high);

