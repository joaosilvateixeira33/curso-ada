import {writeFileSync}from 'node:fs';
import {join} from 'node:path';

const product = [
    {
        name: "Chocolate",
        amountInStock: 10,
        unitValue: 1
    },
    {
        name: "Milk",
        amountInStock: 5,
        unitValue: 1.5
    }
]

const fileOutPath = join(__dirname, 'product-save.json')

writeFileSync(fileOutPath, JSON.stringify(product, null, 2))