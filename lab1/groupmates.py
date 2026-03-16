groupmates = [
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
]

def print_students(students):
    print("Имя студента".ljust(15), "Группа".ljust(8), "Возраст".ljust(8), "Оценки".ljust(20))
    
    for student in students:
        print(
            student["name"].ljust(15),
            student["group"].ljust(8),
            str(student["age"]).ljust(8),
            str(student["marks"]).ljust(20)
        )
    print("\n")


# Фильтрует студентов по средней оценке
def filter_students_by_avg_mark(students, min_avg_mark):

    filtered_students = []  # создаем пустой массив для отфильтрованных студентов
    
    for student in students:
        # считаем среднюю оценку текущего студента
        marks = student["marks"]
        avg_mark = sum(marks) / len(marks)
        
        # сравниваем с заданным значением
        if avg_mark >= min_avg_mark:
            filtered_students.append(student)
    
    return filtered_students

print("Все студенты:")
print_students(groupmates)

print(f"Студенты со средним баллом >= 4.0:")
high_achievers = filter_students_by_avg_mark(groupmates, 4.0)
print_students(high_achievers)

print(f"Студенты со средним баллом >= 3.5:")
good_students = filter_students_by_avg_mark(groupmates, 3.5)
print_students(good_students)
