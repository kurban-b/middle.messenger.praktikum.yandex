import HTTPTransport from "./http-transport";

export default abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
  public create?(_: unknown): Promise<unknown>  { throw new Error('Not implemented'); }

  public read?(_: unknown): Promise<unknown> { throw new Error('Not implemented'); }

  public update?(_: unknown): Promise<unknown>  { throw new Error('Not implemented'); }

  public delete?(_: unknown): Promise<unknown>  { throw new Error('Not implemented'); }
}
