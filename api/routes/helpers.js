const express = require("express");
const router = express.Router();
const metafetch = require("metafetch");

const urlParser = require("url-parse");
const Store = require("../models/Store");

router.get("/metaData", (req, res) => {
  metafetch.fetch(req.query.url, function(err, meta) {
    if (err) {
      return res.status(404).json({ success: false });
    }

    // Just cherrypicking what need to be in output from "meta" Object using Object Destrcutring
    const output = (({
      siteName = "",
      uri = {},
      image: logoUrl = "", // Selecting image property as logo
      title = "",
      description = "",
      images = [],
      links = []
    }) => ({ siteName, uri, logoUrl, title, description, images, links }))(
      meta
    );

    const mainUrl = new urlParser(req.query.url).origin;

    Store.findOne({ storeUrl: mainUrl }).then(r => {
      return res.json({ success: true, ...output, store: r });
    });
  });
});

module.exports = router;
