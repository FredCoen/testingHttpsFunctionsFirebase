import { toBeTestedFunctionOnRequest, toBeTestedFunctionOnCall } from '../src/index'


test('testing asynchronous https functions onRequest', async ()=>{
    const mockSend = jest.fn();
    const resp = { send: mockSend }
    const req = {}
    toBeTestedFunctionOnRequest(req as any, resp as any)
    expect(mockSend.mock.calls[0][0]).toBe('I did await')
    // expect(mockSend.mock.calls[0][0]).toBe('I did await')
})
test('testing asynchronous https functions onCall', async ()=>{
    const mockSend = jest.fn();
    const data = { send: mockSend };
    const context = {}
    await toBeTestedFunctionOnCall.run(data as any, context as any)
    expect(mockSend.mock.calls[0][0]).toBe('I did await')
    // expect(mockSend.mock.calls[0][0]).toBe('I did await')
}, 10000)

