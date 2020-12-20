/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";

    readonly PUBLIC_URL: string;

    /** 站点 */
    REACT_APP_WEBSITE_TITLE: string;
    REACT_APP_WEBSITE_DESCRIPTION: string;
    REACT_APP_WEBSITE_COPYRIGHT: string;

    /** 接口 */
    REACT_APP_HTTP_BASEURL: string;
  }
}