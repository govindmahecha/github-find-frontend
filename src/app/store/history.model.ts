import { GithubUser } from "../models/github-user";

export interface GithubResultWithHistory extends GithubUser {
    keyword : string;
    error?: string;
}

export interface ErrorState {
    keyword: string;
    error: string;
}