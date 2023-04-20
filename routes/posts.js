import express from "express";
import { Router } from "express";
import { Post } from "../database/models/Post.js";
import { Usuario } from "../database/models/Usuario.js";

const postsRouter = Router();


// CREATE
postsRouter.post("/", (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post);
    })
});

// READ /api/posts/:id
postsRouter.get("/:id", (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    })
})

//UPDATE
postsRouter.patch("/:id", (req,res) => {
    Post.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/post/:id

postsRouter.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
})
export default postsRouter;