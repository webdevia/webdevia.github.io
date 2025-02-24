export interface IDatabase {
  save<T>(key: string, value: T): Promise<boolean>;
  load<T>(key: string): Promise<T>;
}

export class Database implements IDatabase {
  private data: Map<string, unknown>;

  constructor() {
    this.data = new Map();
  }

  save<T>(key: string, value: T): Promise<boolean> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(!!this.data.set(key, value));
      }, 500)
    );
  }

  load<T>(key: string): Promise<T> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const value = this.data.get(key);
        if (value === undefined) {
          reject(new Error('Table not found'));
        } else {
          resolve({ ...(value as T) });
        }
      }, 500)
    );
  }
}
