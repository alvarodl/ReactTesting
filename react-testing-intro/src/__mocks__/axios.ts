import Axios from "axios"

const axiosMock = jest.genMockFromModule('axios') as jest.Mocked<typeof Axios>

// this is the key to fix the axios.create() undefined error!
axiosMock.create = jest.fn(() => axiosMock)

export default axiosMock

