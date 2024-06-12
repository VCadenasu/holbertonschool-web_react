namespace Subjects {
    export interface Teacher extends Subjects.Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subjects.Subject {
        getRequeriments(): string {
            return "Here is te list of requirements for Java";
        }
        getAvailabeTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}