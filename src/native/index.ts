import koffi from 'koffi'
import path from 'path'

const sumLib = koffi.load(path.resolve(
  __dirname,
  "../../resources/sum.dylib"
))

const nativeSum = sumLib.stdcall('sum','int',['int','int'])

export const callNativeSum = (a:number,b:number) => {
  return nativeSum(a,b)
}
