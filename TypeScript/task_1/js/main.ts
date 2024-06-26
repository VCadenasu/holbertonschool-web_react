interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
}

interface printTeacherFunction {
    name: string;
}

interface StudentConstructorArgs {
    firstName: string,
    lastName: string,
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(args: StudentConstructorArgs) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
