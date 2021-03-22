import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyBbC3rAwAd7jKgpTbDkZULlvzPM5mnkYo8",
    }
})

export default request