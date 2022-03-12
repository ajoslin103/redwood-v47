// Define your own mock data here:
export type AnyOnString = { [index: string]: any }

export const standard = (/* vars, { ctx, req } */) => ({
  handleSubmit: (a: AnyOnString) => {},
})