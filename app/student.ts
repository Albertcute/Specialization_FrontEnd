export interface Student {
  id : number,
  firstName : string,
  lastName: string,
  age: number,
  status: "Single"|"Married",
  homeaddress: string,
  nationality: string,
  degree?: string,
  gender: "Male"|"Female",
  elementarySchool: string,
  highSchool: string,
  College?: string

}
