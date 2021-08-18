export function mapBooleanArgs(args: any): any {
  const out: any = {};
  Object.entries(args).forEach(
    (entry) => {
      const k = entry[0];
      const v = entry[1];
      if (v === true) {
        out[k] = ''
      } else if (v !== false) {
        out[k] = v
      }


    })
  return out
}
