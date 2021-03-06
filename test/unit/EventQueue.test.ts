import * as Chance from 'chance';
import { EventQueue, IEventQueue } from '../../src/EventQueue';
import { IServer, Server } from '../helpers/socket';

let server: IServer;
let ioServer: SocketIO.Server;
let ioClient: SocketIOClient.Socket;
let instance: IEventQueue;

const chance = new Chance();
const expectedId: string = chance.string();
const expectedData: any = {};
expectedData[chance.string()] = chance.string();

describe('Event Queue', () => {
  beforeAll(() => {
    server = new Server();
    ioServer = server.getIoServer();
    ioClient = server.getIoClient();
    instance = new EventQueue(ioServer);
  });

  afterAll(() => {
    server.stopServer();
    jest.restoreAllMocks();
  });

  test('Should call emit with the correct events when send is called', () => {
    jest.spyOn(ioServer, 'on');
    jest.spyOn(ioServer, 'emit');
    instance = new EventQueue(ioServer);

    instance.send(expectedId, expectedData);

    expect(ioServer.on).toHaveBeenCalledTimes(1);
    expect(ioServer.on).toHaveBeenCalledWith('connection', expect.anything());
    expect(ioServer.emit).toHaveBeenCalledTimes(2);
    expect(ioServer.emit).toHaveBeenCalledWith(expectedId, expectedData);
    expect(ioServer.emit).toHaveBeenCalledWith('client', { data: expectedData, widgetId: expectedId });
  });

  test('Server should broadcast the correct events to the client', (done: any) => {
    ioClient.on('connect', () => {
      ioClient.on('client', (data: any) => {
        expect(data).toEqual({ data: expectedData, widgetId: expectedId });
        done();
      });
      ioClient.on(expectedId, (data: any) => {
        expect(data).toEqual(expectedData);
        done();
      });
      instance.send(expectedId, expectedData);
    });
  });

  test('Server should call emit with the client event when the client emits a log', (done: any) => {
    ioClient.on('client', (data: any) => {
      expect(data).toEqual({ data: expectedData, widgetId: expectedId });
      done();
    });
    ioClient.emit('log', { widgetId: expectedId, data: expectedData });
  });

  test('Server should call emit with the id event when the client emits a resend', (done: any) => {
    let calledOnce: boolean;
    ioClient.on(expectedId, (data: any) => {
      if (calledOnce) {
        expect(data).toEqual(expectedData);
        done();
      }
      calledOnce = true;
    });
    instance.send(expectedId, expectedData);
    ioClient.emit('resend', expectedId);
  });
});
