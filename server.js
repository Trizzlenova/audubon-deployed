const express = require('express');
const PORT = 4000;

const app = express();

// middleware
app.use(express.json());

const birds = [
    {
        name: "Acadian Flycatcher",
        genus: "Empidonax virescens",
        conservationStatus:
            "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy",
        homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
    },
    {
        name: "Acorn Woodpecker",
        genus: "Melanerpes formicivorus",
        conservationStatus:
            "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2420_Sibl_9780307957900_art_r1.jpg?itok=7khdegFX",
        homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
    },
    {
        name: "American Black Duck",
        genus: "Anas rubripes",
        conservationStatus:
            'Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.',
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/783_Sibl_9780307957900_art_r1.jpg?itok=q04--9Fr",
        homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
    },
    {
        name: "American Flamingo",
        genus: "Phoenicopterus ruber",
        conservationStatus: "",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/601_Sibl_9780307957900_art_r1.jpg?itok=AcEmNVlO",
        homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
    },
    {
        name: "American White Pelican",
        genus: "Pelecanus erythrorhynchos",
        conservationStatus:
            "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/267_Sibl_9780307957900_art_r1.jpg?itok=eUpCM6_Y",
        homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
    },
    {
        name: "Aplomado Falcon",
        genus: "Falco femoralis",
        conservationStatus: "",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/990_Sibl_9780307957900_art_r1.jpg?itok=gs0Ngawy",
        homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
    },
    {
        name: "Atlantic Puffin",
        genus: "Fratercula arctica",
        conservationStatus:
            "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
        image:
            "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2514_Sibl_9780307957900_art_r1.jpg?itok=nTHL4EEu",
        homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
    },
    {
        name: "Aztec Thrush",
        genus: "Ridgwayia pinicola",
        conservationStatus: "",
        image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/3556_Sibl_9780307957900_art_r1.jpg?itok=LP8V2DuC",
        homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
    }
];

// GET / (test route)
app.get('/', (req, res) => {
    res.json({
        response: "Hello World"
    })
})

// GET /birds
app.get('/api/birds', (req, res) => {
    // send the birds array as json
    res.json(birds)
})

// GET /birds/:index
app.get('/api/birds/:index', (req, res) => {
    res.json(birds[req.params.index])
})

// POST /birds
app.post('/api/birds', (req, res) => {
    // push the request body into our birds array
    birds.push(req.body);
    res.redirect('/birds');
})

// PUT /birds
app.put('/api/birds/:index', (req, res) => {
    birds[req.params.index] = req.body;
    res.redirect('/birds');
})

// DELETE /birds/:index
app.delete('/api/birds/:index', (req, res) => {
    birds.splice(req.params.index, 1);
    res.redirect('/birds');
})

// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));