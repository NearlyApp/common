import { test, expect } from 'vitest';
import { greet } from '../src';

test("Greet test", () => {    
    expect(greet("World")).toBe("Hello, World!");
    expect(greet("Alice")).toBe("Hello, Alice!");
    expect(greet("Bob")).toBe("Hello, Bob!");
})
