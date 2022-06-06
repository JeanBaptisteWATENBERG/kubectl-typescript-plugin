export type Something = {
  name: string;
};

export interface Core {
  listSomething(): Something[];
}

export class CoreImpl implements Core {
  listSomething() {
    return [
      { name: "test1", parameter: "parameter1" },
      { name: "lonnnnngtest2", parameter: "parameter2" },
    ];
  }
}
