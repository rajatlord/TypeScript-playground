class HashTable<K extends string, V> {
  private table: Array<Array<[K, V]>>;
  private size: number;

  constructor(size: number) {
    this.table = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  private hash(key: K): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }
    const bucket = this.table[index];

    const existing = bucket.find((item) => item[0] === key);

    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return undefined;
    const item = bucket.find((item) => item[0] === key);

    return item ? item[1] : undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;
    const itemIndex = bucket.findIndex((item) => item[0] === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
      return true;
    }

    return false;
  }

  display(): void {
    this.table.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(index, bucket);
      }
    });
  }
}

const table = new HashTable<string, string | number>(20);

table.set("name", "Bruce");
table.set("age", 25);

table.set("mane", "wayne");
table.display();

console.log(table.get("name"));
