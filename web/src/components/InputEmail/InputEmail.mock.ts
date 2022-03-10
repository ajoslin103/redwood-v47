// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [eMailAddress, setEMailAddress] = React.useState('')
  return {
    eMailAddress,
    setEMailAddress,
  }
}