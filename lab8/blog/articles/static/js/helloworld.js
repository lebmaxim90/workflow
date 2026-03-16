var groupmates = [
    {
        "name": "Алексей",
        "group": "БСТ0001",
        "age": 20,
        "marks": [3, 3, 4, 5, 4]
    },
    {
        "name": "Анна",
        "group": "БСТ0002",
        "age": 18,
        "marks": [3, 2, 3, 4, 3]
    },
    {
        "name": "Борис",
        "group": "БСТ0002",
        "age": 24,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Екатерина",
        "group": "БСТ0003",
        "age": 19,
        "marks": [5, 3, 5, 4, 5]
    },
    {
        "name": "Константин",
        "group": "БСТ0001",
        "age": 19,
        "marks": [5, 3, 3, 4, 5]
    }
];

// Функция для дополнения строки пробелами справа (аналог ljust из Python)
var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length)
        str = str + ' ';
    return str;
};

// Функция для вывода студентов в виде таблицы
var printStudents = function(students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );
    
    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'].join(', '), 20)
        );
    }
    console.log('\n');
};

// Функция фильтрации по среднему баллу
function filterStudentsByAvgMark(minAvgMark) {
    return groupmates.filter(student => {
        let sum = student.marks.reduce((a, b) => a + b, 0);
        let avg = sum / student.marks.length;
        return avg >= minAvgMark;
    });
}

console.log("Студенты со средним баллом >= 4.0");
let highAchievers = filterStudentsByAvgMark(4.0);
printStudents(highAchievers);

// Функция фильтрации студентов по группе
function filterStudentsByGroup(groupName) {
    return groupmates.filter(student => student.group === groupName);
}

console.log("Группа БСТ0001");
var group1Students = filterStudentsByGroup("БСТ0001");
printStudents(group1Students);

console.log("Группа  БСТ0002");
var group2Students = filterStudentsByGroup("БСТ0002");
printStudents(group2Students);

console.log("Группа  БСТ0003");
var group3Students = filterStudentsByGroup("БСТ0003");
printStudents(group3Students);