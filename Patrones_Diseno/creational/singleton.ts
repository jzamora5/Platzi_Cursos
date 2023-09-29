class SingletonTS {
  private static instance: SingletonTS;

  private version: string;

  private constructor(version: string) {
    this.version = version;
  }

  public static getInstance(version: string): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS(version);
    }
    return SingletonTS.instance;
  }
}

function appSingletonTS() {
  const singleton1 = SingletonTS.getInstance("1");
  const singleton2 = SingletonTS.getInstance("2");
  const singleton3 = SingletonTS.getInstance("3");

  // const singleton4 = new SingletonTS();

  console.log(
    `singleton1 es igual a singleton2? : ${singleton1 === singleton2}`
  );
  console.log(
    `singleton2 es igual a singleton3? : ${singleton2 === singleton3}`
  );
}

appSingletonTS();
