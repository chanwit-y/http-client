import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare class HttpClient {
    private _api;
    constructor();
    protected get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    protected post<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R>;
    protected put<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R>;
    protected delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    protected success<T>(response: AxiosResponse<T>): T;
    protected getUrlParam<T>(req: T): string;
}
