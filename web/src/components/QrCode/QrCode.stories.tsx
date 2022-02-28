import QrCode from './QrCode'

const url = 'https://github.com/thedavidprice/storybook-redwood-demo'

export const generated = () => {
  return <QrCode url={url} />
}

export default { title: 'Components/QrCode' }
