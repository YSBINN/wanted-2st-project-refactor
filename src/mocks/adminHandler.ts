import { faker } from '@faker-js/faker';
import shortId from 'shortid';
import { rest } from 'msw';

export const AdminHandler = [
    rest.get('https:/fruitte.co/api/admin/goods', async (req, res, ctx) => {
        const page = req.url.searchParams.get('page');
        const dummyProdAll = {
            totalPage: 15,
            currentPage: page,
            data: Array(10)
                .fill('')
                .map(() => ({
                    id: shortId.generate(),
                    prodImg: { src: faker.image.image() },
                    prodName: faker.lorem.words(),
                    prodPrice: faker.commerce.price(20000, 30000, 0),
                    salePrice: faker.commerce.price(10000, 20000, 0),
                    prodDetail: faker.lorem.lines(),
                    showFlag: faker.datatype.number({ min: 0, max: 1 }),
                    mdFlag: faker.datatype.number({ min: 0, max: 1 }),
                    soldFlag: faker.datatype.number({ min: 0, max: 1 }),
                })),
        };
        return res(ctx.json(dummyProdAll));
    }),

    rest.delete('https:/fruitte.co/api/admin/goods/:goodsId', (req, res, ctx) => {
        const goodsId = req.params.goodsId;
        return res(ctx.json(goodsId));
    }),

    rest.put('https:/fruitte.co/api/admin/goods/:goodsId/showflag', (req, res, ctx) => {
        const { showFlag, id }: any = req.body;
        return res(ctx.json({ showFlag, id }));
    }),

    rest.post('https:/fruitte.co/api/admin/user/login', (req, res, ctx) => {
        const { email, password }: any = req.body;
        if (email === 'test' && password === '1234') {
            return res(ctx.json({ message: true, data: { token: faker.lorem.sentence() } }));
        } else return res(ctx.json({ message: false }));
    }),
];
