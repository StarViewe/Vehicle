//cd,0xef,0x04,0x04,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,0xff,0x00,0x10,0x00,0x00,0xa0,0x00,0x01,0x10,0x00,0x00,0x80,0x00,0x02,0x10,0x00,0x00,0x60,0x00
import {decodingBoardMessage} from "./utils/BoardUtil/decoding";

const test = Buffer.from([0xcd,0xef,0x04,0x04,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,0xff,0x00,0x10,0x00,0x00,0xa0,0x00,0x01,0x10,0x00,0x00,0x80,0x00,0x02,0x10,0x00,0x00,0x60,0x00])
console.log(decodingBoardMessage(test))
