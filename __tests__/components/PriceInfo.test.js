const { describe, test, expect } = require("@jest/globals");
import renderer from 'react-test-renderer';
import PriceInfo from '../../src/components/Cart/PriceInfo';

describe("PriceInfo", () => {
    test("PriceInfo renders correctly", () => {
        const gross = 30
        const discount = 10

        const priceInfo = renderer.create(<PriceInfo gross={gross} discount={discount} />).toJSON()

        expect(priceInfo).toMatchSnapshot()
    })
})