class Semester{
    // constructor cria objeto com as disciplinas do Semestre
    constructor(subjects = []){
        this.subjects = subjects;
    }

    // metodo retorna quantidade de disciplinas
    getSubjectsCount() {
        return this.subjects.length;
    }

    // metodo adiciona disciplina
    addSubjects(...newSubjects) {
     this.subjects.push(...newSubjects);
     return this.subjects;
    }
}

// Disciplinas de primeiro semestre
const firstSemester = new Semester(['HTML', 'CSS', 'JavaScript']);

// Disciplinas do ultimo semestre
const lastSemester = new Semester(['Banco de Dados', '', 'TCC', 'Redes']);

// =================================================================================

// classe Student cria alunos

class Student extends Semester {
    constructor(name, subjects = []){
        super(subjects);
        this.name = name;
    }

    // verifica se o aluno cursa determinada disciplina
    hasSubject(subject){
        return this.subjects.includes(subject);
    }
}
// cria novo aluno
const student1 = new Student('Luiz Inácio Silva', ['HTML', 'CSS', 'JavaScript']);

// percorre disciplinas
student1.subjects.forEach(subject => console.log(`${subject}`));

// exibe o total de disciplinas com o metodo getSubjectsCount
console.log(`\nTotal: ${student1.getSubjectsCount()} \n`);

// valida se o aluno cursa javascript com o metodo hasSubject
console.log(
    student1.hasSubject('JavaScript') 
    ? `Aluno: ${student1.name} cursa JavaSript \n`
    : `Aluno: ${student1.name} não cursa JavaScript \n`
);

// valida em qual semestre o aluno se encontra
console.log(
    JSON.stringify(student1.subjects) === JSON.stringify(firstSemester.subjects)
    ? "Aluno cursa o primeiro semestre \n\n"
    : "Aluno cursa o ultimo semestre \n\n"
);

// cria segundo aluno (entrada 2)
const student2 = new Student('Pedro Álvares Cabral' ,['Banco de Dados', '', 'TCC', 'Redes']) ;

// percorre disciplinas cursadas pelo aluno 2
for(let i = 0; i < student2.subjects.length ; i++) {
    
    // verifica se há uma string vazia no index
    if (student2.subjects[i] === '') continue;

    // loga valores da lista de disciplinas
    console.log(`${student2.subjects[i]}\n`);
    
    // verifica se há o valor TCC no index e interrompe o laço
    if (student2.subjects[i] === 'TCC'){
        console.log('\nlaço interrompido');
        break;
    };
}


