function main() {
    let students = [
        {
            id: 1,
            name: 'Yenni',
            lastName: 'Espadas',
            age: 26,
            matters: ['Matematicas', 'Idiomas'],
            scores: [
                { 'Matematicas': 85 },
                { 'Idiomas': 90 },
            ]
        },
        {
            id: 2,
            name: 'Santiago',
            lastName: 'Medina',
            age: 28,
            matters: ['Fisica', 'Idiomas'],
            scores: [
                { 'Fisica': 55 },
                { 'Idiomas': 70 },
            ]
        }
    ];

    let matters = [
        'Matematicas',
        'Fisica',
        'Idiomas',
        'Programacion'
    ];

    let groups = [
        {
            name: '1a',
            students: [1, 2]
        }
    ];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        let row = document.createElement('tr');

        let scores = student.scores.map(i => `${Object.keys(i)[0]}: ${Object.values(i)[0]}`).join(', ');

        row.innerHTML = `
            <td class="name">${ student.name }</td>
            <td class="last">${ student.lastName }</td>
            <td class="age">${ student.age }</td>
            <td class="matters">${ student.matters.join(', ') }</td>
            <td class="scores">${ scores }</td>
        `;

        document.querySelector('.table-students tbody').appendChild(row);
    }
}

function addStudent(e) {
    e.preventDefault();

    let row = document.createElement('tr');

    row.innerHTML = `
        <td class="name">${ document.querySelector('#name').value }</td>
        <td class="last">${ document.querySelector('#lastname').value }</td>
        <td class="age">${ document.querySelector('#age').value }</td>
        <td class="matters">${ document.querySelector('#matters').value }</td>
        <td class="scores">${ document.querySelector('#scores').value }</td>
    `;

    document.querySelector('.table-students tbody').appendChild(row);
}
  
window.addEventListener("load", () => {
    main();
});
