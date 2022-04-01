import { MocWebApi } from "./moc-web-api";

describe('MocWebApi', () => {
  it('should create an instantce', () => {
    expect(new MocWebApi()).toBeTruthy();
  })
  describe('urlTranslate() [ EntityName: Hero ]', () => {
    let mockWebApi: MocWebApi;
    beforeEach(() => mockWebApi = new MocWebApi());

    it('api/hero/ -> api/heroes', () => {
      expect(mockWebApi.urlTranslate('api/hero/')).toEqual('api/heroes');
    });

    it('api/hero/5 -> api/heroes/5', () => {
      expect(mockWebApi.urlTranslate('api/hero/5')).toEqual('api/heroes/5');
    });

    it('api/heroes/ -> api/heroes', () => {
      expect(mockWebApi.urlTranslate('api/heroes/')).toEqual('api/heroes');
    });

    it('api/heroes/?name=bombasto -> api/heroes?name=bombasto', () => {
      expect(mockWebApi.urlTranslate('api/heroes/?name=bombasto'))
        .toEqual('api/heroes?name=bombasto');
    });
  });
});

