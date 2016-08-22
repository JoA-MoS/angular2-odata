import { URLSearchParams, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { ODataConfiguration } from "./config";
export declare abstract class ODataOperation<T> {
    protected _typeName: string;
    protected config: ODataConfiguration;
    protected http: Http;
    constructor(_typeName: string, config: ODataConfiguration, http: Http);
    private _expand;
    Expand(expand: string): this;
    private _select;
    Select(select: string): this;
    protected getParams(): URLSearchParams;
    private extractData(res);
    protected handleResponse(entity: Observable<Response>): Observable<T>;
    protected getEntityUri(entityKey: string): string;
    protected getRequestOptions(): RequestOptions;
    abstract Exec(...args: any[]): Observable<any>;
}
export declare abstract class OperationWithKey<T> extends ODataOperation<T> {
    protected _typeName: string;
    protected config: ODataConfiguration;
    protected http: Http;
    protected key: string;
    constructor(_typeName: string, config: ODataConfiguration, http: Http, key: string);
    abstract Exec(...args: any[]): Observable<any>;
}
export declare abstract class OperationWithEntity<T> extends ODataOperation<T> {
    protected _typeName: string;
    protected config: ODataConfiguration;
    protected http: Http;
    protected entity: T;
    constructor(_typeName: string, config: ODataConfiguration, http: Http, entity: T);
    abstract Exec(...args: any[]): Observable<any>;
}
export declare abstract class OperationWithKeyAndEntity<T> extends ODataOperation<T> {
    protected _typeName: string;
    protected config: ODataConfiguration;
    protected http: Http;
    protected key: string;
    protected entity: T;
    constructor(_typeName: string, config: ODataConfiguration, http: Http, key: string, entity: T);
    abstract Exec(...args: any[]): Observable<any>;
}
export declare class GetOperation<T> extends OperationWithKey<T> {
    Exec(): Observable<T>;
}
