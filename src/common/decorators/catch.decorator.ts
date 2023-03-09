export function CatchErrors(): any {
  return (
    target: any,
    propertyName?: string,
    descriptor?: PropertyDescriptor,
  ): any => {
    // Method decorator
    if (descriptor) {
      return generateDescriptor(target, propertyName, descriptor)
    }

    // Class decorator
    return generateClassDescriptors(target.prototype)
  }
}

function generateDescriptor(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const method = descriptor.value
  const isMethodAsync = method?.constructor?.name === 'AsyncFunction'

  if (isMethodAsync) {
    descriptor.value = async function (...args: any) {
      try {
        return await method.apply(this, args)
      } catch (error: any) {
        console.error(
          `${target.constructor.name} \`${propertyName}\`:`,
          error?.message,
        )

        throw error
      }
    }
  }

  return descriptor
}

function generateClassDescriptors(target: any) {
  // get the class properties except constructor
  const properties = Reflect.ownKeys(target).filter(
    (prop) => prop !== 'constructor',
  )

  for (const propertyName of properties) {
    const descriptor = Object.getOwnPropertyDescriptor(target, propertyName)

    if (descriptor.value instanceof Function) {
      const property = generateDescriptor(
        target,
        propertyName.toString(),
        descriptor,
      )
      Object.defineProperty(target, propertyName, property)
    }
  }
}
