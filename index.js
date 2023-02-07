import express from "express";

const port = process.env.PORT || 3000

const app = express();

app.listen(port, () => {
    console.log(`Work In Progress Page running on port ${port}`);
});

app.get("/", async (req, res) => {
    try {
        res.type("text/html")
            .status(200)
            .send(`
                <meta content="NeuralNexus" property="og:title" />
                <meta content="Powered by NeuralNexus.dev" property="og:site_name">
                <meta property="og:description" content="
                        Insert Catchy Slogan Here
                <meta content="https://neuralnexus.dev/" property="og:url" />
                <meta content="https://api.neuralnexus.dev/api/" property="og:image" />
                <meta content="#7C0014" data-react-helmet="true" name="theme-color" />

                <title>NeuralNexus.dev</title>
                <h1>This page is currently a work in progress, come back soon!</h1>
                <p>In the meantime check out some of our services:</p>
                <a href="https://github.com/NeuralNexusDev/">Our Github</a>
                <br>
                <a href="https://api.neuralnexus.dev/api/mcstatus/">Minecraft Server Status API</a>
                <br>
                <a href="https://api.neuralnexus.dev/api/game-server-status/">Game Server Status API</a>
            `);
    } catch (err) {
        res.status(500);
        console.error(err);
    }
});
