import * as MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import mockData from './mockData'
import { ref } from 'vue'

const chats = ref()

function mockApi(api) {
    const mock = new MockAdapter(api)
    const { data } = mockData
    mock.onGet('/chats').reply(200, { ...data })

    axios.get("/chats").then((res) => {
        chats.value = res.data.chats
    })
  }

mockApi(axios)

export default { mockApi, chats }