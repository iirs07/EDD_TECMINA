class Node {
    value: number;
    next: Node | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    head: Node | null;
  
    constructor() {
      this.head = null;
    }
  
    append(value: number): void {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    remove(value: number): string {
      if (this.head === null) return 'Lista vacía';
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return `Valor ${value} eliminado.`;
      }
  
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next === null) {
        return `Número ${value} no existe.`;
      }
  
      current.next = current.next.next;
      return `Valor ${value} eliminado.`;
    }
  
    display(): number[] {
      const result: number[] = [];
      let current = this.head;
      while (current !== null) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  }
  
  export default LinkedList;
  