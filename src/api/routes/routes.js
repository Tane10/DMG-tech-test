import serveStaticHtml from "../controller/serveStaticPage"
import express from "express";

let router = express.Router();

router.get("/", serveStaticHtml);

export default router;