// export function classNames(...classes: (string | undefined)[]): string {
//   return classes.filter(Boolean).join(' ');
// }

type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional?: (string | undefined)[]): string {
    return [
        cls,
        ...(additional || []),
        ...Object.entries(mods).filter(Boolean)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}