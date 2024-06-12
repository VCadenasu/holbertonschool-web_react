namespace Subjects {
    export interface Teacher extends Subjects.Teacher{
        experienceTeachingReact?: number;
    }

    export class React extends Subjects.Subject {
        getRequeriments(): string {
            return "Here is the list of requeriments for React";
        }

        getAvailableTeacher():string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}