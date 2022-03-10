// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [password, setPassword] = React.useState('')
  return {
    password,
    setPassword,
  }
}