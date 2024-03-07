export const arrayIsNotEmpty = (array?: any[]) => !!array?.length

export function findObjectWithField<T>(array: T[], field: keyof T) {
  return array.find((object) => object[field])
}

export const getArrayLength = (array?: any[]) => array?.length || 0
