// script.js
function toggleCourse(courseId) {
    const course = document.getElementById(courseId);
    const prerequisiteCourses = getPrerequisites(courseId);  // Obtiene los prerequisitos

    if (course.classList.contains('approved')) {
        // Si el curso está aprobado, desmarcarlo
        course.classList.remove('approved');
        course.style.backgroundColor = 'pink';
        course.style.textDecoration = 'none';
    } else {
        // Si el curso no está aprobado, marcarlo como aprobado
        course.classList.add('approved');
        course.style.backgroundColor = 'purple';
        course.style.textDecoration = 'line-through';
    }

    // Desbloquear los prerequisitos cuando se apruebe el curso
    prerequisiteCourses.forEach(prerequisiteId => {
        const prerequisiteCourse = document.getElementById(prerequisiteId);
        if (!prerequisiteCourse.classList.contains('approved')) {
            prerequisiteCourse.classList.remove('prerequisite');
            prerequisiteCourse.style.pointerEvents = 'auto';
        }
    });
}

// Función que devuelve los prerequisitos de un curso
function getPrerequisites(courseId) {
    switch(courseId) {
        case 'course-7': return ['course-1'];  // Biología Humana requiere Biología Celular
        case 'course-8': return ['course-2'];  // Reading Comprehension requiere Comunicación en Lengua Materna
        case 'course-9': return ['course-4'];  // Física Básica requiere Álgebra
        case 'course-10': return ['course-4']; // Cálculo requiere Álgebra
        case 'course-11': return ['course-5']; // Responsabilidad Social del QF requiere Papel del QF en la Historia y Sociedad
        case 'course-12': return ['course-6']; // Equilibrio Químico requiere Bases de Química
        case 'course-13': return ['course-7']; // Fisiología General requiere Biología Humana
        case 'course-14': return ['course-8']; // Listening and Reading requiere Reading Comprehension
        case 'course-15': return ['course-9']; // Física para Ciencias requiere Física Básica
        case 'course-17': return ['course-11']; // Taller de Proyectos Farmacéuticos requiere Responsabilidad Social del QF
        case 'course-18': return ['course-12']; // Química Orgánica requiere Equilibrio Químico
        case 'course-19': return ['course-12']; // Análisis Químico requiere Equilibrio Químico
        case 'course-20': return ['course-13']; // Bioquímica requiere Fisiología General
        case 'course-21': return ['course-16']; // OFG 2
        case 'course-22': return ['course-10']; // Química Física para la Farmacia requiere Cálculo
        case 'course-23': return ['course-17', 'course-13']; // Principios de Farmacología requiere Taller de Proyectos Farmacéuticos
        case 'course-24': return ['course-18']; // Química Orgánica Aplicada requiere Química Orgánica
        case 'course-25': return ['course-19', 'course-9']; // Análisis Instrumental requiere Análisis Químico
        default: return [];
    }
}
