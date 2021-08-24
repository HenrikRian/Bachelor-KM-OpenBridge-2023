export function mapBooleanArgs(args: any): void {
  Object.entries(args).forEach(
    (entry) => {
      const k = entry[0];
      const v = entry[1];
      if (v === true) {
        args[k] = ''
      } else if (v !== false) {
        args[k] = v
      } else {
        delete args[k]
      }
    })
}
