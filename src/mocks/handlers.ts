import { rest } from 'msw';
import { API_URL } from '../app/constants';

const randomQuote = [{
    quote: "Marriage is like a coffin and each kid is another nail.",
    character: "Homer Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
}

]

const characterQuote = [
    {
        quote: "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
        character: "Lisa Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right",
    }
]
export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        if (req.url.searchParams.get('character')) {
            return res(
                ctx.status(200),
                ctx.json(characterQuote)
            )
        }

        return res(
            ctx.status(200),
            ctx.json(randomQuote)
        )




    })
]