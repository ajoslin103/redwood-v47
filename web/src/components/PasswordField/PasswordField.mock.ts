// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
  return {
    password,
    setPassword,
    showPassword,
    setShowPassword,
  }
}