// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [twoFACode, setTwoFACode] = React.useState('')
  return {
    twoFACode,
    setTwoFACode,
  }
}