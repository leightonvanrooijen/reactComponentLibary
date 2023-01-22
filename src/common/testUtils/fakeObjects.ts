export const fakeObjects = <T extends Record<string, any>>(
  amount: number,
  createFakeObject: (overwrites?: Partial<T>) => T,
  overwrites?: Partial<T>[],
): T[] => {
  return [...Array(amount)].map((_, i) => {
    if (overwrites?.[i]) {
      return createFakeObject(overwrites[i])
    }
    return createFakeObject()
  })
}
