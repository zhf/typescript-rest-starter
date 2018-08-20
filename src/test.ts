export function test(message: string): TestType {
  return {result: message === 'Hello World!'}
}
