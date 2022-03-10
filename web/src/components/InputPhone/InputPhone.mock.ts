// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [phoneNumber, setPhoneNumber] = React.useState('')
  return {
    phoneNumber,
    setPhoneNumber,
  }
}