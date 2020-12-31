import {RequestHandler} from 'express'

export const createVideo: RequestHandler = (req, res) => {
    console.log(req.body)
    res.json('Video created!')
}

export const getVideo: RequestHandler = (req, res) => {
    res.json('Getting videos')
}

export const getVideos: RequestHandler = (req, res) => {
    res.json('Getting videos')
}

export const deleteVideo: RequestHandler = (req, res) => {
    res.json('Getting videos')
}

export const updateVideo: RequestHandler = (req, res) => {
    res.json('Getting videos')
}