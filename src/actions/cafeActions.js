import axios from 'axios'

export const getCafes (params) =>
    axios.get('/api/cafes');