///<reference path="./Teacher.ts"/>

namespace Subjects {
  export class Subject {
    public teacher: Teacher;

    setTeacher(value: Teacher) {
      this.teacher = value;
    }
  }
}
