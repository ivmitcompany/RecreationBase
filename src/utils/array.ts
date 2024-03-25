export const arrayIsNotEmpty = (array?: any[]) => !!array?.length

export function findObjectWithField<T>(array: T[], field: keyof T, value: any) {
  return array.find((object) => object[field] === value)
}

export const getArrayLength = (array?: any[]) => array?.length || 0
