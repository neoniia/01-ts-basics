function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(['a', 'b', 'c']);
getFirstElement<boolean>([true, false, true]);

// Контрольна перевірка: TypeScript повідомляє про помилку типу
// getFirstElement<number>([1, 2, '3']);
