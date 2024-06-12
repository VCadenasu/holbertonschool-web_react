namespace Subjects {
    export interface Teacher extends Subjects.Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects.Subject {
        getRequirements(): string {
            return "Here is the list of requeriments for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}