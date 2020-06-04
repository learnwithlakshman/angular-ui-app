export interface DeptCount{
      dname:string,
      count:number
}

export interface dept{
      deptno:number,
      dname:string,
      location:string
}

export interface Employee{
  empno:number,
  ename: string,
  job: string,
  mgr: number,
  hiredate: string,
  sal: number,
  comm: number,
  deptno: number
}
